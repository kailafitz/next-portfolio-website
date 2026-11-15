"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AOS from "aos";

const CONSENT_STORAGE_KEY = "consentMode";
let lastPageView = "";

const GoogleAnalyticsEffects = ({ measurementId }: { measurementId: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem(CONSENT_STORAGE_KEY) === null) {
      router.push("?modal=true");
    }
    AOS.init();
  }, [router]);

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    if (lastPageView === url) return;
    let attempts = 0;

    const sendPageView = () => {
      if (typeof gtag !== "function") return false;
      lastPageView = url;
      gtag("event", "page_view", {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
        send_to: measurementId,
      });
      return true;
    };

    if (sendPageView()) return;

    const interval = window.setInterval(() => {
      attempts += 1;
      if (sendPageView() || attempts > 50) {
        window.clearInterval(interval);
      }
    }, 100);

    return () => window.clearInterval(interval);
  }, [measurementId, pathname, searchParams]);

  return null;
};

export default GoogleAnalyticsEffects;
