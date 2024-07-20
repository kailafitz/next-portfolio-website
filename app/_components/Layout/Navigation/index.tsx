import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import NextLink from "next/link";
import Link from "@mui/material/Link";

// https://stackoverflow.com/questions/77262540/warning-failed-prop-type-invalid-prop-component-supplied-to-forwardreflink
// https://stackoverflow.com/questions/74421327/nextrouter-was-not-mounted-next-js

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1, p: 0 }}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar sx={{ flexWrap: "wrap", py: 3 }}>
          <Link href="/" component={NextLink}>
            <Image
              width="70"
              height="70"
              src={`/mf-logo.png`}
              alt={`MF logo`}
              className="logo"
            />
          </Link>
          <Link
            variant="name"
            href="/"
            color="common.white"
            sx={{
              fontWeight: 300,
              typography: { md: "name" },
              fontSize: "h5.fontSize",
            }}
          >
            Mikhaila Fitzpatrick
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
