export type TechStackProps = {
  src: string;
  alt: string;
};

export type ProjectType = {
  projectName: string;
  projectDescription: string;
  year: string;
  techStack: TechStackProps[];
  projectURL: string;
  githubURL: string;
};
