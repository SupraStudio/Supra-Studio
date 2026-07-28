import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Stats from "@/components/Stats";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Studio from "@/components/Studio";
import SplitTwo from "@/components/SplitTwo";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Stats />
        <Expertise />
        <Projects />
        <Studio />
        <SplitTwo />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
