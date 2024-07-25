import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Contact } from "../../../../_components/Contact";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ProjectPageDetails from "../../../../_components/ProjectPageDetails";
import { Metadata } from "next";
import { IProject } from "../../../../_types";
import { ProfessionalProjectData } from "../../../../_data/ProfessionalProjects";
import { PersonalProjectData } from "../../../../_data/PersonalProjects";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Project",
};

const ProjectPage = ({
  params,
}: {
  params: { projectId: string; projectType: string };
}) => {
  let id = params.projectId;
  let data =
    params.projectType !== "personal"
      ? ProfessionalProjectData
      : PersonalProjectData;

  const selectedProject: IProject[] = data.filter((project) => {
    return project.projectId === id;
  });

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://mikhailafitzpatrick.com/projects/${params.projectType}/${params.projectId}/${selectedProject[0].projectName}}`}
          key="canonical"
        />
      </Head>
      <Button
        variant="inset"
        color="light"
        href="/#projects"
        startIcon={<NavigateBeforeIcon />}
        sx={{ mb: { xs: 3, md: 0 }, ml: 3, mt: 3 }}
      >
        Home
      </Button>

      <ProjectPageDetails project={selectedProject} />

      <Stack
        bgcolor="secondary.main"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
      >
        {[1, 2, 3, 4].map((img, i) => {
          return (
            <Image
              key={i}
              src={`/project-${id}/shot-${i + 1}.png`}
              alt={`${selectedProject[0]?.projectName} image`}
              width={300}
              height={100}
              className="project-gallery-image"
            />
          );
        })}
      </Stack>
      <Contact />
    </>
  );
};

export default ProjectPage;
