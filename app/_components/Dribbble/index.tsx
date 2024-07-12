import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Shots from "./Shots";
import HeaderLink from "../HeaderLink";

export const Dribbble = () => {
  return (
    <Box
      sx={{ pb: { xs: 8, md: 12 } }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Container>
        <Container>
          <HeaderLink link="https://dribbble.com/kfitz47" label="Dribbble" />
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            className="mx-auto"
            sx={{
              maxWidth: { xs: "100%", sm: "70%" },
              img: { width: { xs: "100%", md: "300px" } },
              "img:not(:last-child)": {
                mr: { xs: 0, md: 5 },
                mb: { xs: 5, md: 0 },
              },
            }}
          >
            {/* <div></div> */}
            <Shots />
          </Box>
        </Container>
      </Container>
    </Box>
  );
};
