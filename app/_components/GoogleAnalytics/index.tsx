"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";
import ReactGA from "react-ga4";
import PropTypes from "prop-types";
import AOS from "aos";

ReactGA.initialize(process.env.GA4_MEASUREMENT_ID ?? "Placeholder");

const GoogleAnalytics = ({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) => {
  const router = useRouter();

  useEffect(() => {
    const localStorageCookies = localStorage.getItem("consentMode");
    if (localStorageCookies === null) {
      router.push("?modal=true");
    }

    AOS.init();
  }, []);

  return (
    <>
      <Script
        id="GA"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag() { window.dataLayer.push(arguments) }

          if (localStorage.getItem('consentMode') === null) {
            gtag("consent", "default", {
              ad_storage: "denied",
              analytics_storage: "denied",
              personalization_storage: "denied",
              functionality_storage: "denied",
              security_storage: "denied",
            })
          }
          else {
            gtag(
              "consent",
              "default",
              JSON.parse(localStorage.getItem("consentMode"))
            )
          }

          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `,
        }}
      />
    </>
  );
};

GoogleAnalytics.propTypes = {
  GA_MEASUREMENT_ID: PropTypes.string,
};

export default GoogleAnalytics;

// https://github.com/vercel/next.js/discussions/20784
