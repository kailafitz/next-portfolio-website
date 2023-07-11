"use client";
import React from "react";
import { reponsiveTheme } from "@/styles/Theme";
import { ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import Navigation from "./Components/Navigation";
import "../styles/styles.css";
import { Footer } from "./Components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <html lang="en">
      <body className={inter.className}>
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
