"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navigation from "./_components/Navigation";
import "./_styles/styles.scss";
import { Footer } from "./_components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactGA from "react-ga4";
import Script from "next/script";
import { reponsiveTheme } from "./_styles/Theme";
import GoogleAnalytics from "./_components/GoogleAnalytics";
import ConsentBanner from "./_components/ConsentBanner";

ReactGA.initialize("G-C3NSFRZ1Q2");

// <GoogleAnalytics GA_MEASUREMENT_ID="G-C3NSFRZ1Q2" />;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <html lang="en">
      <Script
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
          gtag('config', 'G-C3NSFRZ1Q2');
        `,
        }}
      />
      <head>
        <Script>
          {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PKHDDR77');`}
        </Script>
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>fizz | Mikhaila Fitzpatrick</title>
        <link rel="icon" type="image/x-icon" href="./favicon.png" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PKHDDR77"
            height="0"
            width="0"
            className="iframe-test"
          ></iframe>
        </noscript>
        <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={reponsiveTheme}>
              <Navigation />
              {children}
              <ConsentBanner />
              <Footer />
            </ThemeProvider>
          </QueryClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
