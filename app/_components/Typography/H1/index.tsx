import { Typography } from "@mui/material";
import React from "react";

const H1 = (text: string, classes: Object) => {
  return <Typography sx={classes}>{text}</Typography>;
};

export default H1;
