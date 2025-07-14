
import SebaqHeroSection from "@/components/sections/SebaqHeroSection";
import RecentMachinesSection from "@/components/sections/RecentMachinesSection";
import ServicesTabsSection from "@/components/sections/ServicesTabsSection";
import StatsSection from "@/components/sections/StatsSection";
import ShippingSection from "@/components/sections/ShippingSection";
import FactorySearchSection from "@/components/sections/FactorySearchSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SebaqHeroSection />
      <RecentMachinesSection />
      <ServicesTabsSection />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <ShippingSection />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <StatsSection />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <FactorySearchSection />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <ContactSection />
    </div>
  );
};

export default Index;
