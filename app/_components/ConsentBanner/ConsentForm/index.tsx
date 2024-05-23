import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  test: React.Dispatch<React.SetStateAction<string>>;
};

export const ConsentForm = (props: Props) => {
  const [triggerGAPreferencesUpdate, setTriggerGAPreferencesUpdate] =
    useState(true); // used to send GA updates
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
  ); // GA object

  const pathname = usePathname();
  const router = useRouter();

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
        props.test("saved");
      }, 1000);
    } else {
      setTimeout(() => {
        props.test("not saved");
      }, 1000);
    }

    props.test("not set");
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
        <Button onClick={() => handleAllClick(false, true)}>Reject All</Button>
      </ButtonGroup>
    </>
  );
};
