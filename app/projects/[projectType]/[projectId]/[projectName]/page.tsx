import React from "react";
import Button from "@mui/material/Button";
import { Contact } from "../../../../_components/Contact";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ProjectPageDetails from "../../../../_components/ProjectPageDetails";
import { Metadata } from "next";
import { getProject } from "../../../../_lib/projects";
import { notFound } from "next/navigation";

type Props = {
  params: { projectId: string; projectType: string; projectName: string };
};

export const revalidate = 30;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProject(params.projectType, params.projectId);

  return {
    title: project?.projectName ?? "Project",
    description:
      project?.projectDescription ??
      "Project details outlining the purpose behind the decision making",
    alternates: {
      canonical: `/projects/${params.projectType}/${params.projectId}/${params.projectName}`,
    },
  };
}

const ProjectPage = async ({ params }: { params: Props["params"] }) => {
  const project = await getProject(params.projectType, params.projectId);

  if (!project) notFound();

  return (
    <>
      <Button
        variant="inset"
        color="light"
        href="/#projects"
        startIcon={<NavigateBeforeIcon />}
        sx={{ mb: { xs: 3, md: 0 }, ml: 3, mt: 3 }}
      >
        Home
      </Button>

      <ProjectPageDetails project={[project]} />
      <Contact />
    </>
  );
};

export default ProjectPage;
