
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const SebaqCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-blue/20 to-transparent"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            ابدأ مشروعك معنا اليوم
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            انضم إلى شركائنا الناجحين واحصل على أحدث تقنيات الآلات الصناعية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-sebaaq-midnight hover:bg-gray-100 px-8 py-4"
            >
              <Phone className="h-5 w-5 ml-2" />
              تواصل معنا
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4"
            >
              <Mail className="h-5 w-5 ml-2" />
              استشارة مجانية
            </Button>
          </div>
          
          <div className="text-white/80 text-sm">
            <p>تواصل معنا: info@seapaac.com | www.seapaac.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SebaqCTA;
