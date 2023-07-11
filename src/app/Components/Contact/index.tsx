import React from "react";
import { Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Mail, Linkedin, Phone } from "react-feather";
import Image from "next/image";

export const Contact = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container justifyContent="center">
        <Grid
          xs={10}
          lg={6}
          //   sx={{
          //     borderRight: {
          //       xs: "none",
          //       lg: `1.5px ${theme.palette.primary.main} solid`,
          //     },
          //     borderBottom: {
          //       xs: `1.5px ${theme.palette.primary.main} solid`,
          //       lg: "none",
          //     },
          //   }}
        >
          <Image
            src="/assets/call-me.png"
            alt="Get in Touch!"
            height={500}
            width={500}
          />
        </Grid>
        <Grid
          xs={10}
          lg={1}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", lg: "column" },
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Mail
            color={theme.palette.primary.main}
            size={48}
            strokeWidth={1.1}
          />
          <Phone
            color={theme.palette.primary.main}
            size={48}
            strokeWidth={1.1}
          />
          <Linkedin
            color={theme.palette.primary.main}
            size={48}
            strokeWidth={1.1}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
