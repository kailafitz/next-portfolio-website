import { AlertColor } from "@mui/material/Alert";
import { ReactNode } from "react";

export interface IProject {
  projectId: string;
  projectName: string;
  companyName?: string;
  industry?: string;
  purpose?: string;
  projectDescription: string;
  year: string;
  techStack: IStackLogo[];
  projectUrl: string;
  githubUrl: string;
  projectDetails: IProjectPageDetail[];
}

// export interface IProjectProfessional extends IProject {
//   companyName?: string;
//   industry?: string;
//   purpose?: string;
// }

export type IStackLogo = {
  src: string;
  alt: string;
};

export interface IProjectPageTopDetails {
  projectId: string;
  projectName: string;
  techStack: IStackLogo[];
  githubUrl: string;
  projectUrl: string;
}

export interface IProjectPageDetail {
  sectionTitle: string;
  sectionDetails: string;
}

export interface IHeadingLinkSpan {
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
