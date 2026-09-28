# OTO Motors — working context

Living notes for this project. Read this at the start of any OTO Motors session; append to it after any meaningful change (ticket started/finished, decision made, blocker hit, PR opened). Keep entries short and dated.

## Project

Rebuild of exoticautoleasing.com → **OTO Motors** brand. Two people, two tracks, one shared data contract. Rules doc (read first): Notion "00 · 📖 READ FIRST — OTO Motors build rules" — https://app.notion.com/p/3e88280c1b1d81a681c8e2b731f42e0f

- **Munis (me)** — Public site track. Owns everything a visitor sees.
  - Folders: `app/(site)/**`, `components/site/**`, `app/sitemap.ts`, `app/robots.ts`, `lib/seo/**`, `public/assets/**`
  - Branch prefix: `site/` e.g. `site/B-1-model-grid`
  - Never touch Sardor's files. If a ticket needs one, stop and comment on the ticket — don't edit it.
- **Sardor** — Admin & data track. Owns everything behind login + the database.
  - Folders: `app/(admin)/**`, `components/admin/**`, `app/api/build-deal/route.ts`, `app/api/admin/**`, `lib/db/**`, `lib/schemas/**`, `supabase/migrations/**`, `middleware.ts`
  - Branch prefix: `admin/`

**Shared data contract**: Sardor owns `lib/db/cars.ts` and `lib/db/brands.ts` (types `Car`, `Brand`, and getters `getCarsByBrand`, `getAllCars`, `getFeaturedCars`, `getCar`, `getBrands`, `getBrand`). Munis imports only, never edits. Ships day 1 of Sprint 1 (ticket D-2A).

**Working agreement**
1. One ticket = one branch = one PR, branch named with prefix + ticket Ref.
2. Don't start a ticket that's blocked (check "Depends On").
3. Don't decide anything not written in the ticket — ask in ticket comments (or Slack per Sep 28 kickoff) instead of guessing.
4. Test acceptance criteria yourself before requesting review.
5. Never edit files outside your track.
6. Reference screenshots are layout references only — structure/spacing, not colors/fonts (OTO's own colors/fonts are in each ticket).
7. Deepika reviews visual result, Temur reviews copy/behavior.
8. Any visual thing not spec'd in the ticket needs **Abubeckr's approval before writing code** — find a reference (Mobbin/live site/screenshot), post it in the ticket with one line on what you want to try, wait for approval. Once built, record a short screen video and post it **in Slack (#all-appflow-studio), not on the Notion ticket**, then ask for review. Static screenshots aren't enough for anything that moves.
9. Post a done/doing/blocked update in #all-appflow-studio every 2 days.

**Sprints** (Sep 28 → Nov 13):
- Sprint 0 (Sep 28–Oct 2): Stop the bleeding — indexable/reachable, leads stop being lost
- Sprint 1 (Oct 5–16): Data layer + leads inbox
- Sprint 2 (Oct 19–30): Car management + conversion
- Sprint 3 (Nov 2–13): Model pages, filters, polish

## My ticket list (M01 → M19, in order)

| Ticket | Ref | Title | Sprint window | Depends on |
|---|---|---|---|---|
| M01 | E-1 | Point the whole site at the real domain and add canonical tags | Sep 28–Oct 2 | E-2: Temur must name canonical domain. If undecided by Sep 30 → use www.exoticautoleasing.com |
| M02 | A-1 | Restyle the inquiry form — remove labels, fix crowding (pairs with S03) | Sep 28–Oct 2 | Must ship in same deploy as Sardor's A-2 |
| M03 | A-8/E-5 | Put a phone number and email on the site | Sep 28–Oct 2 | Temur must post the phone number and email in the ticket comments first |
| M04 | E-4 | Give every page its own meta description | Sep 28–Oct 2 | E-1 (can do in same PR) |
| M05 | E-3 | Compress the 16 MB homepage hero video | Sep 28–Oct 2 | none |
| M06 | B-2/B-3 | Fix the brand page scroll bugs | Oct 5–16 | none |
| M07 | C-2 | Clean up the showroom sidebar | Oct 5–16 | none |
| M08 | A-3 | Put the inquiry form in the footer of every page | Oct 5–16 | A-1 and A-2 merged first |
| M09 | A-4 | Add a Contact Us button to every car card | Oct 5–16 | none |
| M10 | B-1 | Replace the carousel with a 3×3 model grid | Oct 19–30 | D-2A contract, A-4; DEC-1 Q2 must be answered before rendering any price |
| M11 | A-5 | Car-aware popup inquiry form | Oct 19–30 | A-4, A-2, D-2A |
| M12 | B-4 | Brand tiles: logo + name instead of car silhouettes | Oct 19–30 | D-2A |
| M13 | C-3 | Frosted navbar | Oct 19–30 | DEC-1 Q3 — Temur names menu version; Deepika supplies design |
| M14 | C-4 | Build the Locations page | Oct 19–30 | E-1 merged (else no SEO value); Deepika supplies design |
| M15 | A-6 | Model product pages at /[brand]/[model] | Nov 2–13 | D-2B, A-5 |
| M16 | C-5 | Showroom filters + everyday-car segment | Nov 2–13 | D-5, D-2B |
| M17 | C-7 | Homepage featured row from the database | Nov 2–13 | D-2B |
| M18 | E-10 | Conversion analytics | Nov 2–13 | A-5 |
| M19 | B-6/E-8 | Image and font performance pass | Nov 2–13 | D-2B |

Notion board (all tickets, "OTO — Build order" view): https://app.notion.com/p/37a8280c1b1d80548958d0dfb4bba959?v=3e88280c1b1d8148895f000c19915df8

## Slack log (#all-appflow-studio)

- **2026-09-28 00:53 (abubeckr)** — Kickoff: OTO Motors starts today. Read ticket 00 first. Munis = M01→M19 public site, Sardor = S01→S16 admin/data. Work numbers in order, don't touch the other's folders. **M02 and S03 must deploy together** or lead capture breaks — coordinate with Sardor. Post done/doing/blocked every 2 days.
- **2026-09-28 14:11 (Munis)** — Acked, starting today.
- **2026-09-28 14:15 (Munis)** — Asked abubeckr for design + GitHub repo access.
- **2026-09-28 16:31 (abubeckr)** — Reply: **no separate design exists** — the site is already designed; look at the current live site and stay on-theme when fixing/building. Very important to stick to the current theme. Temur will give GitHub access.
- **2026-09-28 16:48 (abubeckr)** — Posted a TikTok link as reference/helpful context (thread on kickoff message).
- **2026-09-28 18:36 (Sardor)** — Asked Temur to create/give access to the `oto-motors-web` Supabase project per S01.
- **2026-09-28 19:00 (Temur)** — Posted Supabase dashboard link; said "done" (thread, 1 reply).
- **2026-09-28 19:13 (Temur)** — Posted GitHub PR #10 link, asked izzy to fix merge conflicts and reopen (unrelated to OTO, different workstream — heads up only).
- **2026-09-28 21:44 (Munis)** — Asked Temur for repo access (not yet confirmed granted as of last read).
- **2026-09-28 22:01 (Bilal)** — Posted a Google Meet link, tagging izzy and abubeckr (unrelated to OTO).

## Decisions / open questions to watch

- **E-2 (canonical domain)**: not yet decided by Temur as of Sep 28. Default to `www.exoticautoleasing.com` if undecided by Sep 30 — affects M01, M04.
- **M03 blocked**: waiting on Temur to post phone number + email in the ticket comments.
- **DEC-1 Q2** (pricing display rule) and **Q3** (menu version) — not yet answered, block M10 and M13 respectively.
- No Figma/design file exists for OTO — build against the live site's current theme, per abubeckr Sep 28.
- GitHub repo access: requested by Munis 21:44 Sep 28, pending confirmation.
- **C-2 / M07 open question**: no interactive "office selector" exists anywhere in the codebase for the showroom page (`ShowroomModel` has no office/location field), so the ticket's "move the office selector into the sidebar" was interpreted as moving the existing static "NEW YORK / FLORIDA" text line, not building new filter functionality. Flagged in the ticket comment in case an actual selector was intended.

## Changelog

- **2026-09-28** — Read Slack kickoff + Notion "READ FIRST" ticket + full M01–M19 ticket list. Created this context file.
- **2026-09-28** — Checked M01 (E-1): blocked on E-2 (canonical domain), Temur hasn't answered DEC-1 yet, fallback date (Sep 30) hasn't arrived. Decided with the user to hold M01 and do M05 first since it has zero dependencies.
- **2026-09-28** — **M05 (E-3, "Compress the 16 MB homepage hero video") — in progress, one AC blocked.**
  - Set Notion status → In progress.
  - Re-encoded `public/assets/homepage-hero.mp4` with the ticket's exact ffmpeg command → 1.70 MB (was 16 MB). Generated `public/assets/homepage-hero.webm` (VP9) → 1.37 MB.
  - `content/home.ts`: `hero.video.src` → `hero.video.sources: [{webm}, {mp4}]`.
  - `components/home/HomeHero.tsx`: video now renders literal `<source>` children instead of `data-src`; `preload="metadata"` → `"none"`.
  - `lib/effects/home-motion.ts`: removed the old `ensureSrc()`/`data-src` dance (sources are static now); **fixed a real bug** — the old code called `ensureSrc()` unconditionally, which force-loaded the video even under `prefers-reduced-motion: reduce`; added a `<768px` viewport gate (no video load on mobile, poster only); deferred video playback + scroll-listener setup behind `requestIdleCallback`/`setTimeout(2000)` per the ticket's snippet.
  - Verified with Playwright against a `next build && next start` production server (installed `playwright` and `ffmpeg` via Homebrew/npm — not committed, local tooling only): 390px + Fast-4G throttle → **zero** `.mp4`/`.webm` requests, 1.3 MB total transfer; `prefers-reduced-motion: reduce` → zero video requests; desktop → hero still autoplays and `--hero-blur` still updates on scroll (scrub intact).
  - **Lighthouse mobile LCP acceptance criterion (target <2.5s) currently fails at 6.2s** — but I isolated this: reverted to the unmodified `main` build (16 MB video, `preload=metadata`) and got the *same* 6.2s LCP. The LCP element is the hero `<p>` text, not the video/image, and its render delay traces back to JS hydration / the entrance animation gating opacity — unrelated to this ticket's file scope. Did not touch it (not written in the ticket; flagged instead per the "don't guess/improve" rule).
  - Posted full findings + a side-by-side old-vs-new frame comparison image as a comment on the M05 ticket in Notion, explicitly flagging the LCP blocker and asking whether it's a separate ticket or in scope here.
  - Left Notion status at **In progress** — not marking Done while one acceptance criterion is open, even though it's not fixable within this ticket's scope.
  - **User reviewed and said mark it Done** — committed on branch `site/E-3-compress-hero-video` (2 commits: content/effects changes, then CONTEXT.md separately on `munis-dev`). Notion status → Done. PR still not opened (no GitHub access yet).
- **2026-09-28** — **A-1 (M02, "Restyle the inquiry form") — in progress, one AC blocked on cross-track coordination.**
  - Set Notion status → In progress. Branch: `site/A-1-inquiry-form-restyle`.
  - `components/InquiryForm.tsx`: removed all visible `<label>` elements (both `compact` and full variants) — replaced with `aria-label` on every input/select. Placeholder text standardized to the ticket's exact spec ("Your name", "The car you have in mind", "Phone", "Delivery city & state"). Removed the email field entirely (name stays required, per spec). Did **not** open `app/api/build-deal/route.ts` (Sardor's file).
  - `components/address-autocomplete.tsx`: added an `ariaLabel` prop (needed it for the label-less `InquiryForm` usage).
  - `components/views/ShowroomView.tsx`: removed the visible label on the "Find a model" filter input only (`#search`) — left Marque/Body style labels untouched, out of scope per the ticket.
  - **Found and fixed two real layout bugs** caused by removing `<label>`: (1) all fields in the full form lost their inter-field spacing, because it came from `label`'s `margin-bottom: 30px` in `editorial.css`, not the fieldset; (2) the `.field-pair` mobile stack (≤700px) had its two fields touching with **zero gap** for the same reason. Caught both via Playwright screenshots + computed-style checks, not just by eyeballing. Fixed with scoped rules in `oto.css`.
  - Verified: `aria-label` accessible names correct on all 7 fields × 2 form variants (script-checked, not assumed), zero email fields anywhere, visible focus ring on every field via keyboard tab, no focus-outline/field overlap at 375px or 1440px.
  - **Can't be marked Done**: the ticket's own last acceptance criterion is "merged together with Sardor's A-2, verified by a live test submission after deploy" — genuinely blocked until GitHub access lands and Sardor's A-2 branch exists. Posted full findings as a Notion comment; left status at In progress (this is a difference from M05 — that ticket's remaining gap was a pre-existing site issue outside scope; this one is a real coordination dependency the ticket itself requires before Done is accurate).
  - **Next**: still waiting on GitHub repo access from Temur. Once it lands: push both branches, agree merge order with Sardor, deploy, live-test the form submission, then flip A-1 to Done.
- **2026-09-28** — **C-2 (M07, "Clean up the showroom sidebar") — in progress, Deepika sign-off pending.**
  - Set Notion status → In progress. Branch: `site/C-2-showroom-sidebar-cleanup` (branched fresh off `munis-dev`, not stacked on A-1, since each ticket = its own branch/PR).
  - `components/views/ShowroomView.tsx`: deleted the "Explore the cars..." intro paragraph; moved the static "NEW YORK / FLORIDA" line into `filter-body` as the first item (see open question above — no real selector existed to move); renamed "Reset filters ↺" → plain-text "Clear"; changed the accordion's +/× toggle to a dedicated chevron (⌄/⌃) so it's visually distinct from Clear — that rotating +/× was almost certainly what Abubeckr clicked expecting a clear action.
  - **Caught and fixed a real regression before it shipped**: moving the office line to be the sidebar's first child silently broke the mobile `grid-column:1/-1` rule that targeted "Find a model" via `:first-child` (no longer first-child once office line was inserted). Found via computed-style check, not just eyeballing a screenshot — both elements now explicitly span full width on mobile again.
  - Verified: Clear button live-tested (10 → 1 → 10 models), screenshotted and confirmed at 390/768/1280px, counter and Sort untouched.
  - Posted findings + a 3-viewport comparison screenshot as a Notion comment, explicitly flagging the office-selector interpretation as something to confirm.
  - **Can't be Done**: acceptance criteria explicitly requires Deepika's spacing sign-off — left status at In progress.
  - **Next**: waiting on Deepika's review + confirmation on the office-selector interpretation, and still waiting on GitHub access to push any branch.
