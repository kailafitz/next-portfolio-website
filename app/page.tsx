"use client";
import React from "react";
import { Contact } from "./_components/Contact";
import { Projects } from "./_components/Projects";
import { Instagram } from "./_components/Instagram";
import { Dribbble } from "./_components/Dribbble";
import Intro from "./_components/Intro";

export default function Home() {
  return (
    <main>
      <Intro />
      <Projects />
      <Dribbble />
      <Instagram />
      <Contact />
    </main>
  );
}
