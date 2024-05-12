import React from "react";
import Container from "@mui/material/Container";
import { ProjectData } from "../../_data";
import { Project } from "./Project";
import Typography from "@mui/material/Typography";

export const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ pb: { xs: 16, md: 8 } }} id="projects">
      <Container>
        <Typography variant="h2" color="primary" pb={{ xs: 8, md: 16 }}>
          Some things I have worked on...
        </Typography>
        {ProjectData.map((project, i) => {
          return (
            <Project
              key={i}
              projectId={project.projectId}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              year={project.year}
              techStack={project.techStack}
              projectURL={project.projectURL}
              githubURL={project.githubURL}
              projectDetails={project.projectDetails}
            />
          );
        })}
      </Container>
    </Container>
  );
};
