"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ReactLoading from "react-loading";
import { HeaderLink } from "../HeaderLink";
import Shots from "./Shots";

export const Dribbble = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{ pb: { xs: 8, md: 12 } }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Container>
        <Container>
          <HeaderLink link="https://dribbble.com/kfitz47" label="Dribbble" />
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            className="mx-auto"
            sx={{
              maxWidth: { xs: "100%", sm: "70%" },
              img: { width: { xs: "100%", md: "300px" } },
              "img:not(:last-child)": {
                mr: { xs: 0, md: 5 },
                mb: { xs: 5, md: 0 },
              },
            }}
          >
            <Shots />
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

{
  /* <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container>
          <HeaderLink link="https://dribbble.com/kfitz47" label="Dribbble" />
          <Box
            flexGrow={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <ReactLoading
              type="bubbles"
              color={theme.palette.secondary.main}
              className="mx-auto"
            />
          </Box>
        </Container>
      </Container> */
}
