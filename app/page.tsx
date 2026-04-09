import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import WhyMindGroup from "@/components/WhyMindGroup";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Approach />
        <WhyMindGroup />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
