"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import {
  Mail,
  Linkedin,
  Phone,
  GitHub,
  Dribbble,
  Instagram,
} from "react-feather";

export const Contact = () => {
  const theme = useTheme();
  return (
    <Box
      id="contact"
      position="relative"
      sx={{
        width: "100%",
        backgroundColor: "secondary.main",
        pt: 8,
        pb: 5,
      }}
    >
      <Stack
        className="mx-auto"
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        sx={{
          a: { transform: "scale(1)", transition: "all .3s ease-in" },
          "a:hover": {
            transform: "scale(1.5)",
            transition: "all .3s ease-in",
          },
          maxWidth: { xs: "80%", md: "30%" },
          // pb: { xs: 2, md: 1 },
          // "a:not(:last-child)": { mr: { md: 3 } },
        }}
      >
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          <Mail
            color={theme.palette.common.white}
            size={25}
            strokeWidth={1.1}
          />
        </Link>
        <Link href="tel:353862321667">
          <Phone
            color={theme.palette.common.white}
            size={25}
            strokeWidth={1.1}
          />
        </Link>
        <Link
          href="https://wa.me/353862321667"
          target="_blank"
          color="common.white"
        >
          <svg
            fill="#fff"
            width="23"
            height="23"
            viewBox="0 0 199.99996 200.01354"
            version="1.1"
          >
            <path
              d="M 100.00002,0 A 100.02594,100.02594 0 0 0 13.114276,149.53908 l -9.0043998,31.51661 a 11.99971,11.99971 0 0 0 14.8349998,14.834 l 31.5166,-9.00391 A 100.00677,100.00677 0 1 0 100.00002,0 Z m 0,192 a 91.87082,91.87082 0 0 1 -46.952644,-12.86719 3.99494,3.99494 0 0 0 -3.14355,-0.4082 l -33.15723,9.47363 a 3.99979,3.99979 0 0 1 -4.94434,-4.94531 l 9.47266,-33.15625 a 4.00111,4.00111 0 0 0 -0.4082,-3.14355 A 92.01077,92.01077 0 1 1 100.00002,192 Z m 50.51123,-73.457 -20.45947,-11.69141 a 12.01054,12.01054 0 0 0 -12.12745,0.12891 l -13.80664,8.28418 A 44.04183,44.04183 0 0 1 84.735366,95.88187 l 8.28369,-13.80664 a 12.0108,12.0108 0 0 0 0.12891,-12.127 l -11.69092,-20.46 A 10.91584,10.91584 0 0 0 71.999526,44 a 32.00811,32.00811 0 0 0 -32,31.88086 A 84.001,84.001 0 0 0 123.99853,160 h 0.12012 a 32.00842,32.00842 0 0 0 31.88088,-32 10.913,10.913 0 0 0 -5.48828,-9.457 z M 124.10744,152 h -0.1084 a 75.99972,75.99972 0 0 1 -75.999514,-76.1074 23.997,23.997 0 0 1 24,-23.8926 2.89975,2.89975 0 0 1 2.51172,1.457 l 11.69092,20.461 a 4.00418,4.00418 0 0 1 -0.043,4.042 l -9.38916,15.64844 a 3.9987,3.9987 0 0 0 -0.21826,3.69824 52.04112,52.04112 0 0 0 26.141604,26.1416 3.99707,3.99707 0 0 0 3.69873,-0.21875 l 15.64745,-9.38869 a 4.006,4.006 0 0 1 4.043,-0.0439 l 20.46045,11.69238 A 2.89712,2.89712 0 0 1 147.99953,128 23.99725,23.99725 0 0 1 124.10744,152 Z"
              id="path833"
            />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/mikhaila-fitzpatrick-701848141/"
          target="_blank"
        >
          <Linkedin
            color={theme.palette.common.white}
            size={25}
            strokeWidth={1.1}
          />
        </Link>
        <Link href="https://github.com/kailafitz" target="_blank">
          <GitHub
            color={theme.palette.common.white}
            size={25}
            strokeWidth={1.1}
          />
        </Link>
        <Link href="https://dribbble.com/kfitz47" target="_blank">
          <Dribbble
            color={theme.palette.common.white}
            size={25}
            strokeWidth={1.1}
          />
        </Link>
        <Link href="https://www.instagram.com/kaila.fizz/" target="_blank">
          <Instagram
            color={theme.palette.common.white}
            size={25}
            strokeWidth={1.1}
          />
        </Link>
      </Stack>
    </Box>
  );
};
