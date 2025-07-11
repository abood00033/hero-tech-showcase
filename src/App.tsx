import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import ShippingCalculator from "./pages/ShippingCalculator";
import CarWashBT900 from "./pages/CarWashBT900";
import CarWashBT500 from "./pages/CarWashBT500";
import CarWashTL500 from "./pages/CarWashTL500";
import CarWashTL400 from "./pages/CarWashTL400";
import CarWashTL300 from "./pages/CarWashTL300";
import CarWashProducts from "./pages/CarWashProducts";
import ConsultationServices from "./pages/ConsultationServices";
import SebaqMachine from "./pages/SebaqMachine";
import VendingMachines from "./pages/VendingMachines";
import ProductionLines from "./pages/ProductionLines";
import CarWash from "./pages/CarWash";
import EntertainmentSystems from "./pages/EntertainmentSystems";
import PartsAndMaintenance from "./pages/PartsAndMaintenance";
import VendingMachineParts from "./pages/VendingMachineParts";
import ProductionLineParts from "./pages/ProductionLineParts";
import CarWashParts from "./pages/CarWashParts";
import EntertainmentSystemParts from "./pages/EntertainmentSystemParts";
import Alibaba from "./pages/Alibaba";
import Invest from "./pages/Invest";
import PitchDeck from "./pages/PitchDeck";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main role="main">
            <Routes>
              <Route path="/الرئيسية" element={<Index />} />
              <Route path="/" element={<Index />} />
              <Route path="/حاسبة-تكلفة-الشحن" element={<ShippingCalculator />} />
              <Route path="/خدمات-الاستشارة" element={<ConsultationServices />} />
              <Route path="/سي-باك-ماشين" element={<SebaqMachine />} />
              <Route path="/مكائن-البيع-الذاتي" element={<VendingMachines />} />
              <Route path="/خطوط-الإنتاج" element={<ProductionLines />} />
              <Route path="/مغاسل-السيارات" element={<CarWash />} />
              <Route path="/منتجات-مغاسل-السيارات" element={<CarWashProducts />} />
              <Route path="/مغسلة-bt900" element={<CarWashBT900 />} />
              <Route path="/مغسلة-bt500" element={<CarWashBT500 />} />
              <Route path="/مغسلة-tl500" element={<CarWashProducts />} />
              <Route path="/مغسلة-tl400" element={<CarWashProducts />} />
              <Route path="/مغسلة-tl300" element={<CarWashProducts />} />
              <Route path="/الأنظمة-الترفيهية" element={<EntertainmentSystems />} />
              <Route path="/قطع-الغيار-والصيانة" element={<PartsAndMaintenance />} />
              <Route path="/قطع-غيار-مكائن-البيع" element={<VendingMachineParts />} />
              <Route path="/قطع-غيار-خطوط-الإنتاج" element={<ProductionLineParts />} />
              <Route path="/قطع-غيار-مغاسل-السيارات" element={<CarWashParts />} />
              <Route path="/قطع-غيار-الأنظمة-الترفيهية" element={<EntertainmentSystemParts />} />
              <Route path="/الشحن-والاستيراد-من-الصين" element={<Alibaba />} />
              <Route path="/من-نحن" element={<AboutUs />} />
              <Route path="/استثمار" element={<Invest />} />
              <Route path="/عرض-الاستثمار" element={<PitchDeck />} />
              
              {/* Keep old English routes for backward compatibility */}
              <Route path="/home" element={<Index />} />
              <Route path="/shipping-calculator" element={<ShippingCalculator />} />
              <Route path="/consultation-services" element={<ConsultationServices />} />
              <Route path="/sebaaq-machine" element={<SebaqMachine />} />
              <Route path="/sebaaq-machine/vending-machines" element={<VendingMachines />} />
              <Route path="/sebaaq-machine/production-lines" element={<ProductionLines />} />
              <Route path="/sebaaq-machine/car-wash" element={<CarWash />} />
              <Route path="/car-wash/products" element={<CarWashProducts />} />
              <Route path="/car-wash/bt900" element={<CarWashBT900 />} />
              <Route path="/car-wash/bt500" element={<CarWashBT500 />} />
              <Route path="/car-wash/tl500" element={<CarWashProducts />} />
              <Route path="/car-wash/tl400" element={<CarWashProducts />} />
              <Route path="/car-wash/tl300" element={<CarWashProducts />} />
              <Route path="/sebaaq-machine/entertainment-systems" element={<EntertainmentSystems />} />
              <Route path="/parts-maintenance" element={<PartsAndMaintenance />} />
              <Route path="/parts-maintenance/vending-machine-parts" element={<VendingMachineParts />} />
              <Route path="/parts-maintenance/production-line-parts" element={<ProductionLineParts />} />
              <Route path="/parts-maintenance/car-wash-parts" element={<CarWashParts />} />
              <Route path="/parts-maintenance/entertainment-system-parts" element={<EntertainmentSystemParts />} />
              <Route path="/shipping-import-china" element={<Alibaba />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/pitch-deck" element={<PitchDeck />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
