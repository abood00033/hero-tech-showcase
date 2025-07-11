import { Button } from "@/components/ui/button";
import { Calculator, Ship, Plane, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ShippingCTASection = () => {
  const navigate = useNavigate();

  const handleCalculateClick = () => {
    navigate("/shipping-calculator");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5 font-cairo" dir="rtl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main CTA */}
          <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Calculator className="h-12 w-12 text-primary" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
            >
              احسب تكلفة الشحن الآن
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              احصل على تقدير دقيق لتكلفة الشحن من الصين إلى المملكة العربية السعودية
              <br />
              شحن بحري وجوي مع أفضل الأسعار والخدمات المتميزة
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            >
              <div className="flex items-center gap-3 text-right">
                <Ship className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">شحن بحري اقتصادي</span>
              </div>
              <div className="flex items-center gap-3 text-right">
                <Plane className="h-5 w-5 text-secondary-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">شحن جوي سريع</span>
              </div>
              <div className="flex items-center gap-3 text-right">
                <Calculator className="h-5 w-5 text-accent-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">حساب دقيق للتكلفة</span>
              </div>
              <div className="flex items-center gap-3 text-right">
                <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 rotate-180" />
                <span className="text-sm text-muted-foreground">نتائج فورية</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={handleCalculateClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Calculator className="h-5 w-5 ml-2" />
                احسب تكلفة الشحن الآن
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShippingCTASection;