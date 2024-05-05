"use client";
import { StyledFooter } from "./styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {
  Mail,
  Linkedin,
  Phone,
  GitHub,
  Dribbble,
  Instagram,
} from "react-feather";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Link from "../CustomLink";
import Container from "@mui/material/Container";

export const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter id="contact">
      <Container>
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
            pb: { xs: 2, md: 1 },
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

        <Box
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={{ xs: 2, md: 1 }}
        >
          <Typography variant="body1">
            <Link color="common.white" href="privacy-policy">
              Privacy
            </Link>
          </Typography>
          <Typography variant="body1" color="common.white" mx={1}>
            |
          </Typography>
          <Typography variant="body1">
            <Link color="common.white" href="cookies-policy">
              Cookies
            </Link>
          </Typography>
        </Box>

        <Typography
          variant="copyright"
          sx={{
            typography: { xs: "body2", md: "copyright" },
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            svg: {
              mr: 1,
            },
          }}
        >
          <svg
            className="mr-1 temp-size"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="31"
              cy="31"
              r="29"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              d="M45.6648 25H41.2614C41.0009 23.7334 40.5452 22.6207 39.8942 21.6619C39.255 20.7031 38.4737 19.8982 37.5504 19.2472C36.639 18.5843 35.6269 18.0871 34.5142 17.7557C33.4015 17.4242 32.2415 17.2585 31.0341 17.2585C28.8324 17.2585 26.8378 17.8149 25.0504 18.9276C23.2749 20.0402 21.8603 21.6797 20.8068 23.8459C19.7652 26.0121 19.2443 28.6695 19.2443 31.8182C19.2443 34.9669 19.7652 37.6243 20.8068 39.7905C21.8603 41.9567 23.2749 43.5961 25.0504 44.7088C26.8378 45.8215 28.8324 46.3778 31.0341 46.3778C32.2415 46.3778 33.4015 46.2121 34.5142 45.8807C35.6269 45.5492 36.639 45.058 37.5504 44.407C38.4737 43.7441 39.255 42.9332 39.8942 41.9744C40.5452 41.0038 41.0009 39.8911 41.2614 38.6364H45.6648C45.3333 40.4948 44.7296 42.1579 43.8537 43.6257C42.9777 45.0935 41.8887 46.3423 40.5866 47.3722C39.2846 48.3902 37.8227 49.1655 36.201 49.6982C34.5911 50.2308 32.8688 50.4972 31.0341 50.4972C27.9328 50.4972 25.1747 49.7396 22.7599 48.2244C20.3452 46.7093 18.4453 44.5549 17.0604 41.7614C15.6754 38.9678 14.983 35.6534 14.983 31.8182C14.983 27.983 15.6754 24.6686 17.0604 21.875C18.4453 19.0814 20.3452 16.9271 22.7599 15.4119C25.1747 13.8968 27.9328 13.1392 31.0341 13.1392C32.8688 13.1392 34.5911 13.4055 36.201 13.9382C37.8227 14.4709 39.2846 15.2521 40.5866 16.282C41.8887 17.3 42.9777 18.5428 43.8537 20.0107C44.7296 21.4666 45.3333 23.1297 45.6648 25Z"
              fill="currentColor"
            />
          </svg>
          copyright {new Date().getFullYear()}
        </Typography>
      </Container>
    </StyledFooter>
  );
};
