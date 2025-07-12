import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

// Lazy load components for better performance
const Index = lazy(() => import("./pages/Index"));
const ShippingCalculator = lazy(() => import("./pages/ShippingCalculator"));
const CarWashBT900 = lazy(() => import("./pages/CarWashBT900"));
const CarWashBT500 = lazy(() => import("./pages/CarWashBT500"));
const CarWashTL500 = lazy(() => import("./pages/CarWashTL500"));
const CarWashTL400 = lazy(() => import("./pages/CarWashTL400"));
const CarWashTL300 = lazy(() => import("./pages/CarWashTL300"));
const CarWashProducts = lazy(() => import("./pages/CarWashProducts"));
const ConsultationServices = lazy(() => import("./pages/ConsultationServices"));
const SebaqMachine = lazy(() => import("./pages/SebaqMachine"));
const VendingMachines = lazy(() => import("./pages/VendingMachines"));
const ProductionLines = lazy(() => import("./pages/ProductionLines"));
const CarWash = lazy(() => import("./pages/CarWash"));
const EntertainmentSystems = lazy(() => import("./pages/EntertainmentSystems"));
const PartsAndMaintenance = lazy(() => import("./pages/PartsAndMaintenance"));
const VendingMachineParts = lazy(() => import("./pages/VendingMachineParts"));
const ProductionLineParts = lazy(() => import("./pages/ProductionLineParts"));
const CarWashParts = lazy(() => import("./pages/CarWashParts"));
const EntertainmentSystemParts = lazy(() => import("./pages/EntertainmentSystemParts"));
const Alibaba = lazy(() => import("./pages/Alibaba"));
const Invest = lazy(() => import("./pages/Invest"));
const PitchDeck = lazy(() => import("./pages/PitchDeck"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <Navigation />
          <main role="main">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/الرئيسية" element={<Index />} />
                <Route path="/" element={<Index />} />
                <Route path="/حاسبة-تكلفة-الشحن" element={<ShippingCalculator />} />
                <Route path="/خدمات-الاستشارة" element={<ConsultationServices />} />
                <Route path="/سي-باك-ماشين" element={<SebaqMachine />} />
                <Route path="/مكائن-البيع-الذاتي" element={<VendingMachines />} />
                <Route path="/خطوط-الإنتاج" element={<ProductionLines />} />
                <Route path="/مغاسل-السيارات" element={<CarWash />} />
                <Route path="/مكائن-غسيل-سيارات/مكائن-غسيل-سيارات-بدون-لمس/" element={<CarWashProducts />} />
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
                <Route path="/تواصل-معنا" element={<ContactUs />} />
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
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/invest" element={<Invest />} />
                <Route path="/pitch-deck" element={<PitchDeck />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
