import Typography from "@mui/material/Typography";
import React from "react";

type Props = {};

const Bio = (props: Props) => {
  return (
    <>
      <Typography>My services and skills</Typography>
      <ul>
        <li>UI developer</li>
        <li>UI designer</li>
        <li>Graphic designer</li>
      </ul>
    </>
  );
};

export default Bio;
