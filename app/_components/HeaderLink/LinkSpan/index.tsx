"use client";
import React from "react";
import Link from "@mui/material/Link";
import LaunchIcon from "@mui/icons-material/Launch";
import { ILinkSpan } from "../../../_types";
import PropTypes from "prop-types";
import { sendGA4ExternalPortfolioLink } from "../../GoogleAnalytics/EventFunctions";

const LinkSpan = (props: ILinkSpan) => {
  return (
    <span>
      <Link
        variant="externalLinkHeading"
        onClick={() => sendGA4ExternalPortfolioLink(props.label)}
        href={props.link}
        target="_blank"
      >
        {props.label}
        <LaunchIcon sx={{ width: "20px", height: "20px" }} />
      </Link>
    </span>
  );
};

LinkSpan.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
};

export default LinkSpan;
