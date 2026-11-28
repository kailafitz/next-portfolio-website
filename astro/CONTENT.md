# Content checklist (portfolio redesign)

Items you still need to supply or approve before treating the site as “final” for recruiters.

## Impact metrics (`src/data/landing.ts`)

- [ ] Approve or replace the three placeholder stats; set each `verified: true` when accurate.
- [ ] Remove or hide any metric that cannot be disclosed.

## Honahlee / workflow automation

- [ ] Add a Supabase row with `published: true`, `featured: true`, `featured_rank`, `value_proposition`, and `outcome` (production).
- [ ] Mirror the project in `src/data/personal.ts` or `professional.ts` for local dev.
- [ ] Add cover image at `public/project-{slug}/{slug}.png`.

## Location line

- [ ] Set `hero.showLocation: true` when “Irish roots · Currently in NYC” is still accurate.

## Featured project order

- [ ] Set `featured` + `featured_rank` on up to four projects (local data and Supabase).

## Case studies (P1)

- [ ] Backfill optional fields on featured projects: problem, users, solution, contribution, architecture, tradeoffs, outcomes.

## Out of scope (P2)

- Playground, interactive diagrams, “Ask my portfolio” AI, journal — not in this launch.