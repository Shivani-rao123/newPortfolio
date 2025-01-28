// src/app/page.js

import HeroSection from "@/components/HeroSection";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
// Default import for Contact component
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
