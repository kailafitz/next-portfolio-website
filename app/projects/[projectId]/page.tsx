"use client";
import React, { Fragment } from "react";
import { ProjectType } from "../../_types";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { ProjectData } from "../../_data";
import Image from "next/image";
import { Contact } from "../../_components/Contact";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { GitHub, Monitor } from "react-feather";
import { useTheme } from "@mui/material/styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const ProjectDetails = ({ params }: { params: { projectId: string } }) => {
  const theme = useTheme();
  let id = params.projectId;

  const Project = ProjectData.filter((project) => {
    return project.projectId === id;
  });

  const createFileHandle =
    Project.length > 0
      ? Project[0]["projectName"].replaceAll(" ", "-").toLowerCase()
      : " ";

  return (
    <>
      <Button
        variant="inset"
        color="secondary"
        href="/#projects"
        startIcon={<NavigateBeforeIcon />}
        sx={{ mb: { xs: 3, md: 0 }, ml: 3, mt: 3 }}
      >
        Home
      </Button>
      <Container sx={{ py: { xs: 8, md: 16 } }}>
        <Container>
          {Project.map((proj) => {
            return (
              <Fragment key={proj.projectId}>
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
                      mb={6}
                      fontSize="h1.fontSize"
                    >
                      {proj.projectName}
                    </Typography>
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
                        color="secondary"
                        sx={{
                          p: 1,
                          mb: { xs: 3, sm: 0 },
                          svg: { mr: 1 },
                        }}
                      >
                        <GitHub
                          // color={theme.palette.common.white}
                          color={theme.palette.secondary.main}
                          size={25}
                          strokeWidth={1.1}
                        />
                        View code
                      </Button>
                      <Button
                        href={proj.projectURL}
                        target="_blank"
                        variant="inset"
                        color="secondary"
                        sx={{ p: theme.spacing(1), svg: { mr: 1 } }}
                      >
                        <Monitor
                          // color={theme.palette.common.white}
                          color={theme.palette.secondary.main}
                          size={25}
                          strokeWidth={1.1}
                        />
                        View site
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid xs={12} md={4} sx={{ pt: { xs: 6, md: 0 } }}>
                    <Image
                      src={`/${createFileHandle}.png`}
                      width={500}
                      height={300}
                      alt={proj.projectName}
                      className="h-auto w-auto mx-auto d-block project-image"
                    />
                  </Grid>
                </Grid>
                <Grid container py={16} rowSpacing={7}>
                  {proj.projectDetails.map((section) => {
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
              alt={`${Project[0].projectName} image`}
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

export default ProjectDetails;
