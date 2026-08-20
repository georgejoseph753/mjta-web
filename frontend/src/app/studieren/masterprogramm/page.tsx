"use client";

import { RevealSection } from "@/components/RevealSection";
import { useLanguage } from "@/i18n/LanguageContext";

export default function MasterprogrammPage() {
  const { t } = useLanguage();
  const m = t.masterprogramm;

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <RevealSection>
        <h1 className="text-4xl text-navy">{m.title}</h1>
        <p className="mt-4 text-body leading-relaxed">{m.intro}</p>
      </RevealSection>

      <RevealSection delay={0.1} className="mt-12">
        <h2 className="text-xl font-semibold text-navy">{m.keyFeaturesHeading}</h2>
        <p className="mt-2 text-body leading-relaxed">{m.keyFeatures}</p>
      </RevealSection>

      <RevealSection delay={0.15} className="mt-12">
        <h2 className="text-xl font-semibold text-navy">{m.curriculumHeading}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {m.curriculum.map((area) => (
            <div
              key={area.title}
              className="rounded-md border border-navy/10 p-5"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-medium text-navy">{area.title}</h3>
                <span className="whitespace-nowrap text-xs font-medium text-accent">
                  {area.credits}
                </span>
              </div>
              <p className="mt-1 text-sm text-body">{area.detail}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection delay={0.2} className="mt-12">
        <h2 className="text-xl font-semibold text-navy">{m.deadlinesHeading}</h2>
        <ul className="mt-3 space-y-1 text-body">
          {m.deadlines.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection delay={0.25} className="mt-12 rounded-md bg-navy/5 p-6">
        <p className="text-body">{m.certificateNote}</p>
        <p className="mt-3 text-sm text-navy">{m.contactNote}</p>
      </RevealSection>
    </section>
  );
}
