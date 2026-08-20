"use client";

import { RevealSection } from "@/components/RevealSection";
import { useLanguage } from "@/i18n/LanguageContext";

export default function UnterstuetzenPage() {
  const { t } = useLanguage();
  const u = t.unterstuetzen;

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <RevealSection>
        <h1 className="text-4xl text-navy">{u.title}</h1>
        <p className="mt-4 text-body leading-relaxed">{u.intro}</p>
      </RevealSection>

      <RevealSection delay={0.1} className="mt-12 rounded-md bg-navy/5 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-navy">
          {u.bankHeading}
        </h2>
        <dl className="mt-3 space-y-1 text-sm text-body">
          <div className="flex gap-2">
            <dt className="min-w-32 text-navy/60">{t.common.bankHolderLabel}</dt>
            <dd>{u.bank.holder}</dd>
          </div>
          {u.bank.bank && (
            <div className="flex gap-2">
              <dt className="min-w-32 text-navy/60">{t.common.bankNameLabel}</dt>
              <dd>{u.bank.bank}</dd>
            </div>
          )}
          <div className="flex gap-2">
            <dt className="min-w-32 text-navy/60">{t.common.ibanLabel}</dt>
            <dd>{u.bank.iban}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="min-w-32 text-navy/60">{t.common.bicLabel}</dt>
            <dd>{u.bank.bic}</dd>
          </div>
          {u.bank.reference && (
            <div className="flex gap-2">
              <dt className="min-w-32 text-navy/60">{t.common.referenceLabel}</dt>
              <dd>{u.bank.reference}</dd>
            </div>
          )}
        </dl>
      </RevealSection>

      <RevealSection delay={0.15} className="mt-12">
        <h2 className="text-xl font-semibold text-navy">
          {u.freundeskreisHeading}
        </h2>
        <p className="mt-2 text-body leading-relaxed">{u.freundeskreisText}</p>
        <ul className="mt-4 space-y-2 text-body">
          {u.ways.map((w) => (
            <li key={w} className="flex gap-2">
              <span className="text-accent">–</span>
              <span>{w}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-navy">{u.contactNote}</p>
      </RevealSection>
    </section>
  );
}
