import React, { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { usePathname, useRouter } from "next/navigation";
import { Stack } from "@mui/material";
import { IConsent } from "../../../_types";

const CONSENT_STORAGE_KEY = "consentMode";

type ConsentChoices = {
  ad_storage: boolean;
  analytics_storage: boolean;
  ad_user_data: boolean;
  ad_personalization: boolean;
};

const deniedChoices: ConsentChoices = {
  ad_storage: false,
  analytics_storage: false,
  ad_user_data: false,
  ad_personalization: false,
};

const ConsentForm = (props: IConsent) => {
  const [consent, setConsent] = useState<ConsentChoices>(deniedChoices);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as Partial<ConsentChoices>;
      setConsent({
        ad_storage: !!parsed.ad_storage,
        analytics_storage: !!parsed.analytics_storage,
        ad_user_data: !!parsed.ad_user_data,
        ad_personalization: !!parsed.ad_personalization,
      });
    } catch {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
    }
  }, []);

  const applyConsent = (choices: ConsentChoices) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choices));
    setConsent(choices);

    if (typeof gtag === "function") {
      const toStatus = (value: boolean) => (value ? "granted" : "denied");
      gtag("consent", "update", {
        ad_storage: toStatus(choices.ad_storage),
        analytics_storage: toStatus(choices.analytics_storage),
        ad_user_data: toStatus(choices.ad_user_data),
        ad_personalization: toStatus(choices.ad_personalization),
      });
    }

    props.sendFeedbackBoolean("saved");
    router.push(pathname);
  };

  const handleIndividualToggleClick = (key: keyof ConsentChoices) => {
    setConsent({
      ...consent,
      [key]: !consent[key],
    });
  };

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
        <Button variant="contained" onClick={() => applyConsent(consent)}>
          Save my Choices
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            applyConsent({
              ad_storage: true,
              analytics_storage: true,
              ad_user_data: true,
              ad_personalization: true,
            })
          }
        >
          Accept All
        </Button>
        <Button variant="outlined" onClick={() => applyConsent(deniedChoices)}>
          Reject All
        </Button>
      </Stack>
    </>
  );
};

export default ConsentForm;
