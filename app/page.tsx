import React from "react";
import { Contact } from "./_components/Contact";
import { Projects } from "./_components/ProjectList";
import { Instagram } from "./_components/Instagram";
import { Dribbble } from "./_components/Dribbble";
import Intro from "./_components/Intro";
import Bio from "./_components/Bio";
import Box from "@mui/material/Box";
import { getProjects } from "./_lib/projects";

export const revalidate = 30;

export default async function Home() {
  const [personal, professional] = await Promise.all([
    getProjects("personal"),
    getProjects("professional"),
  ]);

  return (
    <main>
      <Intro />
      <Box className="body">
        <Bio />
        <Projects personal={personal} professional={professional} />
        <Dribbble />
        <Instagram />
        <Contact />
      </Box>
    </main>
  );
}
