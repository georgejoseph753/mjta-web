"use client";

import { RevealSection } from "@/components/RevealSection";
import { useLanguage } from "@/i18n/LanguageContext";

export default function DatenschutzPage() {
  const { t } = useLanguage();
  const d = t.datenschutz;

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <RevealSection>
        <h1 className="text-4xl text-navy">{d.title}</h1>
        <p className="mt-6 rounded-md border border-accent/30 bg-accent/5 p-5 text-sm text-body">
          {d.placeholderNote}
        </p>
      </RevealSection>
    </section>
  );
}
