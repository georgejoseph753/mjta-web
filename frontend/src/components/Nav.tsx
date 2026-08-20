"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const LMS_LOGIN_URL = "https://lms.beitsarshalom.org/login/canvas";

export function Nav() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "/" },
    {
      label: t.nav.studieren,
      href: "/studieren",
      children: [
        { label: t.nav.masterprogramm, href: "/studieren/masterprogramm" },
        {
          label: t.nav.zertifikatsprogramm,
          href: "/studieren/zertifikatsprogramm",
        },
      ],
    },
    { label: t.nav.anmelden, href: "/anmelden" },
    { label: t.nav.unterstuetzen, href: "/unterstuetzen" },
    { label: t.nav.kontakt, href: "/kontakt" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_14px_rgba(23,23,72,0.10)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="MJTA – Messianisch-Jüdische Theologische Akademie"
            width={292}
            height={168}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <div key={link.href} className="group relative">
              <Link
                href={link.href}
                className="relative text-sm font-medium text-navy after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-[width] after:duration-300 hover:after:w-full"
              >
                <span className="flex items-center gap-1">
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </span>
              </Link>
              {link.children && (
                <div className="invisible absolute left-0 top-full z-10 min-w-[220px] rounded-md bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-body hover:bg-cream hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center gap-1 text-xs font-medium text-navy/70">
            <button
              onClick={() => setLocale("de")}
              aria-current={locale === "de"}
              className={`transition-colors hover:text-accent ${
                locale === "de" ? "text-accent" : ""
              }`}
            >
              DE
            </button>
            <span>/</span>
            <button
              onClick={() => setLocale("en")}
              aria-current={locale === "en"}
              className={`transition-colors hover:text-accent ${
                locale === "en" ? "text-accent" : ""
              }`}
            >
              EN
            </button>
          </div>

          <a
            href={LMS_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-navy px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent"
          >
            {t.nav.lmsLogin}
          </a>
        </nav>

        <button
          className="lg:hidden"
          aria-label={t.nav.menuToggle}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-navy/10 bg-cream px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-sm font-medium text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-1 pl-4 text-sm text-body"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}

            <div className="mt-2 flex items-center gap-2 text-xs font-medium text-navy/70">
              <button
                onClick={() => setLocale("de")}
                className={locale === "de" ? "text-accent" : ""}
              >
                DE
              </button>
              <span>/</span>
              <button
                onClick={() => setLocale("en")}
                className={locale === "en" ? "text-accent" : ""}
              >
                EN
              </button>
            </div>

            <a
              href={LMS_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-sm bg-navy px-4 py-2 text-center text-sm font-medium text-white"
            >
              {t.nav.lmsLogin}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
