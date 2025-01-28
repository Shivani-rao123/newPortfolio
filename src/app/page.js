// src/app/page.js
import HeroSection from "@/components/HeroSection";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import Footer from "@/components/footer";
import { NavBar } from "@/components/Navbar";  // Named import
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      <NavBar />  {/* Correct usage of the component */}
    </>
  );
}
