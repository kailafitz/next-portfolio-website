import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import { Typography } from "@mui/material";

export const Contact = () => {
  const theme = useTheme();
  return (
    <Box
      position="relative"
      sx={{
        width: "100%",
        backgroundColor: "secondary.main",
        // py: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* <Typography
          variant="h3"
          color="common.white"
          textAlign="center"
          fontWeight={700}
        >
          Contact Me
        </Typography> */}
        {/* <Grid container justifyContent="center">
          <Grid xs={10} md={6} sx={{ xs: { mb: 4 }, display: "block" }}>
            <Box>
              <Image
                src="/call-me.png"
                alt="Get in Touch!"
                height={500}
                width={500}
                className="next-image mx-auto d-block image-inset-shadow"
              />
            </Box>
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
        </Grid> */}
      </Container>
    </Box>
  );
};
