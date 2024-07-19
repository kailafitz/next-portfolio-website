import React, { Fragment } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub, Monitor } from "react-feather";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProjectDetailSection, ProjectType, StackLogo } from "../../_types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from "next/image";
import ProjectStackLogo from "../ProjectList/Project/ProjectStackLogo";
import { customPalettes } from "../../variables";

const ProjectDetails = ({ project }: { project: ProjectType[] }) => {
  const createFileHandle =
    project.length > 0
      ? project[0]["projectName"].replaceAll(" ", "-").toLowerCase()
      : " ";

  return (
    <Container sx={{ py: { xs: 8, md: 16 } }}>
      <Container>
        {project.map((proj: ProjectType) => {
          return (
            <Fragment key={proj.projectName}>
              <Grid
                container
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems="center"
                className="mx-auto"
              >
                <Grid xs={12} md={7}>
                  <Typography
                    variant="h4"
                    color="secondary"
                    align="left"
                    fontWeight="600"
                    mb={3}
                    fontSize="h1.fontSize"
                  >
                    {proj.projectName}
                  </Typography>
                  <Stack direction="row" mb={3}>
                    {proj.techStack?.length > 1 &&
                      proj.techStack.map((tech: StackLogo, i: number) => {
                        return (
                          <ProjectStackLogo
                            key={i}
                            src={`${tech.src}`}
                            alt={tech.alt}
                          />
                        );
                      })}
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="space-between"
                    sx={{
                      a: {
                        width: { xs: "100%", sm: "47%" },
                      },
                    }}
                  >
                    <Button
                      href={proj.githubURL}
                      target="_blank"
                      variant="inset"
                      color="white"
                      sx={{
                        p: 1,
                        mb: { xs: 3, sm: 0 },
                        svg: { mr: 1 },
                      }}
                    >
                      <GitHub
                        color={customPalettes.secondary.main}
                        size={25}
                        strokeWidth={1.1}
                      />
                      View code
                    </Button>
                    <Button
                      href={proj.projectURL}
                      target="_blank"
                      variant="inset"
                      color="white"
                      sx={{ p: 1, svg: { mr: 1 } }}
                    >
                      <Monitor
                        color={customPalettes.secondary.main}
                        size={25}
                        strokeWidth={1.1}
                      />
                      View site
                    </Button>
                  </Stack>
                </Grid>
                <Grid xs={12} md={4} sx={{ pt: { xs: 6, md: 0 } }}>
                  <Image
                    src={`project-${project[0].projectId}/${createFileHandle}.png`}
                    width={500}
                    height={300}
                    alt={proj.projectName}
                    className="h-auto w-auto mx-auto d-block project-image"
                  />
                </Grid>
              </Grid>
              <Grid container py={16} rowSpacing={7}>
                <Grid xs={12} md={4}>
                  {proj.companyName && (
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      justifyContent={{ xs: "center", md: "space-between" }}
                      alignItems="center"
                      mb={{ xs: 2, md: 0 }}
                    >
                      <Typography variant="h6" mb={{ xs: 1, md: 0 }}>
                        Company
                      </Typography>
                      <Typography variant="body2" align="left">
                        {proj.companyName}
                      </Typography>
                    </Stack>
                  )}
                  {proj.industry && (
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      justifyContent={{ xs: "center", md: "space-between" }}
                      alignItems="center"
                      mb={{ xs: 2, md: 0 }}
                    >
                      <Typography variant="h6" mb={{ xs: 1, md: 0 }}>
                        Industry
                      </Typography>
                      <Typography variant="body2" align="left">
                        {proj.industry}
                      </Typography>
                    </Stack>
                  )}
                  {proj.industry && (
                    <Stack
                      direction={{ xs: "column", md: "row" }}
                      justifyContent={{ xs: "center", md: "space-between" }}
                      alignItems="center"
                      mb={{ xs: 2, md: 0 }}
                    >
                      <Typography variant="h6" mb={{ xs: 1, md: 0 }}>
                        Purpose
                      </Typography>
                      <Typography variant="body2" align="left">
                        {proj.purpose}
                      </Typography>
                    </Stack>
                  )}
                </Grid>
                <Grid xs={0} sm={8} />
                {proj.projectDetails.map((section: ProjectDetailSection) => {
                  return (
                    <Fragment key={section.sectionTitle}>
                      <Grid xs={12} md={4}>
                        <Typography
                          variant="body1"
                          color="secondary"
                          sx={{ fontSize: "h3.fontSize" }}
                        >
                          {section.sectionTitle}
                        </Typography>
                      </Grid>
                      <Grid xs={12} md={8}>
                        <Typography variant="body2">
                          {section.sectionDetails}
                        </Typography>
                      </Grid>
                    </Fragment>
                  );
                })}
              </Grid>
            </Fragment>
          );
        })}
      </Container>
    </Container>
  );
};

export default ProjectDetails;
