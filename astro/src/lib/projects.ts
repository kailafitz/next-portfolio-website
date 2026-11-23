import { createClient } from "@supabase/supabase-js";
import { env } from "./env";
import { PersonalProjectData } from "../data/personal";
import { ProfessionalProjectData } from "../data/professional";
import type { Project, ProjectKind, StackLogo } from "./types";

type ProjectRow = {
  legacy_id: string;
  kind: ProjectKind;
  name: string;
  company_name: string | null;
  industry: string | null;
  purpose: string | null;
  description: string;
  year: string;
  tech_stack: StackLogo[] | null;
  project_url: string | null;
  github_url: string | null;
  details: Project["projectDetails"] | null;
};

export function projectSlug(name: string) {
  return name.replace(/ /g, "-").toLowerCase();
}

export function projectKind(project: Project): ProjectKind {
  return project.companyName ? "professional" : "personal";
}

export function projectPath(project: Project) {
  return `/projects/${projectKind(project)}/${project.projectId}/${projectSlug(project.projectName)}`;
}

function fallback(kind: ProjectKind): Project[] {
  return kind === "personal" ? PersonalProjectData : ProfessionalProjectData;
}

function mapRow(row: ProjectRow): Project {
  return {
    projectId: row.legacy_id,
    projectName: row.name,
    companyName: row.company_name ?? undefined,
    industry: row.industry ?? undefined,
    purpose: row.purpose ?? undefined,
    projectDescription: row.description,
    year: row.year,
    techStack: row.tech_stack ?? [],
    projectUrl: row.project_url ?? "",
    githubUrl: row.github_url ?? "",
    projectDetails: row.details ?? [],
  };
}

function supabase() {
  const url = env("NEXT_PUBLIC_SUPABASE_URL") || env("PUBLIC_SUPABASE_URL");
  const key =
    env("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") ||
    env("PUBLIC_SUPABASE_PUBLISHABLE_KEY");
  if (!url || !key) return null;
  return createClient(url, key);
}

export async function getProjects(kind: ProjectKind): Promise<Project[]> {
  const client = supabase();
  if (!client) return fallback(kind);

  const { data, error } = await client
    .from("projects")
    .select(
      "legacy_id, kind, name, company_name, industry, purpose, description, year, tech_stack, project_url, github_url, details",
    )
    .eq("kind", kind)
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error || !data) return fallback(kind);
  return (data as ProjectRow[]).map(mapRow);
}

export async function getAllProjects() {
  const [personal, professional] = await Promise.all([
    getProjects("personal"),
    getProjects("professional"),
  ]);
  return { personal, professional };
}

export async function getShots(): Promise<string[]> {
  const token = env("DRIBBBLE_ACCESS_TOKEN");
  if (!token) return [];

  try {
    const response = await fetch(
      `https://api.dribbble.com/v2/user/shots?access_token=${token}`,
    );
    if (!response.ok) return [];
    const data: unknown = await response.json();
    if (!Array.isArray(data)) return [];
    return data
      .slice(0, 3)
      .map((shot) => shot?.images?.normal as string | undefined)
      .filter((src): src is string => Boolean(src));
  } catch {
    return [];
  }
}
