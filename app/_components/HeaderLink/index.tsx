import Typography from "@mui/material/Typography";
import { IHeadingLinkSpan } from "../../_types";
import PropTypes from "prop-types";
import LinkSpan from "./LinkSpan";

const HeaderLink = (props: IHeadingLinkSpan) => {
  return (
    <>
      <Typography
        color="primary"
        variant="h2"
        fontWeight={300}
        sx={{
          width: "100%",
          span: {
            display: { xs: "block", sm: "inline" },
            width: { xs: "100%", sm: "unset" },
          },
        }}
      >
        <span>Catch me on </span>
        <LinkSpan label={props.label} link={props.link} />
      </Typography>
    </>
  );
};

HeaderLink.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
};

export default HeaderLink;
