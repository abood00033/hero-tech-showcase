import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cog, Package, Settings, Headphones, Lightbulb, Cpu, Zap, MapPin, ArrowRight, Star, Shield, Clock, Users, Phone } from 'lucide-react';
const SebaqMachine = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);
  const services = [{
    title: "استشارات",
    description: "نقدم استشارات فنية متخصصة لمساعدتكم في اختيار الآلات الأمثل التي تتوافق مع احتياجات مشاريعكم وميزانيتكم",
    icon: Headphones,
    color: "bg-blue-500"
  }, {
    title: "توريد",
    description: "نتولى كافة إجراءات توريد الآلات بكفاءة عالية، تشمل جميع إجراءات هيئة المواصفات والمقاييس والتخليص الجمركي",
    icon: Package,
    color: "bg-green-500"
  }, {
    title: "تركيب",
    description: "فريقنا الفني مؤهل لتركيب جميع أنواع الآلات والمكائن وتشغيلها بأعلى معايير الدقة والاحترافية",
    icon: Settings,
    color: "bg-purple-500"
  }, {
    title: "صيانة",
    description: "نوفر خدمات صيانة شاملة ودعمًا فنيًا لضمان استمرارية عمل الآلات بكفاءة عالية وإطالة عمرها التشغيلي",
    icon: Cog,
    color: "bg-orange-500"
  }, {
    title: "توفير القطع",
    description: "نوفر قطع الغيار الأصلية والمتوافقة مع جميع أنواع الآلات لضمان استمرارية العمل",
    icon: Package,
    color: "bg-red-500"
  }];
  const machineCategories = [{
    title: "مكائن البيع الذاتي",
    subtitle: "تجربة مبتكرة، أرباح مستمرة",
    description: "انتقلوا بتجارة التجزئة إلى مستوى جديد مع مجموعتنا من مكائن البيع الذاتي المتطورة",
    image: "/lovable-uploads/7f53ab4c-dbb6-459a-b98d-07e3971314f2.png",
    link: "/مكائن-البيع-الذاتي",
    features: ["تحكم ذكي", "مدفوعات متنوعة", "صيانة سهلة"]
  }, {
    title: "أنظمة خطوط الإنتاج والمصانع",
    subtitle: "بناء مستقبل الصناعة السعودية",
    description: "أنظمة خطوط إنتاج ومصانع متكاملة، مصممة بأحدث التقنيات لضمان الكفاءة التشغيلية",
    image: "/lovable-uploads/f2b9e552-7049-43c5-8633-7b33ffe817b1.png",
    link: "/خطوط-الإنتاج",
    features: ["أتمتة كاملة", "كفاءة عالية", "توفير في التكلفة"]
  }, {
    title: "مغاسل السيارات الأوتوماتيكية",
    subtitle: "نظافة فائقة، كفاءة لا تضاهى",
    description: "ارتقوا بتجربة غسيل السيارات مع أحدث أنظمة المغاسل الأوتوماتيكية",
    image: "/lovable-uploads/c89ef772-7b7a-46ad-8c9e-033a7db07978.png",
    link: "/مغاسل-السيارات",
    features: ["غسيل سريع", "توفير المياه", "نتائج مثالية"]
  }, {
    title: "المشاريع الترفيهية",
    subtitle: "استثمر في مستقبل الترفيه السعودي",
    description: "مجموعة واسعة من الأنظمة الترفيهية المبتكرة التي تضمن تجارب لا تُنسى",
    image: "/lovable-uploads/640aeb90-1566-4874-8489-7c6bfc60e55e.png",
    link: "/الأنظمة-الترفيهية",
    features: ["تقنيات حديثة", "تجربة ممتعة", "عائد استثماري"]
  }];
  const expertiseAreas = [{
    title: "فهم معمّق للتكنولوجيا المتقدمة",
    description: "إننا نتعمق في فهم بنيتها الجوهرية وأسسها التقنية مع التعامل المباشر مع مجموعة متنوعة من الأنظمة الصناعية",
    icon: Lightbulb
  }, {
    title: "تحليل النظم المتكامل",
    description: "لدينا فهم عميق للمكونات الميكانيكية الدقيقة والدوائر الكهربائية والأنظمة النيوماتيكية والهيدروليكية",
    icon: Cpu
  }, {
    title: "التخطيط الفني والتجهيز الموقعي",
    description: "نُقيّم موقع التركيب فنيًا بشكل كامل ونُخطط لتوزيع الآلات بما يضمن كفاءة التشغيل والسلامة",
    icon: MapPin
  }, {
    title: "تركيب وتشغيل احترافي",
    description: "يشرف فريقنا الفني المتخصص على عمليات تركيب وتجميع الآلات بدقة متناهية وأفضل الممارسات الصناعية",
    icon: Zap
  }];
  const stats = [{
    number: "90+",
    label: "آلة تم تركيبها",
    icon: Cog
  }, {
    number: "800+",
    label: "عملية صيانة",
    icon: Settings
  }, {
    number: "60+",
    label: "عميل دائم",
    icon: Users
  }, {
    number: "8+",
    label: "سنوات خبرة",
    icon: Clock
  }, {
    number: "490+",
    label: "قطعة غيار",
    icon: Package
  }];
  const whyChooseUs = [{
    title: "جودة مضمونة",
    description: "معايير عالمية في الجودة",
    icon: Shield
  }, {
    title: "خدمة متميزة",
    description: "دعم فني على مدار الساعة",
    icon: Star
  }, {
    title: "أسعار تنافسية",
    description: "أفضل الأسعار في السوق",
    icon: Badge
  }, {
    title: "خبرة واسعة",
    description: "سنوات من الخبرة المتخصصة",
    icon: Users
  }];
  return <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-sebaaq-midnight via-sebaaq-charcoal to-sebaaq-midnight overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
        backgroundImage: `url('/lovable-uploads/643ddcfe-a488-42a0-9ed2-b681b28a670c.png')`
      }} />
        
        <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-midnight/90 to-sebaaq-charcoal/90"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sebaaq-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-base px-6 py-2 bg-sebaaq-blue/20 text-sebaaq-blue border-sebaaq-blue/30">
              <Star className="w-4 h-4 mr-2" />
              الخيار الأول للآلات المتطورة
            </Badge>
            
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              سـي بـاك ماشـين
              <span className="gradient-text block mt-4 text-3xl md:text-5xl lg:text-6xl">توريد • تركيب • صيانة</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              آلات متطورة لمستقبل الصناعة السعودية
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
              شريككم الموثوق في توريد الآلات المميزة ذات المواصفات القوية من الصين، مع حلول تكنولوجية متقدمة تعزز كفاءة عملياتكم وتضمن أعلى مستويات الجودة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                تواصل معنا الآن
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 text-lg font-semibold transition-all duration-300">
                <ArrowRight className="w-5 h-5 mr-2" />
                استكشف منتجاتنا
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
              لماذا سي باك ماشين؟
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {whyChooseUs.map((item, index) => <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-sebaaq-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-sebaaq-blue" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Machine Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
              مجموعتنا الواسعة
              <span className="gradient-text block">من الآلات المتخصصة</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              استثمارات استراتيجية تدعم أهدافكم التجارية وتتوافق مع رؤية المملكة 2030
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {machineCategories.map((category, index) => <Card key={index} className={`group overflow-hidden transition-all duration-500 transform ${hoveredProduct === index ? 'scale-105 shadow-2xl -translate-y-2' : 'scale-100 shadow-lg'}`} onMouseEnter={() => setHoveredProduct(index)} onMouseLeave={() => setHoveredProduct(null)}>
                <div className="relative h-64 overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-sebaaq-blue text-white">جديد</Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-sebaaq-midnight mb-2">
                    {category.title}
                  </CardTitle>
                  <p className="text-sebaaq-blue font-medium mb-3">{category.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.features.map((feature, idx) => <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>)}
                  </div>
                  
                  <Link to={category.link}>
                    <Button className="w-full bg-sebaaq-blue hover:bg-blue-600 text-white group">
                      اعرف المزيد
                      <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
              خدماتنا المتكاملة
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              نقدم حلولاً شاملة من الاستشارة إلى ما بعد البيع
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className={`group p-6 transition-all duration-300 transform hover:shadow-xl ${hoveredService === index ? 'scale-105 bg-gradient-to-br from-white to-blue-50' : 'scale-100'}`} onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)}>
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center ml-4 transition-transform group-hover:scale-110`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button variant="ghost" className="text-sebaaq-blue hover:text-blue-600 p-0 h-auto font-semibold">
                  اعرف المزيد ←
                </Button>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/643ddcfe-a488-42a0-9ed2-b681b28a670c.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <p className="text-gray-300 text-lg">نفخر بثقة عملائنا وإنجازاتنا المتميزة</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-sebaaq-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-sebaaq-blue" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-sebaaq-blue mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Enhanced Technical Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
              خبرتنا التقنية الشاملة
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              فهم عميق وشامل للأنظمة التقنية المعقدة مع إدراك دقيق لتعقيدات عملها الميكانيكي
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => <Card key={index} className={`group p-8 transition-all duration-300 transform ${hoveredExpertise === index ? 'scale-105 shadow-2xl bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5' : 'scale-100 shadow-lg'}`} onMouseEnter={() => setHoveredExpertise(index)} onMouseLeave={() => setHoveredExpertise(null)}>
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-xl flex items-center justify-center ml-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight leading-tight">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sebaaq-blue to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sebaaq-blue/90 to-blue-600/90"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            ابدأ مشروعك معنا اليوم
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا الآن للحصول على استشارة مجانية وتحديد أفضل الحلول لاحتياجاتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sebaaq-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl">
              <Phone className="w-5 h-5 mr-2" />
              اتصل بنا الآن
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-blue px-8 py-4 text-lg font-semibold">
              <ArrowRight className="w-5 h-5 mr-2" />
              طلب عرض سعر
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default SebaqMachine;