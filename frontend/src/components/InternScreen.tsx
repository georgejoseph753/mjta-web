"use client";

import { RevealSection } from "@/components/RevealSection";
import { InternArea } from "@/components/InternArea";
import { InternLogin } from "@/components/InternLogin";
import { useLanguage } from "@/i18n/LanguageContext";

export function InternScreen({
  authenticated,
  configured,
}: {
  authenticated: boolean;
  configured: boolean;
}) {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <RevealSection>
        <h1 className="text-4xl text-navy">{t.intern.title}</h1>
        <p className="mt-4 text-body leading-relaxed">{t.intern.intro}</p>
      </RevealSection>

      <RevealSection delay={0.1}>
        {authenticated ? <InternArea /> : <InternLogin configured={configured} />}
      </RevealSection>
    </section>
  );
}
