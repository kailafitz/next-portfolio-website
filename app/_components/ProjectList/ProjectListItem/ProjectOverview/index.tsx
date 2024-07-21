import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GitHub, Monitor } from "react-feather";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { secondary } from "../../../../_styles/Palette";
import {
  sendGA4LearnMoreOnProject,
  sendGA4ProjectView,
} from "../../../GoogleAnalytics/EventFunctions";
import { IStackLogo } from "../../../../_types";
import ProjectStackLogo from "./ProjectStackLogo";

const ProjectOverview = ({
  projectId,
  projectName,
  companyName,
  projectDescription,
  techStack,
  githubUrl,
  projectUrl,
}: {
  projectId: string;
  projectName: string;
  companyName: string;
  projectDescription: string;
  techStack: IStackLogo[];
  githubUrl: string;
  projectUrl: string;
}) => {
  return (
    <>
      <Box>
        <Link
          component={NextLink}
          href={`/projects/${
            companyName === "" ? `personal` : `professional`
          }/${projectId}/${projectName.replace(/ /g, "-").toLowerCase()}`}
          underline="none"
          onClick={() => sendGA4LearnMoreOnProject(projectName)}
        >
          <Typography variant="h4">{projectName}</Typography>
        </Link>
        <Typography variant="subtitle1" mb={2}>
          {projectDescription}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            flexWrap: "wrap",
          }}
        >
          {techStack?.length > 1 &&
            techStack.map((tech: IStackLogo, i: number) => {
              return (
                <ProjectStackLogo key={i} src={`${tech.src}`} alt={tech.alt} />
              );
            })}
        </Box>
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        sx={{
          a: {
            width: { xs: "100%", md: "45%" },
          },
        }}
      >
        <Button
          href={githubUrl}
          target="_blank"
          variant="inset"
          color="light"
          sx={{ p: 1, mb: { xs: 3, md: 0 }, svg: { mr: 1 } }}
        >
          <GitHub color={secondary.main} size={25} strokeWidth={1.1} />
          View code
        </Button>
        <Button
          href={projectUrl}
          onClick={() => sendGA4ProjectView(projectName)}
          target="_blank"
          variant="inset"
          color="light"
          sx={{ p: 1, svg: { mr: 1 } }}
        >
          <Monitor color={secondary.main} size={25} strokeWidth={1.1} />
          View site
        </Button>
      </Stack>
    </>
  );
};

export default ProjectOverview;
