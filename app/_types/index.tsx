export type TechStackProps = {
  src: string;
  alt: string;
};

export type ProjectDetailSection = {
  sectionTitle: string;
  sectionDetails: string;
};

export type ProjectType = {
  projectId: string;
  projectName: string;
  projectDescription: string;
  year: string;
  techStack: TechStackProps[];
  projectURL: string;
  githubURL: string;
  projectDetails: ProjectDetailSection[];
};

export type ProfessionalProjectType = {
  projectId: string;
  projectName: string;
  companyName: string;
  industry: string;
  projectDescription: string;
  year: string;
  techStack: TechStackProps[];
  projectURL: string;
  githubURL: string;
  projectDetails: ProjectDetailSection[];
};
