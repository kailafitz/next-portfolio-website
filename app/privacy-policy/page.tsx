import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Metadata } from "next";
import NextLink from "next/link";
import Link from "@mui/material/Link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

interface row {
  category: string;
  examples: string;
  collected: string;
}

const rows = [
  {
    category: "A. Identifiers",
    examples:
      "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name",
    collected: "NO",
  },
  {
    category:
      "B. Personal information as defined in the California Customer Records statute",
    examples:
      "Name, contact information, education, employment, employment history, and financial information",
    collected: "NO",
  },
  {
    category:
      "C. Protected classification characteristics under state or federal law",
    examples: "Gender and date of birth",
    collected: "NO",
  },

  {
    category: "D. Commercial information",
    examples:
      "Transaction information, purchase history, financial details, and payment information",
    collected: "NO",
  },
  {
    category: "E. Biometric information",
    examples: "Fingerprints and voiceprints",
    collected: "NO",
  },
  {
    category: "F. Internet or other similar network activity",
    examples:
      "Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements",
    collected: "NO",
  },
  {
    category: "G. Geolocation data",
    examples: "Device location",
    collected: "YES",
  },
  {
    category:
      "H. Audio, electronic, visual, thermal, olfactory, or similar information",
    examples:
      "Images and audio, video or call recordings created in connection with our business activities",
    collected: "NO",
  },
  {
    category: "I. Professional or employment-related information",
    examples:
      "Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us",
    collected: "NO",
  },
  {
    category: "J. Education Information",
    examples: "Student records and directory information",
    collected: "NO",
  },
  {
    category: "K. Inferences drawn from collected personal information",
    examples:
      "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics",
    collected: "NO",
  },
  {
    category: "L. Sensitive personal Information",
    examples: " ",
    collected: "NO",
  },
];

const PrivayPolicy = () => {
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
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "inherit", md: "space-between" }}
        alignItems={{ xs: "inherit", md: "flex-end" }}
      >
        <Typography variant="h1" mb={2}>
          Privacy Policy
        </Typography>
        <Link component={NextLink} sx={{ mb: 2 }} href="?modal=true">
          Update Privacy Settings
        </Link>
      </Stack>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Last updated March 27th, 2024
      </Typography>
      <Typography variant="body2">
        This privacy notice for Mikhaila Fitzpatrick (doing business as
        mikhailafitzpatrick), (&quot;we&quot;, &quot;us&quot; or
        &quot;our&quot;), describes how and why we might collect, store, use,
        and/or share (&#39;process&#39;) your information when you use our
        services (&#39;Services&#39;), such as when you:
      </Typography>
      <ul>
        <li>
          Visit our website at mikhailafitzpatrick.com, or any website of ours
          that links to this privacy notice
        </li>
        <li>
          Engage with us in other related ways, including any sales, marketing,
          or events
        </li>
      </ul>
      <Typography variant="body2">
        Questions or concerns? Reading this privacy notice will help you
        understand your privacy rights and choices. If you do not agree with our
        policies and practices, please do not use our Services. If you still
        have any questions or concerns, please contact us at{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>
        .
      </Typography>
      <Typography variant="h5" sx={{ my: 3 }}>
        Summary of Key Points
      </Typography>
      <Typography variant="body2">
        <b>
          This summary provides key points from our privacy notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our table of contents below to
          find the section vou are looking for.
        </b>
        <br />
        <br />
        <b>What personal data do we process?</b> When you visit, use or navigate
        our Services, we may process personal information depending on how you
        interact with us and the Services, the choices you make and the products
        and features you use. Learn more about personal information you disclose
        to us.
        <br />
        <br />
        <b>Do we process any sensitive personal information?</b> We do not
        process sensitive personal information.
        <br />
        <br />
        <b>Do we receive any information from third parties?</b> We do not
        receive any information from third parties.
        <br />
        <br />
        <b>How do we process your information?</b> We process your information
        to provide, improve, and administer our Services, communicate with you,
        for security and fraud prevention, and to comply with law. We may also
        process your information for other purposes with your consent. We
        process your information only when we have a valid legal reason to do
        so. Learn more about how we process your information.
        <br />
        <br />
        <b>
          In what situations and with which parties do we share personal
          information?
        </b>{" "}
        We may share information in specific situations and with specific third
        parties. Learn more about when and with whom we share your personal
        information.
        <br />
        <br />
        <b>How do we keep your information safe?</b> We have organisational and
        technical processes and procedures in place to protect your personal
        information. However, no electronic transmission over the internet or
        information storage technology can be guaranteed to be 100% secure, so
        we cannot promise or guarantee that hackers, cybercriminals, or other
        unauthorised third parties will not be able to defeat our security and
        improperly collect, access, steal, or modify your information. Learn
        more about how we keep your information safe.
        <br />
        <br />
        <b>What are your rights?</b> Depending on where you are located
        geographically, the applicable privacy law may mean you have certain
        rights regarding your personal information. Learn more about your
        privacy rights.
      </Typography>
      <Typography variant="h5" sx={{ my: 3 }}>
        Table of Contents
      </Typography>
      <ol>
        <li>
          <Link component={NextLink} href="#section1" color="common.black">
            What Information Do We Collect?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section2" color="common.black">
            How Do We Process Your Information?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section3" color="common.black">
            What Legal Bases Do We Rely On To Process Your Personal Information?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section4" color="common.black">
            When And With Whom Do We Share Your Personal Information?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section5" color="common.black">
            Do We Use Cookies And Other Tracking Technologies?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section6" color="common.black">
            How Long Do We Keep Your Information?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section7" color="common.black">
            How Do We Keep Your How Do We Keep Your Information Safe?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section8" color="common.black">
            Do We Collect Information From Minors?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section9" color="common.black">
            What Are Your Privacy Rights?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section10" color="common.black">
            Controls For Do-Not-Track Features
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section11" color="common.black">
            Do United States Residents Have Specific Privacy Rights?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section12" color="common.black">
            Do Other Regions Have Specific Privacy Rights?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section13" color="common.black">
            Do We Make Updates To This Notice?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section14" color="common.black">
            How Can You Contact Us About This Notice?
          </Link>
        </li>
        <li>
          <Link component={NextLink} href="#section15" color="common.black">
            How Can You Review, Update, Or Delete The Data We Collect From You?
          </Link>
        </li>
      </ol>
      <Typography id="section1" variant="h5" sx={{ my: 3 }}>
        1. What Information Do We Collect?
      </Typography>
      <Typography variant="h6" sx={{ my: 1 }}>
        Personal information you disclose to us
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We collect personal information that you provide to
          us.
        </i>
        <br />
        <br />
        We collect personal information that you voluntarily provide to us when
        you express an interest in obtaining information about us or our
        products and Services, when you participate in activities on the
        Services, or otherwise when you contact us.
        <br />
        <br />
        Sensitive Information. We do not process sensitive information.
        <br />
        <br />
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </Typography>
      <Typography variant="h6" sx={{ my: 1 }}>
        Information automatically collected
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> Some information — such as your Internet Protocol
          (IP) address and/or browser and device characteristics - is collected
          automatically when you visit our Services. We automatically collect
          certain information when you visit, use, or navigate the Services.
        </i>
        <br />
        <br />
        We automatically collect certain information when you visit, use, or
        navigate the Services. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our Services, and other technical information. This information is
        primarily needed to maintain the security and operation of our Services,
        and for our internal analytics and reporting purposes.
        <br />
        <br />
        Like many businesses, we also collect information through cookies and
        similar technologies. You can find out more about this in our{" "}
        <Link component={NextLink} href="/cookies-policy">
          Cookies Policy
        </Link>
        .
        <br />
        <br />
        The information we collect includes:
      </Typography>
      <ul>
        <li>
          <i>Log and Usage Data.</i> Log and usage data is service-related,
          diagnostic, usage, and performance information our servers
          automatically collect when you access or use our Services and which we
          record in log files. Depending on how you interact with us, this log
          data may include your IP address, device information, browser type,
          and settings and information about your activity in the Services (such
          as the date/time stamps associated with your usage, pages and files
          viewed, searches, and other actions you take such as which features
          you use), device event information (such as system activity, error
          reports (sometimes called &quot;crash dumps&quot;), and hardware
          settings).
        </li>
        <li>
          <i>Device Data.</i> We collect device data such as information about
          your computer, phone, tablet, or other device you use to access the
          Services. Depending on the device used, this device data may include
          information such as your IP address (or proxy server), device and
          application identification numbers, location, browser type, hardware
          model, Internet service provider and/or mobile carrier, operating
          system, and system configuration information.
        </li>
        <li>
          <i>Location Data.</i> We collect location data such as information
          about your device&#39;s location, which can be either precise or
          imprecise. How much information we collect depends on the type and
          settings of the device you use to access the Services. For example, we
          may use GPS and other technologies to collect geolocation data that
          tells us your current location (based on your IP address). You can opt
          out of allowing us to collect this information either by refusing
          access to the information or by disabling your Location setting on
          your device. However, if you choose to opt out, you may not be able to
          use certain aspects of the Services.
        </li>
      </ul>
      <Typography id="section2" variant="h5" sx={{ my: 3 }}>
        2. What Information Do We Collect?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We process your information to provide, improve, and
          administer our Services, communicate with you, for security and fraud
          prevention, and to comply with law. We may also process your
          information for other purposes with your consent.
        </i>
        <br />
        <br />
        <b>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </b>
      </Typography>
      <ul>
        <li>
          <b>To identify usage trends.</b> We may process information about how
          you use our Services to better understand how they are being used so
          we can improve them.
        </li>
        <li>
          <b>To save or protect an individual&#39;s vital interest.</b> We may
          process your information when necessary to save or protect an
          individual&#39;s vital interest, such as to prevent harm.
        </li>
      </ul>
      <Typography id="section3" variant="h5" sx={{ my: 3 }}>
        3. What Legal Bases Do We Rely On To Process Your Personal Information?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We only process your personal information when we
          believe it is necessary and we have a valid legal reason (i.e. legal
          basis) to do so under applicable law, like with your consent, to
          comply with laws, to provide you with services to enter into or fulfil
          our contractual obligations, to protect your rights, or to fulfil our
          legitimate business interests.
        </i>
        <br />
        <br />
        <u>
          <i>
            If you are located in the EU or UK, this section applies to you.
          </i>
        </u>
        <br />
        <br />
        The General Data Protection Regulation (GDPR) and UK GDPR require us to
        explain the valid legal bases we rely on in order to process your
        personal information. As such, we may rely on the following legal bases
        to process your personal information:
      </Typography>
      <ul>
        <li>
          <b>Consent.</b> We may process your information if you have given us
          permission (i.e. consent) to use your personal information for a
          specific purpose. You can withdraw your consent at any time. Learn
          more about{" "}
          <Link href="#withdrawing-consent">withdrawing your consent</Link>.
        </li>
        <li>
          <b>Legitimate Interests.</b> We may process your information when we
          believe it is reasonably necessary to achieve our legitimate business
          interests and those interests do not outweigh your interests and
          fundamental rights and freedoms. For example, we may process your
          personal information for some of the purposes described in order to:
          <ul>
            <li>
              Analyse how our Services are used so we can improve them to engage
              and retain users
            </li>
          </ul>
        </li>
        <li>
          <b>Legal Obligations.</b> We may process your information where we
          believe it is necessary for compliance with our legal obligations,
          such as to cooperate with a law enforcement body or regulatory agency,
          exercise or defend our legal rights, or disclose your information as
          evidence in litigation in which we are involved.
        </li>
        <li>
          <b>Vital Interests.</b> We may process your information where we
          believe it is necessary to protect your vital interests or the vital
          interests of a third party, such as situations involving potential
          threats to the safety of any person.
        </li>
      </ul>
      <Typography variant="body2">
        <u>
          <i>If you are located in Canada, this section applies to you.</i>
        </u>
        <br />
        <br />
        We may process your information if you have given us specific permission
        (i.e. express consent) to use your personal information for a specific
        purpose, or in situations where your permission can be inferred (i.e.
        implied consent). You can{" "}
        <Link href="#withdrawing-consent">withdraw your consent</Link> at any
        time.
        <br />
        <br />
        In some exceptional cases, we may be legally permitted under applicable
        law to process your information without your consent, including, for
        example:
      </Typography>
      <ul>
        <li>
          If collection is clearly in the interests of an individual and consent
          cannot be obtained in a timely way
        </li>
        <li>For investigations and fraud detection and prevention</li>
        <li>For business transactions provided certain conditions are met</li>
        <li>
          If it is contained in a witness statement and the collection is
          necessary to assess, process, or settle an insurance claim
        </li>
        <li>
          For identifying injured, ill, or deceased persons and communicating
          with next of kin
        </li>
        <li>
          If we have reasonable grounds to believe an individual has been, is,
          or may be victim of financial abuse
        </li>
        <li>
          If it is reasonable to expect collection and use with consent would
          compromise the availability or the accuracy of the information and the
          collection is reasonable for purposes related to investigating a
          breach of an agreement or a contravention of the laws of Canada or a
          province
        </li>
        <li>
          If disclosure is required to comply with a subpoena, warrant, court
          order, or rules of the court relating to the production of records
        </li>
        <li>
          If it was produced by an individual in the course of their employment,
          business, or profession and the collection is consistent with the
          purposes for which the information was produced
        </li>
        <li>
          If the collection is solely for journalistic, artistic, or literary
          purposes
        </li>
        <li>
          If the information is publicly available and is specified by the
          regulations
        </li>
      </ul>
      <Typography id="section4" variant="h5" sx={{ my: 3 }}>
        4. When And With Whom Do We Share Your Personal Information?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We may share information in specific situations
          described in this section and/or with the following third parties.
        </i>
        <br />
        <br />
        We may need to share your personal information in the following
        situations:
      </Typography>
      <ul>
        <li>
          <b>Business Transfers.</b> We may share or transfer your information
          in connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
        </li>
        <li>
          <b>When we use Google Analytics.</b> We may share your information
          with Google Analytics to track and analyse the use of the Services. To
          opt out of being tracked by Google Analytics across the Services,
          visit{" "}
          <Link href="https://tools.google.com/dipage/gaoptout" target="_blank">
            https://tools.google.com/dipage/gaoptout
          </Link>
          . For more information on the privacy practices of Google, please
          visit the{" "}
          <Link href="https://policies.google.com/privacy" target="_blank">
            Google Privacy & Terms
          </Link>{" "}
          page.
        </li>
      </ul>
      <Typography id="section5" variant="h5" sx={{ my: 3 }}>
        5. Do We Use Cookies And Other Tracking Technologies?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> We may use cookies and other tracking technologies to
          collect and store your information.
        </i>
        <br />
        <br />
        We may use cookies and similar tracking technologies (ike web beacons
        and pixels) to access or store information. Specific information about
        how we use such technologies and how you can refuse certain cookies is
        set out in our{" "}
        <Link component={NextLink} href="/cookies-policy">
          Cookies Policy
        </Link>
        .
      </Typography>
      <Typography id="section6" variant="h5" sx={{ my: 3 }}>
        6. How Long Do We Keep Your Information?
      </Typography>
      <Typography variant="body2">
        <b>In Short:</b>{" "}
        <i>
          We keep your information for as long as necessary to fulfil the
          purposes outlined in this privacy notice unless otherwise required by
          law.
        </i>
        <br />
        <br />
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this privacy notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). No purpose in this notice will
        require us keeping your personal information for longer than 2 months
        data retention on events and 14 months data retention for users.
        <br />
        <br />
        When we have no ongoing legitimate business need to process your
        personal information, we will either delete or anonymise such
        information, or, if this is not possible (for example, because your
        personal information has been stored in backup archives), then we will
        securely store your personal information and isolate it from any further
        processing until deletion is possible.
      </Typography>
      <Typography id="section7" variant="h5" sx={{ my: 3 }}>
        7. How Do We Keep Your How Do We Keep Your Information Safe?
      </Typography>
      <Typography variant="body2">
        <b>In Short:</b>{" "}
        <i>
          We aim to protect your personal information through a system of
          organisational and technical security measures.
        </i>
        <br />
        <br />
        We have implemented appropriate and reasonable technical and
        organisational security measures designed to protect the security of any
        personal information we process. However, despite our safeguards and
        efforts to secure your information, no electronic transmission over the
        Internet or information storage technology can be guaranteed to be 100%
        secure, so we cannot promise or guarantee that hackers, cybercriminals,
        or other unauthorised third parties will not be able to defeat our
        security and improperly collect, access, steal, or modify your
        information. Although we will do our best to protect your personal
        information, transmission of personal information to and from our
        Services is at your own risk. You should only access the Services within
        a secure environment.
      </Typography>
      <Typography id="section8" variant="h5" sx={{ my: 3 }}>
        8. Do We Collect Information From Minors?
      </Typography>
      <Typography variant="body2">
        <b>In Short:</b>{" "}
        <i>
          We do not knowingly collect data from or market to children under 18
          years of age.
        </i>
        <br />
        <br />
        We do not knowingly solicit data from or market to children under 18
        years of age. By using the Services, you represent that you are at least
        18 or that you are the parent or guardian of such a minor and consent to
        such minor dependent&#39;s use of the Services. If we learn that
        personal information from users less than 18 years of age has been
        collected, we will deactivate the account and take reasonable measures
        to promptly delete such data from our records. If you become aware of
        any data we may have collected from children under age 18, please
        contact us at{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>
        .
      </Typography>
      <Typography id="section9" variant="h5" sx={{ my: 3 }}>
        9. What Are Your Privacy Rights?
      </Typography>
      <Typography id="withdrawing-consent" variant="body2">
        <b>In Short:</b>{" "}
        <i>
          In some regions, such as the European Economic Area (EEA), United
          Kingdom (UK), Switzerland, and Canada, you have rights that allow you
          greater access to and control over your personal information. You may
          review, change, or terminate your account at any time.
        </i>
        <br />
        <br />
        In some regions (like the EEA, UK, Switzerland, and Canada), you have
        certain rights under applicable data protection laws. These may include
        the right (i) to request access and obtain a copy of your personal
        information, (ii) to request rectification or erasure; (iii) to restrict
        the processing of your personal information; (iv) if applicable, to data
        portability; and (v) not to be subject to automated decision-making. In
        certain circumstances, you may also have the right to object to the
        processing of your personal information. You can make such a request by
        contacting us by using the contact details provided in the section{" "}
        <Link component={NextLink} href="#section14">
          How Can You Contact Us About This Notice?
        </Link>{" "}
        below.
        <br />
        <br />
        We will consider and act upon any request in accordance with applicable
        data protection laws.
        <br />
        <br />
        If you are located in the EEA or UK and you believe we are unlawfully
        processing your personal information, you also have the right to
        complain to your{" "}
        <Link
          href="https://ec.europa.eu/newsroom/article29/items/612080"
          target="_blank"
        >
          Member State data protection authority
        </Link>{" "}
        or{" "}
        <Link
          href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
          target="_blank"
        >
          UK data protection authority
        </Link>
        .
        <br />
        <br />
        If you are located in Switzerland, you may contact the{" "}
        <Link
          href="https://www.edoeb.admin.ch/edoeb/en/home.html"
          target="_blank"
        >
          Federal Data Protection and Information Commissioner
        </Link>
        .
        <br />
        <br />
        Withdrawing your consent: If we are relying on your consent to process
        your personal information, which may be express and/or implied consent
        depending on the applicable law, you have the right to withdraw your
        consent at any time. You can withdraw your consent at any time by
        contacting us by using the contact details provided in the section{" "}
        <Link component={NextLink} href="#section14">
          How Can You Contact Us About This Notice?
        </Link>{" "}
        below.
        <br />
        <br />
        However, please note that this will not affect the lawfulness of the
        processing before its withdrawal nor, when applicable law allows, will
        it affect the processing of your personal information conducted in
        reliance on lawful processing grounds other than consent.
        <br />
        <br />
        Cookies and similar technologies: Most Web browsers are set to accept
        cookies by default. If you prefer, you can usually choose to set your
        browser to remove cookies and to reject cookies. If you choose to remove
        cookies or reject cookies, this could affect certain features or
        services of our Services. For further information, please see our{" "}
        <Link component={NextLink} href="/cookies-policy">
          Cookies Policy
        </Link>
        .
        <br />
        <br />
        If you have questions or comments about your privacy rights, you may
        email us at{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>
        .
      </Typography>
      <Typography id="section10" variant="h5" sx={{ my: 3 }}>
        10. Controls For Do-Not-Track Features
      </Typography>
      <Typography variant="body2">
        Most web browsers and some mobile operating systems and mobile
        applications include a Do-Not-Track (&quot;DNT&quot;) feature or setting
        you can activate to signal your privacy preference not to have data
        about your online browsing activities monitored and collected. At this
        stage no uniform technology standard for recognising and implementing
        DNT signals has been finalised. As such, we do not currently respond to
        DNT browser signals or any other mechanism that automatically
        communicates your choice not to be tracked online. If a standard for
        online tracking is adopted that we must follow in the future, we will
        inform you about that practice in a revised version of this privacy
        notice.
      </Typography>
      <Typography id="section11" variant="h5" sx={{ my: 3 }}>
        11. Do United States Residents Have Specific Privacy Rights?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> If you are a resident of Colorado, Connecticut,
          California, Utah or Virginia, you are granted specific rights
          regarding access to your personal information.
        </i>
        <br />
        <br />
        <b>What categories of personal information do we collect?</b>
        <br />
        <br />
        We have collected the following categories of personal information in
        the past twelve months (12) months:
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Examples</TableCell>
              <TableCell>Collected</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: row) => (
              <TableRow
                key={row.category}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.category}
                </TableCell>
                <TableCell>{row.examples}</TableCell>
                <TableCell align="center">{row.collected}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="body2">
        <br />
        <br />
        We will use and retain the collected personal information as needed to
        provide the Services or for:
      </Typography>
      <ul>
        <li>Category G - 14 months</li>
      </ul>
      <Typography variant="body2">
        We may also collect other personal information outside of these
        categories through instances where you interact with us in person,
        online, or by phone or mail in the context of:
      </Typography>
      <ul>
        <li>Receiving help through our customer support channels;</li>
        <li>Participation in customer surveys or contests; and</li>
        <li>
          Facilitation in the delivery of our Services and to respond to your
          inquiries.
        </li>
      </ul>
      <Typography variant="body2">
        <b>How do we use and share your personal information?</b>
        <br />
        <br />
        Learn about how we use your personal information in the section,{" "}
        <Link component={NextLink} href="#section3">
          How Do We Process Your Information
        </Link>
        .
        <br />
        <br />
        <b>Will your information be shared with anyone else?</b>
        <br />
        <br />
        We may disclose your personal information with our service providers
        pursuant to a written contract between us and each service provider.
        Learn more about how we disclose personal information to in the section,{" "}
        <Link component={NextLink} href="#section4">
          When and With Whom Do We Share Your Personal Information
        </Link>
        .
        <br />
        <br />
        We may use your personal information for our own business purposes, such
        as for undertaking internal research for technological development and
        demonstration. This is not considered to be &#39;selling&#39; of your
        personal information.
        <br />
        <br />
        We have not disclosed, sold, or shared any personal information to third
        parties for a business or commercial purpose in the preceding twelve
        (12) months. We will not sell or share personal information in the
        future belonging to website visitors, users, and other consumers.
        <br />
        <br />
      </Typography>
      <Typography variant="h6" sx={{ my: 1 }}>
        California Residents
      </Typography>
      <Typography variant="body2">
        California Civil Code Section 1798.83, also known as the &#39;Shine The
        Light&#39; law permits our users who are California residents to request
        and obtain from us, once a year and free of charge, information about
        categories of personal information (if any) we disclosed to third
        parties for direct marketing purposes and the names and addresses of all
        third parties with which we shared personal information in the
        immediately preceding calendar year. If you are a California resident
        and would like to make such a request, please submit your request in
        writing to us using the contact information provided below.
        <br />
        <br />
        If you are under 18 years of age, reside in California, and have a
        registered account with the Services, you have the right to request
        removal of unwanted data that you publicly post on the Services. To
        request removal of such data, please contact us using the contact
        information provided below and include the email address associated with
        your account and a statement that you reside in California. We will make
        sure the data is not publicly displayed on the Services, but please be
        aware that the data may not be completely or comprehensively removed
        from all our systems (e.g. backups, etc.).
        <br />
        <br />
        <u>
          <b>CCPA Privacy Notice</b>
        </u>
        <br />
        <br />
        This section applies only to California residents. Under the California
        Consumer Privacy Act (CCPA), you have the rights listed below.
        <br />
        <br />
        The California Code of Regulations defines a &#39;residents&#39; as:
      </Typography>
      <ol>
        <li>
          every individual who is in the State of California for other than a
          temporary or transitory purpose and
        </li>
        <li>
          every individual who is domiciled in the State of California who is
          outside the State of California for a temporary or transitory purpose
        </li>
      </ol>
      <Typography variant="body2">
        All other individuals are defined as &#39;non-residents&#39;.
        <br />
        <br />
        If this definition of &#39;resident&#39; applies to you, we must adhere
        to certain rights and obligations regarding your personal information.
        <br />
        <br />
        <b>Your rights with respect to your personal data</b>
        <br />
        <br />
        <u>Right to request deletion of the data — Request to delete</u>
        <br />
        <br />
        You can ask for the deletion of your personal information. If you ask us
        to delete your personal information, we will respect your request and
        delete your personal information, subject to certain exceptions provided
        by law, such as (but not limited to) the exercise by another consumer of
        his or her right to free speech, our compliance requirements resulting
        from a legal obligation, or any processing that may be required to
        protect against illegal activities.
        <br />
        <br />
        <u>Right to be informed — Request to know</u>
        <br />
        <br />
        Depending on the circumstances, you have a right to know:
      </Typography>
      <ul>
        <li>whether we collect and use your personal information;</li>
        <li>the categories of personal information that we collect;</li>
        <li>
          the purposes for which the colocted personal intormation is used:
        </li>
        <li>whether we sell or share personal information to third parties;</li>
        <li>
          the categories of personal information that we sold, shared, or
          disclosed for a business purpose;
        </li>
        <li>
          the categories of third parties to whom the personal information was
          sold, shared, or disclosed for a business purpose;
        </li>
        <li>
          the business or commercial purpose for collecting, selling, or sharing
          personal information; and
        </li>
        <li>
          the specific pieces of personal information we collected about you.
        </li>
      </ul>
      <Typography variant="body2">
        In accordance with applicable law, we are not obligated to provide or
        delete consumer information that is de-identified in response to a
        consumer request or to re-identify individual data to verify a consumer
        request.
        <br />
        <br />
        <u>
          Right to Non-Discrimination for the Exercise of a Consumer&#39;s
          Privacy
        </u>
        Rights
        <br />
        <br />
        We will not discriminate against you if you exercise your privacy
        rights.
        <br />
        <br />
        <u>
          Right to Limit Use and Disclosure of Sensitive Personal Information
        </u>
        <br />
        <br />
        We do not process consumer&#39;s sensitive personal information.
        <br />
        <br />
        <u>Verification process</u>
        <br />
        <br />
        Upon receiving your request, we will need to verify your identity to
        determine you are the same person about whom we have the information in
        our system. These verification efforts require us to ask you to provide
        information so that we can match it with information you have previously
        provided us. For instance, depending on the type of request you submit,
        we may ask you to provide certain information so that we can match the
        information you provide with the information we-already have on file, or
        we may contact you through a communication method (e.g. phone or email)
        that you have previously provided to us. We may also use other
        verification methods as the circumstances dictate.
        <br />
        <br />
        We will only use personal information provided in your request to verify
        your identity or authority to make the request. To the extent possible,
        we will avoid requesting additional information from you for the
        purposes of verification. However, if we cannot verify your identity
        from the information already maintained by us, we may request that you
        provide additional information for the purposes of verifying your
        identity and for security or fraud-prevention purposes. We will delete
        such additionally provided information as soon as we finish verifying
        you.
        <br />
        <br />
        <u>Other privacy rights</u>
      </Typography>
      <ul>
        <li>You may object to the processing of your personal information.</li>
        <li>
          You may request correction of your personal data if it is incorrect or
          no longer relevant, or ask to restrict the processing of the
          information.
        </li>
        <li>
          You can designate an authorised agent to make a request under the CCA
          on your behalf. We may deny a request from an authorised agent that
          does not submit proof that they have been validly authorised to act on
          your behalf in accordance with the CPA.
        </li>
        <li>
          You may request to opt out from future selling or sharing of your
          personal information to third parties. Upon receiving an opt-out
          request, we will act upon the request as soon as feasibly possible,
          but no later. than fifteen (15) days from the date of the request
          submission.
        </li>
      </ul>
      <Typography variant="body2">
        To exercise these rights, you can contact us by visiting{" "}
        <Link href="/#contact">mikhailafitzpatrick.com/#contact</Link>, by email
        at{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>
        , or by referring to the contact details at the bottom of this document.
        If you have a complaint about how we handle your data, we would like to
        hear from you.
      </Typography>
      <Typography variant="h6" sx={{ my: 1 }}>
        Colarado Residents
      </Typography>
      <Typography variant="body2">
        This section applies only to Colorado residents. Under the Colorado
        Privacy Act (CPA), you have the rights listed below. However, these
        rights are not absolute, and in certain cases, we may decline your
        request as permitted by law.
      </Typography>
      <ul>
        <li>
          Right to be informed whether or not we are processing your personal
          data
        </li>
        <li>Right to access your personal data</li>
        <li>Right to correct inaccuracies in your personal data</li>
        <li>Right to request deletion of your personal data</li>
        <li>
          Right to obtain a copy of the personal data you previously shared with
          us
        </li>
        <li>
          Right to opt out of the processing of your personal data if it is used
          for targeted advertising, the sale of personal data, or profiling in
          furtherance of decisions that produce legal or similarly significant
          effects (&#39;profiling&#39;)
        </li>
      </ul>
      <Typography variant="body2">
        To submit a request to exercise these rights described above, please
        email{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>{" "}
        or visit{" "}
        <Link component={NextLink} href="/#contact">
          mikhailafitzpatrick.com/#contact
        </Link>
        .
        <br />
        <br />
        If we decline to take action regarding your request and you wish to
        appeal our decision, please email us at{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>
        . Within forty-five (45) days of receipt of an appeal, we will inform
        you in writing of any action taken or not taken in response to the
        appeal, including a written explanation of the reasons for the
        decisions.
      </Typography>
      <Typography variant="h6" sx={{ my: 1 }}>
        Connecticut Residents
      </Typography>
      <Typography variant="body2">
        This section applies only to Connecticut residents. Under the
        Connecticut Data Privacy Act (CTDPA), you have the rights listed below.
        However, these rights are not absolute, and in certain cases, we may
        decline your request as permitted by law.
      </Typography>
      <ul>
        <li>
          Right to be informed whether or not we are processing your personal
          data
        </li>
        <li>Right to access your personal data</li>
        <li>Right to correct inaccuracies in your personal data</li>
        <li>Right to request deletion of your personal data</li>
        <li>
          Right to obtain a copy of the personal data you previously shared with
          us
        </li>
        <li>
          Right to opt out of the processing of your personal data if it is used
          for targeted advertising, the sale of personal data, or profiling in
          furtherance of decisions that produce legal or similarly significant
          effects (&#39;profiling&#39;)
        </li>
      </ul>
      <Typography variant="body2">
        To submit a request to exercise these rights described above, please
        email{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>{" "}
        or visit{" "}
        <Link component={NextLink} href="/#contact">
          mikhailafitzpatrick.com/#contact
        </Link>
        .
        <br />
        <br />
        If we decline to take action regarding your request and you wish to
        appeal our decision, please email us at{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>
        . Within sixty (60) days of receipt of an appeal, we will inform you in
        writing of any action taken or not taken in response to the appeal,
        including a written explanation of the reasons for the decisions.
      </Typography>
      <Typography variant="h6" sx={{ my: 1 }}>
        Utah Residents
      </Typography>
      <Typography variant="body2">
        This section applies only to Utah residents. Under the Utah Consumer
        Privacy Act (UCPA), you have the rights listed below. However, these
        rights are not absolute, and in certain cases, we may decline your
        request as permitted by law.
      </Typography>
      <ul>
        <li>
          Right to be informed whether or not we are processing your personal
          data
        </li>
        <li>Right to access your personal data</li>
        <li>Right to request deletion of your personal data</li>
        <li>
          Right to obtain a copy of the personal data you previously shared with
          us
        </li>
        <li>
          Right to opt out of the processing of your personal data if it is used
          for targeted advertising or the sale of personal data
        </li>
      </ul>
      <Typography variant="body2">
        To submit a request to exercise these rights described above, please
        email{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>{" "}
        or visit <Link href="/#contact">mikhailafitzpatrick.com/#contact</Link>
        .
        <br />
        <br />
        If we decline to take action regarding your request and you wish to
        appeal our decision, please email us at{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>
        . Within forty-five (45) days of receipt of an appeal, we will inform
        you in writing of any action taken or not taken in response to the
        appeal, including a written explanation of the reasons for the
        decisions.
      </Typography>
      <Typography variant="h6" sx={{ my: 1 }}>
        Virginia Residents
      </Typography>
      <Typography variant="body2">
        Under the Virginia Consumer Data Protection Act (VCDPA):
        <br />
        <br />
        &#39;Consumer&#39; means a natural person who is a resident of the
        Commonwealth acting only in an individual or household context. It does
        not include a natural person acting in a commercial or employment
        context.
        <br />
        <br />
        &#39;Personal data&#39; means any information that is linked or
        reasonably linkable to an identified or identifiable natural person.
        &#39;Personal data&#39; does not include de-identified data or publicly
        available information.
        <br />
        <br />
        &#39;Sale of personal data&#39; means the exchange of personal data for
        monetary consideration.
        <br />
        <br />
        If this definition of &#39;consumer&#39; applies to you, we must adhere
        to certain rights and obligations regarding your personal data.
        <br />
        <br />
        <u>Your rights with respect to your personal data</u>
      </Typography>
      <ul>
        <li>
          Right to be informed whether or not we are processing your personal
          data
        </li>
        <li>Right to access your personal data</li>
        <li>Right to correct inaccuracies in your personal data</li>
        <li>Right to request deletion of your personal data</li>
        <li>
          Right to obtain a copy of the personal data you previously shared with
          us
        </li>
        <li>
          Right to opt out of the processing of your personal data if it is used
          for targeted advertising, the sale of personal data, or profiling in
          furtherance of decisions that produce legal or similarly significant
          effects (&#39;profiling&#39;)
        </li>
      </ul>
      <Typography variant="body2">
        <u>Exercise your rights provided under the Virginia VCDPA</u>
        <br />
        <br />
        You may contact us by email at{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>{" "}
        or visit{" "}
        <Link component={NextLink} href="/#contact">
          mikhailafitzpatrick.com/#contact
        </Link>
        .
        <br />
        <br />
        If you are using an authorised agent to exercise your rights, we may
        deny a request if the authorised agent does not submit proof that they
        have been validly authorised to act on your behalf.
        <br />
        <br />
        <u>Verification process</u>
        <br />
        <br />
        We may request that you provide additional information reasonably
        necessary to verify you and your consumer&#39;s request. If you submit
        the request through an authorised agent, we may need to collect
        additional information to verify your identity before processing your
        request.
        <br />
        <br />
        Upon receiving your request, we will respond without undue delay, but in
        all cases, within forty-five (45) days of receipt. The response period
        may be extended once by forty-five (45) additional days when reasonably
        necessary. We will inform you of any such extension within the initial
        45-day response period, together with the reason for the extension.
        <br />
        <br />
        <u>Right to appeal</u>
        <br />
        <br />
        If we decline to take action regarding your request, we will inform you
        of our decision and reasoning behind it. If you wish to appeal our
        decision, please email us at{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>
        . Within sixty (60) days of receipt of an appeal, we will inform you in
        writing of any action taken or not taken in response to the appeal,
        including a written explanation of the reasons for the decisions. If
        your appeal is denied, you may contact the Attorney General to submit a
        complaint.
      </Typography>
      <Typography id="section12" variant="h5" sx={{ my: 3 }}>
        12. Do Other Regions Have Specific Privacy Rights?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> You may have additional rights based on the country
          you reside in.
        </i>
      </Typography>
      <Typography variant="h6" sx={{ my: 1 }}>
        Australia and New Zealand
      </Typography>
      <Typography variant="body2">
        We collect and process your personal information under the obligations
        and conditions set by Australia&#39;s Privacy Act 1988 and New
        Zealand&#39;s Privacy Act 2020 (Privacy Act).
        <br />
        <br />
        This privacy notice satisfies the notice requirements defined in both
        Privacy Acts, in particular: what personal information we collect from
        you, from which sources, for which purposes, and other recipients of
        your personal information.
        <br />
        <br />
        If you do not wish to provide the personal information necessary to
        fulfill their applicable purpose, it may affect our ability to provide
        our services, in particular:
      </Typography>
      <ul>
        <li>offer you the products or services that you</li>
        <li>respond to or help with your requests</li>
      </ul>
      <Typography variant="body2">
        At any time, you have the right to request access to or correction of
        your personal information. You can make such a request by contacting us
        by using the contact details provided in the section{" "}
        <Link component={NextLink} href="#section14">
          How Can You Review, Update, or Delete the Data We Collect From You
        </Link>
        .
        <br />
        <br />
        If you believe we are unlawfully processing your personal information,
        you have the right to submit a complaint about a breach of the
        Australian Privacy Principles to the{" "}
        <Link
          href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us"
          target="_blank"
        >
          Office of the Australian Information Commissioner
        </Link>{" "}
        and a breach of New Zealand&#39;s Privacy Principles to the{" "}
        <Link
          href="https://www.privacy.org.nz/your-rights/making-a-complaint-to-the-privacy-commissioner/"
          target="_blank"
        >
          Office of New Zealand Privacy Commissioner
        </Link>
        .
      </Typography>
      <Typography id="section13" variant="h5" sx={{ my: 3 }}>
        13. Do We Make Updates To This Notice?
      </Typography>
      <Typography variant="body2">
        <i>
          <b>In Short:</b> Yes, we will update this notice as necessary to stay
          compliant with relevant laws.
        </i>
        <br />
        <br />
        We may update this privacy notice from time to time. The updated version
        will be indicated by an updated &#39;Revised&#39; date and the updated
        version will be effective as soon as it is accessible. If we make
        material changes to this privacy notice, we may notify you either by
        prominently posting a notice of such changes or by directly sending you
        a notification. We encourage you to review this privacy notice
        frequently to be informed of how we are protecting your information.
      </Typography>
      <Typography id="section14" variant="h5" sx={{ my: 3 }}>
        14. How Can You Contact Us About This Notice?
      </Typography>
      <Typography variant="body2">
        If you have questions or comments about this notice, you may contact our
        Data Protection Officer (DPO), Mikhaila Fitzpatrick, by email at{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>
        , by phone at <Link href="tel:+353862321667">+353862321667</Link>
        , or contact us by post at:
        <br />
        <br />
        Mikhaila Fitzpatrick <br />
        Attyterrila <br />
        Ennis <br />
        Co. Clare <br />
        Ireland
      </Typography>
      <Typography id="section15" variant="h5" sx={{ my: 3 }}>
        15. How Can You Review, Update, Or Delete The Data We Collect From You?
      </Typography>
      <Typography variant="body2">
        Based on the applicable laws of your country, you may have the right to
        request access to the personal information we collect from you, change
        that information, or delete it. To request to review, update, or delete
        your personal information, please email:{" "}
        <Link href="mailto:mikhailafitzpatrick@gmail.com">
          mikhailafitzpatrick@gmail.com
        </Link>
        <br />
        <br />
        This privacy policy was created using Termly&#39;s Privacy Policy.
      </Typography>
    </Container>
  );
};

export default PrivayPolicy;
