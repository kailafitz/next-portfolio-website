import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Taglines = () => {
  return (
    <>
      <Typography color="primary.dark" variant="h6" mb={2}>
        Ireland · Frontend
      </Typography>
      <Typography color="secondary.main" variant="h1" mb={2}>
        Frontend{" "}
        <span style={{ fontStyle: "italic", fontWeight: 500, color: "#8d4e59" }}>
          Development
        </span>
      </Typography>
      <Typography variant="h5" color="secondary.light" mb={1.5}>
        React · TypeScript
      </Typography>
      <Typography variant="body1" color="text.secondary" maxWidth={460}>
        . . .and I like to golf when I&apos;ve free time!
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ mt: 4, a: { width: { xs: "100%", sm: "fit-content" } } }}
      >
        <Button
          variant="inset"
          color="primary"
          href="./MikhailaFitzpatrick_Tech_CurriculumVitae.pdf"
          download="MikhailaFitzpatrick_Tech_CurriculumVitae"
        >
          Download my resume
        </Button>
        <Button
          variant="inset"
          color="light"
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
