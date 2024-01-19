import React from "react";
import { Box, Container, Link, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Mail, Linkedin, Phone } from "react-feather";
import Image from "next/image";

export const Contact = () => {
  const theme = useTheme();
  return (
    <Box
      id="contact-bio"
      position="relative"
      sx={{
        width: "100%",
        backgroundColor: (theme) => theme.palette.primary.main,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid xs={10} md={6} sx={{ mb: 4, display: "block" }}>
            <Image
              src="/contact.png"
              alt="Get in Touch!"
              height={500}
              width={500}
              className="next-image mx-auto d-block"
            />
          </Grid>
          <Grid
            xs={10}
            md={1}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Link href="mailto:mikhailafitzpatrick@gmail.com">
              <Mail
                color={theme.palette.common.white}
                size={48}
                strokeWidth={1.1}
              />
            </Link>
            <Link href="tel:353862321667">
              <Phone
                color={theme.palette.common.white}
                size={48}
                strokeWidth={1.1}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mikhaila-fitzpatrick-701848141/"
              target="_blank"
            >
              <Linkedin
                color={theme.palette.common.white}
                size={48}
                strokeWidth={1.1}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
