
import SebaqHeroSection from "@/components/sections/SebaqHeroSection";
import RecentMachinesSection from "@/components/sections/RecentMachinesSection";
import ServicesTabsSection from "@/components/sections/ServicesTabsSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ShippingCTASection from "@/components/sections/ShippingCTASection";
import ShippingSection from "@/components/sections/ShippingSection";

import FactorySearchSection from "@/components/sections/FactorySearchSection";
import VisionSection from "@/components/sections/VisionSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SebaqHeroSection />
      <RecentMachinesSection />
      <ServicesTabsSection />
      <ShippingSection />
      <StatsSection />
      <FactorySearchSection />
      
      <ContactSection />
    </div>
  );
};

export default Index;
