import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
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
      sx={{
        background:
          "radial-gradient(circle at 88% 8%, rgba(246, 223, 226, 0.95) 0%, rgba(251, 246, 243, 0) 36%), linear-gradient(180deg, #fffdfb 0%, #fbf6f3 100%)",
        minHeight: { xs: "calc(100vh - 88px)", md: "calc(100vh - 96px)" },
      }}
    >
      <SectionContainer mb>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          rowSpacing={6}
          columnSpacing={6}
        >
          <Grid
            xs={12}
            sm={7}
            md={7}
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
            sm={5}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "min(100%, 380px)" }}>
              <Image
                src="/waving.png"
                alt="Mikhaila Fitzpatrick avatar"
                height={500}
                width={500}
                priority
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
