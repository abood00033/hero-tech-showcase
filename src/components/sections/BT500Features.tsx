import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Smartphone, CreditCard, Settings, Cloud, AlertTriangle } from 'lucide-react';

const BT500Features = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "نظام ذكي ضد الاصطدام",
      description: "تقنية المركبات الموجهة تلقائياً لحماية كل من السيارة والمعدات",
      color: "blue"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "استكشاف الأخطاء التلقائي",
      description: "نظام ذكي يحدد الأخطاء تلقائياً، مع استجابة سريعة ودعم فني مستمر",
      color: "orange"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "نظام تخزين سحابي",
      description: "إرسال تقارير عبر الجوال بعدد السيارات ومستوى الاستهلاك",
      color: "purple"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "الخدمة الذاتية 24/7",
      description: "قبول جميع طرق الدفع بما في ذلك أبل باي، فيزا، ومدى",
      color: "green"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "أوضاع غسيل متعددة",
      description: "تجفيف، واكس، رغوة، غسيل مسبق، غسيل أسفل السيارة، غسيل بدون لمس",
      color: "cyan"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "برنامج ولاء للعملاء",
      description: "ربط البوابة وبرنامج ولاء للعملاء لتجربة محسنة",
      color: "pink"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
            المميزات الذكية
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            تقنيات متطورة لأداء استثنائي
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            مزودة بأحدث التقنيات الذكية لضمان تجربة غسيل آمنة وفعالة ومربحة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`p-6 bg-gradient-to-br from-${feature.color}-500/5 to-${feature.color}-600/10 border border-${feature.color}-500/20 hover:border-${feature.color}-500/40 transition-all duration-300`}>
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-full bg-${feature.color}-500/20 border border-${feature.color}-500/30`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                طريقة عمل النظام
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto border border-secondary/30">
                    <span className="text-2xl font-bold text-secondary-foreground">1</span>
                  </div>
                  <h4 className="font-semibold text-foreground">دخول السيارة</h4>
                  <p className="text-sm text-muted-foreground">
                    يتم إدخال السيارة وإيقافها في المكان المخصص
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto border border-secondary/30">
                    <span className="text-2xl font-bold text-secondary-foreground">2</span>
                  </div>
                  <h4 className="font-semibold text-foreground">الكشف الذكي</h4>
                  <p className="text-sm text-muted-foreground">
                    أجهزة الاستشعار تكتشف موضع السيارة وأبعادها
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto border border-secondary/30">
                    <span className="text-2xl font-bold text-secondary-foreground">3</span>
                  </div>
                  <h4 className="font-semibold text-foreground">الغسيل المخصص</h4>
                  <p className="text-sm text-muted-foreground">
                    الآلة تتحرك وتنظف بدقة حسب حجم وشكل السيارة
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BT500Features;