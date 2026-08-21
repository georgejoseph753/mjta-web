# MJTA Website

Rebuild of the MJTA site as a single Next.js (React) app — pages, design system,
animations, and the contact form API all in one project, deployable as one
free Vercel site.

For the story of how this project came together — decisions made, what was
tried, what's real content vs. placeholder — see [PROJECT-HISTORY.md](PROJECT-HISTORY.md).

## Structure

- `frontend/` — the whole app. Contact form is handled by
  `src/app/api/contact/route.ts`, a Next.js API route (no separate backend
  server or hosting needed).

## Running locally

```bash
cd frontend
cp .env.local.example .env.local   # fill in real SMTP details when you have them
npm install
npm run dev
```

Open http://localhost:3000.

## Design system

Colors, fonts, and spacing tokens live in `frontend/src/app/globals.css`, based on
Beit Sar Shalom's brand blue (since the site links out to their LMS):

- `--mjta-navy` (#171748, deep indigo — primary), `--mjta-accent` (#2ea3f2, sky
  blue — buttons/links/hover), `--mjta-cream` (#f5f8fc, background)
- Headings: Cormorant Garamond (`--font-cormorant`) — body/nav: Maven Pro (`--font-maven-pro`)

Reusable pieces: `components/Nav.tsx`, `Footer.tsx`, `RevealSection.tsx` (scroll
animations via Framer Motion), `Card.tsx`, `StatCounter.tsx` (animated count-up).

## Language (DE/EN)

`src/i18n/` holds the whole translation system:

- `types.ts` — the `Dictionary` TypeScript interface every page's content must match
- `translations/de.ts` / `translations/en.ts` — the actual content, one file per language
- `LanguageContext.tsx` — React context + `useLanguage()` hook, persists the choice to `localStorage`

Every page is a client component that calls `useLanguage()` and reads `t.<section>.<field>`
instead of hardcoding text. To edit copy, edit the dictionary files — not the page files.
To add a new page, add its shape to `Dictionary` in `types.ts` first; TypeScript will then
force you to fill in both `de.ts` and `en.ts` (this is why `npx tsc --noEmit` should always
pass — it's the check that both languages stay in sync).

Note: this switches text client-side only (no `/en/` URL, no per-language SEO metadata).
That was the pragmatic fix for "the DE/EN button doesn't work" — a full URL-based i18n
setup (like the old WordPress site's `/en/` prefix) is a bigger, separate change if you
want it later.

## Pages implemented

Home (hero, mission quote, stats, beliefs grid, program preview, team
placeholder, support CTA), Studieren, Studieren/Masterprogramm,
Studieren/Zertifikatsprogramm, Anmelden, Unterstützen, Kontakt (working
contact form → `/api/contact`), Impressum, Datenschutz. Program/admission/
support/contact/impressum content is the real copy pulled from the live
mjta.de site, translated into both languages.

## Deploying for free (Vercel)

1. Push this project to a GitHub repo (private is fine — Vercel only needs
   read access, nobody else sees the repo).
2. Go to vercel.com, sign in with GitHub, click **Add New → Project**, pick
   the repo, set **Root Directory** to `frontend`.
3. Add the SMTP env vars from `.env.local.example` under Project Settings →
   Environment Variables (only needed once you have real SMTP credentials —
   the form works and fails gracefully without them).
4. Deploy. You get a live URL like `mjta.vercel.app` immediately — that's
   what you share with the Gemeinde, not the repo.
5. Optional later: point your real domain (mjta.de) at the Vercel project
   under Project Settings → Domains.

## Still to do before going live

- **Team section** (homepage): still placeholder cards ("Name folgt" / "Rolle
  folgt") — real names/photos/bios need to come from you, can't be invented
- **Datenschutz**: still a placeholder note, not a real privacy policy — it
  needs to accurately describe this new site's actual data processing
  (hosting, forms, any analytics) and should get legal review before publishing
- Real SMTP credentials in Vercel env vars for the contact form
- Consider a free headless CMS (e.g. Sanity.io, same as the Bamboo Shoots
  reference site) if non-technical staff need to edit content without
  touching code — not set up yet, current content lives in `src/i18n/translations/`
