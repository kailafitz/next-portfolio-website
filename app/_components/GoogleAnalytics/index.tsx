import Script from "next/script";
import { Suspense } from "react";
import GoogleAnalyticsEffects from "./GoogleAnalyticsEffects";

const GoogleAnalytics = ({ measurementId }: { measurementId: string }) => {
  if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return null;

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          var stored = null;
          try {
            var raw = localStorage.getItem('consentMode');
            if (raw) {
              var parsed = JSON.parse(raw);
              var toStatus = function (value) { return value ? 'granted' : 'denied'; };
              stored = {
                ad_storage: toStatus(!!parsed.ad_storage),
                analytics_storage: toStatus(!!parsed.analytics_storage),
                ad_user_data: toStatus(!!parsed.ad_user_data),
                ad_personalization: toStatus(!!parsed.ad_personalization)
              };
            }
          } catch (error) {}
          gtag('consent', 'default', Object.assign({
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            functionality_storage: 'denied',
            personalization_storage: 'denied',
            security_storage: 'granted',
            wait_for_update: 500
          }, stored || {}));
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
      <Suspense fallback={null}>
        <GoogleAnalyticsEffects measurementId={measurementId} />
      </Suspense>
    </>
  );
};

export default GoogleAnalytics;
