"use client";
import React from "react";
import { ThemeProvider } from "@mui/material";
import Navigation from "./_components/Navigation";
import "./_styles/styles.css";
import { Footer } from "./_components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import ReactGA from "react-ga4";
import Script from "next/script";
import { reponsiveTheme } from "./_styles/Theme";

ReactGA.initialize("G-C3NSFRZ1Q2");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-C3NSFRZ1Q2"
        ></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C3NSFRZ1Q2');
          `}
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
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={reponsiveTheme}>
            <Navigation />
            {children}
            <Footer />
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
