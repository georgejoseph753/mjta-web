"use client";

import { RevealSection } from "@/components/RevealSection";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/i18n/LanguageContext";

export default function KontaktPage() {
  const { t } = useLanguage();
  const k = t.kontakt;

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <RevealSection>
        <h1 className="text-4xl text-navy">{k.title}</h1>
        <p className="mt-4 text-body leading-relaxed">{k.intro}</p>
      </RevealSection>

      <div className="mt-12 grid gap-12 sm:grid-cols-2">
        <RevealSection delay={0.1}>
          <dl className="space-y-4 text-body">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent">
                {k.addressLabel}
              </dt>
              <dd className="mt-1 whitespace-pre-line">{k.address}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent">
                {k.phoneLabel}
              </dt>
              <dd className="mt-1">{k.phone}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent">
                {k.faxLabel}
              </dt>
              <dd className="mt-1">{k.fax}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-accent">
                {k.emailLabel}
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${k.email}`} className="hover:text-accent">
                  {k.email}
                </a>
              </dd>
            </div>
          </dl>
        </RevealSection>

        <RevealSection delay={0.15}>
          <h2 className="text-xl font-semibold text-navy">{k.formHeading}</h2>
          <ContactForm />
        </RevealSection>
      </div>
    </section>
  );
}
