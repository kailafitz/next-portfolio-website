"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { HeaderLink } from "../HeaderLink";
import Image from "next/image";

export const Instagram = () => {
  return (
    <Box
      sx={{ pb: { xs: 8, md: 12 } }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Container>
        <Container>
          <HeaderLink
            link="https://www.instagram.com/kaila.fizz/"
            label="Instagram"
          />
          <Box
            display="flex"
            flexWrap="wrap"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", md: "space-evenly" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            className="mx-auto"
            sx={{
              maxWidth: { xs: "100%", sm: "70%", md: "100%" },
              img: { width: { xs: "100%", md: "300px" } },
              "img:not(:last-child)": {
                mb: { xs: 5, md: 0 },
              },
            }}
          >
            {[1, 2, 3].map((img, i) => {
              return (
                <Image
                  key={i}
                  width="300"
                  height="100"
                  src={`/graphic-${i + 1}-min.png`}
                  alt={`graphic-${i + 1}`}
                  className="shadow insta-image"
                />
              );
            })}
          </Box>
        </Container>
      </Container>
    </Box>
  );
};
