import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import SignInPage from "./pages/SignInPage";
import ForgotPassword from "./components/SignInComponents/ForgotPassword";
import SignOut from "./pages/SignOut";
import NewApplication from "./pages/NewApplication";
import Criterias from "./pages/Criterias";
import Administration from "./pages/CompanyAdminDasboard/CPAAdministration";

import FrontPage from "./pages/FrontPage";

import NpoArray from "./components/Npo/NpoArray";

import NPOPage from "./components/NpoPage/NPOPage";

import WaterNpoCards from "./components/NpoPage/waterNpoCards";

import NPOProfileCard from "./pages/NPOAdminDashBoard/NPOProfileCard";
import NPOProfileInfoCard from "./pages/NPOAdminDashBoard/NPOProfileInfoCard";
import NPOMyProjectsCard from "./pages/NPOAdminDashBoard/NPOMyProjectsCard";
import NPOMyProject21 from "./pages/NPOAdminDashBoard/NPOMyProject21";
import ThankYouPage from "./pages/ThankYouPage";
import CompanyProfileAdmin from "./pages/CompanyProfileAdmin";

import AboutUsCard from "./pages/AboutUsCard";
import CompaniesCard from "./pages/CompaniesCard";
import CPProfileCard from "./pages/CompanyAdminDasboard/CPProfileCard";
import CPEditProfileCard from "./pages/CompanyAdminDasboard/CPEditProfileCard";
import CPDonations from "./pages/CompanyAdminDasboard/CPDonations";
import CPProject20Description from "./pages/CompanyAdminDasboard/CPProject20Description";
import CPProject21StatUp from "./pages/CompanyAdminDasboard/CPProject21StatUp";

import SuccessStories from "./pages/SuccessStories";
import SuccessStoryInfo from "./pages/SuccessStoryInfo";

import CompanySubscription from "./pages/CompanySubscription";
import ApplicationOrganizations from "./pages/ApplicationOrganizations";

import ThankyouPage from "./pages/ThankyouFeedback/ThankyouPage";

import logo1 from "./images/Samsung.jpeg";
import logo2 from "./images/aboutUs-card5.jpeg";
import logo3 from "./images/ezgif-sixteen_nine_261-sixteen_nine.jpeg";
import NPOMyDonorsCard from "./pages/NPOAdminDashBoard/NPOMyDonorsCard";
import SignInOrSignUp from "./pages/SignInOrSignUp";
import SignInOrSignUpArray2 from "./pages/SignInOrSignUp/SignInOrSignUpArray2";
import DonationPageBrightFuture from "./pages/DonationPages/DonationPageBrightFuture";
import DonationPageEducation from "./pages/DonationPages/DonationPageEducation";
import DonationPageForestation from "./pages/DonationPages/DonationPageForestation";
import DonationPageGirlsEdu from "./pages/DonationPages/DonationPageGirlsEdu";
import DonationPageSaveAralSea from "./pages/DonationPages/DonationPageSaveAralSea";
import DonationPageSaveTheOcean from "./pages/DonationPages/DonationPageSaveTheOcean";

import NPOAddProjectCard from "./pages/NPOAdminDashBoard/NPOAddProjectCard";
import BootstrapNavBar from "./components/Header";

function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path={"/BootstrapNavBar"} element={<BootstrapNavBar/>}/>
              /* Landing Page */
              <Route path={"/"} element={<FrontPage />} />
              /* Sign in Page */
              <Route path="/SignInPage" element={<SignInPage />} />
              <Route path="/SignInOrSignUp" element={<SignInOrSignUp />} />
              <Route
                path="/SignInOrSignUpArray2/:id"
                element={<SignInOrSignUpArray2 />}
              />
              /* NPO Donations */
              <Route
                path="/DonationPageBrightFuture"
                element={<DonationPageBrightFuture />}
              />
              <Route
                path="/DonationPageEducation"
                element={<DonationPageEducation />}
              />
              <Route
                path="/DonationPageForestation"
                element={<DonationPageForestation />}
              />
              <Route
                path="/DonationPageGirlsEdu"
                element={<DonationPageGirlsEdu />}
              />
              <Route
                path="/DonationPageSaveAralSea"
                element={<DonationPageSaveAralSea />}
              />
              <Route
                path="/DonationPageSaveTheOcean"
                element={<DonationPageSaveTheOcean />}
              />
              /* Forgot Password */
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              /* About Us */
              <Route path={"/AboutUs"} element={<AboutUsCard />} />
              /* Companies Card */
              <Route path={"/CompaniesCard"} element={<CompaniesCard />} />
              <Route path={"/CPProfileCard"} element={<CPProfileCard />} />
              <Route
                path={"/CPEditProfileCard"}
                element={<CPEditProfileCard />}
              />
              <Route path={"/CPDonations"} element={<CPDonations />} />
              <Route
                path={"/CPProject20Description"}
                element={<CPProject20Description />}
              />
              <Route
                path={"/CPProject21StatUp"}
                element={<CPProject21StatUp />}
              />
              /* Success Stories */
              <Route path={"/success-stories"} element={<SuccessStories />} />
              <Route
                path="/page1"
                element={
                  <SuccessStoryInfo
                    title="HOW SAMSUNG HAS CHANGED THE COURSE OF DESERTATION IN ARAL SEA"
                    topText="In 2019, the Korean gigant Samsung decided to become a donor for a forestation non-profit organization #GreenAralSea. The companys contribution of annually $5000 have provided great results. By the end of 2020, the #GreenAralSea initiative were able to plant 1million trees in the harsh deserted region of the Central Asia. In the coming decades these trees will help to reduce C02 emmissions in the world by 5%. "
                    images={[logo1]}
                    bottomText="Samsung CEO Kim Ki Nam says they are happy to be part of a project that focuses on enviromental regrowth in Asia. Nam says he is proud to say that his company has taken its first steps in partnering up with Meloria Impact."
                  />
                }
              />
              <Route
                path="/page2"
                element={
                  <SuccessStoryInfo
                    title="TATA CONSULTANCY CREATING FUTURE ENGINEERS"
                    topText="The Indian IT gigant TCS have taken steps to educate the future IT-engineers. Among other donations, the TCS have donated $10,000 to provide Raspberry Pie equipment to Bright Future. This iniative is already bearing fruits, as children supported by Bright Future and TCS are on their way to become the  IT-engineers of tomorrow. "
                    images={[logo3, logo2]}
                    bottomText="Their latest contribution for the Raspberry Pie has been to support the school children in Uganda. The Ugandan governement has aimed to educate children, in order to create 100 000 future skilled IT-engineers. All this has been planned within coming 10 years. Bright Future is working in collaberation with Ugandan governemnt to promote this education, with the support of TATA. Might these children become the future employees of TCS ? "
                  />
                }
              />
              <Route path="/page3" element={<CompanySubscription />} />
              <Route path="/page4" element={<ApplicationOrganizations />} />
              <Route path="/page5" element={<ThankYouPage />} />
              <Route path="/page6" element={<CompanyProfileAdmin />} />
              /* Npo Landing Page */
              <Route
                path="/NPOPage"
                render={() => (
                  <NPOPage NpoCards={WaterNpoCards} NPOPage={NPOPage} />
                )}
                element={<NPOPage />}
              />
              /* Npo Cards */
              <Route path={"/NpoPages/:id"} element={<NpoArray />} />
              /* Npo Profiles Card */
              <Route path="/NPOProfileCard" element={<NPOProfileCard />} />
              <Route
                path="/NPOProfileInfoCard"
                element={<NPOProfileInfoCard />}
              />
              <Route
                path="/NPOMyProjectsCard"
                element={<NPOMyProjectsCard />}
              />
              /* Add projects*/
              <Route
                path="/NPOAddProjectCard"
                element={<NPOAddProjectCard />}
              />
              /* Project 21 */
              <Route path="/NPOMyProject21" element={<NPOMyProject21 />} />
              <Route path="/NPOMyDonorsCard" element={<NPOMyDonorsCard />} />
              /* Npo Thank you */
              <Route path="/ThankyouPage/:id" element={<ThankyouPage />} />
              /* Criterias*/
              <Route path="/Criterias" element={<Criterias />} />
              /* Sign out page*/
              <Route path="/SignOut" element={<SignOut />} />
              /* Thank you page*/
              <Route path="/NPOThanks" element={<NewApplication />} />
              /* CPA Projects */
              <Route path="/CPAProjects" element={<Administration />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
