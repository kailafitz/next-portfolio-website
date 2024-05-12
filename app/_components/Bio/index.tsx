"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Smartphone, Settings, User } from "react-feather";
import Stack from "@mui/material/Stack";
import AOS from "aos";

const Bio = () => {
  const theme = useTheme();

  let size = 100;

  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);

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
        <Typography variant="h5" color="secondary" mb={10}>
          I&#39;m a developer from Ireland, always on the look out for exciting
          new projects to get stuck into! My primary goals when designing and
          developing anything are <b>functionality</b>,{" "}
          <b>user experience (UX)</b> and <b>mobile responsiveness</b>.
        </Typography>

        <Stack
          pb={{ xs: 16, md: 0 }}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-around" }}
          data-aos="fade-up"
          sx={{
            width: { xs: "fit-content", md: "100%" },
            margin: { xs: "0 auto" },
            svg: {
              "&:not(:last-child)": { marginBottom: { xs: 4, md: 0 } },
            },
          }}
        >
          <Settings
            color={theme.palette.secondary.main}
            size={size}
            strokeWidth={1.2}
          />

          <User
            color={theme.palette.secondary.main}
            size={size}
            strokeWidth={1.2}
          />

          <Smartphone
            color={theme.palette.secondary.main}
            size={size}
            strokeWidth={1.2}
          />
        </Stack>
        {/* <Box sx={{ width: "fit-content" }} className="mx-auto">
          <Typography variant="h5" color="primary">
            Services and skills include:
          </Typography>
          <ul id="services-list" className="services-list">
            <li>UI development</li>
            <li>UI design</li>
            <li>Graphic design</li>
          </ul>
        </Box> */}
      </Container>
    </Container>
  );
};

export default Bio;
