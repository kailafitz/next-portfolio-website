"use client";
import { Button, useTheme } from "@mui/material";
import { StyledFooter } from "./styles";
import { GitHub } from "react-feather";

export const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter>
      <Button href="https://github.com/kailafitz" target="_blank">
        <GitHub
          color={theme.palette.common.white}
          size={48}
          strokeWidth={1.1}
        />
      </Button>
    </StyledFooter>
  );
};
