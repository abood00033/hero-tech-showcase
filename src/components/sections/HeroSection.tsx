
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Truck, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sebaaq-midnight via-sebaaq-charcoal to-sebaaq-midnight overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-blue/10 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-sebaaq-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-6 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                سي باك لوجستيك
                <span className="gradient-text block mt-2">شريكك في النجاح</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                الحل الشامل للشحن من الصين إلى السعودية. نوفر خدمات لوجستية متكاملة تضمن وصول شحنتك بأمان وفي الوقت المحدد.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 font-semibold group"
              >
                تواصل معنا
                <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 font-semibold"
              >
                <Play className="h-5 w-5 ml-2" />
                شاهد كيف نعمل
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sebaaq-blue mb-1">500+</div>
                <div className="text-sm text-gray-400">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sebaaq-blue mb-1">1000+</div>
                <div className="text-sm text-gray-400">شحنة نجحت</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-sebaaq-blue mb-1">24/7</div>
                <div className="text-sm text-gray-400">دعم فني</div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "ضمان الأمان",
                description: "حماية شحنتك من البداية للنهاية"
              },
              {
                icon: Truck,
                title: "شحن سريع",
                description: "توصيل في الوقت المحدد"
              },
              {
                icon: Users,
                title: "دعم 24/7",
                description: "فريق متخصص لخدمتك"
              },
              {
                icon: ArrowRight,
                title: "تتبع مباشر",
                description: "راقب شحنتك لحظة بلحظة"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-sebaaq-blue/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-sebaaq-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
