"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import HeaderLink from "../HeaderLink";
import Image from "next/image";
import AOS from "aos";

export const Instagram = () => {
  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);

  return (
    <Box
      sx={{ pb: { xs: 16, md: 8 }, minHeight: "100vh" }}
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
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "center", sm: "space-evenly" }}
            alignItems={{ xs: "center", sm: "flex-start" }}
            className="mx-auto"
            sx={{
              maxWidth: "100%",
              img: { width: { xs: "100%", sm: "300px" } },
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
                  className="shadow h-auto w-auto"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                />
              );
            })}
          </Box>
        </Container>
      </Container>
    </Box>
  );
};
