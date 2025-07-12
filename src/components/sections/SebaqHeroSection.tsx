
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, ArrowRight } from 'lucide-react';

const SebaqHeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-sebaaq-midnight via-sebaaq-charcoal to-sebaaq-midnight overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
        style={{
          backgroundImage: `url('/lovable-uploads/643ddcfe-a488-42a0-9ed2-b681b28a670c.png')`
        }} 
      />
      
      {/* Strong overlay for text visibility */}
      <div className="absolute inset-0 bg-sebaaq-midnight/85"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sebaaq-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          <Badge variant="secondary" className="mb-6 text-base px-6 py-2 bg-sebaaq-blue/30 text-white border-sebaaq-blue/50">
            <Star className="w-4 h-4 mr-2" />
            الخيار الأول للآلات المتطورة
          </Badge>
          
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            سـي بـاك ماشـين
            <span className="block mt-4 text-3xl md:text-5xl lg:text-6xl text-sebaaq-blue">توريد , تركيب , صيانة</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            آلات متطورة لمستقبل الصناعة السعودية
          </p>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-12 leading-relaxed">
            شريككم الموثوق في توريد الآلات المميزة ذات المواصفات القوية من الصين، مع حلول تكنولوجية متقدمة تعزز كفاءة عملياتكم وتضمن أعلى مستويات الجودة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 min-w-11 min-h-11"
              aria-label="تواصل معنا للحصول على خدماتنا"
              onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              تواصل معنا الآن
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 hover:text-white hover:border-white/80 px-8 py-4 text-lg font-semibold transition-all duration-300 min-w-11 min-h-11 backdrop-blur-sm"
              aria-label="استكشف منتجاتنا والآلات المتاحة"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              استكشف منتجاتنا
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SebaqHeroSection;
