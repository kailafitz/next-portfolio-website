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
        py: { xs: 16, md: 8 },
        mt: { md: "90vh" },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container>
        {/* <Typography variant="h2" color="primary" pb={{ xs: 8, md: 16 }}>
          About me...
        </Typography> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-around" },
          }}
        >
          <Box
            p={{ sm: 4 }}
            // py={{ sm: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{
              background: { sm: theme.palette.primary.main },
              height: { xs: "100%", sm: "270px", md: "400px" },
              width: { xs: "100%", sm: "270px", md: "400px" },
              borderRadius: "400px",
              maxWidth: { xs: "100%", md: "70%" },
              // mb: { xs: 8, md: 0 },
            }}
            className="bio-paragraph1"
          >
            <Typography
              mb={3}
              sx={{
                width: { sm: "80%" },
                typography: { xs: "1rem", md: "h6" },
              }}
              className="mx-auto"
            >
              I'm a developer from Ireland, always on the look out for exciting
              new projects to get stuck into! My primary goals when designing
              and developing anything are <b>functionality</b>,{" "}
              <b>user experience (UX)</b> and <b>mobile responsiveness</b>.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "40%" },
              pt: { md: 8 },
            }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Image
              alt="arrow"
              src="/arrow.png"
              width={200}
              height={200}
              className="flip"
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignSelf="flex-end"
              sx={{
                height: "300px",
                width: { xs: "100%", sm: "300px" },
                borderRadius: "250px",
                backgroundColor: { sm: "white" },
              }}
              className="inset-shadow-white"
            >
              <Box sx={{ width: "fit-content" }} className="mx-auto">
                <Typography variant="h6" color="primary">
                  Services and skills include:
                </Typography>
                <ul id="services-list" className="services-list">
                  <li>UI development</li>
                  <li>UI design</li>
                  <li>Graphic design</li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Bio;
