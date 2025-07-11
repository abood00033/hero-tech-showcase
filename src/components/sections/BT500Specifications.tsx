import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Cog, Droplets, Wind } from 'lucide-react';

const BT500Specifications = () => {
  const specifications = [
    { label: "النموذج", value: "BT500" },
    { label: "الميزات", value: "2 في واحد: غسيل بدون لمس + غسيل بالفرش" },
    { label: "الأداء", value: "20+ سيارة في الساعة" },
    { label: "المدة", value: "3 دقائق" },
    { label: "الضمان", value: "10 سنوات على الهيكل وأنظمة التحكم" },
    { label: "الدعم الفني", value: "مدى الحياة" },
    { label: "نسبة التجفيف", value: "99%" },
    { label: "قوة المضخة", value: "100 BAR" },
    { label: "عدد الفرش", value: "5 فرش ناعمة + فرشاة الجنوط" },
    { label: "عدد المجففات", value: "6 مجففات بقوة 7.5KW / 5.5KW" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
            المواصفات التقنية
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            نظام الغسيل BT500
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            أحدث أنظمة الغسيل مزودة بأحدث التقنيات، لأداء عالي جداً وتوفير إمكانية تحقيق أرباح عالية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {specifications.map((spec, index) => (
            <Card key={index} className="p-6 bg-background/80 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all duration-300">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-foreground">{spec.label}</span>
                <span className="text-secondary-foreground font-bold text-right">{spec.value}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-500/20">
            <div className="text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
                <Droplets className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-300">الفرش اليابانية</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  5 فرش مايكروفايبر ناعمة
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  مقاومة للبيئة الصحراوية
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  حتى 100,000 سيارة
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-600/10 border border-green-500/20">
            <div className="text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-green-500/20 border border-green-500/30">
                <Wind className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-green-300">نظام التجفيف</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  6 مجففات عالية القوة
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  نسبة تجفيف 99%
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  تجفيف سريع وفعال
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-purple-600/10 border border-purple-500/20">
            <div className="text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-purple-500/20 border border-purple-500/30">
                <Cog className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-purple-300">المضخة الألمانية</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  قوة ضخ 100 BAR
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  كفاءة عالية وتوفير الطاقة
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  بناء متين ومقاوم
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BT500Specifications;