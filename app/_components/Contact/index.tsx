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
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 10, sm: 5, md: 10 }}
        >
          <Box display="block" width={{ xs: "100%", sm: "60%" }}>
            <ContactForm />
          </Box>
          <Typography
            variant="body1"
            fontSize="h2.fontSize"
            fontWeight={300}
            color="light.main"
            sx={{ pb: 0 }}
          >
            OR
          </Typography>
          <CommLinks />
        </Stack>
      </SectionContainer>

      <Footer />
    </Box>
  );
};
