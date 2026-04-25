import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TargetAudience from "@/components/site/TargetAudience";
import About from "@/components/site/About";
import ScientificAuthority from "@/components/site/ScientificAuthority";
import Founders from "@/components/site/Founders";
import OneHealth from "@/components/site/OneHealth";
import Services from "@/components/site/Services";
import Research from "@/components/site/Research";
import CTA from "@/components/site/CTA";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/site/WhatsAppButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "L.A. Pharmatec | Inovação em P&D para Indústrias Farmacêuticas e Cosméticas";
    const desc = "Especialistas em P&D, microbiologia e ensaios laboratoriais para acelerar o desenvolvimento de produtos farmacêuticos, cosméticos e biotecnológicos.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TargetAudience />
      <About />
      <ScientificAuthority />
      <Founders />
      <OneHealth />
      <Services />
      <Research />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
