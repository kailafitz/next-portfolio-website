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
        <Toolbar>
          <Typography variant="body1">
            fizzydesigns | Mikhaila Fitzpatrick
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
