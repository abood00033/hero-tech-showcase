
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from 'lucide-react';

const SebaqCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sebaaq-blue to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-sebaaq-blue/90 to-blue-600/90"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
          ابدأ مشروعك معنا اليوم
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          تواصل معنا الآن للحصول على استشارة مجانية وتحديد أفضل الحلول لاحتياجاتك
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-sebaaq-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl min-w-11 min-h-11"
            aria-label="اتصل بنا الآن للحصول على خدماتنا"
            onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            اتصل بنا الآن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SebaqCTA;
