
import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Lightbulb, Cpu, MapPin, Zap } from 'lucide-react';

const TechnicalExpertise = () => {
  const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);

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

  return (
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
          {expertiseAreas.map((area, index) => (
            <Card 
              key={index} 
              className={`group p-8 transition-all duration-300 transform bg-white ${
                hoveredExpertise === index ? 'scale-105 shadow-2xl bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5' : 'scale-100 shadow-lg'
              }`}
              onMouseEnter={() => setHoveredExpertise(index)}
              onMouseLeave={() => setHoveredExpertise(null)}
              role="article"
              aria-labelledby={`expertise-${index}`}
            >
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-xl flex items-center justify-center ml-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <area.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 id={`expertise-${index}`} className="font-playfair text-xl font-bold text-sebaaq-midnight leading-tight">
                  {area.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {area.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
