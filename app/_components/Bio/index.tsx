"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import Image from "next/image";

const Bio = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        mt: { md: "90vh" },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container>
        <Typography variant="h5" mb={10}>
          I&#39;m a developer from Ireland, always on the look out for exciting
          new projects to get stuck into! My primary goals when designing and
          developing anything are <b>functionality</b>,{" "}
          <b>user experience (UX)</b> and <b>mobile responsiveness</b>.
        </Typography>
        <Box sx={{ width: "fit-content" }} className="mx-auto">
          <Typography variant="h5" color="primary">
            Services and skills include:
          </Typography>
          <ul id="services-list" className="services-list">
            <li>UI development</li>
            <li>UI design</li>
            <li>Graphic design</li>
          </ul>
        </Box>
      </Container>
    </Container>
  );
};

export default Bio;
