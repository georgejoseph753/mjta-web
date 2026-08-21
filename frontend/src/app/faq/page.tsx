"use client";

import { RevealSection } from "@/components/RevealSection";
import { Accordion } from "@/components/Accordion";
import { useLanguage } from "@/i18n/LanguageContext";

export default function FaqPage() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <RevealSection>
        <h1 className="text-4xl text-navy">{t.faq.title}</h1>
        <p className="mt-4 text-body leading-relaxed">{t.faq.intro}</p>
      </RevealSection>

      <RevealSection delay={0.1} className="mt-10">
        <Accordion items={t.faq.items} />
      </RevealSection>
    </section>
  );
}
