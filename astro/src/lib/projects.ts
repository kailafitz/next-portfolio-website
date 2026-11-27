import { createClient } from "@supabase/supabase-js";
import { env } from "./env";
import { usesLocalProjectData } from "./projectSource";
import { PersonalProjectData } from "../data/personal";
import { ProfessionalProjectData } from "../data/professional";
import type { CaseStudyFields, Project, ProjectKind } from "./types";

export { usesLocalProjectData } from "./projectSource";

type ProjectRow = {
  slug: string;
  kind: ProjectKind;
  name: string;
  company_name: string | null;
  industry: string | null;
  purpose: string | null;
  description: string;
  year: string;
  tech_stack: string[] | null;
  project_url: string | null;
  github_url: string | null;
  details: Project["projectDetails"] | null;
  case_study: CaseStudyFields | null;
  featured: boolean | null;
  featured_rank: number | null;
  role: string | null;
  value_proposition: string | null;
  outcome: string | null;
};

function techTags(raw: string[] | null): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((t) => t.trim()).filter(Boolean);
}

export function projectKind(project: Project): ProjectKind {
  return project.companyName ? "professional" : "personal";
}

export function projectPath(project: Project) {
  return `/projects/${projectKind(project)}/${project.slug}`;
}

export function projectImageDir(project: Project) {
  return `/project-${project.slug}`;
}

export function projectCoverImage(project: Project) {
  return `${projectImageDir(project)}/${project.slug}.png`;
}

function localProjects(kind: ProjectKind): Project[] {
  return kind === "personal" ? PersonalProjectData : ProfessionalProjectData;
}

function normalizeSlug(slug: string, kind: ProjectKind): string {
  let normalized = slug.trim().replace(/^\/+/, "");
  const kindPrefix = `${kind}/`;
  if (normalized.startsWith(kindPrefix)) {
    normalized = normalized.slice(kindPrefix.length);
  }
  return normalized;
}

function mapRow(row: ProjectRow): Project {
  return {
    slug: normalizeSlug(row.slug, row.kind),
    projectName: row.name,
    companyName: row.company_name ?? undefined,
    industry: row.industry ?? undefined,
    purpose: row.purpose ?? undefined,
    projectDescription: row.description,
    year: row.year,
    techTags: techTags(row.tech_stack),
    projectUrl: row.project_url ?? "",
    githubUrl: row.github_url ?? "",
    projectDetails: row.details ?? [],
    caseStudy: row.case_study ?? undefined,
    featured: row.featured ?? false,
    featuredRank: row.featured_rank ?? undefined,
    role: row.role ?? undefined,
    valueProposition: row.value_proposition ?? undefined,
    outcome: row.outcome ?? undefined,
  };
}

const PROJECT_COLUMNS =
  "slug, kind, name, company_name, industry, purpose, description, year, tech_stack, project_url, github_url, details, case_study, featured, featured_rank, role, value_proposition, outcome";

function createSupabaseClient() {
  const url = env("NEXT_PUBLIC_SUPABASE_URL") || env("PUBLIC_SUPABASE_URL");
  const key =
    env("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") ||
    env("PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  if (!url || !key) return null;
  return createClient(url, key);
}

function assertProductionSupabaseConfigured(): never | void {
  const url = env("NEXT_PUBLIC_SUPABASE_URL") || env("PUBLIC_SUPABASE_URL");
  const key =
    env("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") ||
    env("PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  if (!url || !key) {
    throw new Error(
      "[projects] Production build requires NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in the repo root .env (or Vercel env). Local dev uses src/data/*.ts only.",
    );
  }
}

async function fetchFromSupabase(kind: ProjectKind): Promise<Project[]> {
  assertProductionSupabaseConfigured();
  const client = createSupabaseClient()!;

  const { data, error } = await client
    .from("projects")
    .select(PROJECT_COLUMNS)
    .eq("kind", kind)
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`[projects] Supabase error for kind=${kind}: ${error.message}`);
  }
  if (!data?.length) {
    throw new Error(
      `[projects] No published ${kind} projects in Supabase. Add rows or set published=true.`,
    );
  }
  return (data as ProjectRow[]).map(mapRow);
}

export async function getProjects(kind: ProjectKind): Promise<Project[]> {
  if (usesLocalProjectData()) {
    return localProjects(kind);
  }
  return fetchFromSupabase(kind);
}

export async function getAllProjects() {
  const [personal, professional] = await Promise.all([
    getProjects("personal"),
    getProjects("professional"),
  ]);
  return { personal, professional };
}