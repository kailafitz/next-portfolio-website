import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Taglines from "./Taglines";
import SectionContainer from "../SectionContainer";

const Intro = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      bgcolor="primary.main"
      sx={{
        marginTop: "-1px",
        minHeight: { xs: "calc(100vh - 104px)", md: "calc(100vh - 112px)" },
      }}
    >
      <SectionContainer mb>
        <Grid
          container
          justifyContent="center"
          rowSpacing={6}
          columnSpacing={5}
        >
          <Grid
            xs={12}
            sm={7}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Taglines />
          </Grid>
          <Grid
            xs={12}
            sm={4}
            lg={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "start", sm: "center" },
            }}
          >
            <Box>
              <Image
                src="/waving.png"
                alt="Mikhaila Fitzpatrick avatar"
                height={500}
                width={500}
                loading="eager"
                className="next-image mx-auto d-block image-inset-shadow-primary"
              />
            </Box>
          </Grid>
        </Grid>
      </SectionContainer>
    </Stack>
  );
};

export default Intro;
