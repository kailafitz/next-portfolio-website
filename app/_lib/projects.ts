import { PersonalProjectData } from "../_data/PersonalProjects";
import { ProfessionalProjectData } from "../_data/ProfessionalProjects";
import { IProject, IProjectPageDetail, IStackLogo } from "../_types";
import { createSupabase } from "./supabase";

export type ProjectKind = "personal" | "professional";

type ProjectRow = {
  legacy_id: string;
  kind: ProjectKind;
  name: string;
  company_name: string | null;
  industry: string | null;
  purpose: string | null;
  description: string;
  year: string;
  tech_stack: IStackLogo[] | null;
  project_url: string | null;
  github_url: string | null;
  details: IProjectPageDetail[] | null;
};

function mapRow(row: ProjectRow): IProject {
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

function fallback(kind: ProjectKind): IProject[] {
  return kind === "personal" ? PersonalProjectData : ProfessionalProjectData;
}

export async function getProjects(kind: ProjectKind): Promise<IProject[]> {
  const supabase = createSupabase();
  if (!supabase) return fallback(kind);

  const { data, error } = await supabase
    .from("projects")
    .select(
      "legacy_id, kind, name, company_name, industry, purpose, description, year, tech_stack, project_url, github_url, details"
    )
    .eq("kind", kind)
    .eq("published", true)
    .order("sort_order", { ascending: true });

  if (error || !data) {
    console.error("Could not load projects from Supabase", error?.message);
    return fallback(kind);
  }

  return (data as ProjectRow[]).map(mapRow);
}

export async function getProject(
  kind: string,
  projectId: string
): Promise<IProject | null> {
  const resolvedKind: ProjectKind =
    kind === "professional" ? "professional" : "personal";
  const projects = await getProjects(resolvedKind);
  return projects.find((project) => project.projectId === projectId) ?? null;
}
