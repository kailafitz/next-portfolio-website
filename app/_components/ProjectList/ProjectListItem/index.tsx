import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ProjectImage from "./ProjectImage";
import { primary } from "../../../_styles/Palette";
import Typography from "@mui/material/Typography";
import { StyledHr } from "./styles";
import { IProject } from "../../../_types";
import ProjectOverview from "./ProjectOverview";

const ProjectListItem = (props: IProject) => {
  return (
    <Grid
      container
      justifyContent={{ xs: "center", md: "space-between" }}
      sx={{
        borderLeft: `1px ${primary.main} solid`,
      }}
      data-aos="fade-up"
    >
      <Grid xs={12} sm={1}>
        <Box display="flex" flexDirection="row" sx={{ mb: { xs: 3, md: 0 } }}>
          <StyledHr />
          <Typography variant="h5">{props.year}</Typography>
        </Box>
      </Grid>
      <Grid
        xs={11}
        sm={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          pl: 3,
        }}
      >
        <ProjectOverview
          projectId={props.projectId}
          projectName={props.projectName}
          companyName={props.companyName ?? ""}
          projectDescription={props.projectDescription ?? ""}
          techStack={props.techStack}
          githubUrl={props.githubUrl}
          projectUrl={props.projectUrl}
        />
      </Grid>
      <Grid xs={11} sm={5} sx={{ mt: { xs: 8, sm: 0 } }}>
        <ProjectImage
          projectId={props.projectId}
          projectName={props.projectName}
        />
      </Grid>
    </Grid>
  );
};

// Project.propTypes = {};

export default ProjectListItem;
