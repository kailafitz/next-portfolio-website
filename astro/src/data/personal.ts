import type { Project } from "../lib/types";

/** Local dev only — production reads from Supabase. Keep in sync with DB when possible. */
export const PersonalProjectData: Project[] = [
  {
    slug: "lancer",
    projectName: "Lancer",
    projectDescription:
      "A web app for freelancers to help keep track of employment records for invoicing and tax. My final project for CS50x, an online introductory course to computer science taught at Harvard University.",
    year: "2022",
    techTags: ["React", "Flask", "Python", "SQLite"],
    projectUrl: "https://kailafitz.pythonanywhere.com",
    githubUrl: "https://github.com/kailafitz/lancer",
    projectDetails: [
      {
        sectionTitle: "Background",
        sectionDetails:
          "I wanted to incorporate a lot of my learnings from the CS50x course into this final project. Using Python and flask was a good starting point that we had been introduced to and it enabled me to implement my idea. Combining this backend setup with my React frontend background became a great stack to go ahead and build Lancer.",
      },
      {
        sectionTitle: "The Spec",
        sectionDetails:
          "Lancer is a filing system for freelancers so they may keep track of invoices and tax records. A login system is in place so that users may keep a personal account of their individual records. Employers and job details can be inputted into the system and a mini dashboard is also available for an overview of the income earned and the tax due on an annual basis.This project is roughly based on the Irish income tax brackets.",
      },
    ],
    valueProposition:
      "Freelancer records for invoicing and tax (CS50x capstone).",
    role: "Freelance developer",
    outcome: "Full-stack CRUD app with auth and reporting.",
  },
];