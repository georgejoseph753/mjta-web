"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/app/intern/actions";
import { useLanguage } from "@/i18n/LanguageContext";

const fieldClass =
  "w-full rounded-sm border border-navy/20 bg-white px-4 py-2 outline-none transition-colors focus:border-accent";

export function InternLogin({ configured }: { configured: boolean }) {
  const { t } = useLanguage();
  const [state, action, pending] = useActionState<LoginState, FormData>(
    login,
    undefined
  );

  const error =
    state?.error === "unconfigured" || !configured
      ? t.intern.errorUnconfigured
      : state?.error === "invalid"
        ? t.intern.errorInvalid
        : null;

  return (
    <form
      action={action}
      className="mt-8 max-w-sm rounded-sm border border-navy/15 bg-white p-6"
    >
      <div>
        <label
          htmlFor="username"
          className="mb-1 block text-sm font-medium text-navy"
        >
          {t.intern.usernameLabel}
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          className={fieldClass}
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="password"
          className="mb-1 block text-sm font-medium text-navy"
        >
          {t.intern.passwordLabel}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        disabled={pending || !configured}
        className="mt-6 w-full rounded-sm bg-accent px-8 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-dark disabled:opacity-60"
      >
        {pending ? t.intern.submitting : t.intern.submit}
      </button>

      {error && (
        <p role="alert" className="mt-4 text-sm text-red-700">
          {error}
        </p>
      )}
    </form>
  );
}
