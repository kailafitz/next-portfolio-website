"use client";
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ContactForm from "./ContactForm";
import CommLinks from "./CommLinks";
import { Footer } from "../Layout/Footer";
import SectionContainer from "../SectionContainer";

export const Contact = () => {
  return (
    <Box id="contact" bgcolor="secondary.main">
      <SectionContainer vh pt pb>
        <Typography variant="h2" color="common.white">
          Contact Me
        </Typography>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 10, sm: 5, md: 10 }}
        >
          <Box width={{ xs: "100%", sm: "60%" }}>
            <ContactForm />
          </Box>
          <CommLinks />
        </Stack>
      </SectionContainer>

      <Footer />
    </Box>
  );
};
