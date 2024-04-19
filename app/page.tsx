"use client";
import React from "react";
import { Contact } from "./_components/Contact";
import { Intro } from "./_components/Intro";
import { Projects } from "./_components/Projects";
import { Instagram } from "./_components/Instagram";
import { Dribbble } from "./_components/Dribbble";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";

export default function Home() {
  const theme = useTheme();
  return (
    <main>
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.primary.main,
          mb: 14,
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
              xs={12}
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
              <Box>
                <Image
                  src="/waving.png"
                  alt="Bitmoji Waving"
                  height={500}
                  width={500}
                  className="next-image mx-auto image-inset-shadow"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Projects />
      <Dribbble />
      <Instagram />
      {/* <Contact /> */}
    </main>
  );
}
