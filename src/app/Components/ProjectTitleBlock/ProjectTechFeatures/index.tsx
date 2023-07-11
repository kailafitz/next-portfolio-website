"use client";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export const ProjectTechFeature = (props: Props) => {
  return (
    <Tooltip title={props.alt} arrow placement="top">
      <Box
        sx={{
          mr: 2,
          backgroundColor: (theme) => theme.palette.grey[200],
          borderRadius: 1,
          p: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Image
          src={props.src}
          alt={props.alt}
          width="30"
          height="25"
          className="next-image"
        />
      </Box>
    </Tooltip>
  );
};
