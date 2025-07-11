import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Gamepad, 
  Volume2, 
  Cpu, 
  Zap, 
  Glasses, 
  Radio, 
  Lightbulb, 
  CreditCard, 
  Projector
} from 'lucide-react';

const EntertainmentSystemParts = () => {
  const parts = [
    {
      name: "شاشات العرض (LCD/LED Screens)",
      description: "لعرض الرسومات والألعاب بجودة عالية",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "لوحات الأزرار وعصا التحكم (Joysticks)",
      description: "لتوفير التحكم التفاعلي للاعبين",
      icon: Gamepad,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "وحدات الصوت ومكبرات الصوت (Speakers)",
      description: "لتقديم تجربة صوتية غامرة ومؤثرات واقعية",
      icon: Volume2,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "لوحات الدوائر الإلكترونية (Motherboards/PCBs)",
      description: "المكونات الأساسية لتشغيل وتنسيق الألعاب",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "محركات الحركة (للمحاكيات الديناميكية)",
      description: "لخلق الحركة والإحساس بالواقع في محاكيات الألعاب",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "نظارات/سماعات الواقع الافتراضي (VR Headsets)",
      description: "لتقديم تجربة واقع افتراضي غامرة",
      icon: Glasses,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "أجهزة الاستشعار الحركية",
      description: "لتتبع حركة اللاعبين أو الأجسام داخل بيئة اللعب",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "مصابيح LED وأضواء المؤثرات",
      description: "لإضافة الإثارة والجاذبية البصرية للألعاب",
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "قارئات البطاقات/العملات",
      description: "لتسهيل عملية الدفع والدخول إلى الألعاب",
      icon: CreditCard,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "أجهزة العرض (Projectors)",
      description: "لعرض الألعاب أو الأفلام على الشاشات الكبيرة أو الجدران التفاعلية",
      icon: Projector,
      image: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            قطع غيار الأنظمة الترفيهية
            <span className="gradient-text block mt-2">دعم شامل لأنظمة الترفيه</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            احصل على قطع الغيار التقنية عالية الجودة التي تضمن استمرارية عمل الأنظمة الترفيهية بأفضل أداء
          </p>
        </div>
      </section>

      {/* Parts List Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-8">
            قطع الغيار المتوفرة لآلاتنا
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            للحفاظ على أداء آلاتك بأعلى كفاءة، نوفر قطع الغيار الأساسية والمُختبرة بعناية:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parts.map((part, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-sebaaq-blue/5 hover:to-blue-400/5">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={part.image} 
                    alt={part.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center">
                    <part.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-sebaaq-midnight mb-2">
                    {part.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {part.description}
                  </p>
                  <Link to="/parts-maintenance" state={{ machineType: 'entertainment', partName: part.name }}>
                    <Button className="w-full bg-sebaaq-blue hover:bg-blue-600 text-white">
                      طلب هذه القطعة
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-sebaaq-midnight mb-8">
            اطلب قطع غيارك الآن
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            تحتاج لقطعة غيار معينة أو خدمة صيانة؟ تواصل معنا عبر النموذج المتخصص
          </p>
          <Link to="/parts-maintenance">
            <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              هل تحتاج صيانة؟ تواصل معنا
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EntertainmentSystemParts;
