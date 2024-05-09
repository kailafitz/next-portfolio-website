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
import { useSearchParams, usePathname, useRouter } from "next/navigation";

// https://www.reddit.com/r/reactjs/comments/oq1rtp/type_authors_author_is_not_assignable_to_type/

const UserFeedbackSnackbar = ({
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
        sx={{ maxWidth: "80%" }}
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
// https://stackoverflow.com/questions/76300847/getting-referenceerror-localstorage-is-not-defined-even-after-adding-use-clien
// https://medium.com/@a.pirus/create-a-modal-that-can-be-opened-from-anywhere-in-next-js-13-36f6d0ce1bcf

const ConsentBanner = () => {
  const [triggerGAPreferencesUpdate, setTriggerGAPreferencesUpdate] =
    useState(true);
  const [showSnackbar, setShowSnackbar] = useState("not set");
  const [currentConsent, setCurrentConsent] = useState();
  const [consent, setConsent] = useState(
    currentConsent
      ? currentConsent
      : {
          ad_storage: false,
          analytics_storage: true,
          ad_user_data: false,
          ad_personalization: false,
        }
  );

  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let test = localStorage.getItem("consentMode");
    if (test) {
      setCurrentConsent(JSON.parse(test));
    }
  }, [currentConsent]);

  const handleAllClick = (all: boolean, showFeedback: boolean) => {
    setConsent({
      ad_storage: all,
      analytics_storage: all,
      ad_user_data: all,
      ad_personalization: all,
    });
    {
      showFeedback &&
        setTriggerGAPreferencesUpdate(!triggerGAPreferencesUpdate);
    }

    router.push(pathname);
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

    setShowSnackbar("not set");
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

    confirmGAPreferences();
  }, [triggerGAPreferencesUpdate]);

  return (
    <>
      <StyledDialog
        open={modal ? true : false}
        onClose={(event, reason) => {
          handleAllClick(false, false);
          router.push(pathname);
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
        <Typography variant="h3">Cookies</Typography>
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
        <FormGroup sx={{ my: 3 }}>
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
        <ButtonGroup
          disableElevation
          fullWidth
          size="small"
          orientation="vertical"
          variant="text"
          // sx={{
          //   button: { borderBottom: "none", ":not(last-child)": { mb: 2 } },
          // }}
        >
          <Button
            onClick={() => {
              setTriggerGAPreferencesUpdate(!triggerGAPreferencesUpdate);
              router.push(pathname);
              confirmGAPreferences();
            }}
          >
            Save my Choices
          </Button>
          <Button onClick={() => handleAllClick(true, true)}>Accept All</Button>
          <Button onClick={() => handleAllClick(false, true)}>
            Reject All
          </Button>
        </ButtonGroup>
      </StyledDialog>
      {showSnackbar === "saved" && (
        <UserFeedbackSnackbar
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
        ></UserFeedbackSnackbar>
      )}
      {showSnackbar === "not saved" && (
        <UserFeedbackSnackbar
          type="error"
          show={true}
          message={
            <>
              Something has gone wrong. Please try again later or get in touch
              with me here at{" "}
              <Link
                href="mailto:mikhailafitzpatrick@gmail.com"
                color="common.white"
              >
                mikhailafitzpatrick@gmail.com
              </Link>
            </>
          }
        ></UserFeedbackSnackbar>
      )}
    </>
  );
};

export default ConsentBanner;
