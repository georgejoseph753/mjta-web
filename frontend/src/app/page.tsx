"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import { Card } from "@/components/Card";
import { StatCounter } from "@/components/StatCounter";
import { useLanguage } from "@/i18n/LanguageContext";

const TEAM_PLACEHOLDERS = [1, 2, 3];

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[92vh] min-h-[560px] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="MJTA"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />

        <RevealSection className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
          <h1 className="text-4xl font-semibold sm:text-5xl">{t.home.heroTitle}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-cream/80">
            {t.home.heroSubtitle}
          </p>
          <Link
            href="/studieren"
            className="mt-8 inline-block rounded-sm bg-accent px-8 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-dark"
          >
            {t.home.heroCta}
          </Link>
        </RevealSection>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-cream/70">
          <ChevronDown size={28} />
        </div>
      </section>

      {/* Mission quote */}
      <section className="bg-white px-6 py-20">
        <RevealSection className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-2xl leading-relaxed text-navy sm:text-3xl">
            {t.home.quote}
          </p>
          <p className="mt-4 text-sm uppercase tracking-widest text-accent">
            {t.home.quoteRef}
          </p>
        </RevealSection>
      </section>

      {/* Stats strip */}
      <section className="bg-navy px-6 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-10 sm:grid-cols-3">
          <StatCounter target={2006} label={t.home.stats.foundedLabel} />
          <StatCounter target={2} label={t.home.stats.programsLabel} />
          <StatCounter target={100} suffix="%" label={t.home.stats.focusLabel} />
        </div>
      </section>

      {/* Beliefs grid */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 sm:grid-cols-2">
        {t.home.beliefs.map((section, i) => (
          <RevealSection key={section.title} delay={i * 0.1}>
            <Card title={section.title}>{section.text}</Card>
          </RevealSection>
        ))}
      </section>

      {/* Program preview */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <h2 className="text-center text-3xl text-navy">
              {t.home.programsHeading}
            </h2>
          </RevealSection>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {t.home.programs.map((program, i) => (
              <RevealSection key={program.href} delay={i * 0.1}>
                <Link
                  href={program.href}
                  className="group block rounded-md border border-navy/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_10px_26px_rgba(23,23,72,0.12)]"
                >
                  <h3 className="mb-3 text-2xl font-semibold text-navy">
                    {program.title}
                  </h3>
                  <p className="text-body leading-relaxed">{program.text}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
                    {program.cta} →
                  </span>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <RevealSection>
          <h2 className="text-center text-3xl text-navy">{t.home.teamHeading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-body">
            {t.home.teamIntro}
          </p>
        </RevealSection>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {TEAM_PLACEHOLDERS.map((n, i) => (
            <RevealSection key={n} delay={i * 0.1}>
              <div className="text-center">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-navy/5 text-sm text-navy/40">
                  {t.home.teamPhotoLabel}
                </div>
                <p className="mt-4 font-medium text-navy">
                  {t.home.teamNamePlaceholder}
                </p>
                <p className="text-sm text-body">{t.home.teamRolePlaceholder}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="relative overflow-hidden bg-navy px-6 py-20 text-center">
        <Image
          src="/images/campus.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <RevealSection className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl text-cream">{t.home.supportHeading}</h2>
          <p className="mt-4 text-cream/80">{t.home.supportText}</p>
          <Link
            href="/unterstuetzen"
            className="mt-8 inline-block rounded-sm bg-accent px-8 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-dark"
          >
            {t.home.supportCta}
          </Link>
        </RevealSection>
      </section>
    </>
  );
}
