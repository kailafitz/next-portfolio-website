"use client";
import { styled } from "@mui/material/styles";
import { Dialog } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  zIndex: 1,
  backgroundColor: "#0000007d",
})) as typeof Dialog;
