
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Coffee, Droplets, Flower, Book, Heart, Phone, Palette, Pill, Ticket, MapPin, Star } from 'lucide-react';

const VendingMachines = () => {
  const machineTypes = [
    {
      title: "مكائن بيع الآيس كريم",
      description: "لتلبية الطلب المتزايد على الحلويات المنعشة",
      icon: Coffee,
      features: ["تحكم في درجة الحرارة", "أنواع متعددة من النكهات", "سهولة الصيانة"]
    },
    {
      title: "مكائن توزيع المياه النقية",
      description: "حلول صحية ومريحة لتوفير المياه",
      icon: Droplets,
      features: ["فلترة متقدمة", "أنظمة تعقيم", "تبريد فوري"]
    },
    {
      title: "مكائن بيع البالونات",
      description: "لإضافة لمسة من المرح في الفعاليات والمراكز الترفيهية",
      icon: Heart,
      features: ["أشكال متنوعة", "ألوان جذابة", "آمنة للأطفال"]
    },
    {
      title: "مكائن بيع تذاكر السينما",
      description: "لتبسيط عملية حجز التذاكر في دور السينما",
      icon: Ticket,
      features: ["حجز فوري", "دفع متعدد", "طباعة سريعة"]
    },
    {
      title: "مكائن بيع الكتب",
      description: "لتوفير الكتب بسهولة في الأماكن العامة",
      icon: Book,
      features: ["تصنيف ذكي", "حماية الكتب", "اختيار واسع"]
    },
    {
      title: "مكائن البيع الجدارية",
      description: "حلول موفرة للمساحة ومرنة للعرض",
      icon: MapPin,
      features: ["توفير المساحة", "تصميم أنيق", "تركيب سهل"]
    },
    {
      title: "مكائن بيع حافظات الهواتف",
      description: "لتلبية احتياجات المستهلكين المتغيرة",
      icon: Phone,
      features: ["أحجام متعددة", "جودة عالية", "أسعار تنافسية"]
    },
    {
      title: "مكائن بيع منتجات التجميل",
      description: "لتوفير منتجات العناية الشخصية بسهولة",
      icon: Palette,
      features: ["منتجات أصلية", "تبريد للحفظ", "عرض جذاب"]
    },
    {
      title: "مكائن بيع الأدوية",
      description: "حلول طبية سريعة (وفقاً للوائح الصحية)",
      icon: Pill,
      features: ["مراقبة الصلاحية", "تخزين آمن", "نظام تتبع"]
    },
    {
      title: "مكائن بيع الزهور",
      description: "لإضافة لمسة جمالية وتوفير الزهور الطازجة",
      icon: Flower,
      features: ["حفظ الطزاجة", "أنواع متنوعة", "تغليف جميل"]
    }
  ];

  const features = [
    {
      title: "أداء موثوق به",
      description: "آلات مصممة للعمل المستمر بكفاءة عالية"
    },
    {
      title: "واجهات سهلة الاستخدام",
      description: "تصاميم بديهية تضمن تجربة مستخدم ممتازة"
    },
    {
      title: "أنظمة دفع متعددة",
      description: "نقد، بطاقات، QR Code، ودفع إلكتروني"
    },
    {
      title: "عائد استثماري مجزي",
      description: "حلول مربحة مع سرعة في استرداد الاستثمار"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            مكائن البيع الذاتي
            <span className="gradient-text block mt-2">تجربة مبتكرة، أرباح مستمرة</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            انتقلوا بتجارة التجزئة إلى مستوى جديد مع مجموعتنا من مكائن البيع الذاتي المتطورة. تتميز هذه المكائن بتقنيات عالية وتصاميم عصرية، مما يوفر تجربة شراء سلسة وممتعة لعملائكم، ويفتح آفاقًا جديدة للأعمال في المواقع ذات الكثافة المرورية العالية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold">
              احصل على عرض سعر
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 rounded-lg font-semibold">
              استشارة مجانية
            </Button>
          </div>
        </div>
      </section>

      {/* Machine Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            مجموعتنا الواسعة
            <span className="gradient-text block">من مكائن البيع الذاتي</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machineTypes.map((machine, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-lg flex items-center justify-center ml-4">
                    <machine.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-sebaaq-midnight">
                    {machine.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {machine.description}
                </p>
                <ul className="space-y-2">
                  {machine.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-sebaaq-blue ml-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            مميزات آلاتنا
            <span className="gradient-text block">التقنية المتقدمة</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-8">
            لماذا تختار مكائن البيع الذاتي؟
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">24/7</div>
              <div className="text-white font-medium">عمل متواصل</div>
              <div className="text-gray-400 text-sm mt-2">خدمة العملاء على مدار الساعة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">0</div>
              <div className="text-white font-medium">تكلفة موظفين</div>
              <div className="text-gray-400 text-sm mt-2">توفير في التكاليف التشغيلية</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sebaaq-blue mb-4">∞</div>
              <div className="text-white font-medium">إمكانيات لا محدودة</div>
              <div className="text-gray-400 text-sm mt-2">توسع في أي مكان</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-sebaaq-midnight mb-8">
            ابدأ استثمارك في مكائن البيع الذاتي
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg">
              تواصل معنا
            </Button>
            <Button variant="outline" className="border-2 border-sebaaq-blue text-sebaaq-blue hover:bg-sebaaq-blue hover:text-white px-12 py-4 rounded-lg font-semibold text-lg">
              تحميل الكتالوج
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendingMachines;
