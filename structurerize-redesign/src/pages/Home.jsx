import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";
import Features from "../components/sections/Features";
import LogoTray from "../components/sections/LogoTray";
import AuditHero from "../components/sections/AuditHero";

import Comparison from "../components/sections/Comparison";
import Footer from "../components/layout/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <Features /> 
      <LogoTray/>
      <Testimonials />
      <Comparison/>
      <AuditHero></AuditHero>
      <Footer/>
    </>
  );
}
