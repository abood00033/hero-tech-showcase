
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cog, Package, Settings, Headphones, Lightbulb, Cpu, Zap, MapPin, ArrowRight } from 'lucide-react';

const SebaqMachine = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);

  const services = [
    {
      title: "استشارات",
      description: "نقدم استشارات فنية متخصصة لمساعدتكم في اختيار الآلات الأمثل التي تتوافق مع احتياجات مشاريعكم وميزانيتكم",
      icon: Headphones
    },
    {
      title: "توريد", 
      description: "نتولى كافة إجراءات توريد الآلات بكفاءة عالية، تشمل جميع إجراءات هيئة المواصفات والمقاييس والتخليص الجمركي. مستفيدين من خبرتنا الواسعة في الشحن الدولي والخدمات اللوجستية وشبكة موردينا العالمية",
      icon: Package
    },
    {
      title: "تركيب",
      description: "فريقنا الفني مؤهل لتركيب جميع أنواع الآلات والمكائن وتشغيلها بأعلى معايير الدقة والاحترافية.",
      icon: Settings
    },
    {
      title: "صيانة",
      description: "نوفر خدمات صيانة شاملة ودعمًا فنيًا لضمان استمرارية عمل الآلات بكفاءة عالية وإطالة عمرها التشغيلي.",
      icon: Cog
    },
    {
      title: "توفير القطع",
      description: "نوفر خدمات صيانة شاملة ودعمًا فنيًا لضمان استمرارية عمل الآلات بكفاءة عالية وإطالة عمرها التشغيلي.",
      icon: Cog
    }
  ];

  const machineCategories = [
    {
      title: "مكائن البيع الذاتي",
      subtitle: "تجربة مبتكرة، أرباح مستمرة",
      description: "انتقلوا بتجارة التجزئة إلى مستوى جديد مع مجموعتنا من مكائن البيع الذاتي المتطورة",
      image: "/lovable-uploads/7f53ab4c-dbb6-459a-b98d-07e3971314f2.png",
      link: "/sebaaq-machine/vending-machines"
    },
    {
      title: "أنظمة خطوط الإنتاج والمصانع",
      subtitle: "بناء مستقبل الصناعة السعودية",
      description: "أنظمة خطوط إنتاج ومصانع متكاملة، مصممة بأحدث التقنيات لضمان الكفاءة التشغيلية",
      image: "/lovable-uploads/f2b9e552-7049-43c5-8633-7b33ffe817b1.png",
      link: "/sebaaq-machine/production-lines"
    },
    {
      title: "مغاسل السيارات الاوتوماتيكية",
      subtitle: "نظافة فائقة، كفاءة لا تضاهى",
      description: "ارتقوا بتجربة غسيل السيارات مع أحدث أنظمة المغاسل الأوتوماتيكية",
      image: "/lovable-uploads/c89ef772-7b7a-46ad-8c9e-033a7db07978.png",
      link: "/sebaaq-machine/car-wash"
    },
    {
      title: "المشاريع الترفيهية",
      subtitle: "استثمر في مستقبل الترفيه السعودي",
      description: "مجموعة واسعة من الأنظمة الترفيهية المبتكرة التي تضمن تجارب لا تُنسى",
      image: "/lovable-uploads/640aeb90-1566-4874-8489-7c6bfc60e55e.png",
      link: "/sebaaq-machine/entertainment-systems"
    }
  ];

  const expertiseAreas = [
    {
      title: "فهم معمّق لجوهر الآلات وأنظمة التحكم المتقدمة",
      description: "إننا نتعمق في فهم بنيتها الجوهرية وأسسها التقنية. لقد أكسبنا التعامل المباشر مع مجموعة متنوعة من الأنظمة الصناعية والخدمية والترفيهية المتقدمة – بما في ذلك خطوط الإنتاج",
      icon: Lightbulb
    },
    {
      title: "تحليل النظم الميكانيكي، الكهربائية، والهوائية",
      description: "لدينا فهم عميق للمكونات الميكانيكية الدقيقة، الدوائر الكهربائية وأنظمة الطاقة، بالإضافة إلى الأنظمة النيوماتيكية والهيدروليكية التي تدير الحركة والقوة داخل الآلات. هذا الإلمام الشامل يمكننا من تحليل التفاعلات بين هذه الأنظمة، تشخيص الأعطال بدقة",
      icon: Cpu
    },
    {
      title: "التخطيط الفني والتجهيز الموقعي",
      description: "نُقيّم موقع التركيب فنيًا بشكل كامل (مساحة، طاقة، أرضيات، وبيئة العمل)، ونُخطط لتوزيع الآلات بما يضمن كفاءة التشغيل، السلامة، وتكامل توصيلات الخدمات",
      icon: MapPin
    },
    {
      title: "تركيب وتشغيل احترافي",
      description: "يشرف فريقنا الفني المتخصص على عمليات تركيب وتجميع الآلات بدقة متناهية، ملتزمين بالمواصفات الفنية للمصنع، المخططات الهندسية المعتمدة، وأفضل الممارسات الصناعية لضمان سلامة وثبات التركيب",
      icon: Zap
    }
  ];

  const stats = [
    { number: "90+", label: "تم تركيب آله في مختلف المجالات" },
    { number: "800+", label: "اكثر من عملية صيانة" },
    { number: "60+", label: "لدينا عميل دائم" },
    { number: "8+", label: "خبراتنا تتجاوز سنين في مجالات متعددة" },
    { number: "490+", label: "تم توفير قطع غيار" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/643ddcfe-a488-42a0-9ed2-b681b28a670c.png')`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-midnight/80 to-sebaaq-charcoal/80"></div>
        
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            سـي بـاك ماشـين
            <span className="gradient-text block mt-2">استشارة، توريد، تركيب، صيانة</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            آلات متطورة لمستقبل الصناعة السعودية: جودة عالمية، كفاءة لا مثيل لها
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            في سي باك، ندرك أن مفتاح النجاح في المشهد الصناعي السعودي المتنامي يكمن في امتلاك الآلات المناسبة. بصفتنا شركة رائدة في توريد الآلات المميزة ذات المواصفات القوية من الصين، نقدم لكم حلولًا تكنولوجية متقدمة مصممة لتعزيز كفاءة عملياتكم، زيادة إنتاجيتكم، وضمان أعلى مستويات الجودة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold">
              تواصل معنا
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 rounded-lg font-semibold">
              استكشف منتجاتنا
            </Button>
          </div>
        </div>
      </section>

      {/* Machine Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-6">
            اكتشفوا مجموعتنا الواسعة
            <span className="gradient-text block">من الآلات المتخصصة</span>
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            نحن لا نقدم مجرد آلات، بل نقدم استثمارات استراتيجية تدعم أهدافكم التجارية وتتوافق مع رؤية المملكة 2030 الطموحة نحو التنويع الاقتصادي والابتكار
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {machineCategories.map((category, index) => (
              <Card 
                key={index}
                className={`overflow-hidden transition-all duration-300 transform ${
                  hoveredProduct === index ? 'scale-105 shadow-2xl' : 'scale-100 shadow-lg'
                }`}
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-sebaaq-midnight mb-2">
                    {category.title}
                  </CardTitle>
                  <p className="text-sebaaq-blue font-medium mb-3">{category.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <Link to={category.link}>
                    <Button className="w-full bg-sebaaq-blue hover:bg-blue-600 text-white">
                      اعرف المزيد
                      <ArrowRight className="w-4 h-4 mr-2" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
              خبرتنا التقنية الشاملة
              <span className="gradient-text block">من التخطيط الموقعي إلى التشغيل الأمثل والدعم المستمر</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              في سي باك ماشين، تمتد خبرتنا التقنية إلى ما وراء مجرد توريد. نحن لدينا فهم عالي في كثير من المجالات والأنظمة التقنية المعقدة، مع إدراك دقيق لتعقيدات عملها الميكانيكي ومبادئ تصميمها الحركي، وذلك يشمل تحليل القوى والإجهادات، ودراسة المواد المكونة منها، وكفاءة نقل الحركة والطاقة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card 
                key={index}
                className={`p-6 transition-all duration-300 transform ${
                  hoveredExpertise === index ? 'scale-105 shadow-2xl bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5' : 'scale-100 shadow-lg'
                }`}
                onMouseEnter={() => setHoveredExpertise(index)}
                onMouseLeave={() => setHoveredExpertise(null)}
              >
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight leading-tight">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            خدماتنا
            <span className="gradient-text block">المتكاملة</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-6 transition-all duration-300 transform ${
                  hoveredService === index ? 'scale-105 shadow-2xl bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5' : 'scale-100 shadow-lg'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-lg flex items-center justify-center ml-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white text-center mb-4">
            لماذا يثق بنا
            <span className="gradient-text block">عملاؤنا؟</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sebaaq-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-sebaaq-midnight mb-8">
            ابدأ مشروعك معنا اليوم
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            تواصل معنا الآن للحصول على استشارة مجانية وتحديد أفضل الحلول لاحتياجاتك
          </p>
          <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg">
            تواصل معنا
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SebaqMachine;
