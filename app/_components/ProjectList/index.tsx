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
import SectionContainer from "../SectionContainer";
import ProjectListItem from "./ProjectListItem";

export const Projects = ({
  personal,
  professional,
}: {
  personal: IProject[];
  professional: IProject[];
}) => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <SectionContainer vh pt id="projects">
      <Typography variant="h6" color="primary.dark" sx={{ mb: 1.5 }}>
        Portfolio
      </Typography>
      <Typography variant="h2" color="secondary.main">
        Selected work
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="Project Tabs">
              <Tab label="Personal" value="1" />
              <Tab label="Professional" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ p: 0, pt: 4 }}>
            <ProjectStack projects={personal} />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0, pt: 4 }}>
            <ProjectStack projects={professional} />
          </TabPanel>
        </TabContext>
      </Box>
    </SectionContainer>
  );
};

const ProjectStack = ({ projects }: { projects: IProject[] }) => {
  if (projects.length === 0) {
    return (
      <Typography color="text.secondary">
        New work will land here shortly.
      </Typography>
    );
  }

  return (
    <Stack direction="column" spacing={4}>
      {projects.map((project) => (
        <ProjectListItem key={project.projectId} {...project} />
      ))}
    </Stack>
  );
};
