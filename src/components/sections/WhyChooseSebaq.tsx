
import { Card } from "@/components/ui/card";
import { Shield, Star, Badge, Users } from 'lucide-react';

const WhyChooseSebaq = () => {
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
            لماذا سي باك ماشين؟
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white"
                role="article"
                aria-labelledby={`why-choose-${index}`}
              >
                <div className="w-16 h-16 bg-sebaaq-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-sebaaq-blue" aria-hidden="true" />
                </div>
                <h3 id={`why-choose-${index}`} className="font-bold text-lg mb-2 text-sebaaq-midnight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSebaq;
