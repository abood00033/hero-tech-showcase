
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const SebaqHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sebaaq-midnight via-sebaaq-charcoal to-sebaaq-midnight overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-blue/10 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-sebaaq-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              سـبـاق
              <span className="gradient-text block">للآلات الصناعية</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              شريكك الموثوق في استيراد وتوريد أحدث الآلات والمعدات الصناعية من الصين
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4"
                onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
              >
                تواصل معنا
                <ArrowRight className="h-5 w-5 mr-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4"
                onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
              >
                <Play className="h-5 w-5 ml-2" />
                شاهد العرض
              </Button>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-sebaaq-blue/20 to-blue-400/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 mx-auto mb-4 bg-sebaaq-blue rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">جودة مضمونة</h3>
                <p className="text-gray-300">آلات عالية الجودة مع ضمان شامل</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SebaqHeroSection;
