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
