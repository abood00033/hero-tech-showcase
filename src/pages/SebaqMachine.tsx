
import SebaqHeroSection from '../components/sections/SebaqHeroSection';
import WhyChooseSebaq from '../components/sections/WhyChooseSebaq';
import MachineCategories from '../components/sections/MachineCategories';
import SebaqServices from '../components/sections/SebaqServices';
import SebaqStats from '../components/sections/SebaqStats';
import TechnicalExpertise from '../components/sections/TechnicalExpertise';
import SebaqCTA from '../components/sections/SebaqCTA';

const SebaqMachine = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SebaqHeroSection />
      <WhyChooseSebaq />
      <MachineCategories />
      <SebaqServices />
      <SebaqStats />
      <TechnicalExpertise />
      <SebaqCTA />
    </div>
  );
};

export default SebaqMachine;
