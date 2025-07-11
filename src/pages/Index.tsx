
import EnhancedHeroSection from "@/components/sections/EnhancedHeroSection";
import AccessibilityOptimizedServices from "@/components/sections/AccessibilityOptimizedServices";
import ShippingSection from "@/components/sections/ShippingSection";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import StatsSection from "@/components/sections/StatsSection";
import FactorySearchSection from "@/components/sections/FactorySearchSection";
import ContactSection from "@/components/sections/ContactSection";
import SkipLink from "@/components/common/SkipLink";

const Index = () => {
  return (
    <>
      <SkipLink />
      <div className="min-h-screen">
        <main id="main-content" role="main">
          <EnhancedHeroSection />
          <AccessibilityOptimizedServices />
          <ShippingSection />
          <FeaturesSectionWithHoverEffects />
          <StatsSection />
          <FactorySearchSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Index;
