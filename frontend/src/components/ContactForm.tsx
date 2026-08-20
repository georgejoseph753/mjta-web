"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Senden fehlgeschlagen.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Senden fehlgeschlagen."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
          {t.kontakt.formName}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-sm border border-navy/20 bg-white px-4 py-2 outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">
          {t.kontakt.formEmail}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-sm border border-navy/20 bg-white px-4 py-2 outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
          {t.kontakt.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-sm border border-navy/20 bg-white px-4 py-2 outline-none transition-colors focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 self-start rounded-sm bg-accent px-8 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "sending" ? t.kontakt.formSubmitting : t.kontakt.formSubmit}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-700">{t.kontakt.formSuccess}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">{errorMessage}</p>
      )}
    </form>
  );
}
