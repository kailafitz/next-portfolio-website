export type TechStackProps = {
  src: string;
  alt: string;
};

export interface ProjectDetailSection {
  sectionTitle: string;
  sectionDetails: string;
}

export interface ProjectType {
  projectId: string;
  projectName: string;
  companyName?: string;
  industry?: string;
  purpose?: string;
  projectDescription: string;
  year: string;
  techStack: TechStackProps[];
  projectURL: string;
  githubURL: string;
  projectDetails: ProjectDetailSection[];
}

// export interface ProfessionalProjectType extends ProjectType {
//   companyName: string;
//   industry: string;
//   purpose: string;
// }
