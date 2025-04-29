
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TimelineSection from "@/components/TimelineSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

import { experienceData } from "@/data/experienceData";
import { educationData } from "@/data/educationData";

const Index = () => {
  return (
    <div className="min-h-screen bg-theme-dark">
      <Navbar />
      <Hero />
      <About />
      <TimelineSection 
        title="Professional Experience" 
        items={experienceData} 
        type="experience"
      />
      <TimelineSection 
        title="Education & Training" 
        items={educationData} 
        type="education"
      />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
