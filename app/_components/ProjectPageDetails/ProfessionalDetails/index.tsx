import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { IProject } from "../../../_types";

const ProfessionalDetails = (props: Partial<IProject>) => {
  return (
    <>
      {props.companyName && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
          mb={{ xs: 2, md: 0 }}
        >
          <Typography variant="h6" mb={{ xs: 1, md: 0 }}>
            Company
          </Typography>
          <Typography variant="body2" align="left">
            {props.companyName}
          </Typography>
        </Stack>
      )}
      {props.industry && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
          mb={{ xs: 2, md: 0 }}
        >
          <Typography variant="h6" mb={{ xs: 1, md: 0 }}>
            Industry
          </Typography>
          <Typography variant="body2" align="left">
            {props.industry}
          </Typography>
        </Stack>
      )}
      {props.industry && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
          mb={{ xs: 2, md: 0 }}
        >
          <Typography variant="h6" mb={{ xs: 1, md: 0 }}>
            Purpose
          </Typography>
          <Typography variant="body2" align="left">
            {props.purpose}
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default ProfessionalDetails;
