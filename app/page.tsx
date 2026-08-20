import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Portfolio from "@/components/sections/Portfolio";
import Journey from "@/components/sections/Journey";
import MoreWork from "@/components/sections/MoreWork";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-transparent selection:bg-white selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <TechStack />
          <Portfolio />
          <MoreWork />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
