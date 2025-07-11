
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Camera, Music, Waves, Play, Users, Zap, Star, Trophy, Target, Shield, Rocket } from 'lucide-react';

const EntertainmentSystems = () => {
  const entertainmentCategories = [
    {
      title: "مراكز الألعاب والواقع الافتراضي",
      icon: Gamepad2,
      systems: [
        "أجهزة ألعاب الواقع الافتراضي بخدمة ذاتية (VR Magic Box)",
        "محاكيات الواقع الافتراضي التفاعلية (قيادة السيارات، الطيران، إطلاق النار)",
        "منصات ألعاب الواقع الافتراضي متعددة اللاعبين",
        "شاحنات الواقع الافتراضي المتنقلة (VR Truck Simulator)",
        "صالات ألعاب الواقع الافتراضي المتكاملة"
      ]
    },
    {
      title: "دور السينما والمحاكيات الديناميكية",
      icon: Camera,
      systems: [
        "شاحنات السينما المتنقلة (Mobile Cinema Movie Theater)",
        "محاكيات السينما الديناميكية (5D/7D) مع مقاعد متحركة",
        "شاشات عرض الأفلام الخارجية القابلة للنفخ",
        "دور سينما ديناميكية مع مؤثرات خاصة"
      ]
    },
    {
      title: "الألعاب التفاعلية وصالات الأركيد",
      icon: Music,
      systems: [
        "غرف ألعاب الكاريوكي (KTV Kiosk Booth Karaoke Machine)",
        "آلات الرقص الأركيد (Arcade Dancing Machine)",
        "الألعاب التفاعلية الحائطية (Interactive Wall Painting Games)",
        "آلات ألعاب الأركيد الكلاسيكية والحديثة",
        "ألعاب LED التفاعلية بالأزرار"
      ]
    },
    {
      title: "مدن الملاهي والمناطق الترفيهية",
      icon: Waves,
      systems: [
        "تصميم وإنشاء ملاعب داخلية (Indoor Amusement Park)",
        "مراكز اللعب الداخلية ومناطق المغامرات العائلية",
        "حدائق الترامبولين الداخلية (Indoor Trampoline Park)",
        "منتزهات الألعاب المائية (Outdoor Aqua Park)",
        "منتزهات الملاهي والألعاب الكهربائية",
        "مناطق اللعب المتنقلة للمناسبات",
        "ألعاب الكرنفال والأكشاك الترفيهية"
      ]
    }
  ];

  const specialSolutions = [
    {
      title: "حلول الواقع المعزز",
      description: "ألعاب غامرة تستخدم أحدث تقنيات الواقع المعزز",
      icon: Zap
    },
    {
      title: "منصات الألعاب المحمولة",
      description: "تطوير وتوفير منصات ألعاب الهاتف المحمول مع البث المباشر",
      icon: Play
    },
    {
      title: "الحدائق القابلة للنفخ",
      description: "ألعاب مائية وألعاب نشاط قابلة للنفخ للفعاليات",
      icon: Waves
    }
  ];

  const vision2030Benefits = [
    {
      title: "دعم رؤية 2030",
      description: "المساهمة في تطوير قطاع الترفيه والسياحة",
      icon: Target
    },
    {
      title: "مشاريع القدية",
      description: "حلول ترفيهية متوافقة مع المشاريع الكبرى",
      icon: Rocket
    },
    {
      title: "جذب السياحة",
      description: "تجارب ترفيهية تجذب السياح المحليين والدوليين",
      icon: Users
    },
    {
      title: "استثمار مربح",
      description: "عائد استثماري ممتاز في قطاع الترفيه النامي",
      icon: Trophy
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/9634cacf-6533-42eb-9148-50f8ca4001e1.png')`
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-midnight/80 to-sebaaq-charcoal/80"></div>
        
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            الأنظمة الترفيهية
            <span className="gradient-text block mt-2">استثمر في مستقبل الترفيه السعودي</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            مع التركيز المتزايد للمملكة العربية السعودية على قطاع الترفيه والسياحة، وخاصةً مع رؤية 2030 والمشاريع الكبرى مثل "القدية"، نقدم لكم مجموعة واسعة من الأنظمة الترفيهية المبتكرة التي تضمن تجارب لا تُنسى لزواركم وعائدًا استثماريًا مميزًا لمشروعكم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold">
              احصل على عرض سعر
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 rounded-lg font-semibold">
              جولة افتراضية
            </Button>
          </div>
        </div>
      </section>

      {/* Vision 2030 Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            مواكبة رؤية المملكة 2030
            <span className="gradient-text block">في قطاع الترفيه والسياحة</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vision2030Benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            حلولنا الترفيهية
            <span className="gradient-text block">المتكاملة</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {entertainmentCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-lg flex items-center justify-center ml-4">
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight leading-tight">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.systems.map((system, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <Star className="w-4 h-4 text-sebaaq-blue mt-1 ml-3 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{system}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            حلول ترفيهية
            <span className="gradient-text block">متخصصة ومبتكرة</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specialSolutions.map((solution, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-8">
            فرصة استثمارية ذهبية
            <span className="gradient-text block">في قطاع الترفيه السعودي</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            مع الاستثمارات الضخمة في قطاع الترفيه والمشاريع الكبرى مثل القدية ونيوم، يشهد السوق السعودي نموًا استثنائيًا في الطلب على الحلول الترفيهية المبتكرة
          </p>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">64B</div>
              <div className="text-white font-medium">ريال سعودي</div>
              <div className="text-gray-400 text-sm mt-2">استثمارات القطاع</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">50M</div>
              <div className="text-white font-medium">زائر سنوياً</div>
              <div className="text-gray-400 text-sm mt-2">هدف رؤية 2030</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">2030</div>
              <div className="text-white font-medium">رؤية المملكة</div>
              <div className="text-gray-400 text-sm mt-2">التحول الترفيهي</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">400%</div>
              <div className="text-white font-medium">نمو متوقع</div>
              <div className="text-gray-400 text-sm mt-2">في القطاع</div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            مجالات التطبيق
            <span className="gradient-text block">والاستخدام</span>
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "المراكز التجارية والمولات",
              "الحدائق والمنتزهات العامة",
              "المرافق السياحية والفنادق",
              "المدارس والجامعات",
              "النوادي الرياضية",
              "مراكز الأطفال",
              "الفعاليات والمهرجانات",
              "المطاعم والكافيهات",
              "صالات الأفراح والمناسبات",
              "المستشفيات (مناطق الانتظار)",
              "المطارات ومحطات القطار",
              "المجمعات السكنية الكبيرة"
            ].map((application, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow duration-300">
                <p className="text-sebaaq-midnight font-medium">{application}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-sebaaq-midnight mb-8">
            ابدأ مشروعك الترفيهي معنا
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            تواصل معنا للحصول على استشارة مجانية وتصميم المشروع الترفيهي المثالي لك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg">
              تواصل معنا
            </Button>
            <Button variant="outline" className="border-2 border-sebaaq-blue text-sebaaq-blue hover:bg-sebaaq-blue hover:text-white px-12 py-4 rounded-lg font-semibold text-lg">
              كتالوج الأنظمة الترفيهية
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntertainmentSystems;
