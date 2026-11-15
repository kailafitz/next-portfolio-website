const track = (eventName: string, params: Record<string, string>) => {
  if (typeof window === "undefined" || typeof gtag !== "function") return;
  gtag("event", eventName, params);
};

export const sendGA4ExternalPortfolioLink = (portfolioType: string) => {
  track("select_content", {
    content_type: "external_portfolio",
    item_id: portfolioType,
  });
};

export const sendGA4ContactIcon = (contactIcon: string) => {
  track("contact_click", {
    method: contactIcon,
  });
};

export const sendGA4LearnMoreOnProject = (projectName: string) => {
  track("select_content", {
    content_type: "project_details",
    item_id: projectName,
  });
};

export const sendGA4ProjectView = (projectName: string) => {
  track("select_content", {
    content_type: "project_url",
    item_id: projectName,
  });
};
