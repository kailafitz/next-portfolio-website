import React from "react";
import { ProjectType } from "../../../../_types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  PersonalProjectData,
  ProfessionalProjectData,
} from "../../../../_data";
import Image from "next/image";
import { Contact } from "../../../../_components/Contact";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ProjectDetails from "../../../../_components/ProjectDetails";
import { Metadata } from "next";

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

  const Project: ProjectType[] = data.filter((project) => {
    return project.projectId === id;
  });

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
      <ProjectDetails project={Project} />
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
              alt={`${Project[0]?.projectName} image`}
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
