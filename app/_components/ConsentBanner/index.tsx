"use client";
import { StyledDialog } from "./styles";
import { useState, useEffect, ReactNode } from "react";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert, { AlertColor } from "@mui/material/Alert";
import Link from "../CustomLink";

// https://www.reddit.com/r/reactjs/comments/oq1rtp/type_authors_author_is_not_assignable_to_type/

const SimpleSnackbar = ({
  show,
  message,
  type,
}: {
  show: boolean;
  message: ReactNode;
  type: AlertColor;
}) => {
  const [open, setOpen] = useState(show);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message=""
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity={type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

// https://dev.to/idboussadel/implementing-google-analytics-in-consent-mode-with-a-cookie-banner-for-nextjs-with-ts-1ga6
// https://blog.cloud66.com/google-tag-manager-consent-mode-v2-in-react
// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b

export default function ConsentBanner() {
  const [open, setOpen] = useState(true);
  const [triggerGAPreferencesUpdate, setTriggerGAPreferencesUpdate] =
    useState(true);
  const [showSnackbar, setShowSnackbar] = useState("not set");
  const [consent, setConsent] = useState({
    ad_storage: false,
    analytics_storage: true,
    ad_user_data: false,
    ad_personalization: false,
  });

  const handleAllClick = (all: boolean) => {
    setConsent({
      ad_storage: all,
      analytics_storage: all,
      ad_user_data: all,
      ad_personalization: all,
    });
    setTriggerGAPreferencesUpdate(!triggerGAPreferencesUpdate);
    setOpen(false);
    confirmGAPreferences();
  };

  const handleIndividualToggleClick = (test: string) => {
    setConsent({
      ...consent,
      [`${test}`]: !consent[test as keyof typeof consent],
    });
  };

  const confirmGAPreferences = () => {
    let localStorageString = localStorage.getItem("consentMode");
    let choicesMadeString = JSON.stringify(consent);

    if (localStorageString == choicesMadeString) {
      setTimeout(() => {
        setShowSnackbar("saved");
      }, 1000);
    } else {
      setTimeout(() => {
        setShowSnackbar("not saved");
      }, 1000);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("consentMode") !== null) {
      gtag("consent", "update", {
        ad_storage: consent.ad_storage ? "granted" : "denied",
        analytics_storage: consent.analytics_storage ? "granted" : "denied",
        ad_user_data: consent.ad_user_data ? "granted" : "denied",
        ad_personalization: consent.ad_personalization ? "granted" : "denied",
      });
    }
    localStorage.setItem("consentMode", JSON.stringify(consent));
  }, [triggerGAPreferencesUpdate]);

  return (
    <>
      <StyledDialog
        open={open}
        onClose={(event, reason) => {
          if (consent.analytics_storage === true) {
            handleIndividualToggleClick("analytics_storage");
          }
          if (consent.analytics_storage !== false) {
            setTriggerGAPreferencesUpdate(!triggerGAPreferencesUpdate);
            setOpen(false);
          }
        }}
        PaperProps={{
          sx: {
            p: 5,
            "& .MuiFormControlLabel-root": {
              justifyContent: "space-between",
            },
          },
        }}
      >
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
          keep the "Analytics Storage" toggle on. View our{" "}
          <Link color="primary.main" href="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          for more information.
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={consent.ad_storage}
                onChange={() => handleIndividualToggleClick("ad_storage")}
                name="adStorage"
              />
            }
            label="Ad Storage"
            labelPlacement="start"
          />
          <FormControlLabel
            control={
              <Switch
                checked={consent.ad_personalization}
                onChange={() =>
                  handleIndividualToggleClick("ad_personalization")
                }
                name="adPersonalization"
              />
            }
            label="Ad Personalisation"
            labelPlacement="start"
          />
          <FormControlLabel
            control={
              <Switch
                checked={consent.ad_user_data}
                onChange={() => handleIndividualToggleClick("ad_user_data")}
                name="adUserData"
              />
            }
            label="Ad User Data"
            labelPlacement="start"
          />
          <FormControlLabel
            control={
              <Switch
                checked={consent.analytics_storage}
                onChange={() =>
                  handleIndividualToggleClick("analytics_storage")
                }
                name="analyticsStorage"
              />
            }
            label="Analytics Storage"
            labelPlacement="start"
          />
        </FormGroup>
        <ButtonGroup>
          <Button
            onClick={() => {
              setTriggerGAPreferencesUpdate(!triggerGAPreferencesUpdate);
              setOpen(false);
              confirmGAPreferences();
            }}
          >
            Save my Choices
          </Button>
          <Button onClick={() => handleAllClick(true)}>Accept All</Button>
          <Button onClick={() => handleAllClick(false)}>Reject All</Button>
        </ButtonGroup>
      </StyledDialog>
      {showSnackbar === "saved" && (
        <SimpleSnackbar
          type="success"
          show={true}
          message={
            <>
              Your preferences have been successfully saved! To change your
              preferences, please visit our{" "}
              <Link
                href="/privacy-policy"
                color="common.white"
                sx={{ fontWeight: 700 }}
              >
                Privacy Policy
              </Link>
            </>
          }
        ></SimpleSnackbar>
      )}
      {showSnackbar === "not saved" && (
        <SimpleSnackbar
          type="error"
          show={true}
          message={
            <>
              Something has gone wrong. Please try again later or get in touch
              with me here at
              <Link
                href="mailto:mikhailafitzpatrick@gmail.com"
                color="common.white"
              >
                mikhailafitzpatrick@gmail.com
              </Link>
            </>
          }
        ></SimpleSnackbar>
      )}
    </>
  );
}
