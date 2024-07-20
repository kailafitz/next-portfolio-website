import React, { Fragment } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ProjectDetailSection, ProjectType } from "../../_types";
import Stack from "@mui/material/Stack";
import TopSection from "./TopSection";

const ProjectDetails = ({ project }: { project: ProjectType[] }) => {
  return (
    <Container>
      {project.map((proj: ProjectType) => {
        return (
          <Fragment key={proj.projectName}>
            <TopSection
              projectId={proj.projectId}
              projectName={proj.projectName}
              techStack={proj.techStack}
              githubURL={proj.githubURL}
              projectURL={proj.projectURL}
            />
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
              className="mx-auto"
            ></Grid>
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
  );
};

export default ProjectDetails;
