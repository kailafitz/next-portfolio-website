"use client";
import { Button, IconButton } from "@mui/material";
import { StyledFooter } from "./styles";
import GitHubIcon from "@mui/icons-material/Github";

export const Footer = () => {
  return (
    <StyledFooter>
      <Button>
        <GitHubIcon htmlColor="#fff" sx={{ width: "2rem", height: "2rem" }} />
      </Button>
    </StyledFooter>
  );
};
