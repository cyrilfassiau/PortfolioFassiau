---
name: Cyril Fassiau Portfolio
description: An exact, verifiable build log for a front-end developer, quiet enough that the work carries it.
colors:
  wallonie-blue: "#4c99e6"
  wallonie-blue-ink: "#1b6bbb"
  wallonie-blue-ink-hover: "#155593"
  wallonie-blue-tint: "#eaf3fc"
  wallonie-blue-on-dark: "#7fb8ee"
  wallonie-blue-bright: "#25aff4"
  paper: "#f6f7f8"
  surface: "#ffffff"
  surface-sunk: "#eef1f4"
  ink-deep: "#0f172a"
  ink: "#1e293b"
  ink-muted: "#475569"
  ink-on-dark: "#e2e8f0"
  rule: "#e2e8f0"
  rule-strong: "#cbd5e1"
  rule-strongest: "#94a3b8"
  field: "#fbfcfd"
  on-primary: "#ffffff"
  select: "#cfe3f8"
  matte: "#000000"
  live: "#16a34a"
  danger: "#b91c1c"
  success: "#15803d"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.2vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 3.6vw, 2.7rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.7vw, 1.45rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.05rem, 1.5vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, system-ui, -apple-system, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    letterSpacing: "0.02em"
  control:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  pill: "9999px"
spacing:
  s-1: "0.25rem"
  s-2: "0.5rem"
  s-3: "0.75rem"
  s-4: "1rem"
  s-5: "1.25rem"
  s-6: "1.5rem"
  s-7: "1.75rem"
  s-8: "2rem"
  s-10: "2.5rem"
  s-12: "3rem"
  gutter: "clamp(1.1rem, 4vw, 2.25rem)"
  section: "clamp(4.5rem, 9vw, 8rem)"
  container: "1200px"
  header: "72px"
components:
  button-primary:
    backgroundColor: "{colors.wallonie-blue-ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0 1.6rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.wallonie-blue-ink-hover}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 1.6rem"
    height: "52px"
  button-ghost-hover:
    textColor: "{colors.wallonie-blue-ink}"
  button-on-dark:
    textColor: "{colors.ink-on-dark}"
    rounded: "{rounded.md}"
    padding: "0 1.6rem"
    height: "52px"
  button-on-dark-hover:
    backgroundColor: "{colors.wallonie-blue-ink}"
    textColor: "{colors.surface}"
  chip-language:
    backgroundColor: "{colors.wallonie-blue-tint}"
    textColor: "{colors.wallonie-blue-ink}"
    rounded: "{rounded.sm}"
    padding: "0 0.6rem"
    height: "24px"
  chip-status:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 0.9rem 0.4rem 0.7rem"
  card-evidence:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.25rem, 2.2vw, 1.85rem)"
  input-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.8rem 0.9rem"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.body}"
  nav-link-active:
    textColor: "{colors.wallonie-blue-ink}"
---

# Design System: Cyril Fassiau Portfolio

## Overview

**Creative North Star: "The Build Log"**

A build log is what a developer keeps while the work is happening: what was built, what it
focused on, what it was meant to prove, and a link to the thing actually running. It is
sequential and verifiable. It earns trust by being exact rather than by being
persuasive. That is the whole posture of this system. The visitor is a hiring manager with
limited time and a specific question, and the design's job is to answer it with evidence in
order, not to argue.

The hierarchy is settled and non-negotiable: **the development work leads and the 3D work
supports it.** The 3D background is what makes the front-end work credible quickly, because it
proves prior craft and production discipline, but it is corroboration and never the headline.
This produces the page's one dramatic move: the entire document is a quiet near-white working
surface, and exactly one section inverts to near-black for the 3D film. That inversion is a
categorical signal, marking different evidence of a different kind, and it works only because
nothing else on the page competes with it.

Components are editorial and quiet. Chrome recedes, type carries the structure, and whitespace
is generous enough that scanning is effortless. Depth is a response rather than a decoration:
surfaces sit flat with a hairline rule and lift only when the user touches them. The system was
built by explicitly rejecting the generic AI-portfolio look, and those rejections are permanent
invariants rather than one-time cleanups.

**Key Characteristics:**

- Exact: values are deliberate, alignment is real, nothing is approximate.
- Verifiable: every claim is one click from a running site, a repository, or a document.
- Asymmetric: no centered full-width text column anywhere in the system.
- Flat at rest: hairline borders, neutral shadow only on interaction.
- Two faces, one accent hue, one dark band.
- Accessibility is part of the aesthetic, because the site is itself a work sample.

## Colors

A cool, near-neutral working surface carrying a single blue hue that appears sparingly and
always for a functional reason.

### Primary

- **Wallonie Blue** (`#4c99e6`): the identity blue. Used only where it does not carry meaning
  through contrast: the nav underline that wipes in on hover, the offset frame behind the
  portrait, the input focus border and its soft ring, the ghost-button hover border, and the
  accent rule under every section heading. It is the color you remember, not the color you read.
- **Wallonie Blue Ink** (`#1b6bbb`): the same hue (210°) darkened until it is safe. Every blue
  that must be read or must sit under white text uses this: primary button fills, the nav CV
  pill, language chips, links, the caret, focus outlines, and the active nav state.
- **Wallonie Blue Ink Hover** (`#155593`): the pressed and hovered state of any Ink fill.
- **Wallonie Blue Tint** (`#eaf3fc`): the chip and active-nav background. Pale enough that Ink
  text on it still clears AA.
- **Wallonie Blue on Dark** (`#7fb8ee`): the only blue permitted inside the dark band, where
  Ink would disappear.

### Secondary

- **Wallonie Blue Bright** (`#25aff4`): the original secondary cyan, retained in exactly one
  decorative role, as the second stop of the gradient in the section heading accent rules. It
  failed contrast in every text and fill role it once held and may never return to one.

### Neutral

- **Paper** (`#f6f7f8`): the page ground. Cool, not warm, and never pure white.
- **Surface** (`#ffffff`): cards, the form panel, the status chip, ghost buttons. Reads as a
  raised working sheet against Paper.
- **Surface Sunk** (`#eef1f4`): the contact band and the footer. A recessed tray that closes
  the page.
- **Ink Deep** (`#0f172a`): the dark band background. Reserved.
- **Ink** (`#1e293b`): headings and primary body text.
- **Ink Muted** (`#475569`): secondary body text, lede paragraphs, nav links at rest, captions.
  Clears AA on Paper at 7.06:1, which the previous muted grey did not.
- **Ink on Dark** (`#e2e8f0`): body text inside the dark band.
- **Rule** (`#e2e8f0`): every hairline border and divider in the system.
- **Rule Strong** (`#cbd5e1`): card border on hover, scrollbar thumb.
- **Rule Strongest** (`#94a3b8`): scrollbar thumb on hover.
- **Field** (`#fbfcfd`): input fill at rest, going pure white on focus.
- **On Primary** (`#ffffff`): text on any filled brand surface.
- **Select** (`#cfe3f8`): text selection background, 13.6:1 against Ink Deep.

### Semantic

- **Live** (`#16a34a`): the availability dot, with a `rgba(22,163,74,0.16)` ring. The only
  green in the system and the only non-blue hue.
- **Danger** (`#b91c1c`): form field borders and error text.
- **Success** (`#15803d`): form success text.
- **Matte** (`#000000`): the video letterbox, and nothing else.

### Named Rules

**The Two-Blue Rule.** `#4c99e6` never carries text and never sits under white text; it fails
AA in both roles. `#1b6bbb` does both safely. Same hue, different jobs, and the split is not
negotiable. Any new blue element must be assigned to one of the two before it is drawn.

**The One Dark Band Rule.** Exactly one section on the page inverts to `#0f172a`, and it is the
3D film. The inversion is what marks that work as a different category of evidence. A second
dark band anywhere destroys the signal and flattens the page's only structural surprise.

**The Sparing Accent Rule.** Blue covers well under 10% of any viewport. If a screenshot shows
blue as a dominant impression rather than an accent, something has been over-painted.

## Typography

**Display Font:** Plus Jakarta Sans (with Inter, system-ui fallback)
**Body Font:** Inter (with system-ui, -apple-system fallback)

**Character:** Two neutral geometric sans faces separated by job rather than by mood. Plus
Jakarta Sans sets everything structural, tightly tracked at weight 800, which gives headings a
compact density that reads as engineered rather than decorative. Inter handles everything read
at length, at a comfortable 1.65 line-height. The pairing is deliberately unshowy: the type
system's authority comes from consistency and exact tracking, not from personality.

### Hierarchy

- **Display** (800, `clamp(2.6rem, 6.2vw, 4.6rem)`, 1.08, -0.025em): the page h1 only. Appears
  exactly once, in the hero.
- **Headline** (800, `clamp(1.85rem, 3.6vw, 2.7rem)`, 1.08, -0.025em): section titles.
- **Title** (800, `clamp(1.2rem, 1.7vw, 1.45rem)`, 1.08, -0.015em): card and project titles.
  The lead project card scales up to `clamp(1.45rem, 2.4vw, 1.9rem)` to carry its extra weight.
- **Lede** (400, `clamp(1.05rem, 1.5vw, 1.22rem)`, 1.65): the hero sentence, section subtitles,
  and About paragraphs. Measure capped at 42ch in the hero, 68ch in About.
- **Body** (400, 1rem, 1.65): everything else read at length. Card body drops to `0.9rem`.
- **Label** (600, `0.78rem`, 0.02em): language and status chips.
- **Control** (700, `0.95rem`, line-height 1): buttons and nav links. Compact variant
  `0.875rem`, wordmark and mobile nav `1.1rem`. This is a separate scale from the content
  ramp above, and every control size comes from it.

### Named Rules

**The Two Faces Rule.** Plus Jakarta Sans for structure, Inter for reading. There is no third
face, and neither face crosses into the other's job. A serif, a mono, or a display face
requires an explicit identity decision, not a component-level choice.

**The One H1 Rule.** Exactly one `h1` per page, in the hero. Section titles are `h2`, card
titles are `h3`. This system previously shipped eight `h1` elements and it read as amateur.

**The Twenty Word Rule.** The hero lede caps at 20 words. It is currently 13. Longer copy
belongs in About, where there is room for it.

**The No Kicker Rule.** No section carries an uppercase label above its heading. Ever. A kicker
either repeats the heading or pads it, and both read as template. The heading stands alone and
the accent rule below it does the marking.

**The Heading Rule.** Every section heading is underscored by a 56px, 3px brand-gradient rule
(`--primary` to `--primary-2`, or `--primary-on-dark` inside the dark band). It is the system's
only decorative device, it is identical everywhere, and it replaced the eyebrows.

## Layout

A single 1200px container with a fluid gutter of `clamp(1.1rem, 4vw, 2.25rem)`, and a vertical
section rhythm of `clamp(4.5rem, 9vw, 8rem)` top and bottom.

Internal spacing runs on a **4px-base scale**: `--s-1` 4px, `--s-2` 8px, `--s-3` 12px, `--s-4`
16px, `--s-5` 20px, `--s-6` 24px, `--s-7` 28px, `--s-8` 32px, `--s-10` 40px, `--s-12` 48px. The
4px base exists because the useful intervals in this design sit at 12px and 20px, which an
8-only scale cannot express. Every gap, padding, and margin in the stylesheet comes from it.

Spacing is used in **three tiers**, and the tier carries the meaning:

- **Bind** (`--s-2`, 8px): elements that are one unit. A card title and its description; an app
  title and its stack chips.
- **Separate** (`--s-3` to `--s-5`, 12 to 20px): distinct items inside one group. Metadata
  above its subject; body copy below an identity block.
- **Detach** (`--s-5` and up): an action leaving the block it concludes, or a divider with equal
  air on both sides.

Everything structural is an asymmetric two-column grid, and the ratios are intentionally not
50/50: the hero runs 1.2/0.8 with text leading, the lead project card runs 1.35/1 with the
screenshot leading, the two application blocks run 0.85/1.15 and mirror each other, About runs
0.72/1.28 with a sticky heading column, and Contact runs 0.85/1.15. The projects grid below the
lead card is two equal columns, never three.

Three breakpoints, all max-width: **1024px** collapses every two-column grid to one and swaps
the desktop nav for a drawer; **720px** collapses the two-card projects grid and makes buttons
full-width; **400px** trims the wordmark size. The fixed header is 72px on desktop and 60px
below 1024px, and every section carries `scroll-margin-top` to match.

Content must survive translation. The site is French today and English is a committed
requirement, so every text container has to tolerate roughly 30% string-length change without
breaking. Nothing may depend on a specific line count or a fixed element height.

### Named Rules

**The Asymmetry Rule.** No full-width centered text column anywhere. Centered symmetric layout
is the single strongest template signal this design was built to escape, and it stays out.

**The No Triplet Rule.** Never three equal-width cards in a row. Hierarchy is expressed by
making one item larger, not by making everything the same size.

**The Fold Rule.** The hero's primary call to action is fully above the fold at 1440×900. Verify
by measurement, not by eye.

**The Three Tier Rule.** No component may space all its children equally. Every repeated block
must show bind, separate, and detach intervals, because equal spacing tells the reader nothing
about what belongs to what. Measured targets: project card 12 / 8 / 20; app entry 8 / 20 / 20
with the Focus divider carrying 20px above and below.

**The One DOM Order Rule.** Repeated components keep the same source order as each other, and
that order matches the narrow-viewport reading order. `order` is used only to swap columns on
wide screens, where left-to-right placement carries no semantic sequence.

## Elevation & Depth

The system is flat at rest and layered by tone. Surfaces separate from the page through value
(`#f6f7f8` page, `#ffffff` card, `#eef1f4` sunk band, `#0f172a` dark band) and through a single
hairline `#e2e8f0` border. Shadow does not establish hierarchy; tone and border do. Shadow only
appears as a response to the user, which is why cards look calm while scanning and alive while
being used.

All three shadow tokens are neutral slate. The previous system applied a blue glow
(`rgba(59,130,246,0.3)`) to every button and to the portrait, and that glow was the design's
dominant generic tell. It is permanently retired.

### Shadow Vocabulary

- **e1** (`0 1px 2px rgba(15,23,42,0.04), 0 2px 8px rgba(15,23,42,0.05)`): the resting state of
  cards, the form panel, and primary buttons. Barely perceptible; it separates, it does not lift.
- **e2** (`0 2px 4px rgba(15,23,42,0.05), 0 12px 28px rgba(15,23,42,0.08)`): hovered buttons,
  the portrait, application screenshots, and the skip link.
- **e3** (`0 4px 8px rgba(15,23,42,0.06), 0 24px 48px rgba(15,23,42,0.12)`): hovered project
  cards only. The largest lift in the system and the clearest interaction reward.
- **e-header** (`0 1px 12px rgba(15,23,42,0.05)`): the fixed header once the page has scrolled.
- **e-drawer** (`-8px 0 32px rgba(15,23,42,0.14)`): the mobile nav drawer.

### Named Rules

**The Flat-At-Rest Rule.** Surfaces sit flat with a hairline border. Shadow is a response to
hover or focus, never decoration and never a way to make something look important.

**The No Coloured Shadow Rule.** Every shadow is neutral slate. Coloured shadows, glows, and
outer halos are banned outright, in any hue, at any opacity.

## Shapes

Four radii and nothing else: **8px** (`--r-sm`) for chips, small inline surfaces, and focus
outlines; **14px** (`--r-md`) for buttons, inputs, and nav drawer items; **22px** (`--r-lg`) for
cards, panels, the portrait, the application screenshot frames, and the video; **9999px**
(`--r-pill`) for the status chip and the About accent rule.

The form language is soft-cornered rectangles throughout. There is exactly one circle in the
system, the availability status dot, and its roundness is what makes it read as a live
indicator. The portrait is deliberately a rounded square rather than a circle, because the
circular avatar was a template signal, and it carries a Wallonie Blue frame offset down and to
the left, which is the system's one piece of pure geometry.

Borders are always 1px `#e2e8f0`, except the portrait frame at 2px Wallonie Blue and the About
accent rule at 3px.

### Named Rules

**The Four Radius Rule.** Four values, no exceptions, no one-off radii. The previous system had
five competing radii of which four were hardcoded past the token scale, and it looked
unresolved.

**The One Circle Rule.** The status dot is the only circle. Everything else is a soft-cornered
rectangle, including the portrait.

## Components

### Buttons

- **Shape:** softly rounded (14px), 52px tall, 44px in the compact `--sm` variant.
- **Primary:** Wallonie Blue Ink fill with white text at 5.43:1, `0 1.6rem` padding, resting e1.
- **Hover / Focus:** fill darkens to Ink Hover and shadow rises to e2 over 0.18s. Nothing
  translates, nothing scales. The color change is the whole feedback.
- **Ghost:** white fill, Ink text, hairline Rule border. On hover the border becomes Wallonie
  Blue and the label becomes Ink blue. Used for the secondary action in every pair.
- **On Dark:** transparent with a translucent light border inside the dark band, filling with
  Wallonie Blue Ink on hover.

### Chips

- **Language chips:** Wallonie Blue Tint background, Ink blue text, 8px radius, 24px tall,
  `0.78rem` at weight 600. Used on every project to expose the stack at a glance. Never
  interactive, never a filter.
- **Status chip:** white pill with a hairline border, Ink Muted text, and a live green dot
  (`#16a34a`) with a soft ring. Exactly one per page, in the hero, carrying availability.

### Cards / Containers

- **Corner Style:** 22px.
- **Background:** Surface white on the Paper ground.
- **Border:** 1px Rule at rest, darkening to `#cbd5e1` on hover.
- **Shadow Strategy:** e1 at rest, e3 on hover. See Elevation.
- **Internal Padding:** `clamp(1.25rem, 2.2vw, 1.85rem)`, rising to `clamp(1.5rem, 3vw, 3rem)`
  on the lead card.
- **Internal Rhythm:** chips to title 12px, title to description 8px, description to the
  "Voir le site" action 20px. On the two side-by-side cards the action also carries
  `margin-top: auto` so both links align on one baseline regardless of description length.
- **Behavior:** the whole card is one link. On hover the screenshot scales to 1.035 over 0.5s
  behind a clipped frame, and the "Voir le site" arrow travels 4px. The card body itself does
  not move.

### Inputs / Fields

- **Style:** near-white `#fbfcfd` fill, hairline Rule border, 14px radius, `0.8rem 0.9rem`
  padding, 1rem text so mobile browsers do not zoom on focus.
- **Focus:** border becomes Wallonie Blue with a 3px `rgba(76,153,230,0.22)` ring, and the fill
  goes pure white.
- **Error:** border becomes `#b91c1c`, driven by `aria-invalid` rather than a class, so the
  visual state and the assistive state cannot drift apart.
- **Labels:** always a real `<label for>` above the field. Placeholders never restate a label.

### Navigation

- **Desktop:** six items, Ink Muted at `0.95rem` weight 500, with a Wallonie Blue underline that
  wipes in from the left on hover and stays for the section currently in view. The CV item is a
  44px Ink-filled pill. The header is a translucent Paper bar with a 14px backdrop blur that
  gains a hairline bottom border once the page scrolls.
- **Mobile (≤1024px):** a 300px drawer translating in from the right over a scrim, with items
  staggered 40ms apart. It is `visibility: hidden` when closed so it stays out of the tab order,
  and it translates rather than being positioned off-screen so it cannot create horizontal
  overflow.

### Signature Component: The Evidence Row

The two application blocks are the system's defining pattern and the clearest expression of the
North Star. Each is an asymmetric split carrying, in order: the
project title, the stack chips, a paragraph of what it is, then a bordered `Focus` / `Objectif`
definition list, then a Lancer button and a Repo Github button side by side. The definition list
is the part that matters: it states what the project was meant to exercise and what it was meant
to prove, which is exactly what a build log entry does. Its rule carries 20px of air above and
below, so it separates rather than attaching to the paragraph. Any new project added to the site should
use this structure rather than a looser card.

### Signature Component: The Dark Band

One full-bleed `#0f172a` section holding the 3D film, with a white heading over a Wallonie Blue
on Dark accent rule, the video at 22px radius with `preload="none"`, and a single outlined button out
to ArtStation. It is the only inverted surface in the system and the only place the 3D work is
allowed to dominate.

## Do's and Don'ts

### Do:

- **Do** put front-end work above 3D work in every hierarchy. Dev is what is being evaluated;
  3D is corroboration.
- **Do** assign every new blue element to either Wallonie Blue (decorative) or Wallonie Blue Ink
  (readable) before drawing it.
- **Do** express importance by changing size, span, or position, never by adding a shadow.
- **Do** keep interaction feedback to color and elevation. Transitions run 0.18s to 0.28s ease
  for state, 0.5s to 0.6s `cubic-bezier(0.22, 1, 0.36, 1)` for entrances.
- **Do** gate every reveal animation behind `prefers-reduced-motion` and behind an `html.js`
  class, so content is visible when JavaScript fails.
- **Do** measure contrast before shipping any new text color. AA is the floor and the site is a
  front-end work sample, so a failure here reads as incompetence rather than as an oversight.
- **Do** give every image a real `alt`, every field a real `<label for>`, and every interactive
  element a visible `:focus-visible` outline.
- **Do** author layouts that survive a 30% string-length change, because English is coming.
- **Do** take every gap, padding, and margin from the `--s-*` scale.
- **Do** theme the surfaces the browser draws for you: text selection, caret, scrollbar, focus
  ring, underline offset, and `color-scheme`. They ship with the design or they ship as
  defaults belonging to no design system.
- **Do** take every control size from the Control scale, and every color from a token. There
  are no literal colors and no literal font sizes outside `:root`.

### Don't:

- **Don't** center a full-width text column. Not in the hero, not in About, not anywhere.
- **Don't** place three equal-width cards in a row.
- **Don't** add a coloured shadow, glow, or halo in any hue at any opacity.
- **Don't** use `#4c99e6` for text, or under white text. It measures 2.79:1 and 3.0:1.
- **Don't** introduce a second dark section. There is one, and it belongs to the 3D film.
- **Don't** apply `backdrop-filter` outside the fixed header. Glass on chips and cards was
  decoration with no material logic and it is retired.
- **Don't** put a kicker, eyebrow, or uppercase label above any heading, at any count.
- **Don't** number a sequence (01 / 02) unless the order itself is information the reader needs.
- **Don't** add a radius outside the four-step scale.
- **Don't** space a component's children evenly. Equal intervals destroy grouping.
- **Don't** give every element the same hover response. Cards lift, buttons shift color, links
  wipe and travel.
- **Don't** use `alert()`, a page reload, or any other browser-native interruption as a form
  state. States are inline, and they are announced through `role="status"`.
