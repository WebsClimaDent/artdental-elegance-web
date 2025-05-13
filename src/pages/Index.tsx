
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import TeamPreview from "../components/home/TeamPreview";
import CasesPreview from "../components/home/CasesPreview";
import TechnologyPreview from "../components/home/TechnologyPreview";
import ContactCTA from "../components/home/ContactCTA";
import BlogPreview from "../components/home/BlogPreview";

const Index = () => {
  useEffect(() => {
    // Update the page title
    document.title = "ArtDental - Elegancia y Precisión";
    
    // Reveal animation for elements when they enter viewport
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", revealOnScroll);
    // Initial check in case elements are already in view when the page loads
    revealOnScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <ServicesPreview />
        <TeamPreview />
        <CasesPreview />
        <TechnologyPreview />
        <BlogPreview />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
