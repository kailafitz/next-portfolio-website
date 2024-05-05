"use client";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Image from "next/image";
import { TechStackProps } from "../../../../_types";

export const ProjectStackLogo = (props: TechStackProps) => {
  return (
    <Tooltip title={props.alt} arrow placement="top">
      <Box
        sx={{
          mr: 2,
          mb: 2,
          // backgroundColor: "common.white",
          borderRadius: 1,
          p: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Image
          src={`/tech-stack-logos/${props.src}`}
          alt={props.alt}
          width="30"
          height="25"
          className="h-auto"
        />
      </Box>
    </Tooltip>
  );
};
