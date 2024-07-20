import ReactGA from "react-ga4";

export const sendGA4ExternalPortfolioLink = (PortfolioType: String) => {
  ReactGA.event({
    category: "link_clicked",
    action: "View Dribbble/ Instagram",
    label: `${PortfolioType}`,
  });
};

export const sendGA4ContactIcon = (ContactIcon: String) => {
  ReactGA.event({
    category: "link_clicked",
    action: "Contact me through social media icon",
    label: `${ContactIcon}`,
  });
};

export const sendGA4LearnMoreOnProject = (projectName: String) => {
  ReactGA.event({
    category: "link_clicked",
    action: "Learn more on the Project",
    label: `${projectName}`,
  });
};

export const sendGA4ProjectView = (projectName: String) => {
  ReactGA.event({
    category: "link_clicked",
    action: "View Project URL",
    label: `${projectName}`,
  });
};
