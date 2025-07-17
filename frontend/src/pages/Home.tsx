import HeroSection from "../components/HomePage/sections/HeroSection.tsx";
import AboutSection from "../components/HomePage/sections/AboutSection.tsx";
import SolutionsSection from "../components/HomePage/sections/SolutionsSection.tsx";
import ProjectsSection from "../components/HomePage/sections/ProjectsSection.tsx";
import WhyUsSection from "../components/HomePage/sections/WhyUsSection.tsx";
import PartnersSection from "../components/HomePage/sections/PartnersSection.tsx";
import ContactSection from "../components/HomePage/sections/ContactSection.tsx";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ProjectsSection />
      <WhyUsSection />
      <PartnersSection />
      <ContactSection />
    </main>
  );
}