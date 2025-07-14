import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Truck, Settings, Factory, Globe, CheckCircle, Award } from 'lucide-react';
const SebaqHeroSection = () => {
  const services = [{
    icon: Factory,
    title: "البحث عن افضل مصنع",
    description: "خبرتنا تضمن لك المورد الأمثل، ونُطوّر جودة القطع الأساسية في آلتك؛ لضمان جودة فائقة وأداء يدوم"
  }, {
    icon: Settings,
    title: "تركيب احترافي",
    description: "فريقنا المتخصص يتولى تركيب آلاتك بدقة واحترافية، لضمان جاهزيتها للعمل بكفاءة تامة فورًا."
  }, {
    icon: CheckCircle,
    title: "توفير الصيانه والدعم الفني",
    description: "صيانة وقائية ودعمًا فنيًا مستمرًا، مع توفير قطع الغيار، لضمان استمرارية عمل آلاتك وتقليل أي توقف محتمل."
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
  return <section className="relative min-h-[90vh] bg-gradient-to-br from-background via-background/80 to-muted/30 overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-[0.02]"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
                <Award className="h-5 w-5 text-primary ml-2" />
                <span className="text-sm font-medium text-primary">شريكك الموثوق في الاستيراد</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl leading-tight text-center lg:text-5xl font-extrabold text-foreground">
                سي باك لوجستيك
                <span className="block mt-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent font-bold text-3xl md:text-4xl">
                  استيراد، توريد، تركيب وصيانة أحدث المكائن
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center md:text-2xl">
                شريكك الموثوق في توريد وتركيب أحدث المكائن والمعدات الصناعية
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 font-semibold group shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" onClick={() => window.open('https://wa.me/+966594196930', '_blank')}>
                تواصل معنا الآن
                <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://wa.me/+966594196930', '_blank')} className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Play className="h-5 w-5 ml-2" />
                شاهد خدماتنا
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/20">
              {stats.map((stat, index) => <div key={index} className="text-center group">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">كيف نعمل في سي باك</h2>
            </div>
            
            <div className="grid gap-6">
              {services.map((service, index) => <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:bg-card/80 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-foreground font-bold text-xl mb-3 text-center">{service.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed text-center">{service.description}</p>
                    </div>
                  </div>
                </div>)}
            </div>
            
            {/* Trust Indicators */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 mt-8">
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground text-sm">جودة مضمونة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground text-sm">ضمان</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-foreground text-sm">دعم محلي</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SebaqHeroSection;