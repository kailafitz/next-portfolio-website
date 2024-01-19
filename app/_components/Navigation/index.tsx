"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1, p: 0 }}>
      <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="name" sx={{ fontWeight: 700 }}>
            fizz
          </Typography>
          <Typography variant="name" sx={{ mx: 2, fontWeight: 500 }}>
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
