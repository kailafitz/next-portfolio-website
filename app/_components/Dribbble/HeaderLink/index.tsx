import { Link, Typography } from "@mui/material";

export const HeaderLink = () => {
  return (
    <Link
      href="https://dribbble.com/kfitz47"
      target="_blank"
      underline="none"
      color="common.black"
    >
      <Typography
        color="secondary"
        variant="h3"
        textAlign="center"
        fontWeight={600}
      >
        Catch me on Dribbble
      </Typography>
    </Link>
  );
};
