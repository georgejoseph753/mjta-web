import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

// Shared-credentials gate for /intern. There is no user database: one username
// and password live in env vars, and a successful login gets an HMAC-signed
// cookie. Swap `checkCredentials` for a real lookup if per-user accounts arrive.

const COOKIE_NAME = "mjta_intern";
const MAX_AGE_SECONDS = 60 * 60 * 8;

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    // Fail closed: without configuration nobody gets in, rather than everybody.
    throw new Error(`${name} is not set — the Intern login cannot be used.`);
  }
  return value;
}

function sign(payload: string) {
  return createHmac("sha256", requireEnv("INTERN_SESSION_SECRET"))
    .update(payload)
    .digest("base64url");
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

export function isInternConfigured() {
  return Boolean(
    process.env.INTERN_USERNAME &&
      process.env.INTERN_PASSWORD &&
      process.env.INTERN_SESSION_SECRET
  );
}

export function checkCredentials(username: string, password: string) {
  // Both comparisons always run so a wrong username and a wrong password take
  // the same time.
  const userOk = safeEqual(username, requireEnv("INTERN_USERNAME"));
  const passOk = safeEqual(password, requireEnv("INTERN_PASSWORD"));
  return userOk && passOk;
}

export async function createInternSession() {
  const expiresAt = Date.now() + MAX_AGE_SECONDS * 1000;
  const payload = Buffer.from(String(expiresAt)).toString("base64url");

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(expiresAt),
  });
}

export async function deleteInternSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function hasInternSession() {
  if (!isInternConfigured()) return false;

  const value = (await cookies()).get(COOKIE_NAME)?.value;
  if (!value) return false;

  const [payload, signature] = value.split(".");
  if (!payload || !signature) return false;
  if (!safeEqual(signature, sign(payload))) return false;

  const expiresAt = Number(Buffer.from(payload, "base64url").toString());
  return Number.isFinite(expiresAt) && expiresAt > Date.now();
}
