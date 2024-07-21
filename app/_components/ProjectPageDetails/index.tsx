import React, { Fragment } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TopSection from "./TopSection";
import { IProjectPageDetail, IProject } from "../../_types";
import ProfessionalDetails from "./ProfessionalDetails";

const ProjectPageDetails = ({ project }: { project: IProject[] }) => {
  return (
    <Container sx={{ pt: { md: 5 } }}>
      {project.map((proj: IProject) => {
        return (
          <Fragment key={proj.projectName}>
            <Grid
              container
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="center"
            >
              <TopSection
                projectId={proj.projectId}
                projectName={proj.projectName}
                techStack={proj.techStack}
                githubUrl={proj.githubUrl}
                projectUrl={proj.projectUrl}
              />
            </Grid>
            <Grid container py={16} rowSpacing={7}>
              {proj.companyName && (
                <>
                  <Grid xs={12} md={4}>
                    <ProfessionalDetails
                      companyName={proj.companyName}
                      industry={proj.industry}
                      purpose={proj.purpose}
                    />
                  </Grid>
                  <Grid xs={0} sm={8} />
                </>
              )}
              {proj.projectDetails.map((section: IProjectPageDetail) => {
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

export default ProjectPageDetails;
