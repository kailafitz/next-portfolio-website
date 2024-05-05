import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import LaunchIcon from "@mui/icons-material/Launch";
import Box from "@mui/material/Box";

type HeaderLinkProps = {
  link: string;
  label: string;
  subtitle?: string | undefined;
};

export const HeaderLink = (props: HeaderLinkProps) => {
  return (
    <>
      <Typography
        color="secondary"
        variant="h3"
        textAlign="center"
        fontWeight={300}
        sx={{
          width: "100%",
          mb: props.subtitle !== undefined ? 1.5 : 3,
          span: {
            display: { xs: "block", md: "inline" },
            width: { xs: "100%", md: "unset" },
          },
        }}
      >
        <span>Catch me on </span>
        <span>
          <Link
            href={props.link}
            target="_blank"
            underline="none"
            color="secondary.main"
            fontWeight={600}
            sx={{
              textShadow: "3px 5px 3px #0000002b",
              transition: "text-shadow .6s ease",
              svg: {
                transform: "scale(1)",
                paddingLeft: 1,
                marginBottom: 0,
                transition: "all .3s ease-in",
              },
              "&:hover": {
                textShadow: "0px 0px 0px #0000002b",
                transition: "text-shadow .6s ease",
                svg: {
                  transform: "scale(1.6)",
                  paddingLeft: 1.2,
                  marginBottom: 0.3,
                  transition: "all .3s ease-in",
                },
              },
            }}
          >
            {props.label}
            <LaunchIcon sx={{ width: "20px", height: "20px" }} />
          </Link>
        </span>
      </Typography>
      {props.subtitle !== undefined && (
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ width: "100%", mb: 6 }}
        >
          {props.subtitle}
        </Typography>
      )}
    </>
  );
};
