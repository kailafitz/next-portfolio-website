import { styled } from "@mui/material/styles";

export const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(0, 0, 1, 0),
  marginTop: "-1px",
}));
