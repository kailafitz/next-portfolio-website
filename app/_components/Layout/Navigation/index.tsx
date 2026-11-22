import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1, p: 0 }}>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: "rgba(251, 246, 243, 0.86)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(63, 42, 56, 0.08)",
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap", py: 1.5, gap: 2 }}>
          <Link
            href="/"
            component={NextLink}
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <Image
              width="70"
              height="70"
              src={`/mf-logo.png`}
              alt={`MF logo`}
              className="logo"
            />
            <Box
              component="span"
              sx={{
                typography: "name",
                color: "secondary.main",
                fontSize: { xs: "1.15rem", md: "1.45rem" },
              }}
            >
              Mikhaila Fitzpatrick
            </Box>
          </Link>
          <Stack
            direction="row"
            spacing={{ xs: 2, md: 4 }}
            sx={{ ml: "auto" }}
          >
            <Link href="/#projects" color="secondary.main" underline="hover">
              Work
            </Link>
            <Link href="/#contact" color="secondary.main" underline="hover">
              Contact
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
