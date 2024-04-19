import React from "react";
import Container from "@mui/material/Container";
import { ProjectData } from "../../_data";
import { Project } from "./Project";

export const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 14 }}>
      {ProjectData.map((project, i) => {
        return (
          <Project
            key={i}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            year={project.year}
            techStack={project.techStack}
            projectURL={project.projectURL}
            githubURL={project.githubURL}
          />
        );
      })}
    </Container>
  );
};
