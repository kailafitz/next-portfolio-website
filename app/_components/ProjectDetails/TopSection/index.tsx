import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { GitHub, Monitor } from "react-feather";
import { secondary } from "../../../_styles/Palette";
import { IProjectTopDetails, IStackLogo } from "../../../_types";
import Image from "next/image";
import ProjectStackLogo from "../../ProjectList/Project/ProjectStackLogo";
import PropTypes from "prop-types";

const TopSection = (props: IProjectTopDetails) => {
  const createFileHandle = props.projectName.replaceAll(" ", "-").toLowerCase();

  return (
    <>
      <Grid xs={12} md={7}>
        <Typography
          variant="h4"
          color="secondary"
          align="left"
          fontWeight="600"
          mb={3}
          fontSize="h1.fontSize"
        >
          {props.projectName}
        </Typography>
        <Stack direction="row" mb={3}>
          {props.techStack?.length > 1 &&
            props.techStack.map((tech: IStackLogo, i: number) => {
              return (
                <ProjectStackLogo key={i} src={`${tech.src}`} alt={tech.alt} />
              );
            })}
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          sx={{
            a: {
              width: { xs: "100%", sm: "47%" },
            },
          }}
        >
          <Button
            href={props.githubURL}
            target="_blank"
            variant="inset"
            color="light"
            sx={{
              p: 1,
              mb: { xs: 3, sm: 0 },
              svg: { mr: 1 },
            }}
          >
            <GitHub color={secondary.main} size={25} strokeWidth={1.1} />
            View code
          </Button>
          <Button
            href={props.projectURL}
            target="_blank"
            variant="inset"
            color="light"
            sx={{ p: 1, svg: { mr: 1 } }}
          >
            <Monitor color={secondary.main} size={25} strokeWidth={1.1} />
            View site
          </Button>
        </Stack>
      </Grid>
      <Grid xs={12} md={4} sx={{ pt: { xs: 6, md: 0 } }}>
        <Image
          src={`project-${props.projectId}/${createFileHandle}.png`}
          width={500}
          height={300}
          alt={props.projectName}
          className="h-auto w-auto mx-auto d-block project-image"
        />
      </Grid>
    </>
  );
};

TopSection.propTypes = {
  projectId: PropTypes.string,
  projectName: PropTypes.string,
  techStack: PropTypes.object,
  githubURL: PropTypes.string,
  projectURL: PropTypes.string,
};

export default TopSection;
