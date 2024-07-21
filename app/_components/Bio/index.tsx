import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import BioIcons from "./BioIcons";
import SectionContainer from "../SectionContainer";

const Bio = () => {
  return (
    <SectionContainer vh pt>
      <Stack direction="column" justifyContent="center">
        <Typography variant="h5" color="secondary" mb={10}>
          I&#39;m a developer from Ireland, always on the look out for exciting
          new projects to get stuck into! My primary goals when designing and
          developing anything are <b>functionality</b>,{" "}
          <b>user experience (UX)</b> and <b>mobile responsiveness</b>.
        </Typography>
        <BioIcons />
      </Stack>
    </SectionContainer>
  );
};

export default Bio;
