import React from "react";
import { Smartphone, Settings, User } from "react-feather";
import Stack from "@mui/material/Stack";
import { secondary } from "../../../_styles/Palette";

const BioIcons = () => {
  let size = 100;
  return (
    <Stack
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent={{ xs: "center", md: "space-around" }}
      alignItems="center"
      spacing={{ xs: 7, md: 2 }}
      sx={{
        width: { xs: "fit-content", md: "100%" },
        margin: { xs: "0 auto" },
      }}
    >
      <Settings
        color={secondary.main}
        size={size}
        strokeWidth={1.2}
        data-aos="fade-up"
        data-aos-delay={1 * 100}
      />

      <User
        color={secondary.main}
        size={size}
        strokeWidth={1.2}
        data-aos="fade-up"
        data-aos-delay={2 * 100}
      />

      <Smartphone
        color={secondary.main}
        size={size}
        strokeWidth={1.2}
        data-aos="fade-up"
        data-aos-delay={3 * 100}
      />
    </Stack>
  );
};

export default BioIcons;
