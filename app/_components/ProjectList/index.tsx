"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "@mui/material/Typography";
import { IProject } from "../../_types";
import Stack from "@mui/material/Stack";
import { PersonalProjectData } from "../../_data/PersonalProjects";
import { ProfessionalProjectData } from "../../_data/ProfessionalProjects";
import SectionContainer from "../SectionContainer";
import ProjectListItem from "./ProjectListItem";

export const Projects = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <SectionContainer vh pt id="projects">
      <Typography variant="h2" color="primary">
        Some things I have worked on...
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <TabList
              variant="fullWidth"
              onChange={handleChange}
              aria-label="Project Tabs"
              centered
            >
              <Tab label="Personal" value="1" />
              <Tab label="Professional" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ p: 0, pt: 4 }}>
            <Stack direction="column" spacing={8}>
              {PersonalProjectData.map((project: IProject, i: number) => {
                return (
                  <ProjectListItem
                    key={i}
                    projectId={project.projectId}
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    year={project.year}
                    techStack={project.techStack}
                    projectUrl={project.projectUrl}
                    githubUrl={project.githubUrl}
                    projectDetails={project.projectDetails}
                  />
                );
              })}
            </Stack>
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0, pt: 4 }}>
            <Stack direction="column" spacing={8}>
              {ProfessionalProjectData.map((project: IProject, i: number) => {
                return (
                  <ProjectListItem
                    key={i}
                    projectId={project.projectId}
                    projectName={project.projectName}
                    companyName={project.companyName}
                    industry={project.industry}
                    purpose={project.purpose}
                    projectDescription={project.projectDescription}
                    year={project.year}
                    techStack={project.techStack}
                    projectUrl={project.projectUrl}
                    githubUrl={project.githubUrl}
                    projectDetails={project.projectDetails}
                  />
                );
              })}
            </Stack>
          </TabPanel>
        </TabContext>
      </Box>
    </SectionContainer>
  );
};
