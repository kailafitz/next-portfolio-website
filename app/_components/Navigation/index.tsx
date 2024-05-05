"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "../CustomLink";

// https://stackoverflow.com/questions/77262540/warning-failed-prop-type-invalid-prop-component-supplied-to-forwardreflink
// https://stackoverflow.com/questions/74421327/nextrouter-was-not-mounted-next-js

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1, p: 0 }}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Link href="/" color="common.white" variant="name">
            fizz
          </Link>
          <Typography
            variant="name"
            sx={{ mx: { xs: 1, md: 2 }, fontWeight: 500 }}
          >
            |
          </Typography>
          <Typography variant="name" sx={{ fontWeight: 300 }}>
            Mikhaila Fitzpatrick
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
