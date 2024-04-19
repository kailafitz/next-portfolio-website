import Script from "next/script";
import React from "react";

const GoogleAnalytics = ({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) => {
  return (
    <>
      <Script
        id="GAScript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                gtag('consent', 'default', {
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied',
                  'wait_for_update': 500,
                });
            `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_MEASUREMENT_ID}');
            `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;

// https://github.com/vercel/next.js/discussions/20784
