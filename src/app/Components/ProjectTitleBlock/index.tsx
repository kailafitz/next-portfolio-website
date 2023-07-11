"use client";
import { Box, Button, Container, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { StyledHr } from "./styles";
import { ProjectTechFeature } from "./ProjectTechFeatures";
import GitHubIcon from "@mui/icons-material/Github";
import LaunchIcon from "@mui/icons-material/Launch";

type TechStackProps = {
  imgSrc: string;
  alt: string;
};

type Props = {
  projectName: string;
  projectDescription: string;
  year: string;
  techStack: TechStackProps[];
  snapshot: string;
  projectURL: string;
};

export const ProjectTitleBlock = (props: Props) => {
  return (
    <Container>
      <Grid container columnGap={3} justifyContent="center">
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
        <Grid xs={10} lg={5}>
          <Link href={props.projectURL} target="_blank" underline="none">
            <Typography variant="h4" mb={2} color="common.black">
              {props.projectName}
              <LaunchIcon sx={{ width: "15px", height: "15px", ml: 1 }} />
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
            }}
            mb={2}
          >
            {props.techStack?.length > 1 &&
              props.techStack.map((tech, i) => {
                return (
                  <ProjectTechFeature
                    key={i}
                    src={`/assets/${tech.imgSrc}`}
                    alt={tech.alt}
                  />
                );
              })}
          </Box>
          <Typography variant="subtitle1" mb={2}>
            {props.projectDescription}
          </Typography>
          {/* <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Learn More
          </Button> */}
          <Button variant="contained" color="secondary">
            <GitHubIcon />
          </Button>
        </Grid>
        <Grid xs={10} lg={5}>
          <Box>
            <video autoPlay loop height="100%" width="100%">
              <source src={`/assets/${props.snapshot}`} type="video/mp4" />
            </video>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
