# MJTA Website — Project History

A record of how this project came together, in order. For "how do I run/deploy
this," see [README.md](README.md) instead — this file is the narrative of
what happened and why.

## 1. Starting point

The original ask was to make the existing WordPress site (mjta.de) look more
polished and add a login link to the Beit Sar Shalom LMS
(`https://lms.beitsarshalom.org/login/canvas`).

Investigation of the live site found:
- WordPress 7.0.4, **GeneratePress** theme, hosted on GoDaddy Managed WordPress
- Built with native Gutenberg blocks (no page builder like Elementor/Divi)
- Nav: Über uns, Studieren (Masterprogramm, Zertifikatsprogramm), Anmelden und
  Finanzen, Unterstützen, Kontakt, Intern (a separate WordPress login,
  unrelated to the LMS)
- Homepage sections: Kurzportrait, Leitbild, Vision, Glaubensgrundlage
- Existing accent color `#f5a623` (amber), font Maven Pro

**Initial recommendation:** refresh the design in place rather than rebuild
from scratch — lower risk, keeps existing SEO/content/forms working. This was
delivered as a concrete spec: a navy/gold/serif palette, a scroll-reveal +
sticky-header CSS/JS package the user could paste into WordPress's Customizer
and a code-snippets plugin (no hosting access was available to implement this
directly — editing wp-admin requires login, which is off-limits for the
assistant to do even with permission).

## 2. Pivot to a full rebuild

The user asked for a VS Code project instead, specifically a **React frontend
+ Node backend**. This is a bigger decision (leaving WordPress/GoDaddy
entirely, needing new hosting, losing wp-admin content editing) so it was
confirmed explicitly before proceeding.

**Stack chosen:** Next.js (React framework, better SEO/routing than plain
React for a multi-page institutional site) + Express (Node backend for the
contact form). Scaffolded at `~/Documents/mjta-website/`, with Tailwind CSS,
Framer Motion for animation, and a navy/gold design system as a first pass.

Verified locally in a real browser: caught and fixed a genuine bug where the
hero `<h1>` was invisible (navy text on navy background, from a CSS rule that
hardcoded heading color globally instead of scoping it).

## 3. Reference-driven redesign

The user pointed to a friend's site
([Jorineg/BambooShoots](https://github.com/Jorineg/BambooShoots), live at
bamboo-shoots-chi.vercel.app) as a style/structure reference, and asked for
the MJTA site's palette to use shades of blue, matching Beit Sar Shalom's
brand (since the LMS is theirs).

- Pulled Beit Sar Shalom's actual brand colors from their live CSS:
  `#171748` deep indigo (primary) and `#2ea3f2` sky blue (accent) — not
  guessed, taken from their site's real stylesheet
- Studied the Bamboo Shoots repo and live site: built with **Astro + Sanity
  CMS**, deployed on **Vercel**, content editable through Sanity Studio, a
  webhook auto-rebuilds on content changes
- Rebuilt the MJTA homepage inspired by (not copied from) that structure:
  hero with a real MJTA photo, mission-quote section, an animated count-up
  stats strip, the four belief cards, a program preview, a team placeholder
  section, and a support/donation CTA band
- **Simplified the architecture**: folded the standalone Express backend into
  a Next.js API route (`/api/contact`), so the whole site deploys as one
  free Vercel project instead of needing two separate hosts

## 4. Making the DE/EN toggle actually work, and filling in real content

The language buttons in the nav were previously decorative. Built a proper
system:
- `src/i18n/types.ts` — a `Dictionary` TypeScript type every page's content
  must satisfy
- `src/i18n/translations/de.ts` / `en.ts` — the actual bilingual content
- `src/i18n/LanguageContext.tsx` — React context + `useLanguage()` hook,
  persisted to `localStorage`

At the same time, replaced placeholder text across the site with real
content pulled directly from the live mjta.de pages (Masterprogramm
curriculum and credits, Zertifikatsprogramm modules, Anmelden requirements
and bank details, Unterstützen donation info, Kontakt address/phone/email,
and a real Impressum with the registered org's legal details). Both language
versions were verified live in the browser — switching languages correctly
updated titles, nav labels, and page content, and the choice persisted across
navigation.

Left honestly as placeholders, not fabricated:
- **Team section** — no real staff data exists anywhere on the live site, so
  it stayed as clearly-labeled placeholder cards rather than inventing names
- **Datenschutz** (privacy policy) — a placeholder note instead of copying
  the old WordPress site's GDPR text, since a privacy policy needs to
  accurately describe what *this* new site actually does (different hosting,
  different form handling) and should get real legal review

## 5. Logo

Rather than designing a new logo, used the organization's actual existing
logo file (recovered from the original page's saved assets,
`cropped-logo-mjta.png` — the same cropped file their current WordPress nav
already uses). Added it to the nav and set it as the site favicon. Did not
place it on dark backgrounds (footer/hero) since the logo's dark-blue text
has poor contrast there, and did not create a "reversed" white version
without the user's sign-off, since altering an org's logo is a real brand
decision.

## 6. Small fixes

- Contact backend consolidated into Next.js (see §3)
- Nav "E-Learning Login" button shortened to just "Login" per user request

## 7. Deployment

- Discovered the user's home directory was itself an (unrelated) git repo
  tracking dotfiles — created an isolated `git init` scoped to
  `~/Documents/mjta-website` instead of committing into that
- Committed the project, user pushed it to a private GitHub repo, connected
  it to Vercel with **Root Directory** set to `frontend`
- Live deployment confirmed working, matching the local build (logo, blue
  hero, translated nav, "Login" button all correct)

## Current status

**Live and working:** all pages, DE/EN switching, contact form (API route
returns a graceful error until real SMTP credentials are added), animations,
real content on every page except the team section.

**Still open:**
- Real team member names/photos/bios (needs to come from the user/MJTA)
- Real Datenschutz text (needs legal review before publishing)
- Real SMTP credentials in Vercel's environment variables, for the contact
  form to actually send email
- Optional: custom domain (mjta.de) pointed at the Vercel project
- Optional: a headless CMS (e.g. Sanity, as in the Bamboo Shoots reference)
  if non-technical staff need to edit content without touching code
