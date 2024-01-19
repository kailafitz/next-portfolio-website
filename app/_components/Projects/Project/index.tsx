"use client";
import {
  Box,
  Button,
  Container,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { StyledHr } from "./styles";
import { ProjectStackLogo } from "./ProjectStackLogo";
import { GitHub } from "react-feather";
import LaunchIcon from "@mui/icons-material/Launch";
import ReactGA from "react-ga4";
import { ProjectType, TechStackProps } from "../../../_types";
import Image from "next/image";

export const Project = (props: ProjectType) => {
  const theme = useTheme();

  const createFileHandle = props.projectName.replaceAll(" ", "-").toLowerCase();

  const sendGA4 = (projectName: String) => {
    ReactGA.event({
      category: "link_clicked",
      action: "Click Link",
      label: `${projectName}`,
    });
  };

  // const sendGA4 = () => {
  //   ReactGA.event({
  //     category: "link_clicked",
  //     action: "Click Link",
  //     label: "Link",
  //   });
  // };

  return (
    <Container sx={{ mb: 10 }}>
      <Grid container columnGap={3} justifyContent={{ xs: "space-between" }}>
        <Grid
          xs={1}
          sx={{
            borderLeft: (theme) => `1px ${theme.palette.primary.main} solid`,
          }}
        >
          <Box display="flex" flexDirection="row">
            <StyledHr />
            <Typography variant="body2">{props.year}</Typography>
          </Box>
        </Grid>
        <Grid xs={9} md={5}>
          <Link
            href={props.projectURL}
            target="_blank"
            underline="none"
            // onClick={sendGA4}
            onClick={() => sendGA4(props.projectName)}
          >
            <Typography variant="h4" mb={2} color="common.black">
              {props.projectName}
              <LaunchIcon sx={{ width: "15px", height: "15px", ml: 1 }} />
            </Typography>
          </Link>
          <Typography variant="subtitle1" mb={2}>
            {props.projectDescription}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              flexWrap: "wrap",
            }}
          >
            {props.techStack?.length > 1 &&
              props.techStack.map((tech: TechStackProps, i) => {
                return (
                  <ProjectStackLogo
                    key={i}
                    src={`${tech.src}`}
                    alt={tech.alt}
                  />
                );
              })}
          </Box>
          {/* <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Learn More
          </Button> */}
          <Button
            href={props.githubURL}
            target="_blank"
            variant="contained"
            color="secondary"
            sx={{ p: theme.spacing(1) }}
          >
            <GitHub
              color={theme.palette.common.white}
              size={25}
              strokeWidth={1.1}
            />
          </Button>
        </Grid>
        <Grid xs={12} md={5} sx={{ mt: { xs: 3, md: 0 } }}>
          <Box>
            <Image
              src={`/${createFileHandle}.png`}
              width={300}
              height={100}
              alt={props.projectName}
              className="h-auto"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
