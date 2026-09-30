# SpaceXAI Design System

A design system for **SpaceXAI** — the company behind **Grok** — reconstructed from the live
marketing site and product surfaces.

SpaceXAI ships frontier models across text, code, voice, images, and video, sold three ways:
a consumer assistant (Grok), a developer platform (one API, several model families), and an
agent product (Grok Bot — always-on AI teammates with their own cloud computer). The design
language across all of it is the same: near-black canvas, one typeface, one accent gradient,
everything else grey.

## Sources

| Source | What was read |
|---|---|
| <https://x.ai/> | Homepage structure, hero and section copy, product grid, developer section, proof stats, news grid, get-started cards, footer |
| <https://x.ai/bot> | Grok Bot product page — full body copy, feature panels, Bot roster, FAQs, pricing structure |
| <https://x.ai/legal/brand-guidelines> | Trademark and logo usage terms (dated February 14, 2025) — the reason no logo file ships here |
| `uploads/pasted-1789807*.png` (6 captures) | Pixel source for every colour, surface step, radius and layout measurement in `tokens/` |

No codebase or Figma file was provided. Every value in `tokens/` was sampled from the
captures or read from the live HTML; nothing is inferred from a framework default.

---

## Content fundamentals

**Voice: declarative, technical, unadorned.** Sentences state a capability and stop. There is
no hype vocabulary, no "revolutionary", no exclamation marks anywhere on the site.

> Frontier AI models for everything you ship.
> Reasoning, code, voice, images, and video. Trained on the world's largest supercluster.

**Headlines are noun phrases or two-beat fragments**, often split across two short sentences
with a hard stop in the middle:

> One API. Every modality.
> Meet your first Bot.
> Choose how to get started.

**Second person, never first.** Copy addresses "you" and "your team"; the company is
"SpaceXAI" in the third person, never "we" outside legal pages. Product copy describes what
*the user* gets, in the present tense: "Bots can sign in to your tools, use them just like you
do, and come back with finished work."

**Casing is sentence case everywhere** — headlines, buttons, nav, card titles, footer column
headings. No Title Case, no ALL CAPS, no letter-spaced small-caps eyebrows. Eyebrows are just
grey sentence-case text ("For developers").

**Numbers do the persuading.** Claims are stated as bare figures with a lowercase label
underneath: "400M+ / queries processed daily", "200K / GPUs in Colossus", "122 / days to build
Colossus", "<200ms / median latency". No "up to", no asterisks.

**Buttons are two or three words, imperative:** Get API Access · View Documentation · Try for
free · Contact Sales · Start Building · Read Docs · Download for macOS. "Explore →" is the
standard low-emphasis card link.

**In-product copy drops a register.** Bot transcripts are deliberately lowercase and clipped,
the way a colleague types: "sent. inbox at zero, 5 drafts parked", "that clears it. report
filed: 9 receipts matched, $2,340 across 3 trips, nothing outstanding." Marketing copy is
sentence case; conversation copy is lowercase. Don't mix them.

**No emoji.** None appear anywhere on the site or in the product surfaces. Don't introduce
them. Typographic marks are used instead: `·` between metadata, `—` in mid-sentence asides,
`→` and `›` on links, `<` in "<200ms".

---

## Visual foundations

**Colour.** The page is `#0a0a0a` — not pure black, and it never changes. Depth comes from a
tight ramp of near-blacks: `#151514` recessed, `#1a1a1a` card, `#202020` hover, `#232323`
raised, `#272727` hairline, `#303030` strong border. Text is white, then `#c9c9c9`, `#9d9d9d`,
`#606060`. There is no light mode.

Saturated colour appears in exactly four places: the brand spectrum, launch badges, Bot
identity discs, and news artwork. The **brand spectrum** — `#474747 → #5d5faa → #6d63f2 →
#a456f6 → #c94fc9 → #ec4996 → #f36050 → #f87915`, grey through indigo, violet, magenta, red,
to orange — is the single signature. It appears once per page, as a 3px rule under one word of
the hero headline. Never as a background, never behind text, never on more than one word.

**Type.** One grotesque for everything, one mono for code. Display type is medium weight
(500) at `-0.032em`; the whole system tightens tracking as size grows and never sets display
type at 0. Weights in product are 400 and 500 only — 600 is reserved for the wordmark, 300 and
700 exist in the file but are unused. Body copy is `#c9c9c9`, not white; white is for
headlines, card titles, and stat numerals.

**Backgrounds.** Flat. No repeating pattern, no texture, no grain, no noise overlay, no
full-bleed photography. The only "imagery" is soft two- and three-stop diagonal gradients on
news thumbnails (`--gradient-ember`, `--gradient-abyss`, `--gradient-halo`) and one off-white
`#ecece8` tile for contrast in a four-up row. Where the real site uses generated imagery
(the Imagine tile, the Voice orb) it is *inside* a card, never behind content.

**Imagery temperature.** Warm and low-key: amber and tungsten highlights against deep shadow,
shallow depth of field. The generated art is saturated but dark-keyed, so it reads as part of
the black canvas rather than a window cut into it.

**Cards.** Flat `#1a1a1a` on `#0a0a0a`, 20px radius, **no border and no shadow**. Depth is a
value step. Recessed panels (`#151514`) get a 1px `#272727` hairline; floating menus and the
sticky nav are the only elements permitted a drop shadow (`--shadow-float`). Padding is 24px
on media tiles, 28px default, 32px on plan cards.

**Corners.** Every interactive control is a full pill (`999px`) — buttons, tabs, badges,
composer, announcement bar. The only non-pill control is the text input at 8px. Containers
step 12 / 16 / 20 / 24px. Avatars and icon buttons are perfect circles.

**Borders.** Hairlines only, 1px, `#272727`. They divide sections, separate stat columns, and
outline recessed panels. Never coloured, never thicker than 1px, never a left-accent bar.

**Shadows.** Effectively absent. `--shadow-float` (`0 8px 32px rgba(0,0,0,.6)`) exists for
dropdown menus; `--shadow-modal` for dialogs. Nothing else casts.

**Transparency and blur.** Used once: the sticky header sits on `rgba(10,10,10,.82)` with a
20px saturated backdrop blur. Everything else is opaque. Protection over imagery is a bottom
scrim gradient (`--scrim-bottom`), never a translucent capsule behind the label.

**Animation.** Fast and flat. 140ms on controls, 220ms on surfaces, easing
`cubic-bezier(.2,0,0,1)`. Transitions are colour and opacity; entrances are a short fade with
a few pixels of upward travel. **No bounce, no spring, no scale-in.** Loading is a grey word
("Thinking", "Typing…") next to an avatar, not a spinner.

**Hover.** A single value step lighter — `#1a1a1a → #202020`, grey text → white, white fill →
`#c9c9c9`. Never a glow, never a lift, never a border appearing.

**Press.** `transform: scale(0.985)` over 80ms. No colour change beyond the hover state.

**Focus.** A 2px white outline at 55% opacity, offset 2px. Inputs additionally brighten their
hairline from `#272727` to `#303030` — no glow ring, no accent colour.

**Layout.** 1264px max content column, 28px gutters, 128px between marketing sections, 64px
sticky header. The header is the only fixed element. Grids are 3-up for products, 4-up for
news, 2-up for comparison cards. Content is left-aligned except the hero and the
"Choose how to get started" heading, which centre.

---

## Iconography

**Stroke icons, ~1.5–2px, round caps, 24px grid, monochrome, inherited from text colour.**
Icons are small and functional — they never carry colour, never sit in a coloured tile, and
never appear at display size. Typical size is 16px inline, 13–15px inside pills, 20px for
standalone affordances.

The recurring set is small: `chevron-down` (nav disclosure), `chevron-right` (headline and
button affordance), `arrow-right` ("Explore →"), `arrow-up` (send), `check` (plan feature
lists), `search`, `plus`, `mic`, `copy`, `monitor`, `play`.

**Substitution flagged:** the real site uses an unpublished in-house stroke set. This system
loads **Lucide** per-glyph from `https://unpkg.com/lucide-static@0.544.0/icons/<name>.svg` and
tints it with a CSS mask, so `currentColor` works. Lucide matches on weight, cap style and
grid; swap the `CDN` constant in `components/core/Icon.jsx` if the real set becomes available.

**No emoji, ever.** Where the site needs a non-alphabetic mark it uses a typographic
character: `·` `—` `→` `›` `◆`. Unicode geometry (`◆` before a thought line in Grok Build) is
used sparingly inside code/agent surfaces only.

**Illustration.** Bot identity marks are flat two-tone discs — a saturated ground with a
simple white silhouette. No gradients, no photos, no 3D. `BotAvatar` reproduces the pattern;
the real artwork is not redistributable.

**Logo:** none ships. See `assets/README.md`.

---

## Type substitution

The live site self-hosts a proprietary neo-grotesque whose binaries are not redistributable.
This system substitutes **Geist** and **Geist Mono** (Google Fonts) — the closest public match
on skeleton, straight-tailed `y`, single-storey `g`, and default tracking. `tokens/fonts.css`
carries the `@import`; replace that file with local `@font-face` rules if the real files
become available. **This is a substitution, not the real typeface — please send the font
files if you have them.**

---

## Index

| Path | What's there |
|---|---|
| `styles.css` | Entry point — `@import` list only |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `radius` · `elevation` · `motion` · `base` |
| `components/` | React primitives, grouped by concern (below) |
| `guidelines/` | 21 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/website/` | Marketing homepage recreation |
| `ui_kits/grok-bot/` | Grok Bot desktop app recreation |
| `assets/` | Notes on the missing logo, imagery and icon set |
| `SKILL.md` | Agent Skills entry point |

### Components

**`components/core/`** — `Button`, `SplitButton`, `IconButton`, `Badge`, `AnnouncementPill`,
`Card`, `Tabs`, `Input`, `Icon`, `GradientRule` (and `SpectrumWord`).

**`components/navigation/`** — `NavBar` (and `Wordmark`), `SiteFooter`.

**`components/marketing/`** — `SectionHeading`, `StatBlock`, `NewsCard`, `FeatureCard`,
`PlanCard`, `CodeBlock`.

**`components/chat/`** — `BotAvatar`, `ChatBubble` (and `SystemNote`, `ThinkingRow`),
`ThreadListItem`, `Composer`.

Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when, plus a
usage example). Each directory carries one `@dsCard` HTML showing its variants.

### Intentional additions

Two components have no direct named counterpart in the source and were added to make the rest
usable:

- **`Icon`** — a wrapper over the substituted Lucide set, so every other component can take an
  icon by name and inherit colour.
- **`GradientRule` / `SpectrumWord`** — the hero underline is a brand motif rather than a
  named component on the site; packaging it stops it from being redrawn by hand each time.

### UI kits

- **Website** (`ui_kits/website/index.html`) — header, hero, three-up product grid, media
  grid, developer section with a working Python/TypeScript/cURL switcher, proof stats, news
  grid, get-started comparison, footer.
- **Grok Bot** (`ui_kits/grok-bot/index.html`) — two-pane desktop app; search filters the Bot
  roster, threads switch on click, the composer sends real messages.
