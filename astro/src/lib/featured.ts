import type { Project } from "./types";

export type FeaturedProject = {
  project: Project;
  bentoClass: string;
};

const bentoPatterns = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

/** Featured work: `featured` + `featured_rank` on each project (same rule local + production). */
export function resolveFeaturedProjects(
  personal: Project[],
  professional: Project[],
): FeaturedProject[] {
  return [...professional, ...personal]
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999))
    .slice(0, 4)
  .map((project, index) => ({
      project,
      bentoClass: bentoPatterns[index % bentoPatterns.length] ?? "",
    }));
}