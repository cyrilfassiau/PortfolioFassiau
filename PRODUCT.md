# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** hiring managers, tech leads, and recruiters in Belgium (Wallonia) and at
remote-friendly companies, evaluating candidates for front-end positions. They arrive from a
job application, a CV, or a direct message, usually already holding the PDF CV, and they scan
fast to answer one question: can this person build and ship front-end work on a team?

**Secondary:** Cyril himself, pasting the URL into applications and messages. The link is a
deliberate act of sharing, not something anyone stumbles onto.

## Product Purpose

A personal portfolio whose job is to turn a job application into an interview. Success is a
recruiter who reads it, believes the career change is real and technically backed, and then
either contacts Cyril or downloads the CV.

## Positioning

Career-changer framing, in the sense that Cyril is open to any front-end role rather than
targeting one company type. He worked several years as a professional 3D modelling and
animation artist before moving into front-end development.

**Development comes first. 3D and film are supporting evidence, not the headline.** Cyril has
stated this directly: the dev work is the must-see, and the 3D work is other work he is capable
of. The 3D background is what makes the front-end work credible faster (proven craft,
production discipline, a finished self-produced film), but it is never the lead and never the
reason someone should hire him. Any surface that puts the film above the code, or that reads as
"3D artist who also codes", has the hierarchy backwards.

## Operating Context

- Single-page, anchor-navigated document. No routes, no login, no persistent state.
- Reached by direct link pasted into applications and messages. Not discovered via search.
- Evaluated quickly, frequently on a phone, often side by side with the PDF CV.
- Every project links out to a live deployment; two also link to public GitHub repositories.
- Contact happens through an EmailJS form or a direct `mailto:`.

## Capabilities and Constraints

- **Stack:** hand-written static HTML, CSS, and JavaScript. No build step, no `package.json`,
  no framework. Deployed on Netlify at `https://fassiau-portfolio.netlify.app/`. Future work
  should assume no build tooling unless Cyril chooses to introduce it.
- **Contact form:** EmailJS, client-side only (`service_qjxafwm`, `template_6ghw7vq`, public
  key inline). There is no backend and no database.
- **Frozen URL surface:** one page; anchors `#heroo`, `#projectss`, `#apps`, `#about`,
  `#contact`; CV at `/cyril_fassiau_dev_front_resume.pdf`.
- **Deliberately not indexed:** `meta robots noindex, nofollow` plus `robots.txt Disallow: /`.
  Cyril has stated SEO is not a constraint. The site is link-only by design, so ranking,
  structured data, and crawl budget are not product goals.
- **Bilingual requirement, currently unmet:** the site must serve both French and English.
  Today it is French-only (`lang="fr"`) with no i18n mechanism of any kind. This is a known
  open gap, and structural work must not make adding English harder than it already is.
- **Large media:** the 3D short film is an 85 MB MP4 served directly from `/videos`. It
  currently carries `preload="none"`, so it costs nothing until played, but the file itself is
  unoptimised.

## Brand Commitments

- **Name and wordmark:** the text "Cyril Fassiau". No logo mark exists; the favicon is a "CF"
  monogram.
- **Voice:** first person, French, measured and factual. No hype vocabulary, no superlatives.
  Work is described in terms of focus and objective rather than impact claims. This restraint
  is deliberate and reads as credibility for the audience.
- **Palette:** brand blues `#4c99e6` and `#25aff4` on a cool near-white ground, with a slate
  text ramp. `#1b6bbb` is the same hue darkened for text and fills that must clear WCAG AA.
- **Type:** Inter for body, Plus Jakarta Sans for headings.
- **A real portrait photograph, used prominently.**

## Evidence on Hand

**Real and already on the site:**

- Three live sites: Fassiau Polymer Consulting (a real thermoplastics consultant),
  Evasia (a Bali travel agency), and a SaaS landing page that is explicitly labelled fictional.
  Screenshots in `/images`.
- Two React/JavaScript applications with live demos and public GitHub repositories:
  Mini CRM and Weather App.
- A self-produced 3D short film, "La Petite Odyssée" (`/videos`), plus an ArtStation portfolio.
- A PDF CV, in French.
- A portrait photograph.

**Confirmed to exist but not yet on the site. Details must be supplied by Cyril, never invented:**

- **GitHub profile.** The username appears to be `cyrilfassiau`, inferred from the two linked
  repositories. Confirm before publishing a profile link.
- **LinkedIn profile.** URL unknown.
- **A certification or diploma.** Issuer, title, and date unknown.

**Explicitly absent. Never fabricate:** testimonials, client quotes, employers beyond those
listed above, years-of-experience figures, performance metrics, salary or availability details
beyond the existing "Belgique / Remote" line.

## Product Principles

1. **Dev leads, 3D supports.** The front-end work is what the visitor came to evaluate and must
   come first in every hierarchy. The 3D background is corroborating evidence of craft and
   production discipline, never the headline and never something to apologise for.
2. **Evidence over adjectives.** Every claim is backed by something clickable: a live site, a
   repository, a film, a CV.
3. **Recruiter time is the scarce resource.** Anything that delays the answer to "can this
   person build?" is a cost, regardless of how good it looks.
4. **Honest scope.** Fictional projects stay labelled fictional. Nothing implies employment,
   clients, or credentials that do not exist.
5. **The site is itself a work sample.** For a front-end candidate the portfolio is judged as
   code and as craft, not only as content. Defects here are read as professional defects.

## Accessibility & Inclusion

- WCAG 2.1 AA is the working floor, and for this product it is also a positioning requirement:
  contrast, alt text, label association, visible focus, full keyboard operation, and
  `prefers-reduced-motion` support are all part of what the audience is evaluating.
- The French/English requirement recorded above is an inclusion requirement as much as a reach
  requirement.
