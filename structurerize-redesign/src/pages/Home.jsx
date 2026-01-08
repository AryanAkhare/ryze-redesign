import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";
import Features from "../components/sections/Features";
import LogoTray from "../components/sections/LogoTray";


export default function Home() {
  return (
    <>
      <Hero />
      <Features /> 
      <LogoTray/>
      <Testimonials />
    </>
  );
}
