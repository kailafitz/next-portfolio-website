import type { CaseStudyFields, Project } from "./types";

const ORDER: { key: keyof CaseStudyFields; title: string }[] = [
  { key: "problem", title: "Problem" },
  { key: "users", title: "Target users" },
  { key: "solution", title: "Solution" },
  { key: "contribution", title: "My contribution" },
  { key: "architecture", title: "Architecture" },
  { key: "tradeoffs", title: "Trade-offs" },
  { key: "outcomes", title: "Outcomes" },
];

export type CaseStudyBlock = {
  sectionTitle: string;
  sectionDetails: string;
};

export function resolveCaseStudySections(project: Project): CaseStudyBlock[] {
  const cs = project.caseStudy;
  if (cs) {
    const structured = ORDER.filter(({ key }) => cs[key]?.trim()).map(({ key, title }) => ({
      sectionTitle: title,
      sectionDetails: cs[key]!,
    }));
    if (structured.length > 0) return structured;
  }
  return project.projectDetails;
}