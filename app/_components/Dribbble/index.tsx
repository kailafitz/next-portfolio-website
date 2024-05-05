"use client";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { useQuery } from "react-query";
import ReactLoading from "react-loading";
import { HeaderLink } from "../HeaderLink";
import Image from "next/image";

export const Dribbble = () => {
  const theme = useTheme();

  let accessToken =
    "80cdba96a6100c8df4e2526e289935e5e5f13dffc35392e443c91236f17ceeb6";

  const { data, status } = useQuery(["shots"], () => {
    return axios
      .get(`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`)
      .then((res) => {
        return res.data.slice(0, 2);
      });
  });

  if (status === "success") {
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
                "img:not(:last-child)": {
                  mr: { xs: 0, md: 5 },
                  mb: { xs: 5, md: 0 },
                },
              }}
            >
              {data.map((shot: { images: { normal: any } }, i: number) => {
                return (
                  <Image
                    key={i}
                    width="300"
                    height="100"
                    src={shot.images.normal}
                    alt="shot"
                    className="shadow h-auto"
                  />
                );
              })}
            </Box>
          </Container>
        </Container>
      </Box>
    );
  }

  if (status === "loading") {
    return (
      <Container
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
      </Container>
    );
  }
};
