import React from "react";
import { Contact } from "./_components/Contact";
import { Projects } from "./_components/Projects";
import { Instagram } from "./_components/Instagram";
import { Dribbble } from "./_components/Dribbble";
import Intro from "./_components/Intro";
import { Metadata } from "next";
import Bio from "./_components/Bio";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main>
      <Intro />
      <Box className="body">
        <Bio />
        <Projects />
        {/* <Dribbble /> */}
        <Instagram />
        <Contact />
      </Box>
    </main>
  );
}
