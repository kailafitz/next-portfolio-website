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
          sx={{
            flexGrow: 1,
            "img:not(:last-child)": {
              mb: { xs: 5, md: 0 },
            },
          }}
        >
          {[1, 2, 3].map((img, i) => {
            return (
              <Image
                width={300}
                height={300}
                key={i}
                src={`/graphic-${i + 1}.png`}
                alt={`graphic-${i + 1}`}
                style={{ height: "auto", width: "auto" }}
                className="shadow"
              />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};
