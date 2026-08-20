"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto border-t border-navy/10 bg-navy text-cream/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} MJTA – Messianisch-Jüdische Theologische Akademie</p>
        <div className="flex gap-6">
          <Link href="/impressum" className="hover:text-accent">
            {t.footer.impressum}
          </Link>
          <Link href="/datenschutz" className="hover:text-accent">
            {t.footer.datenschutz}
          </Link>
        </div>
      </div>
    </footer>
  );
}
