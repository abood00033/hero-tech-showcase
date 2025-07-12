
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Utensils, Zap, Building2, Cpu, Car, Package, Droplets, Cog, Star, Target, Shield, Gauge } from 'lucide-react';

const ProductionLines = () => {
  const industrialSectors = [
    {
      title: "مصانع المنتجات الغذائية والمشروبات",
      icon: Utensils,
      items: [
        "مصانع الأغذية (الألبان، العصائر، المخبوزات، الحبوب)",
        "مصانع تعبئة وتغليف المياه",
        "مصانع إنتاج المواد الخام الغذائية (السكر، الزيوت)"
      ]
    },
    {
      title: "مصانع المنتجات الكيميائية والبتروكيماوية",
      icon: Factory,
      items: [
        "مصانع البتروكيماويات (البلاستيك، الأسمدة، الكيماويات)",
        "مصانع الكيماويات المتخصصة",
        "مصانع الأسمدة والمبيدات"
      ]
    },
    {
      title: "مصانع مواد البناء والمعادن",
      icon: Building2,
      items: [
        "مصانع الحديد والصلب",
        "مصانع الألومنيوم",
        "مصانع الأسمنت والطوب الخرساني",
        "مصانع الزجاج"
      ]
    },
    {
      title: "مصانع الأجهزة الكهربائية والإلكترونية",
      icon: Zap,
      items: [
        "مصانع الأجهزة المنزلية (غسالات، ثلاجات، مكيفات)",
        "مصانع الأجهزة الإلكترونية",
        "مصانع اللوحات الإلكترونية ومكوناتها",
        "مصانع الألواح الشمسية ومعدات الطاقة المتجددة"
      ]
    },
    {
      title: "مصانع الصناعات الدوائية والمستلزمات الطبية",
      icon: Shield,
      items: [
        "مصانع الأدوية",
        "مصانع المستحضرات الصيدلانية",
        "مصانع الأدوات والمستلزمات الطبية"
      ]
    },
    {
      title: "مصانع المركبات ومعدات النقل",
      icon: Car,
      items: [
        "مصانع تجميع السيارات وأجزائها",
        "مصانع هياكل ومركبات النقل",
        "مصانع مكونات ناقل الحركة الميكانيكية"
      ]
    },
    {
      title: "مصانع التعبئة والتغليف والورق",
      icon: Package,
      items: [
        "مصانع الورق والطباعة",
        "مصانع التغليف البلاستيكي",
        "مصانع تعبئة وتغليف المنتجات المختلفة"
      ]
    },
    {
      title: "مصانع متخصصة وحيوية أخرى",
      icon: Cog,
      items: [
        "مصانع إنتاج الأكسجين/النيتروجين الصناعي",
        "مصانع تحلية المياه",
        "مصانع معالجة مياه الصرف الصحي",
        "مصانع صناعة الهيدروجين النظيف"
      ]
    }
  ];

  const advantages = [
    {
      title: "كفاءة تشغيلية عالية",
      description: "تحسين معدلات الإنتاج وتقليل الهدر",
      icon: Gauge
    },
    {
      title: "تقليل التكاليف",
      description: "خفض التكاليف التشغيلية وزيادة الربحية",
      icon: Target
    },
    {
      title: "جودة لا تضاهى",
      description: "ضمان أعلى معايير الجودة في المنتجات",
      icon: Star
    },
    {
      title: "موثوقية عالية",
      description: "آلات مصممة للعمل المستمر بأقل صيانة",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal overflow-hidden">
        {/* Visual Production Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-sebaaq-blue/10 via-blue-500/5 to-cyan-500/10"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-midnight/80 to-sebaaq-charcoal/80"></div>
        
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            أنظمة خطوط الإنتاج والمصانع
            <span className="gradient-text block mt-2">بناء مستقبل الصناعة السعودية</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            في ظل رؤية السعودية 2030 التي تهدف إلى تنويع الاقتصاد وتعزيز المحتوى المحلي، نقدم لكم أنظمة خطوط إنتاج ومصانع متكاملة، مصممة بأحدث التقنيات لضمان الكفاءة التشغيلية، تقليل التكاليف، وزيادة القدرة التنافسية لمنتجاتكم. آلاتنا ذات المواصفات القوية تضمن لكم جودة إنتاج لا تضاهى وموثوقية عالية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold">
              احصل على عرض سعر
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 rounded-lg font-semibold">
              استشارة تقنية مجانية
            </Button>
          </div>
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-8">
            دعم رؤية المملكة 2030
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            نستهدف القطاعات الصناعية ذات الطلب العالي في المملكة، مساهمين في تحقيق الاكتفاء الذاتي وتعزيز القدرة التنافسية للصناعة السعودية على المستوى العالمي
          </p>
        </div>
      </section>

      {/* Industrial Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            القطاعات الصناعية
            <span className="gradient-text block">التي نخدمها</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industrialSectors.map((sector, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-lg flex items-center justify-center ml-4">
                    <sector.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight leading-tight">
                    {sector.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {sector.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <Star className="w-4 h-4 text-sebaaq-blue mt-1 ml-3 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            مزايا أنظمتنا
            <span className="gradient-text block">الصناعية المتقدمة</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-12">
            تحقيق التميز الصناعي
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">95%</div>
              <div className="text-white font-medium">كفاءة الإنتاج</div>
              <div className="text-gray-400 text-sm mt-2">تحسين معدلات الإنتاج</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">30%</div>
              <div className="text-white font-medium">توفير في التكاليف</div>
              <div className="text-gray-400 text-sm mt-2">تقليل التكاليف التشغيلية</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">99.5%</div>
              <div className="text-white font-medium">معدل الجودة</div>
              <div className="text-gray-400 text-sm mt-2">ضمان جودة المنتجات</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">24/7</div>
              <div className="text-white font-medium">تشغيل مستمر</div>
              <div className="text-gray-400 text-sm mt-2">موثوقية عالية</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-sebaaq-midnight mb-8">
            ابدأ مشروعك الصناعي معنا
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            تواصل معنا للحصول على استشارة تقنية مجانية وتصميم خط الإنتاج المثالي لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg">
              تواصل معنا
            </Button>
            <Button variant="outline" className="border-2 border-sebaaq-blue text-sebaaq-blue hover:bg-sebaaq-blue hover:text-white px-12 py-4 rounded-lg font-semibold text-lg">
              طلب زيارة تقنية
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductionLines;
