"use client";

import Link from "next/link";
import { RevealSection } from "@/components/RevealSection";
import { useLanguage } from "@/i18n/LanguageContext";

export default function StudierenPage() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <RevealSection>
        <h1 className="text-4xl text-navy">{t.studieren.title}</h1>
        <p className="mt-4 max-w-2xl text-body">{t.studieren.intro}</p>
      </RevealSection>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {t.studieren.programs.map((program, i) => (
          <RevealSection key={program.href} delay={i * 0.1}>
            <Link
              href={program.href}
              className="group block rounded-md bg-white p-8 shadow-[0_2px_12px_rgba(23,23,72,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_26px_rgba(23,23,72,0.12)]"
            >
              <h2 className="mb-3 text-2xl font-semibold text-navy">
                {program.title}
              </h2>
              <p className="text-body leading-relaxed">{program.text}</p>
              <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
                {program.cta} →
              </span>
            </Link>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
