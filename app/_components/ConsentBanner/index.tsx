"use client";
import { StyledDialog } from "./styles";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Link from "../CustomLink";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ErrorFeedback, SuccessFeedback } from "./UserFeedbackSnackbar";
import { ConsentForm } from "./ConsentForm";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";

// https://dev.to/idboussadel/implementing-google-analytics-in-consent-mode-with-a-cookie-banner-for-nextjs-with-ts-1ga6
// https://blog.cloud66.com/google-tag-manager-consent-mode-v2-in-react
// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
// https://stackoverflow.com/questions/76300847/getting-referenceerror-localstorage-is-not-defined-even-after-adding-use-clien
// https://medium.com/@a.pirus/create-a-modal-that-can-be-opened-from-anywhere-in-next-js-13-36f6d0ce1bcf

const ConsentBanner = () => {
  const [showSnackbar, setShowSnackbar] = useState<string>("not set"); // show user feedback
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const router = useRouter();

  // const handleDefaultSettingOnClose = () => {
  //   return {
  //     all: false,
  //     showFeedback: false,
  //   };
  // };

  // useEffect(() => {
  //   let test = localStorage.getItem("consentMode");
  //   if (test) {
  //     setCurrentConsent(JSON.parse(test));
  //   }
  // }, [currentConsent]);

  return (
    <>
      <StyledDialog
        open={modal ? true : false}
        // onClose={(event, reason) => {
        //   handleDefaultSettingOnClose();
        //   router.push(pathname);
        // }}
        PaperProps={{
          sx: {
            p: 3,
            "& .MuiFormControlLabel-root": {
              justifyContent: "space-between",
            },
          },
        }}
      >
        <Typography variant="h3" sx={{ display: "flex", alignItems: "center" }}>
          Cookies <CookieOutlinedIcon sx={{ fontSize: "h3.fontSize", ml: 1 }} />
        </Typography>
        <Typography
          variant="body1"
          sx={{
            b: {
              fontWeight: 700,
            },
          }}
        >
          My website uses cookies to track your actvity on my website. This
          helps me to check the global reach of the website and to help identify
          improvements that could be made to the website. All data collected is{" "}
          <b>anonymous</b> and not inclusive of personal data that may be traced
          back in any way to an individual. If you are okay with this please
          keep the &quot;Analytics Storage&quot; toggle on. View our{" "}
          <Link color="primary.main" href="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          for more information.
        </Typography>
        <ConsentForm test={setShowSnackbar} />
      </StyledDialog>
      {showSnackbar === "saved" && <SuccessFeedback />}
      {showSnackbar === "not saved" && <ErrorFeedback />}
    </>
  );
};

export default ConsentBanner;
