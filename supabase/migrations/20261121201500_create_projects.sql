-- Portfolio projects. Edit rows in the Supabase table editor.
-- tech_stack: [{"src":"react.png","alt":"React"}]
-- details: [{"sectionTitle":"Background","sectionDetails":"..."}]
-- Images stay in /public/project-{legacy_id}/.

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  legacy_id text not null,
  kind text not null check (kind in ('personal', 'professional')),
  name text not null,
  company_name text,
  industry text,
  purpose text,
  description text not null,
  year text not null,
  tech_stack jsonb not null default '[]'::jsonb,
  project_url text not null default '',
  github_url text not null default '',
  details jsonb not null default '[]'::jsonb,
  sort_order integer not null default 0,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint projects_kind_legacy_id_key unique (kind, legacy_id)
);

create index projects_public_listing_idx
  on public.projects (kind, sort_order)
  where published;

create or replace function public.set_projects_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = pg_catalog.now();
  return new;
end;
$$;

create trigger projects_set_updated_at
  before update on public.projects
  for each row
  execute function public.set_projects_updated_at();

alter table public.projects enable row level security;

create policy "Published projects are publicly readable"
  on public.projects
  for select
  to anon, authenticated
  using (published = true);

revoke all on table public.projects from anon, authenticated;
grant select on table public.projects to anon, authenticated;
grant all on table public.projects to service_role;

insert into public.projects (
  legacy_id, kind, name, company_name, industry, purpose, description, year,
  tech_stack, project_url, github_url, details, sort_order
) values
(
  '3',
  'personal',
  'The Cocktail Club',
  null,
  null,
  null,
  'A virtual space for the art of mixology.',
  '2024',
  '[{"src":"react.png","alt":"React"},{"src":"node.png","alt":"Node"},{"src":"ts.webp","alt":"TypeScript"},{"src":"mui.png","alt":"Material UI"},{"src":"postgresql.png","alt":"PostgreSQL"},{"src":"react-hook-form.png","alt":"React Hook Form"},{"src":"passport.png","alt":"Passport"},{"src":"aws.png","alt":"Amazon S3"},{"src":"firebase.png","alt":"Firebase"}]'::jsonb,
  'https://the-cocktail-club-co-657c5.web.app/',
  'https://github.com/kailafitz/the-cocktail-club',
  $json$[{"sectionTitle":"Background","sectionDetails":"I actually started this project back in January 2023 and I thought it would be useful to not update everything to the latest technologies. Even though frameworks such as Next.js has revolutionised routing and data fetching in the frontend, I still felt it necessary to remind myself of the coding practises of libraries such as React-Router, React-Query and React-Hook-Form in 2024 given how it will take time for many companies to adjust to the ever changing landscape that is frontend development!."},{"sectionTitle":"The Spec","sectionDetails":"I wanted to dig a little deeper into the Node.js environment so I chose to couple an Express.js backend with my CRA frontend. I also wanted to elevate from a localised SQLite database to a hosted PostgreSQL database which was a nice learning curve and step up from my project Lancer."}]$json$::jsonb,
  1
),
(
  '1',
  'personal',
  'Lancer',
  null,
  null,
  null,
  'A web app for freelancers to help keep track of employment records for invoicing and tax. My final project for CS50x, an online introductory course to computer science taught at Harvard University.',
  '2022',
  '[{"src":"react.png","alt":"React"},{"src":"flask.png","alt":"Flask"},{"src":"python.png","alt":"Python"},{"src":"sqlite.png","alt":"SQLite3"},{"src":"bootstrap.png","alt":"Bootstrap"}]'::jsonb,
  'https://kailafitz.pythonanywhere.com',
  'https://github.com/kailafitz/lancer',
  $json$[{"sectionTitle":"Background","sectionDetails":"I wanted to incorporate a lot of my learnings from the CS50x course into this final project. Using Python and flask was a good starting point that we had been introduced to and it enabled me to implement my idea. Combining this backend setup with my React frontend background became a great stack to go ahead and build Lancer."},{"sectionTitle":"The Spec","sectionDetails":"Lancer is a filing system for freelancers so they may keep track of invoices and tax records. A login system is in place so that users may keep a personal account of their individual records. Employers and job details can be inputted into the system and a mini dashboard is also available for an overview of the income earned and the tax due on an annual basis.This project is roughly based on the Irish income tax brackets."}]$json$::jsonb,
  2
),
(
  '4',
  'professional',
  'The Eileen Fitzgerald School of Speech and Drama',
  'The Eileen Fitzgerald School of Speech and Drama',
  'Arts & Media',
  'Digital Presence',
  'Corporate website for a Speech and Drama school based in Clare.',
  '2020',
  '[{"src":"react.png","alt":"React"},{"src":"ts.webp","alt":"TypeScript"},{"src":"shadcn.png","alt":"shadcn/ui"},{"src":"tailwindcss.png","alt":"TailwindCSS"},{"src":"next.png","alt":"NextJS"},{"src":"framer.png","alt":"Framer"}]'::jsonb,
  'https://eileenfitzgerald-school.com',
  'https://github.com/kailafitz/eileen-fitzgerald-school',
  $json$[{"sectionTitle":"Background","sectionDetails":"The Eileen Fitzgerald School of Speech and Drama is a performance school in County Clare, Ireland. The purpose of the website was to establish a 'home' on the internet, a digital presence that would allow them to highlight the details of the running of the school as well as the programmes on offer."},{"sectionTitle":"The Spec","sectionDetails":"Client wanted a dramatic website to go with the theme of a stage and performance. A dark background was important for the client and although it goes against UX principal, I enhanced the brand purple colour to make it stand as best I could."}]$json$::jsonb,
  1
),
(
  '2',
  'professional',
  'Pure Divilment Pictures',
  'Pure Divilment Pictures',
  'Arts & Media',
  'Digital Presence',
  'Corporate website for a production company based in Dublin.',
  '2023',
  '[{"src":"react.png","alt":"React"},{"src":"ts.webp","alt":"TypeScript"},{"src":"mui.png","alt":"MaterialUI"},{"src":"firebase.png","alt":"Firebase"}]'::jsonb,
  'https://puredivilmentpictures.com',
  'https://github.com/kailafitz/pure-divilment-pictures',
  $json$[{"sectionTitle":"Background","sectionDetails":"Pure Divilment Pictures is a female-lead production company in Ireland. The purpose of the website was to establish a 'home' on the internet, a digital presence that would allow them top showcase their company but their work as they continue to grow."},{"sectionTitle":"The Spec","sectionDetails":"Client wanted a clean and minimalist B&W website with visuals bringing the website to life. This really highlights the work carried out by the company. The website was to be made with no fuss or clutter, whilst providing relevant and necessary information about various aspects of the company and its employees and services."}]$json$::jsonb,
  2
);
