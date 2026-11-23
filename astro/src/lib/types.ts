export type StackLogo = {
  src: string;
  alt: string;
};

export type ProjectDetail = {
  sectionTitle: string;
  sectionDetails: string;
};

export type Project = {
  projectId: string;
  projectName: string;
  companyName?: string;
  industry?: string;
  purpose?: string;
  projectDescription: string;
  year: string;
  techStack: StackLogo[];
  projectUrl: string;
  githubUrl: string;
  projectDetails: ProjectDetail[];
};

export type ProjectKind = "personal" | "professional";
