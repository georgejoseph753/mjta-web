"use server";

import { revalidatePath } from "next/cache";
import {
  checkCredentials,
  createInternSession,
  deleteInternSession,
  isInternConfigured,
} from "@/lib/internSession";

export type LoginState = { error: "invalid" | "unconfigured" } | undefined;

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  if (!isInternConfigured()) return { error: "unconfigured" };

  const username = formData.get("username");
  const password = formData.get("password");
  if (typeof username !== "string" || typeof password !== "string") {
    return { error: "invalid" };
  }

  if (!checkCredentials(username, password)) return { error: "invalid" };

  await createInternSession();
  revalidatePath("/intern");
  return undefined;
}

export async function logout() {
  await deleteInternSession();
  revalidatePath("/intern");
}
