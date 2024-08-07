import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Navigation from "./_components/Layout/Navigation";
import "./_styles/styles.scss";
import { reponsiveTheme } from "./_styles/Theme";
import GoogleAnalytics from "./_components/GoogleAnalytics";
import ConsentBanner from "./_components/ConsentBanner";
import { Metadata } from "next";
import GTagHeadScript from "./_components/GoogleAnalytics/GTagHeadScript";
import GTagBodyScript from "./_components/GoogleAnalytics/GTagBodyScript";
import "aos/dist/aos.css";
// import { Footer } from "./_components/Layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Mikhaila Fitzpatrick",
    default: "Mikhaila Fitzpatrick",
  },
  description:
    "The official website of frontend developer, Mikhaila Fitzpatrick.",
  metadataBase: new URL("https://mikhailafitzpatrick.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics
        GA_MEASUREMENT_ID={
          process.env.GA4_MEASUREMENT_ID ? process.env.GA4_MEASUREMENT_ID : ""
        }
      />
      <head>
        <GTagHeadScript GTAG_ID={process.env.GA4_GTM_ID ?? ""} />
        <meta charSet="utf-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" type="image/x-icon" href="./favicon.png" />
      </head>
      <body>
        <GTagBodyScript />
        <AppRouterCacheProvider options={{ key: "css", enableCssLayer: true }}>
          <ThemeProvider theme={reponsiveTheme}>
            <Navigation />
            {children}
            {/* <Footer /> */}
            <ConsentBanner />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
