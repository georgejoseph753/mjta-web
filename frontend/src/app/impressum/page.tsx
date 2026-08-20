"use client";

import { RevealSection } from "@/components/RevealSection";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ImpressumPage() {
  const { t } = useLanguage();
  const i = t.impressum;

  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <RevealSection>
        <h1 className="text-4xl text-navy">{i.title}</h1>
        <dl className="mt-8 space-y-4 text-body">
          <div>
            <dd className="font-medium text-navy">{i.org}</dd>
          </div>
          <div>
            <dt className="text-sm text-navy/60">{i.addressLabel}</dt>
            <dd>{i.address}</dd>
          </div>
          <div>
            <dt className="text-sm text-navy/60">{i.representedByLabel}</dt>
            <dd>{i.representedBy}</dd>
          </div>
          <div>
            <dt className="text-sm text-navy/60">{i.phoneLabel}</dt>
            <dd>{i.phone}</dd>
          </div>
          <div>
            <dt className="text-sm text-navy/60">{i.faxLabel}</dt>
            <dd>{i.fax}</dd>
          </div>
          <div>
            <dt className="text-sm text-navy/60">{i.emailLabel}</dt>
            <dd>{i.email}</dd>
          </div>
          <div>
            <dt className="text-sm text-navy/60">{i.registerLabel}</dt>
            <dd>{i.register}</dd>
          </div>
          <div>
            <dt className="text-sm text-navy/60">{i.responsibleLabel}</dt>
            <dd>{i.responsible}</dd>
          </div>
        </dl>
        <p className="mt-8 text-sm text-body/80">{i.taxNote}</p>
      </RevealSection>
    </section>
  );
}
