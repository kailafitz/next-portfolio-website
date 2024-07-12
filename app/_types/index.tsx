import { AlertColor } from "@mui/material/Alert";
import { ReactNode } from "react";

export type StackLogo = {
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
  techStack: StackLogo[];
  projectURL: string;
  githubURL: string;
  projectDetails: ProjectDetailSection[];
}

export interface Header {
  link: string;
  label: string;
  subtitle?: string | undefined;
}

export interface Consent {
  test: React.Dispatch<React.SetStateAction<string>>;
}

export interface FeedbackSnackbar {
  show: string;
  message: ReactNode;
  type: AlertColor;
}

// export interface ProfessionalProjectType extends ProjectType {
//   companyName: string;
//   industry: string;
//   purpose: string;
// }
