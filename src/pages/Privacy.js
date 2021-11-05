import React from "react";
import {
  ThemeProvider,
} from "@mui/material/styles";

import { theme } from "../components/theme";
import Typography from '@mui/material/Typography';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

import "./style/privacy.scss";

const Privacy = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <section id="section-one-privacy">
          <div className="main-container">
            <Typography variant="h3" className="section-title">
              Privacy Policy
            </Typography>
            <div className="underline"></div>
            <p className="section-info">
                Velocita Racing built the Velocita Racing app as a Free app.
                This SERVICE is provided by Velocita Racing at no cost and is
                intended for use as is.
               </p>
               <p>

                This page is used to inform visitors regarding our policies with
                the collection, use, and disclosure of Personal Information if
                anyone decided to use our Service.
                               
                </p>
                <p>
                If you choose to use our Service, then you agree to the
                collection and use of information in relation to this policy.
                The Personal Information that we collect is used for providing
                and improving the Service. We will not use or share your
                information with anyone except as described in this Privacy
                Policy.
                </p>
               <p>
                The terms used in this Privacy Policy have the same meanings as
                in our Terms and Conditions, which is accessible at Velocita
                Racing unless otherwise defined in this Privacy Policy.
             </p>
               

                <Typography variant='h6' className='section-subtitle'>Information Collection and Use</Typography>
                <div className="underline-small"></div>
                {/* <strong>Information Collection and Use</strong> */}
     
              <p className='paragraph-top'>
                For a better experience, while using our Service, we may require
                you to provide us with certain personally identifiable
                information, including but not limited to name, email id,
                contact number. The information that we request will be retained
                by us and used as described in this privacy policy.
              </p>
              <div>
                <p>
                  The app does use third party services that may collect
                  information used to identify you.
                </p>
                <p>
                  Link to privacy policy of third party service providers used
                  by the app
                </p>

                <ul>
                  <li>
                    <a
                      href="https://firebase.google.com/policies/analytics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Analytics for Firebase
                    </a>
                    <OpenInNewRoundedIcon className='arrow'/>
                  </li>
                </ul>
              </div>
      
                {/* <strong>Log Data</strong> */}
                <Typography variant='h6' className='section-subtitle'>Log Data</Typography>
                <div className="underline-small"></div>
         
              <p className='paragraph-top'>
                We want to inform you that whenever you use our Service, in a
                case of an error in the app we collect data and information
                (through third party products) on your phone called Log Data.
                This Log Data may include information such as your device
                Internet Protocol (“IP”) address, device name, operating system
                version, the configuration of the app when utilizing our
                Service, the time and date of your use of the Service, and other
                statistics.
              </p>
              
                {/* <strong>Cookies</strong> */}
                <Typography variant='h6' className='section-subtitle'>Cookies</Typography>
                <div className="underline-small"></div>
            
              <p className='paragraph-top'>
                Cookies are files with a small amount of data that are commonly
                used as anonymous unique identifiers. These are sent to your
                browser from the websites that you visit and are stored on your
                device's internal memory.
              </p>
              <p>
                This Service does not use these “cookies” explicitly. However,
                the app may use third party code and libraries that use
                “cookies” to collect information and improve their services. You
                have the option to either accept or refuse these cookies and
                know when a cookie is being sent to your device. If you choose
                to refuse our cookies, you may not be able to use some portions
                of this Service.
              </p>
             
                {/* <strong>Service Providers</strong> */}
                <Typography variant='h6' className='section-subtitle'>Service Providers</Typography>
                <div className="underline-small"></div>
           
              <p className='paragraph-top'>
                We may employ third-party companies and individuals due to the
                following reasons:
              </p>
              <ul>
                <li>To facilitate our Service;</li>
                <li>To provide the Service on our behalf;</li>
                <li>To perform Service-related services; or</li>
                <li>To assist us in analyzing how our Service is used.</li>
              </ul>
              <p>
                We want to inform users of this Service that these third parties
                have access to your Personal Information. The reason is to
                perform the tasks assigned to them on our behalf. However, they
                are obligated not to disclose or use the information for any
                other purpose.
              </p>
             
                {/* <strong>Security</strong> */}
                <Typography variant='h6' className='section-subtitle'>Security</Typography>
                <div className="underline-small"></div>
          
              <p className='paragraph-top'>
                We value your trust in providing us your Personal Information,
                thus we are striving to use commercially acceptable means of
                protecting it. But remember that no method of transmission over
                the internet, or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee its absolute security.
              </p>
              
                {/* <strong>Links to Other Sites</strong> */}
                <Typography variant='h6' className='section-subtitle'>Links to Other Sites</Typography>
                <div className="underline-small"></div>
             
              <p className='paragraph-top'>
                This Service may contain links to other sites. If you click on a
                third-party link, you will be directed to that site. Note that
                these external sites are not operated by us. Therefore, we
                strongly advise you to review the Privacy Policy of these
                websites. We have no control over and assume no responsibility
                for the content, privacy policies, or practices of any
                third-party sites or services.
              </p>
            
                {/* <strong>Children’s Privacy</strong> */}
                <Typography variant='h6' className='section-subtitle'>Children's Privacy</Typography>
                <div className="underline-small"></div>
           
              <p className='paragraph-top'>
                These Services do not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13 years of age. In the case we discover that a
                child under 13 has provided us with personal information, we
                immediately delete this from our servers. If you are a parent or
                guardian and you are aware that your child has provided us with
                personal information, please contact us so that we will be able
                to do necessary actions.
              </p>
           
                {/* <strong>Changes to This Privacy Policy</strong> */}
                <Typography variant='h6' className='section-subtitle'>Changes to This Privacy Policy</Typography>
                <div className="underline-small"></div>
           
              <p className='paragraph-top'>
                We may update our Privacy Policy from time to time. Thus, you
                are advised to review this page periodically for any changes. We
                will notify you of any changes by posting the new Privacy Policy
                on this page.
              </p>
              <p>This policy is effective as of 2021-09-16</p>{" "}
              
                {/* <strong>Contact Us</strong> */}
                <Typography variant='h6' className='section-subtitle'>Contact Us</Typography>
                <div className="underline-small"></div>
       
              <p className='paragraph-top'>
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us at
                velocitaracing.rit@gmail.com.
              </p>
          </div>
        </section>
      </ThemeProvider>
    </div>
  );
};

export default Privacy;
