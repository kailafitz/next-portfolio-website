import React from "react";

type Props = {};

const GTagBodyScript = (props: Props) => {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PKHDDR77"
        height="0"
        width="0"
        className="iframe-test"
      ></iframe>
    </noscript>
  );
};

export default GTagBodyScript;
