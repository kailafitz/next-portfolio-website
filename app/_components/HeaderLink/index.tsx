"use client";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import LaunchIcon from "@mui/icons-material/Launch";
import ReactGA from "react-ga4";
import { Header } from "../../_types";
import PropTypes from "prop-types";

const HeaderLink = (props: Header) => {
  const sendGA4Social = (projectName: String) => {
    ReactGA.event({
      category: "link_clicked",
      action: "View Dribbble/ Instagram",
      label: `${projectName}`,
    });
  };

  return (
    <>
      <Typography
        color="primary"
        variant="h2"
        textAlign="left"
        fontWeight={300}
        sx={{
          width: "100%",
          mb: props.subtitle !== undefined ? 1.5 : { xs: 8, sm: 16 },
          span: {
            display: { xs: "block", sm: "inline" },
            width: { xs: "100%", sm: "unset" },
          },
        }}
      >
        <span>Catch me on </span>
        <span>
          <Link
            onClick={() => sendGA4Social(props.label)}
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

HeaderLink.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  subtitle: PropTypes.string,
};

export default HeaderLink;
