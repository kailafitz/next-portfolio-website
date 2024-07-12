import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Intro = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        pb: { xs: 16, md: "inherit" },
        minHeight: { md: "90vh" },
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid
            xs={12}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Container maxWidth="md" sx={{ pl: { md: 0 } }}>
              {/* <Typography color="common.white" variant="h1" fontWeight="700">
                fizz
              </Typography> */}
              {/* <Image
                width="200"
                height="200"
                src={`/mf-logo.png`}
                alt={`MF logo`}
              /> */}
              <Typography color="common.white" variant="h6">
                Website under progress!
              </Typography>
              <Typography color="common.white" variant="h2" fontWeight="700">
                Frontend Development
              </Typography>
              <Typography
                variant="h3"
                color="common.white"
                fontWeight="300"
                mb={1}
              >
                React | TypeScript
              </Typography>
              <Typography variant="body2" color="common.white" fontWeight="400">
                . . .and I like to golf when I&apos;ve free time!
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="inset"
                  href="./MikhailaFitzpatrick_Technical_CurriculumVitae.pdf"
                  download="MikhailaFitzpatrick_Technical_CurriculumVitae"
                  sx={{ width: { xs: "100%", sm: "fit-content" } }}
                >
                  Download my resume
                </Button>
                <Button
                  variant="inset"
                  id="action-contact-button"
                  data-scroll-to
                  href="#contact"
                  sx={{
                    ml: { sm: 3 },
                    mt: { xs: 3, sm: 0 },
                    width: { xs: "100%", sm: "fit-content" },
                  }}
                >
                  Contact me
                </Button>
              </Box>
            </Container>
          </Grid>
          <Grid
            xs={10}
            md={5}
            pt={{ xs: 8, md: 0 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "start", md: "center" },
            }}
          >
            <Box>
              <Image
                src="/waving2.png"
                alt="Mikhaila Fitzpatrick avatar"
                height={500}
                width={500}
                className="next-image mx-auto d-block image-inset-shadow-primary"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Intro;
