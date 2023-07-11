import { styled } from "@mui/material/styles";

export const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: `${theme.palette.secondary.main}`,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: theme.spacing(2, 0),
}));
