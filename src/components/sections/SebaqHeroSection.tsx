import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Truck, Settings, Factory, Globe, CheckCircle, Award } from 'lucide-react';
const SebaqHeroSection = () => {
  const services = [{
    icon: Globe,
    title: "استيراد من الصين",
    description: "شحن موثوق وآمن من الصين إلى السعودية"
  }, {
    icon: Factory,
    title: "توريد المكائن",
    description: "أحدث المكائن والمعدات الصناعية"
  }, {
    icon: Settings,
    title: "تركيب وصيانة",
    description: "خدمات تركيب وصيانة شاملة"
  }];
  const stats = [{
    number: "500+",
    label: "عميل راضي"
  }, {
    number: "1000+",
    label: "آلة تم توريدها"
  }, {
    number: "24/7",
    label: "دعم فني"
  }];
  return <section className="relative min-h-screen bg-gradient-to-br from-sebaaq-midnight via-sebaaq-charcoal to-sebaaq-midnight overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-blue/10 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-sebaaq-blue/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-5"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-sebaaq-blue/20 px-4 py-2 rounded-full border border-sebaaq-blue/30">
                <Award className="h-5 w-5 text-sebaaq-blue ml-2" />
                <span className="text-sm font-medium">شريكك الموثوق في الاستيراد</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl leading-tight text-center lg:text-4xl font-extrabold px-0 mx-px my-[40px] py-[20px]">
                سي باك لوجستيك
                <span className="gradient-text block mt-2 font-bold text-3xl text-center mx-px my-[10px]">استيراد، توريد، تركيب وصيانة أحدث المكائن</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                شريكك الموثوق في <span className="text-sebaaq-blue font-semibold">الاستيراد من الصين</span> وتوريد وتركيب أحدث المكائن والمعدات الصناعية
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 font-semibold group" onClick={() => window.open('https://wa.me/+966594196930', '_blank')}>
                تواصل معنا الآن
                <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 font-semibold" onClick={() => window.open('https://wa.me/+966594196930', '_blank')}>
                <Play className="h-5 w-5 ml-2" />
                شاهد خدماتنا
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {stats.map((stat, index) => <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-sebaaq-blue mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>)}
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="space-y-6">
            <div className="text-center lg:text-right mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">خدماتنا الأساسية</h2>
              <p className="text-gray-400">حلول متكاملة لجميع احتياجاتك الصناعية</p>
            </div>
            
            <div className="grid gap-6">
              {services.map((service, index) => <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-sebaaq-blue/50 transition-all duration-300 group hover:bg-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sebaaq-blue rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
            
            {/* Trust Indicators */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 mt-8">
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white text-sm">جودة مضمونة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white text-sm">ضمان شامل</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white text-sm">دعم محلي</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SebaqHeroSection;