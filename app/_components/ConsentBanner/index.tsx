"use client";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "next/navigation";
import { ErrorFeedback, SuccessFeedback } from "./UserFeedbackSnackbar";
import ConsentForm from "./ConsentForm";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import Dialog from "@mui/material/Dialog";

// https://dev.to/idboussadel/implementing-google-analytics-in-consent-mode-with-a-cookie-banner-for-nextjs-with-ts-1ga6
// https://blog.cloud66.com/google-tag-manager-consent-mode-v2-in-react
// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
// https://stackoverflow.com/questions/76300847/getting-referenceerror-localstorage-is-not-defined-even-after-adding-use-clien
// https://medium.com/@a.pirus/create-a-modal-that-can-be-opened-from-anywhere-in-next-js-13-36f6d0ce1bcf

const ConsentBanner = () => {
  const [showSnackbar, setShowSnackbar] = useState<string>("not set"); // show user feedback
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  return (
    <>
      <Dialog
        aaria-labelledby="Analytics Consent Modal"
        open={modal ? true : false}
        sx={{
          zIndex: 1,
          bgcolor: "#0000007d",
        }}
        PaperProps={{
          sx: {
            p: 3,
            "& .MuiFormControlLabel-root": {
              justifyContent: "space-between",
            },
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ display: "flex", alignItems: "center", mb: 2 }}
        >
          Cookies{" "}
          <CookieOutlinedIcon sx={{ fontSize: "h3.fontSize", ml: 0.5 }} />
        </Typography>
        <Typography
          variant="body1"
          sx={{
            b: {
              fontWeight: 700,
            },
          }}
        >
          Cookies are used on this website to collect data on user activity.
          This data is not shared with any third-parties and is only used to
          ensure that the website is functioning properly. View{" "}
          <Link
            component={NextLink}
            color="primary.main"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>{" "}
          for more information.
        </Typography>
        <ConsentForm sendFeedbackBoolean={setShowSnackbar} />
      </Dialog>

      {showSnackbar === "saved" ? (
        <SuccessFeedback />
      ) : showSnackbar === "not saved" ? (
        <ErrorFeedback />
      ) : null}
    </>
  );
};

export default ConsentBanner;
