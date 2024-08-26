import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Taglines = () => {
  return (
    <>
      <Typography color="common.white" variant="h6">
        Website under progress!
      </Typography>
      <Typography color="common.white" variant="h1" fontWeight="700" mb={1}>
        Frontend Development
      </Typography>
      <Typography variant="h3" color="common.white" fontWeight="300" mb={1}>
        React | TypeScript
      </Typography>
      <Typography variant="body2" color="common.white" fontWeight="400">
        . . .and I like to golf when I&apos;ve free time!
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{ mt: 3, a: { width: { xs: "100%", md: "fit-content" } } }}
      >
        <Button
          variant="inset"
          href="./MikhailaFitzpatrick_Tech_CurriculumVitae.pdf"
          download="MikhailaFitzpatrick_Tech_CurriculumVitae"
        >
          Download my resume
        </Button>
        <Button
          variant="inset"
          id="action-contact-button"
          data-scroll-to
          href="#contact"
        >
          Contact me
        </Button>
      </Stack>
    </>
  );
};

export default Taglines;
