export type ProjectDetail = {
  sectionTitle: string;
  sectionDetails: string;
};

/** Optional structured case study (when set, detail page prefers this order). */
export type CaseStudyFields = {
  problem?: string;
  users?: string;
  solution?: string;
  contribution?: string;
  architecture?: string;
  tradeoffs?: string;
  outcomes?: string;
};

export type Project = {
  /** Stable key for routes and /public/project-{slug}/ assets. */
  slug: string;
  projectName: string;
  companyName?: string;
  industry?: string;
  purpose?: string;
  projectDescription: string;
  year: string;
  /** Text labels for homepage / case study chips (Supabase `tech_stack` jsonb string array). */
  techTags: string[];
  projectUrl: string;
  githubUrl: string;
  projectDetails: ProjectDetail[];
  caseStudy?: CaseStudyFields;
  /** Homepage bento grid (local arrays + Supabase). */
  featured?: boolean;
  featuredRank?: number;
  /** Card copy — local data files or Supabase `value_proposition` / `outcome`. */
  valueProposition?: string;
  role?: string;
  outcome?: string;
};

export type ProjectKind = "personal" | "professional";