
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Settings, Cog, Headphones } from 'lucide-react';

const SebaqServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

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

  return (
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
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group p-6 transition-all duration-300 transform hover:shadow-xl bg-white ${
                hoveredService === index ? 'shadow-2xl md:scale-105 bg-gradient-to-br from-white to-blue-50' : ''
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              role="article"
              aria-labelledby={`service-${index}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center ml-4 transition-transform group-hover:scale-110`}>
                  <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 id={`service-${index}`} className="font-playfair text-xl font-bold text-sebaaq-midnight">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {service.description}
              </p>
              <Button 
                variant="ghost" 
                className="text-sebaaq-blue hover:text-blue-600 p-0 h-auto font-semibold min-w-11 min-h-11"
                aria-label={`اعرف المزيد عن خدمة ${service.title}`}
              >
                اعرف المزيد ←
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SebaqServices;
