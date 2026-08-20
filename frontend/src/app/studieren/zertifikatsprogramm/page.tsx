"use client";

import { RevealSection } from "@/components/RevealSection";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ZertifikatsprogrammPage() {
  const { t } = useLanguage();
  const z = t.zertifikatsprogramm;

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <RevealSection>
        <h1 className="text-4xl text-navy">{z.title}</h1>
        <p className="mt-4 text-body leading-relaxed">{z.intro}</p>
      </RevealSection>

      <RevealSection delay={0.1} className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-navy">{z.formatHeading}</h2>
          <p className="mt-2 text-body leading-relaxed">{z.format}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-navy">{z.durationHeading}</h2>
          <p className="mt-2 text-body leading-relaxed">{z.duration}</p>
        </div>
      </RevealSection>

      <RevealSection delay={0.15} className="mt-12">
        <h2 className="text-xl font-semibold text-navy">{z.curriculumHeading}</h2>

        <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-accent">
          {z.requiredHeading}
        </h3>
        <ul className="mt-2 space-y-2 text-body">
          {z.required.map((r) => (
            <li key={r} className="flex gap-2">
              <span className="text-accent">–</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent">
          {z.electiveHeading}
        </h3>
        <p className="mt-2 text-body leading-relaxed">{z.elective}</p>
      </RevealSection>

      <RevealSection delay={0.2} className="mt-12 rounded-md bg-navy/5 p-6">
        <p className="text-body">{z.mentorshipNote}</p>
      </RevealSection>

      <RevealSection delay={0.25} className="mt-12">
        <h2 className="text-xl font-semibold text-navy">{z.deadlinesHeading}</h2>
        <ul className="mt-3 space-y-1 text-body">
          {z.deadlines.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-navy">{z.contactNote}</p>
      </RevealSection>
    </section>
  );
}
