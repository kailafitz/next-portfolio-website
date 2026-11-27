-- Portfolio project content (production source of truth for `astro build`).

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  kind text not null check (kind in ('personal', 'professional')),
  name text not null,
  company_name text,
  industry text,
  purpose text,
  description text not null,
  year text not null,
  tech_stack jsonb not null default '[]'::jsonb,
  project_url text,
  github_url text,
  details jsonb not null default '[]'::jsonb,
  case_study jsonb,
  role text,
  value_proposition text,
  outcome text,
  featured boolean not null default false,
  featured_rank int,
  published boolean not null default false,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index projects_kind_published_sort_idx
  on public.projects (kind, published, sort_order);

alter table public.projects enable row level security;

create policy "Public read published projects"
  on public.projects
  for select
  to anon, authenticated
  using (published = true);