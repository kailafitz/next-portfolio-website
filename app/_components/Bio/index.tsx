import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Smartphone, Settings, User } from "react-feather";
import Stack from "@mui/material/Stack";
import { customPalettes } from "../../variables";

const Bio = () => {
  let size = 100;
  return (
    <Container
      sx={{
        py: { xs: 16, md: 0 },
        minHeight: { md: "100vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container>
        <Typography variant="h5" color="secondary" mb={10}>
          I&#39;m a developer from Ireland, always on the look out for exciting
          new projects to get stuck into! My primary goals when designing and
          developing anything are <b>functionality</b>,{" "}
          <b>user experience (UX)</b> and <b>mobile responsiveness</b>.
        </Typography>

        <Stack
          pb={{ xs: 16, md: 0 }}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-around" }}
          sx={{
            width: { xs: "fit-content", md: "100%" },
            margin: { xs: "0 auto" },
            svg: {
              "&:not(:last-child)": { marginBottom: { xs: 4, md: 0 } },
            },
          }}
        >
          <Settings
            color={customPalettes.secondary.main}
            size={size}
            strokeWidth={1.2}
            data-aos="fade-up"
            data-aos-delay={1 * 100}
          />

          <User
            color={customPalettes.secondary.main}
            size={size}
            strokeWidth={1.2}
            data-aos="fade-up"
            data-aos-delay={2 * 100}
          />

          <Smartphone
            color={customPalettes.secondary.main}
            size={size}
            strokeWidth={1.2}
            data-aos="fade-up"
            data-aos-delay={3 * 100}
          />
        </Stack>
      </Container>
    </Container>
  );
};

export default Bio;
