import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Intro = () => {
  return (
    <Container maxWidth="lg">
      <Typography color="common.white" variant="h1" fontWeight="700">
        fizz
      </Typography>
      <Typography color="common.white" variant="h2" fontWeight="700">
        Frontend Development
      </Typography>
      <Typography variant="h3" color="common.white" mb={2} fontWeight="300">
        React | TypeScript
      </Typography>
      <Typography variant="body1" color="common.white" fontWeight="400">
        . . .and I like to golf when I&apos;ve free time!
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          href="./MikhailaFitzpatrick_Technical_CurriculumVitae.pdf"
          download="MikhailaFitzpatrick_Technical_CurriculumVitae"
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
        >
          Download my resume
        </Button>
        <Button
          variant="contained"
          id="action-contact-button"
          data-scroll-to
          href="#contact-bio"
          sx={{
            ml: { sm: 3 },
            mt: { xs: 3, sm: 0 },
            width: { xs: "100%", sm: "fit-content" },
          }}
        >
          Contact me
        </Button>
      </Box>
    </Container>
  );
};
