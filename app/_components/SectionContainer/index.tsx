import Container from "@mui/material/Container";
import React from "react";
import { ISectionContainer } from "../../_types";
import PropTypes from "prop-types";

const SectionContainer = (props: ISectionContainer) => {
  return (
    <Container
      id={props.id}
      sx={{
        pb: props.pb ? { xs: 16, md: 8 } : 0,
        pt: props.pt ? { xs: 16, md: 8 } : 0,
        mb: props.mb ? { xs: 16, md: 8 } : 0,
        minHeight: props.vh ? { md: "100vh" } : "unset",
        ...props.sx,
      }}
    >
      {props.children}
    </Container>
  );
};

SectionContainer.propTypes = {
  id: PropTypes.string,
  pb: PropTypes.bool,
  pt: PropTypes.bool,
  mb: PropTypes.bool,
  vh: PropTypes.bool,
  sx: PropTypes.object,
  children: PropTypes.node,
};

export default SectionContainer;
