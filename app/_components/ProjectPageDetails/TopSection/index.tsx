import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { GitHub, Monitor } from "react-feather";
import { secondary } from "../../../_styles/Palette";
import { IProjectPageTopDetails, IStackLogo } from "../../../_types";
import Image from "next/image";
import PropTypes from "prop-types";
import ProjectStackLogo from "../../ProjectList/ProjectListItem/ProjectOverview/ProjectStackLogo";

const TopSection = (props: IProjectPageTopDetails) => {
  const createFileHandle = props.projectName.replaceAll(" ", "-").toLowerCase();

  return (
    <>
      <Grid xs={12} md={7} alignItems="end">
        <Typography
          variant="h1"
          color="secondary"
          align="left"
          fontWeight="600"
          mb={3}
        >
          {props.projectName}
        </Typography>
        <Stack direction="row" mb={3} flexWrap="wrap">
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
            href={props.githubUrl}
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
            href={props.projectUrl}
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
      <Grid xs={12} md={5} sx={{ pt: { xs: 6, md: 0 }, pl: { xs: 0, md: 6 } }}>
        <Image
          src={`/project-${props.projectId}/${createFileHandle}.png`}
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
  techStack: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  githubUrl: PropTypes.string,
  projectUrl: PropTypes.string,
};

export default TopSection;
