"use client";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
import { StyledHr } from "./styles";
import { ProjectStackLogo } from "./ProjectStackLogo";
import { GitHub, Monitor } from "react-feather";
import ReactGA from "react-ga4";
import { ProjectType, TechStackProps } from "../../../_types";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import AOS from "aos";
import { useEffect } from "react";

export const Project = (props: ProjectType | ProjectType) => {
  const theme = useTheme();

  const createFileHandle = props.projectName.replaceAll(" ", "-").toLowerCase();

  const sendGA4 = (projectName: String) => {
    ReactGA.event({
      category: "link_clicked",
      action: "Click Link",
      label: `${projectName}`,
    });
  };

  useEffect(() => {
    AOS.init(); //You can add options as per your need inside an object
  }, []);

  return (
    <Box sx={{ pb: { xs: 8, md: 12 } }} data-aos="fade-up">
      <Grid
        container
        columnGap={3}
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{
          borderLeft: (theme) => `1px ${theme.palette.primary.main} solid`,
        }}
      >
        <Grid xs={12} md={1}>
          <Box
            display="flex"
            flexDirection="row"
            // justifyContent="space-between"
            sx={{ mb: { xs: 3, md: 0 } }}
          >
            <StyledHr />
            <Typography variant="h5">{props.year}</Typography>
          </Box>
        </Grid>
        <Grid
          xs={11}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Link
              href={`/projects/${
                props.companyName === undefined ? `personal` : `professional`
              }/${props.projectId}`}
              // target="_blank"
              underline="none"
              // onClick={sendGA4}
              onClick={() => sendGA4(props.projectName)}
            >
              <Typography
                variant="h4"
                // mb={2}
                color="secondary.main"
                fontWeight="600"
                sx={{
                  // textShadow: "-5px -6px 3px #0000002b, 5px 8px 3px #f6f5f5",
                  transition: "text-shadow .6s ease",
                  svg: {
                    transform: "scale(1)",
                    marginLeft: 1,
                    marginBottom: 0,
                    transition: "all .3s ease-in",
                  },
                  "&:hover": {
                    // textShadow: "0px 0px 0px #0000002b, 0px 0px 0px #f6f5f5",
                    transition: "text-shadow .6s ease",
                    svg: {
                      transform: "scale(1.6)",
                      marginLeft: 1.3,
                      marginBottom: 0.3,
                      transition: "all .3s ease-in",
                    },
                  },
                }}
              >
                {props.projectName}
                {/* <LaunchIcon sx={{ width: "15px", height: "15px" }} /> */}
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
                props.techStack.map((tech: TechStackProps, i: number) => {
                  return (
                    <ProjectStackLogo
                      key={i}
                      src={`${tech.src}`}
                      alt={tech.alt}
                    />
                  );
                })}
            </Box>
          </Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            sx={{
              a: {
                width: { xs: "100%", md: "45%" },
              },
            }}
          >
            <Button
              href={props.githubURL}
              target="_blank"
              variant="inset"
              color="white"
              sx={{ p: theme.spacing(1), mb: { xs: 3, md: 0 }, svg: { mr: 1 } }}
            >
              <GitHub
                // color={theme.palette.common.white}
                color={theme.palette.secondary.main}
                size={25}
                strokeWidth={1.1}
              />
              View code
            </Button>
            <Button
              href={props.projectURL}
              target="_blank"
              variant="inset"
              color="white"
              sx={{ p: theme.spacing(1), svg: { mr: 1 } }}
            >
              <Monitor
                // color={theme.palette.common.white}
                color={theme.palette.secondary.main}
                size={25}
                strokeWidth={1.1}
              />
              View site
            </Button>
          </Stack>
        </Grid>
        <Grid xs={11} md={5} sx={{ mt: { xs: 8, md: 0 } }}>
          <Box>
            <Tooltip
              title={
                <Link
                  color="common.white"
                  target="_blank"
                  href="https://www.freepik.com/free-psd/laptop-mock-up-design_1041411.htm"
                  // <a href="https://www.freepik.com/free-psd/laptop-mock-up-design_1041411.htm#page=2&query=desktop%20mockup&position=24&from_view=keyword&track=ais&uuid=5743be27-e454-40a6-bc70-1f9e1ed27a3c#position=24&page=2&query=desktop%20mockup">Image by aleksandr_samochernyi</a> on Freepik
                >
                  Mockup Image by aleksandr_samochernyi on Freepik
                </Link>
              }
              arrow
              placement="top"
            >
              <Image
                src={`/${createFileHandle}.png`}
                width={300}
                height={100}
                alt={props.projectName}
                className="h-auto w-100"
              />
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
