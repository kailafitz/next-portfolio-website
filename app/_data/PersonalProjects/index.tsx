export const PersonalProjectData = [
  {
    projectId: "3",
    projectName: "The Cocktail Club",
    projectDescription: "A virtual space for the art of mixology.",
    year: "2024",
    techStack: [
      {
        src: "react.png",
        alt: "React",
      },
      {
        src: "node.png",
        alt: "Node",
      },
      {
        src: "ts.webp",
        alt: "TypeScript",
      },
      {
        src: "mui.png",
        alt: "Material UI",
      },
      {
        src: "postgresql.png",
        alt: "PostgreSQL",
      },
      {
        src: "react-hook-form.png",
        alt: "React Hook Form",
      },
      {
        src: "passport.png",
        alt: "Passport",
      },
      {
        src: "aws.png",
        alt: "Amazon S3",
      },
      {
        src: "firebase.png",
        alt: "Firebase",
      },
    ],
    projectUrl: "https://the-cocktail-club-co-657c5.web.app/",
    githubUrl: "https://github.com/kailafitz/the-cocktail-club",
    projectDetails: [
      {
        sectionTitle: "Background",
        sectionDetails:
          "I actually started this project back in January 2023 and I thought it would be useful to not update everything to the latest technologies. Even though frameworks such as Next.js has revolutionised routing and data fetching in the frontend, I still felt it necessary to remind myself of the coding practises of libraries such as React-Router, React-Query and React-Hook-Form in 2024 given how it will take time for many companies to adjust to the ever changing landscape that is frontend development!.",
      },
      {
        sectionTitle: "The Spec",
        sectionDetails:
          "I wanted to dig a little deeper into the Node.js environment so I chose to couple an Express.js backend with my CRA frontend. I also wanted to elevate from a localised SQLite database to a hosted PostgreSQL database which was a nice learning curve and step up from my project Lancer.",
      },
    ],
  },
  {
    projectId: "1",
    projectName: "Lancer",
    projectDescription:
      "A web app for freelancers to help keep track of employment records for invoicing and tax. My final project for CS50x, an online introductory course to computer science taught at Harvard University.",
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
  },
];
