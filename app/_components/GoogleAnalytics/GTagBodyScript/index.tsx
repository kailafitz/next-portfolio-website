import React from "react";

const GTagBodyScript = () => {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.GA4_GTM_ID}`}
        height="0"
        width="0"
        className="iframe-test"
      ></iframe>
    </noscript>
  );
};

export default GTagBodyScript;
