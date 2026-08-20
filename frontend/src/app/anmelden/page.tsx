"use client";

import { RevealSection } from "@/components/RevealSection";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AnmeldenPage() {
  const { t } = useLanguage();
  const a = t.anmelden;

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <RevealSection>
        <h1 className="text-4xl text-navy">{a.title}</h1>
      </RevealSection>

      <RevealSection delay={0.1} className="mt-12">
        <h2 className="text-xl font-semibold text-navy">
          {a.requirementsHeading}
        </h2>
        <ul className="mt-3 space-y-2 text-body">
          {a.requirements.map((r) => (
            <li key={r} className="flex gap-2">
              <span className="text-accent">–</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection delay={0.15} className="mt-12">
        <h2 className="text-xl font-semibold text-navy">{a.deadlinesHeading}</h2>
        <ul className="mt-3 space-y-1 text-body">
          {a.deadlines.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection delay={0.2} className="mt-12">
        <h2 className="text-xl font-semibold text-navy">{a.financeHeading}</h2>
        <ul className="mt-3 space-y-1 text-body">
          <li>{a.enrollmentFee}</li>
          <li>{a.courseFee}</li>
        </ul>

        <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent">
          {a.paymentOptionsHeading}
        </h3>
        <ul className="mt-2 space-y-1 text-body">
          {a.paymentOptions.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection delay={0.25} className="mt-12 rounded-md bg-navy/5 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-navy">
          {a.bankHeading}
        </h2>
        <dl className="mt-3 space-y-1 text-sm text-body">
          <div className="flex gap-2">
            <dt className="min-w-32 text-navy/60">{t.common.bankHolderLabel}</dt>
            <dd>{a.bank.holder}</dd>
          </div>
          {a.bank.bank && (
            <div className="flex gap-2">
              <dt className="min-w-32 text-navy/60">{t.common.bankNameLabel}</dt>
              <dd>{a.bank.bank}</dd>
            </div>
          )}
          <div className="flex gap-2">
            <dt className="min-w-32 text-navy/60">{t.common.ibanLabel}</dt>
            <dd>{a.bank.iban}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="min-w-32 text-navy/60">{t.common.bicLabel}</dt>
            <dd>{a.bank.bic}</dd>
          </div>
          {a.bank.reference && (
            <div className="flex gap-2">
              <dt className="min-w-32 text-navy/60">{t.common.referenceLabel}</dt>
              <dd>{a.bank.reference}</dd>
            </div>
          )}
        </dl>
        <p className="mt-4 text-sm text-navy">{a.contactNote}</p>
      </RevealSection>
    </section>
  );
}
