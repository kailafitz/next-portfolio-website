-- Align remote schema with astro/src/lib/projects.ts select list.

alter table public.projects
  add column if not exists case_study jsonb,
  add column if not exists featured boolean not null default false,
  add column if not exists featured_rank int;