import Breadcrumb from "../../components/Common/Breadcrumb";
import AboutSectionOne from "../../components/About/AboutSectionOne";
import AboutSectionTwo from "../../components/About/AboutSectionTwo";
import AboutUs from "../../components/AboutUs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Discover how Hyperscript is transforming businesses through innovative technology solutions, expert training, and data-driven insights."
      />
      <AboutUs />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
