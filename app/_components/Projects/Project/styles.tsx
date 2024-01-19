import { styled } from "@mui/material/styles";

export const StyledHr = styled("hr")(({ theme }) => ({
  border: `2px ${theme.palette.primary.main} solid`,
  margin: "0 10px 0 0",
}));
