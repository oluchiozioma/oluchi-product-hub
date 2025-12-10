import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ContactSection } from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <CaseStudiesSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
