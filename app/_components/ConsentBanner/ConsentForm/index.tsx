import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { usePathname, useRouter } from "next/navigation";
import { Stack } from "@mui/material";
import { IConsent } from "../../../_types";

const ConsentForm = (props: IConsent) => {
  const [triggerGAPreferencesUpdate, setTriggerGAPreferencesUpdate] =
    useState(true); // used to send GA updates
  const [consent, setConsent] = useState({
    ad_storage: false,
    analytics_storage: true,
    ad_user_data: false,
    ad_personalization: false,
  }); // GA object

  const pathname = usePathname();
  const router = useRouter();

  const confirmGAPreferences = () => {
    let localStorageString = localStorage.getItem("consentMode");
    let choicesMadeString = JSON.stringify(consent);

    if (localStorageString === choicesMadeString) {
      setTimeout(() => {
        props.sendFeedbackBoolean("saved");
      }, 100);
    } else {
      setTimeout(() => {
        props.sendFeedbackBoolean("not saved");
      }, 100);
    }
  };

  const handleAllClick = (all: boolean) => {
    setConsent({
      ad_storage: all,
      analytics_storage: all,
      ad_user_data: all,
      ad_personalization: all,
    });
    confirmGAPreferences();

    router.push(pathname);
  };

  const handleIndividualToggleClick = (key: string) => {
    setConsent({
      ...consent,
      [`${key}`]: !consent[key as keyof typeof consent],
    });
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
  }, [triggerGAPreferencesUpdate, consent]);

  return (
    <>
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
              onChange={() => handleIndividualToggleClick("ad_personalization")}
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
              onChange={() => handleIndividualToggleClick("analytics_storage")}
              name="analyticsStorage"
            />
          }
          label="Analytics Storage"
          labelPlacement="start"
        />
      </FormGroup>

      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          button: {
            "&:not(:last-child)": { mb: { xs: 2, md: 0 }, mr: { md: 1 } },
            flexGrow: 1,
          },
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            setTriggerGAPreferencesUpdate(!triggerGAPreferencesUpdate);
            router.push(pathname);
            confirmGAPreferences();
          }}
        >
          Save my Choices
        </Button>
        <Button variant="contained" onClick={() => handleAllClick(true)}>
          Accept All
        </Button>
        <Button variant="outlined" onClick={() => handleAllClick(false)}>
          Reject All
        </Button>
      </Stack>
    </>
  );
};

export default ConsentForm;
