import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Copyright from "./Copyright";
import Stack from "@mui/material/Stack";

export const Footer = () => {
  return (
    <Stack component="footer" bgcolor="secondary.main">
      <Container sx={{ opacity: 0.5, pb: 1 }}>
        <Stack
          direction="row"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <Link
            variant="copyright"
            component={NextLink}
            color="common.white"
            href="privacy-policy"
            sx={{ "&:hover": { textDecoration: "underline" } }}
          >
            Privacy Policy
          </Link>
          <Typography variant="copyright" color="common.white" mx={1}>
            |
          </Typography>
          <Link
            variant="copyright"
            component={NextLink}
            color="common.white"
            href="cookies-policy"
            sx={{ "&:hover": { textDecoration: "underline" } }}
          >
            Cookies
          </Link>
          <Typography variant="copyright" color="common.white" mx={1}>
            |
          </Typography>
          <Copyright />
        </Stack>
      </Container>
    </Stack>
  );
};
