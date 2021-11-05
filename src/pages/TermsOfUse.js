import React from "react";
import {
  ThemeProvider,
} from "@mui/material/styles";
import { theme } from "../components/theme";
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import "./style/termsofuse.scss";

const TermsOfUse = () => {
  return (
    <div>
 
      <ThemeProvider theme={theme}>
        <section id="section-one-termsofuse">
          <div className="main-container">
            <Typography variant="h3" className="section-title">
              Terms of Use
            </Typography>
            <div className="underline"></div>
            <Typography variant="body1" className="section-info"></Typography>
            <Typography variant="h6" className="section-subtitle">
              Version 1.0
            </Typography>
            <div className="underline-small"></div>
            <p className="paragraph-top">
              The Velocita Racing website located at
              https://velocitaracing.github.io is a copyrighted work belonging
              to Velocita Racing. Certain features of the Site may be subject to
              additional guidelines, terms, or rules, which will be posted on
              the Site in connection with such features.
            </p>
            <p className="paragraph-top">
              By downloading or using the app, these terms will automatically
              apply to you – you should make sure therefore that you read them
              carefully before using the app. You’re not allowed to copy, or
              modify the app, any part of the app, or our trademarks in any way.
              You’re not allowed to attempt to extract the source code of the
              app, and you also shouldn’t try to translate the app into other
              languages, or make derivative versions. The app itself, and all
              the trade marks, copyright, database rights and other intellectual
              property rights related to it, still belong to Velocita Racing.
            </p>{" "}
            <p>
              Velocita Racing is committed to ensuring that the app is as useful
              and efficient as possible. For that reason, we reserve the right
              to make changes to the app or to charge for its services, at any
              time and for any reason. We will never charge you for the app or
              its services without making it very clear to you exactly what
              you’re paying for.
            </p>{" "}
            <p>
              The Velocita Racing app stores and processes personal data that
              you have provided to us, in order to provide our Service. It’s
              your responsibility to keep your phone and access to the app
              secure. We therefore recommend that you do not jailbreak or root
              your phone, which is the process of removing software restrictions
              and limitations imposed by the official operating system of your
              device. It could make your phone vulnerable to
              malware/viruses/malicious programs, compromise your phone’s
              security features and it could mean that the Velocita Racing app
              won’t work properly or at all.
            </p>{" "}
            <div>
              <p>
                The app does use third party services that declare their own
                Terms and Conditions.
              </p>{" "}
              <p>
                Link to Terms and Conditions of third party service providers
                used by the app
              </p>
              <ul>
                <li>
                  <a
                    href="https://firebase.google.com/terms/analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Analytics for Firebase
                  </a>
                  <OpenInNewRoundedIcon className="arrow" />
                </li>
              </ul>
            </div>
            <p className="paragraph-top">
              You should be aware that there are certain things that Velocita
              Racing will not take responsibility for. Certain functions of the
              app will require the app to have an active internet connection.
              The connection can be Wi-Fi, or provided by your device network
              provider, but Velocita Racing cannot take responsibility for the
              app not working at full functionality if you don’t have access to
              Wi-Fi, and you don’t have any of your data allowance left.
            </p>{" "}
            <p></p>{" "}
            <p>
              If you’re using the app outside of an area with Wi-Fi, you should
              remember that your terms of the agreement with your device network
              provider will still apply. As a result, you may be charged by your
              device provider for the cost of data for the duration of the
              connection while accessing the app, or other third party charges.
              In using the app, you’re accepting responsibility for any such
              charges, including roaming data charges if you use the app outside
              of your home territory (i.e. region or country) without turning
              off data roaming. If you are not the bill payer for the device on
              which you’re using the app, please be aware that we assume that
              you have received permission from the bill payer for using the
              app.
            </p>{" "}
            <p>
              Along the same lines, Velocita Racing cannot always take
              responsibility for the way you use the app i.e. You need to make
              sure that your device stays charged – if it runs out of battery
              and you can’t turn it on to avail the Service, Velocita Racing
              cannot accept responsibility.
            </p>{" "}
            <p>
              With respect to Velocita Racing’s responsibility for your use of
              the app, when you’re using the app, it’s important to bear in mind
              that although we endeavour to ensure that it is updated and
              correct at all times, we do rely on third parties to provide
              information to us so that we can make it available to you.
              Velocita Racing accepts no liability for any loss, direct or
              indirect, you experience as a result of relying wholly on this
              functionality of the app.
            </p>{" "}
            <p>
              At some point, we may wish to update the app. The app is currently
              available on – the requirements for system(and for any additional
              systems we decide to extend the availability of the app to) may
              change, and you’ll need to download the updates if you want to
              keep using the app. Velocita Racing does not promise that it will
              always update the app so that it is relevant to you and/or works
              with the version that you have installed on your device. However,
              you promise to always accept updates to the application when
              offered to you, We may also wish to stop providing the app, and
              may terminate use of it at any time without giving notice of
              termination to you. Unless we tell you otherwise, upon any
              termination, (a) the rights and licenses granted to you in these
              terms will end; (b) you must stop using the app, and (if needed)
              delete it from your device.
            </p>{" "}
            {/* <p>
              <strong>Changes to This Terms and Conditions</strong>
            </p>{" "} */}
            <Typography variant="h6" className="section-subtitle">
              Changes to This Terms and Conditions
            </Typography>
            <div className="underline-small"></div>
            <p className="paragraph-top">
              We may update our Terms and Conditions from time to time. Thus,
              you are advised to review this page periodically for any changes.
              We will notify you of any changes by posting the new Terms and
              Conditions on this page.
            </p>{" "}
            <p>These terms and conditions are effective as of 2021-09-16</p>{" "}
            {/* <p>
              <strong>Contact Us</strong>
            </p>{" "} */}
            <Typography variant="h6" className="section-subtitle">
              Your Privacy
            </Typography>
            <div className="underline-small"></div>
            <p className="paragraph-top">Please read our <Link to={'privacy'} className='link-span'> Privacy Policy. <OpenInNewRoundedIcon className='arrow'/></Link></p>
            <Typography variant="h6" className="section-subtitle">
              Copyright/Trademark Information
            </Typography>
            <div className="underline-small"></div>
            <p className="paragraph-top">
              Copyright ©. All rights reserved. All trademarks, logos and
              service marks displayed on the Site are our property or the
              property of other third-parties. You are not permitted to use
              these Marks without our prior written consent or the consent of
              such third party which may own the Marks.
            </p>
            <Typography variant="h6" className="section-subtitle">
              Contact US
            </Typography>
            <div className="underline-small"></div>
            <p className="paragraph-top">
              If you have any questions or suggestions about our Terms and
              Conditions, do not hesitate to contact us at
              velocitaracing.rit@gmail.com.
            </p>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default TermsOfUse;
