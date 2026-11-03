"use client";

import { logout } from "@/app/intern/actions";
import { useLanguage } from "@/i18n/LanguageContext";

export function InternArea() {
  const { t } = useLanguage();

  return (
    <div className="mt-8 rounded-sm border border-navy/15 bg-white p-6">
      <h2 className="text-2xl text-navy">{t.intern.welcomeHeading}</h2>
      <p className="mt-3 text-body leading-relaxed">
        {t.intern.placeholderNote}
      </p>

      <form action={logout} className="mt-6">
        <button
          type="submit"
          className="rounded-sm bg-navy px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent"
        >
          {t.intern.logout}
        </button>
      </form>
    </div>
  );
}
