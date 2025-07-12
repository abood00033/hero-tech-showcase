
import MachineCategories from '../components/sections/MachineCategories';
import WhyChooseSebaq from '../components/sections/WhyChooseSebaq';
import SebaqServices from '../components/sections/SebaqServices';
import SebaqStats from '../components/sections/SebaqStats';
import TechnicalExpertise from '../components/sections/TechnicalExpertise';
import SebaqCTA from '../components/sections/SebaqCTA';

const SebaqMachine = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MachineCategories />
      <WhyChooseSebaq />
      <SebaqServices />
      <SebaqStats />
      <TechnicalExpertise />
      <SebaqCTA />
    </div>
  );
};

export default SebaqMachine;
