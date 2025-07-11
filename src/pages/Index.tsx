
import HeroSection from "@/components/sections/HeroSection";
import ServicesTabsSection from "@/components/sections/ServicesTabsSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ShippingCTASection from "@/components/sections/ShippingCTASection";
import ShippingSection from "@/components/sections/ShippingSection";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import FactorySearchSection from "@/components/sections/FactorySearchSection";
import VisionSection from "@/components/sections/VisionSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesTabsSection />
      <ShippingSection />
      <FeaturesSectionWithHoverEffects />
      <StatsSection />
      <FactorySearchSection />
      
      <ContactSection />
    </div>
  );
};

export default Index;
