"use client";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Image from "next/image";
import { StackLogo } from "../../../../_types";
import PropTypes from "prop-types";

const ProjectStackLogo = (props: StackLogo) => {
  return (
    <Tooltip title={props.alt} arrow placement="top">
      <Box
        sx={{
          mr: 2,
          mb: 2,
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
          className="h-auto w-auto"
        />
      </Box>
    </Tooltip>
  );
};

ProjectStackLogo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectStackLogo;
