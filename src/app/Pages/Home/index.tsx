"use client";
import { Contact } from "@/app/Components/Contact";
import { Dribbble } from "@/app/Components/Dribbble";
import { Intro } from "@/app/Components/Intro";
import { ProjectTitleBlock } from "@/app/Components/ProjectTitleBlock";
import { Projects } from "@/app/Data";
import { Box, Container, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";

export default function HomeContent() {
  return (
    <main>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          top: 0,
          left: 0,
          backgroundColor: (theme) => theme.palette.secondary.main,
          minHeight: { xs: "120vh", lg: "90vh" },
          zIndex: -1,
        }}
      ></Box>
      <Container>
        <Grid
          container
          justifyContent="center"
          sx={{ minHeight: { xs: "120vh", lg: "90vh" } }}
        >
          <Grid
            xs={10}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Intro />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              src="/assets/bitmoji-circle.png"
              alt="Bitmoji"
              height={500}
              width={500}
            />
          </Grid>
        </Grid>
        <Box mb={10}>
          {Projects.map((project, i) => {
            return (
              <ProjectTitleBlock
                key={i}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                year={project.year}
                techStack={project.techStack}
                snapshot={project.snapshot}
                projectURL={project.projectURL}
              />
            );
          })}
        </Box>
        <Dribbble />
        <Contact />
      </Container>
    </main>
  );
}
