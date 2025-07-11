
import ShippingCalculatorSection from "@/components/sections/ShippingCalculatorSection";

const ShippingCalculator = () => {
  return (
    <div className="min-h-screen bg-background font-cairo">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            حاسبة تكلفة الشحن
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            احسب تكلفة الشحن من الصين إلى المملكة العربية السعودية بدقة وسرعة
          </p>
        </div>
        <ShippingCalculatorSection />
      </div>
    </div>
  );
};

export default ShippingCalculator;
