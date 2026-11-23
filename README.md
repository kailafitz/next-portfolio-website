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
