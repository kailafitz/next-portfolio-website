## Portfolio website

Astro and Tailwind. The site lives in `astro`.

```bash
cd astro
npm install
npm run dev
```

### Vercel

In project settings, set **Root Directory** to `astro`. Leave **Build Command** as `npm run build` (or use the `vercel.json` in that folder). **Output Directory** is `dist`. Use **Node.js 24.x** (Astro 7 requires at least 22.23.4).

Keep **Include source files outside of the Root Directory** enabled so `../public` assets are available at build time. Add environment variables in the dashboard (type **Config** for `NEXT_PUBLIC_*` keys).

### Project data (local vs production)

| Environment | Source |
|---------------|--------|
| `npm run dev` | [`astro/src/data/personal.ts`](astro/src/data/personal.ts) and [`professional.ts`](astro/src/data/professional.ts) only |
| `npm run build` (Vercel / production) | Supabase `public.projects` only — build **fails** if env or data is missing |

1. Run migrations in `supabase/migrations/` on your Supabase project.
2. Set **repo root** `.env` (and Vercel env) for production builds:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
   ```

3. Astro loads env from the parent directory (`envDir: ".."` in `astro/astro.config.mjs`).
4. Edit Supabase rows: `slug`, `role`, `published`, `sort_order`, `featured`, `featured_rank`, `value_proposition`, `outcome`, `case_study`, JSON `tech_stack` (string array), `details`. Case study URLs: `/projects/{kind}/{slug}`. Screenshots: `public/project-{slug}/{slug}.png`. Keep local TS files in sync for dev.

RLS allows public **select** on published rows only. Use the **publishable** key—not `service_role`.
