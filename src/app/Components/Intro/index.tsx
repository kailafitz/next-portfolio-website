import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

export const Intro = () => {
  return (
    <>
      <Typography color="common.white" variant="h5">
        Frontend Developer
      </Typography>
      <Typography variant="h1" color="common.white">
        Mikhaila
      </Typography>
      <Typography variant="h1" color="common.white">
        Fitzpatrick
      </Typography>
      <Typography variant="h5" color="common.white">
        I like working with exciting people on exciting projects
      </Typography>
      <Typography variant="h6" color="common.white">
        . . .and golfing when I've free time!
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          href="./MikhailaFitzpatrick_Technical_CurriculumVitae.pdf"
          download="MikhailaFitzpatrick_Technical_CurriculumVitae"
        >
          Download my resume
        </Button>
        <Button
          variant="contained"
          id="action-contact-button"
          data-scroll-to
          href="#contact-bio"
          sx={{ ml: 3 }}
        >
          Contact me
        </Button>
      </Box>
    </>
  );
};
