import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import Link from "../_components/CustomLink";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",
};

const CookiesPolicy = () => {
  return (
    <Container
      sx={{
        py: 7,
        "& b": { fontWeight: 700 },
        "& i": { fontStyle: "italic" },
        "& u": { textDecoration: "underline" },
        "& a": {
          textDecoration: "none",
          "& :hover": { textDecoration: "underline" },
        },
        li: {
          mb: 1,
        },
      }}
    >
      <Typography variant="h1" mb={2}>
        Cookies Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Last updated March 27th, 2024
      </Typography>
      <Typography variant="body2">
        This Cookie Policy explains how Mikhaila Fitzpatrick, (&quot;we&quot;,
        &quot;us&quot; or &quot;our&quot;), uses cookies and similar
        technologies to recognize you when you visit our website at{" "}
        <Link href="mailto:https://mikhailafitzpatrick.com">
          https://mikhailafitzpatrick.com
        </Link>{" "}
        (&quot;Website&quot;). It explains what these technologies are and why
        we use them, as well as your rights to control our use of them.
        <br />
        <br />
        In some cases we may use cookies to collect personal information, or
        that becomes personal information if we combine it with other
        information.
      </Typography>
      <Typography variant="h5" sx={{ my: 3 }}>
        What are cookies?
      </Typography>
      <Typography variant="body2">
        Cookies are small data files that are placed on your computer or mobile
        device when you visit a website. Cookies are widely used by website
        owners in order to make their websites work, or to work more
        efficiently, as well as to provide reporting information.
        <br />
        <br />
        Cookies set by the website owner (in this case, Mikhaila Fitzpatrick)
        are called &quot;first-party cookies.&quot; Cookies set by parties other
        than the website owner are called &quot;third-party cookies.&quot;
        Third-party cookies enable third-party features or functionality to be
        provided on or through the website (e.g., advertising, interactive
        content, and analytics). The parties that set these third-party cookies
        can recognize your computer both when it visits the website in question
        and also when it visits certain other websites.
      </Typography>
      <Typography variant="h5" sx={{ my: 3 }}>
        Why do we use cookies?
      </Typography>
      <Typography variant="body2">
        We use first- and third-party cookies for several reasons. Some cookies
        are required for technical reasons in order for our Website to operate,
        and we refer to these as &quot;essential&quot; or &quot;strictly
        necessary&quot; cookies. Other cookies also enable us to track and
        target the interests of our users to enhance the experience on our
        Online Properties. Third parties serve cookies through our Website for
        advertising, analytics, and other purposes. This is described in more
        detail below.
        <br />
        <br />
      </Typography>
      <Typography variant="h5" sx={{ my: 3 }}>
        How can I control cookies?
      </Typography>
      <Typography variant="body2">
        You have the right to decide whether to accept or reject cookies. You
        can exercise your cookie rights by setting your preferences in the
        Cookie Consent Manager. The Cookie Consent Manager allows you to select
        which categories of cookies you accept or reject. Essential cookies
        cannot be rejected as they are strictly necessary to provide you with
        services.
        <br />
        <br />
        The Cookie Consent Manager can be found in the notification banner and
        on our website. If you choose to reject cookies, you may still use our
        website though your access to some functionality and areas of our
        website may be restricted. You may also set or amend your web browser
        controls to accept or refuse cookies.
        <br />
        <br />
        The specific types of first- and third-party cookies served through our
        Website and the purposes they perform are described in the table below
        (please note that the specific cookies served may vary depending on the
        specific Online Properties you visit):
        <br />
        <br />
        <u>
          <b>Analytics and customization cookies:</b>
        </u>
        <br />
        <br />
        These cookies collect information that is used either in aggregate form
        to help us understand how our Website is being used or how effective our
        marketing campaigns are, or to help us customize our Website for you.
      </Typography>
      <Card
        sx={{
          my: 2,
          p: 4,
          color: "grey.600",
          div: {
            mb: 1,
          },
        }}
      >
        <Stack flexDirection="row">
          <Typography
            variant="body2"
            sx={{
              textAlign: { xs: "left", sm: "right" },
              mr: 3,
              width: { xs: "unset", sm: "10%" },
            }}
          >
            Name:
          </Typography>
          <Typography
            variant="body2"
            align="left"
            sx={{ width: { xs: "unset", sm: "90%" } }}
          >
            _ga
          </Typography>
        </Stack>
        <Stack flexDirection="row">
          <Typography
            variant="body2"
            sx={{
              textAlign: { xs: "left", sm: "right" },
              mr: 3,
              width: { xs: "unset", sm: "10%" },
            }}
          >
            Purpose:
          </Typography>
          <Typography
            variant="body2"
            align="left"
            sx={{ width: { xs: "unset", sm: "90%" } }}
          >
            Records a particular ID used to come up with data about website
            usage by the user
          </Typography>
        </Stack>
        <Stack flexDirection="row">
          <Typography
            variant="body2"
            sx={{
              textAlign: { xs: "left", sm: "right" },
              mr: 3,
              width: { xs: "unset", sm: "10%" },
            }}
          >
            Provider:
          </Typography>
          <Typography
            variant="body2"
            align="left"
            sx={{ width: { xs: "unset", sm: "90%" } }}
          >
            mikhailafitzpatrick.com
          </Typography>
        </Stack>
        <Stack flexDirection="row">
          <Typography
            variant="body2"
            sx={{
              textAlign: { xs: "left", sm: "right" },
              mr: 3,
              width: { xs: "unset", sm: "10%" },
            }}
          >
            Service:
          </Typography>
          <Typography
            variant="body2"
            align="left"
            sx={{ width: { xs: "unset", sm: "90%" } }}
          >
            Google Analytics{" "}
            <Link href="https://policies.google.com/privacy">
              View Service Privacy Policy
            </Link>
          </Typography>
        </Stack>
        <Stack flexDirection="row">
          <Typography
            variant="body2"
            sx={{
              textAlign: { xs: "left", sm: "right" },
              mr: 3,
              width: { xs: "unset", sm: "10%" },
            }}
          >
            Type:
          </Typography>
          <Typography
            variant="body2"
            align="left"
            sx={{ width: { xs: "unset", sm: "90%" } }}
          >
            http_cookie
          </Typography>
        </Stack>
        <Stack flexDirection="row">
          <Typography
            variant="body2"
            sx={{
              textAlign: { xs: "left", sm: "right" },
              mr: 3,
              width: { xs: "unset", sm: "10%" },
            }}
          >
            Expires in:
          </Typography>
          <Typography
            variant="body2"
            align="left"
            sx={{ width: { xs: "unset", sm: "90%" } }}
          >
            1 year 1 month 4 days
          </Typography>
        </Stack>
      </Card>
      <Typography variant="h5" sx={{ my: 3 }}>
        How can I control cookies on my browser?
      </Typography>
      <Typography variant="body2">
        As the means by which you can refuse cookies through your web browser
        controls vary from browser to browser, you should visit your
        browser&#39;s help menu for more information. The following is
        information about how to manage cookies on the most popular browsers:
      </Typography>
      <ul>
        <li>
          <Link
            href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies"
            target="_blank"
          >
            Chrome
          </Link>
        </li>
        <li>
          <Link
            href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US"
            target="_blank"
          >
            Firefox
          </Link>
        </li>
        <li>
          <Link
            href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac"
            target="_blank"
          >
            Safari
          </Link>
        </li>
        <li>
          <Link
            href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
            target="_blank"
          >
            Edge
          </Link>
        </li>
        <li>
          <Link
            href="https://help.opera.com/en/latest/web-preferences/"
            target="_blank"
          >
            Opera
          </Link>
        </li>
      </ul>
      <Typography variant="body2">
        In addition, most advertising networks offer you a way to opt out of
        targeted advertising. If you would like to find out more information,
        please visit:
      </Typography>
      <ul>
        <li>
          <Link
            href="https://optout.aboutads.info/?c=2&lang=EN"
            target="_blank"
          >
            Digital Advertising Alliance
          </Link>
        </li>
        <li>
          <Link href="https://youradchoices.ca/" target="_blank">
            Digital Advertising Alliance of Canada
          </Link>
        </li>
        <li>
          <Link href="https://www.youronlinechoices.com/" target="_blank">
            European Interactive Digital Advertising Alliance
          </Link>
        </li>
      </ul>
      <Typography variant="h5" sx={{ my: 3 }}>
        What about other tracking technologies, like web beacons?
      </Typography>
      <Typography variant="body2">
        Cookies are not the only way to recognize or track visitors to a
        website. We may use other, similar technologies from time to time, like
        web beacons (sometimes called &quot;tracking pixels&quot; or &quot;clear
        gifs&quot;). These are tiny graphics files that contain a unique
        identifier that enables us to recognize when someone has visited our
        Website or opened an email including them. This allows us, for example,
        to monitor the traffic patterns of users from one page within a website
        to another, to deliver or communicate with cookies, to understand
        whether you have come to the website from an online advertisement
        displayed on a third-party website, to improve site performance, and to
        measure the success of email marketing campaigns. In many instances,
        these technologies are reliant on cookies to function properly, and so
        declining cookies will impair their functioning.
      </Typography>
      <Typography variant="h5" sx={{ my: 3 }}>
        Do you use Flash cookies or Local Shared Objects?
      </Typography>
      <Typography variant="body2">
        Websites may also use so-called &quot;Flash Cookies&quot; (also known as
        Local Shared Objects or &quot;LSOs&quot;) to, among other things,
        collect and store information about your use of our services, fraud
        prevention, and for other site operations.
        <br />
        <br />
        If you do not want Flash Cookies stored on your computer, you can adjust
        the settings of your Flash player to block Flash Cookies storage using
        the tools contained in the{" "}
        <Link
          href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html"
          target="_blank"
        >
          Website Storage Settings Panel
        </Link>
        . You can also control Flash Cookies by going to the{" "}
        <Link
          href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html"
          target="_blank"
        >
          Global Storage Settings Panel
        </Link>{" "}
        and following the instructions (which may include instructions that
        explain, for example, how to delete existing Flash Cookies (referred to
        &quot;information&quot; on the Macromedia site), how to prevent Flash
        LSOs from being placed on your computer without your being asked, and
        (for Flash Player 8 and later) how to block Flash Cookies that are not
        being delivered by the operator of the page you are on at the time).
        <br />
        <br />
        Please note that setting the Flash Player to restrict or limit
        acceptance of Flash Cookies may reduce or impede the functionality of
        some Flash applications, including, potentially, Flash applications used
        in connection with our services or online content.
      </Typography>
      <Typography variant="h5" sx={{ my: 3 }}>
        Do you serve targeted advertising?
      </Typography>
      <Typography variant="body2">
        Third parties may serve cookies on your computer or mobile device to
        serve advertising through our Website. These companies may use
        information about your visits to this and other websites in order to
        provide relevant advertisements about goods and services that you may be
        interested in. They may also employ technology that is used to measure
        the effectiveness of advertisements. They can accomplish this by using
        cookies or web beacons to collect information about your visits to this
        and other sites in order to provide relevant advertisements about goods
        and services of potential interest to you. The information collected
        through this process does not enable us or them to identify your name,
        contact details, or other details that directly identify you unless you
        choose to provide these.
      </Typography>
      <Typography variant="h5" sx={{ my: 3 }}>
        How often will you update this Cookie Policy?
      </Typography>
      <Typography variant="body2">
        We may update this Cookie Policy from time to time in order to reflect,
        for example, changes to the cookies we use or for other operational,
        legal, or regulatory reasons. Please therefore revisit this Cookie
        Policy regularly to stay informed about our use of cookies and related
        technologies.
        <br />
        <br />
        We may update this Cookie Policy from time to time in order to reflect,
        for example, changes to the cookies we use or for other operational,
        legal, or regulatory reasons. Please therefore revisit this Cookie
        Policy regularly to stay informed about our use of cookies and related
        technologies.
      </Typography>
      <Typography variant="h5" sx={{ my: 3 }}>
        Where can I get further information?
      </Typography>
      <Typography variant="body2">
        If you have any questions about our use of cookies or other
        technologies, please contact us at:
        <br />
        <br />
        Mikhaila Fitzpatrick <br />
        Attyterrila <br />
        Ennis <br />
        Co. Clare <br />
        Ireland <br />
        Phone: <Link href="tel:+353862321667">+353862321667</Link>
      </Typography>
    </Container>
  );
};

export default CookiesPolicy;
