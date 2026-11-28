# Redesign acceptance checklist

## Implemented (P0 / P1)

- Editorial visual system: ivory, ink, vermillion, sage; Manrope / Inter / IBM Plex Mono
- Nav: **MF.** wordmark; Work, About, Contact
- Home order: Hero → Impact → Work → How I think → Behind the screen → Contact
- Hero copy and CTAs from `src/data/landing.ts`
- Impact section with **placeholder** metrics (`verified: false` + UI label)
- Featured work: unified bento grid, no tabs, no WIP label; Honahlee slot hidden until published
- Case study template: `caseStudy` fields + `resolveCaseStudySections`
- Reduced-motion respected for reveal animations (existing CSS)

## Validation

Run from `astro/`:

```bash
npm run build
```

## Assumptions

- Impact numbers are placeholders until you set `verified: true` in `landing.ts`
- Honahlee omitted until project row + local data mirror (`CONTENT.md`)
- `hero.showLocation` remains `false` until you confirm NYC copy
- Featured IDs: `3`, `2`, `4` (+ reserved Honahlee slot)

## Content still needed

See [CONTENT.md](./CONTENT.md).

## P2 (not built)

Playground, architecture diagrams, portfolio AI, journal.