
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';

const MachineCategories = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const machineCategories = [{
    title: "مغاسل السيارات الأوتوماتيكية",
    subtitle: "نظافة فائقة، كفاءة لا تضاهى",
    description: "ارتقوا بتجربة غسيل السيارات مع أحدث أنظمة المغاسل الأوتوماتيكية",
    image: "/lovable-uploads/c89ef772-7b7a-46ad-8c9e-033a7db07978.png",
    link: "/مغاسل-السيارات",
    features: ["غسيل سريع", "توفير المياه", "نتائج مثالية"]
  }, {
    title: "مكائن البيع الذاتي",
    subtitle: "تجربة مبتكرة، أرباح مستمرة",
    description: "انتقلوا بتجارة التجزئة إلى مستوى جديد مع مجموعتنا من مكائن البيع الذاتي المتطورة",
    image: "/lovable-uploads/0540355a-e2a1-4bd6-bbc7-34cd87eacb10.png",
    link: "/مكائن-البيع-الذاتي",
    features: ["تحكم ذكي", "مدفوعات متنوعة", "صيانة سهلة"]
  }, {
    title: "أنظمة خطوط الإنتاج والمصانع",
    subtitle: "بناء مستقبل الصناعة السعودية",
    description: "أنظمة خطوط إنتاج ومصانع متكاملة، مصممة بأحدث التقنيات لضمان الكفاءة التشغيلية",
    image: "/lovable-uploads/655af47c-6513-4fb2-a34e-abf0b9ff4eb0.png",
    link: "/خطوط-الإنتاج",
    features: ["أتمتة كاملة", "كفاءة عالية", "توفير في التكلفة"]
  }, {
    title: "المشاريع الترفيهية",
    subtitle: "استثمر في مستقبل الترفيه السعودي",
    description: "مجموعة واسعة من الأنظمة الترفيهية المبتكرة التي تضمن تجارب لا تُنسى",
    image: "/lovable-uploads/e46436ee-6f28-442d-9c01-31285261b60a.png",
    link: "/الأنظمة-الترفيهية",
    features: ["تقنيات حديثة", "تجربة ممتعة", "عائد استثماري"]
  }];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
            مجموعتنا الواسعة
            <span className="block text-sebaaq-blue">من الآلات المتخصصة</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            استثمارات استراتيجية تدعم أهدافكم التجارية وتتوافق مع رؤية المملكة 2030
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {machineCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden transition-all duration-500 transform bg-white ${
                hoveredProduct === index ? 'scale-105 shadow-2xl -translate-y-2' : 'scale-100 shadow-lg'
              }`}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
              role="article"
              aria-labelledby={`machine-category-${index}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={`${category.title} - ${category.subtitle}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                /> 
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-sebaaq-blue text-white">جديد</Badge>
                </div>
                <div className="absolute bottom-4 right-4 left-4">
                  <h3 id={`machine-category-${index}`} className="text-white text-xl font-bold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {category.subtitle}
                  </p>
                </div>
              </div>
              
              <CardHeader className="pb-4 bg-white">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-sebaaq-blue/30 text-sebaaq-blue">
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <Link to={category.link}>
                  <Button 
                    className="w-full bg-sebaaq-blue hover:bg-blue-600 text-white group min-w-11 min-h-11"
                    aria-label={`اعرف المزيد عن ${category.title}`}
                  >
                    اعرف المزيد
                    <ArrowRight className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachineCategories;
