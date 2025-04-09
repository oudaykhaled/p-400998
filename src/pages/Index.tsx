import React from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WorkProgress from "@/components/sections/WorkProgress";
import PortfolioSection from "@/components/sections/portfolio/PortfolioSection";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      <Hero />
      <Services />
      <WorkProgress />
      <PortfolioSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
