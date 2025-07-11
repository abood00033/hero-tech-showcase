
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
              <Route path="/home" element={<Index />} />
              <Route path="/" element={<Index />} />
              <Route path="/shipping-calculator" element={<ShippingCalculator />} />
              <Route path="/consultation-services" element={<ConsultationServices />} />
              <Route path="/sebaaq-machine" element={<SebaqMachine />} />
              <Route path="/sebaaq-machine/vending-machines" element={<VendingMachines />} />
              <Route path="/sebaaq-machine/production-lines" element={<ProductionLines />} />
              <Route path="/sebaaq-machine/car-wash" element={<CarWash />} />
              <Route path="/car-wash/products" element={<CarWashProducts />} />
              <Route path="/car-wash/bt900" element={<CarWashBT900 />} />
              <Route path="/car-wash/bt500" element={<CarWashBT500 />} />
              {/* Redirect all TL models to the unified products page */}
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
