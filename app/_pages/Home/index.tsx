"use client";

import React from "react";
import { Contact } from "../../_components/Contact";
import { Dribbble } from "../../_components/Dribbble";
import { Intro } from "../../_components/Intro";
import { Projects } from "../../_components/Projects";
import { Box, Container, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";

export default function HomeContent() {
  const theme = useTheme();
  return (
    <main>
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.secondary.main,
          mb: 10,
        }}
      >
        <Container>
          <Grid
            py={4}
            container
            justifyContent="center"
            sx={{ minHeight: { xs: "110vh", md: "90vh" } }}
          >
            <Grid
              xs={10}
              md={7}
              pt={{ xs: 5, sm: 0 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Intro />
            </Grid>
            <Grid
              xs={10}
              md={5}
              pt={{ xs: 5, sm: 0 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "start", md: "center" },
              }}
            >
              <Image
                src="/profile.png"
                alt="Bitmoji Waving"
                height={500}
                width={500}
                className="next-image mx-auto"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Projects />
      <Dribbble />
      <Contact />
    </main>
  );
}
