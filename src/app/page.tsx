import AboutSectionOne from "../components/About/AboutSectionOne";
import AboutSectionTwo from "../components/About/AboutSectionTwo";
import Blog from "../components/Blog";
import Brands from "../components/Brands";
import ScrollUp from "../components/Common/ScrollUp";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Hero from "../components/Hero";
import TeamMember from "../components/TeamMember";
import Testimonials from "../components/Testimonials";
import Video from "../components/Video";
import Programs from "../components/Programs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      
      <AboutSectionOne />
      <AboutSectionTwo />
      <Brands />
      <Testimonials />
      <TeamMember />
      <Blog />
      <Contact />
    </>
  );
}
