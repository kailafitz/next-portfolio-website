"use client";
import axios from "axios";
import { Box, Link, Typography, useTheme } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import ReactLoading from "react-loading";

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
      <Box mb={10}>
        <Link
          href="https://dribbble.com/kfitz47"
          target="_blank"
          underline="none"
          color="common.black"
        >
          <Typography variant="h6" textAlign="center">
            Catch me on Dribbble
          </Typography>
        </Link>
        <Box
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="center"
        >
          {data.map((shot: { images: { normal: any } }, i: number) => {
            return <img key={i} src={shot.images.normal} alt="shot" />;
          })}
        </Box>
      </Box>
    );
  }

  if (status === "loading") {
    return (
      <ReactLoading
        type="bubbles"
        color={theme.palette.secondary.main}
        className="mx-auto"
      />
    );
  }
};
