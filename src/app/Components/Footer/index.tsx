"use client";
import { Button, useTheme } from "@mui/material";
import { StyledFooter } from "./styles";
import { GitHub } from "react-feather";

export const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter>
      <Button>
        <GitHub
          color={theme.palette.primary.main}
          size={48}
          strokeWidth={1.1}
        />
      </Button>
    </StyledFooter>
  );
};
