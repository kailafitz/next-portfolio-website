import { Fraunces, Outfit } from "next/font/google";

export const display = Fraunces({
  weight: ["300", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const sans = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const urban = display;
export const open = sans;
