"use client";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import { ProjectData, ProfessionalProjectData } from "../../_data";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Project } from "./Project";
import Typography from "@mui/material/Typography";

export const Projects = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="lg" sx={{ pb: { xs: 16, md: 8 } }} id="projects">
      <Container>
        <Typography variant="h2" color="primary" pb={{ xs: 8, md: 16 }}>
          Some things I have worked on...
        </Typography>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="Project Tabs"
                centered
              >
                <Tab label="Personal" value="1" />
                <Tab label="Professional" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ pt: 8 }}>
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
            </TabPanel>
            <TabPanel value="2" sx={{ pt: 8 }}>
              {ProfessionalProjectData.map((project, i) => {
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
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </Container>
  );
};
