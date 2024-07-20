import { AlertColor } from "@mui/material/Alert";
import { ReactNode } from "react";

export type IStackLogo = {
  src: string;
  alt: string;
};

export interface IProjectDetailSection {
  sectionTitle: string;
  sectionDetails: string;
}

export interface IProjectTopDetails {
  projectId: string;
  projectName: string;
  techStack: IStackLogo[];
  githubURL: string;
  projectURL: string;
}

export interface IProjectType {
  projectId: string;
  projectName: string;
  companyName?: string;
  industry?: string;
  purpose?: string;
  projectDescription: string;
  year: string;
  techStack: IStackLogo[];
  projectURL: string;
  githubURL: string;
  projectDetails: IProjectDetailSection[];
}

export interface ILinkSpan {
  link: string;
  label: string;
}

export interface ISectionContainer {
  id?: string;
  pt?: boolean;
  pb?: boolean;
  mb?: boolean;
  vh?: boolean;
  sx?: object;
  children: ReactNode;
}
export interface IConsent {
  sendFeedbackBoolean: React.Dispatch<React.SetStateAction<string>>;
}

export interface IFeedbackSnackbar {
  show: boolean;
  message: ReactNode;
  type: AlertColor;
}

// export interface ProfessionalProjectType extends ProjectType {
//   companyName: string;
//   industry: string;
//   purpose: string;
// }
