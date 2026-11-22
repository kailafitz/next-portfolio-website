import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import ProjectImage from "./ProjectImage";
import Typography from "@mui/material/Typography";
import { IProject } from "../../../_types";
import ProjectOverview from "./ProjectOverview";

const ProjectListItem = (props: IProject) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      columnSpacing={4}
      rowSpacing={4}
      data-aos="fade-up"
      sx={{
        border: "1px solid rgba(63, 42, 56, 0.08)",
        borderRadius: "28px",
        backgroundColor: "#fffdfb",
        p: { xs: 2.5, md: 4 },
        boxShadow: "0 18px 50px rgba(63, 42, 56, 0.05)",
      }}
    >
      <Grid xs={12} md={6}>
        <Typography
          variant="overline"
          sx={{
            color: "primary.dark",
            letterSpacing: "0.18em",
            fontWeight: 600,
          }}
        >
          {props.year}
        </Typography>
        <Box sx={{ mt: 1.5 }}>
          <ProjectOverview
            projectId={props.projectId}
            projectName={props.projectName}
            companyName={props.companyName ?? ""}
            projectDescription={props.projectDescription}
            techStack={props.techStack}
            githubUrl={props.githubUrl}
            projectUrl={props.projectUrl}
          />
        </Box>
      </Grid>
      <Grid xs={12} md={6}>
        <ProjectImage
          projectId={props.projectId}
          projectName={props.projectName}
        />
      </Grid>
    </Grid>
  );
};

export default ProjectListItem;
