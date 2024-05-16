// type Projects = {};

export const ProjectData = [
  {
    projectId: "1",
    projectName: "Lancer",
    projectDescription:
      "My final project for CS50x, an online introductory course on computer science taught at Harvard University and Yale University.",
    year: "2022",
    techStack: [
      {
        src: "react.png",
        alt: "React",
      },
      {
        src: "flask.png",
        alt: "Flask",
      },
      {
        src: "python.png",
        alt: "Python",
      },
      {
        src: "sqlite.png",
        alt: "SQLite3",
      },
      {
        src: "bootstrap.png",
        alt: "Bootstrap",
      },
    ],
    projectURL: "https://kailafitz.pythonanywhere.com",
    githubURL: "https://github.com/kailafitz/lancer",
    projectDetails: [
      {
        sectionTitle: "Background",
        sectionDetails:
          "I wanted to incorporate a lot of my learnings from the CS50x course into this final project. Using Python and flask was a good starting point that we had been introduced to and it enabled me to implement my idea. Combining this backend setup with my React frontend background became a great stack to go ahead and build Lancer.",
      },
      {
        sectionTitle: "The Spec",
        sectionDetails:
          "Lancer is a filing system for freelancers so they may keep track of invoices and tax records.A login system is in place so that users may keep a personal account of their individual records. Employers and job details can be inputted into the system and a mini dashboard is also available for an overview of the income earned and the tax due on an annual basis.This project is roughly based on the Irish income tax brackets.",
      },
    ],
  },
];

export const ProfessionalProjectData = [
  {
    projectId: "2",
    projectName: "Pure Divilment Pictures",
    projectDescription:
      "Corporate website for a production company based in Dublin.",
    year: "2023",
    techStack: [
      {
        src: "react.png",
        alt: "React",
      },
      {
        src: "ts.webp",
        alt: "TypeScript",
      },
      {
        src: "mui.png",
        alt: "MaterialUI",
      },
    ],
    projectURL: "https://puredivilmentpictures.com",
    githubURL: "https://github.com/kailafitz/pure-divilment-pictures",
    projectDetails: [
      {
        sectionTitle: "Background",
        sectionDetails:
          "Pure Divilment Pictures is a female-lead production company in Ireland. The purpose of the website was to establish a 'home' on the internet, a digital presence that would allow them top showcase their company but their work as they continue to grow.",
      },
      {
        sectionTitle: "The Spec",
        sectionDetails:
          "Client wanted a clean and minimalist B&W website with visuals bringing the website to life. This really highlights the work carried out by the company. The website was to be made with no fuss or clutter, whilst providing relevant and necessary information about various aspects of the company and its employees and services.",
      },
    ],
  },
];
