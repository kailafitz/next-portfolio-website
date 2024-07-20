import React from "react";
import Shots from "./Shots";
import HeaderLink from "../HeaderLink";
import Stack from "@mui/material/Stack";
import SectionContainer from "../SectionContainer";

export const Dribbble = () => {
  return (
    <SectionContainer vh pt>
      <HeaderLink link="https://dribbble.com/kfitz47" label="Dribbble" />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "center", sm: "space-between" }}
        spacing={{ xs: 4, sm: 0 }}
        sx={{
          img: { width: { xs: "100%", sm: "30%" } },
        }}
      >
        <>
          <Shots />
        </>
      </Stack>
    </SectionContainer>
  );
};
