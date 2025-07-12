import { Shield, Award, Clock, Users, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "ضمان الجودة",
      description: "جميع منتجاتنا مضمونة بأعلى معايير الجودة",
      color: "text-green-500"
    },
    {
      icon: Award,
      title: "خبرة 10+ سنوات",
      description: "أكثر من عقد من الخبرة في الاستيراد والتوريد",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "دعم 24/7",
      description: "فريق دعم فني متاح على مدار الساعة",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "500+ عميل راضي",
      description: "خدمنا مئات العملاء بنجاح واحترافية",
      color: "text-purple-500"
    },
    {
      icon: Star,
      title: "تقييم 5 نجوم",
      description: "تقييمات ممتازة من عملائنا السابقين",
      color: "text-yellow-500"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            لماذا تختار سباق؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نحن نضمن أعلى مستويات الجودة والموثوقية في جميع خدماتنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {indicators.map((indicator, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center ${indicator.color}`}>
                <indicator.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{indicator.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{indicator.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;