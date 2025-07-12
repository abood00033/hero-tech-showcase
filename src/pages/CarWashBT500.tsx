import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Droplets, 
  Zap, 
  Timer, 
  Shield, 
  Cog, 
  Phone, 
  CheckCircle,
  Gauge,
  Activity,
  Wifi,
  Database,
  BarChart3,
  Sparkles,
  Star,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Headphones,
  Wind,
  Settings,
  Clock,
  Car,
  WashingMachine,
  ArrowRight
} from 'lucide-react';

const CarWashBT500 = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Main Features based on catalog
  const mainFeatures = [
    {
      title: "2 في واحد",
      subtitle: "غسيل بدون لمس + غسيل بالفرش",
      description: "تقدم شركة سي باك أحدث أنظمة الغسيل BT500، مزودة بأحدث التقنيات، لأداء عالي جدا وتوفير إمكانية تحقيق أرباح عالية.",
      icon: <Car className="h-12 w-12" />,
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "3 دقائق",
      subtitle: "غسل +20 سيارة في الساعة!",
      description: "دعم في مدى الحياة: قبول جميع طرق الدفع الرئيسية، بما في ذلك أبل باي، فيزا وماستر كارد. تتبع تقنية الدفع الذاتي العمل على مدار 24 ساعة. ربط البوابات ببرنامج ولاء للعملاء",
      icon: <Timer className="h-12 w-12" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "10 سنوات ضمان",
      subtitle: "على الهيكل وأنظمة التحكم",
      description: "ضمان شامل لحماية استثمارك",
      icon: <Shield className="h-12 w-12" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Premium Components Section
  const premiumComponents = [
    {
      title: "أنظمة التحكم",
      brand: "SIEMENS",
      country: "ألمانيا",
      description: "علامة تجارية من: ألمانيا",
      icon: "/lovable-uploads/eaac60e5-6259-4844-8e88-ac1ee26947f4.png"
    },
    {
      title: "المضخة", 
      brand: "PINFL",
      country: "ألمانيا",
      description: "علامة تجارية من: ألمانيا",
      icon: "/lovable-uploads/eaac60e5-6259-4844-8e88-ac1ee26947f4.png"
    },
    {
      title: "المستشعرات",
      brand: "Baumer",
      country: "ألمانيا", 
      description: "علامة تجارية من: ألمانيا",
      icon: "/lovable-uploads/eaac60e5-6259-4844-8e88-ac1ee26947f4.png"
    },
    {
      title: "قواطع كهربائية",
      brand: "Schneider Electric",
      country: "فرنسا",
      description: "علامة تجارية من: فرنسا", 
      icon: "/lovable-uploads/eaac60e5-6259-4844-8e88-ac1ee26947f4.png"
    }
  ];

  // Smart Features
  const smartFeatures = [
    {
      title: "نظام ذكي ضد الاصطدام",
      description: "تقنية المركبات الموجهة تلقائياً لحماية كل من السيارة والمعدات",
      icon: <Gauge className="h-8 w-8" />
    },
    {
      title: "تشخيص ذاتي للأخطاء", 
      description: "نظام ذكي يحدد الأخطاء تلقائياً ويقدم تقارير مفصلة مع استجابة سريعة ودعم فني مستمر لضمان أداء الماكينة.",
      icon: <Settings className="h-8 w-8" />
    },
    {
      title: "نظام تخزين سحابي",
      description: "إرسال تقارير عبر الجوال بعدد السيارات التي تم غسلها المخزون المتوفر، مستوى الاستهلاك، رقابة متكاملة عبر الجوال.",
      icon: <Database className="h-8 w-8" />
    },
    {
      title: "الخدمة الذاتية",
      description: "قبول جميع طرق الدفع الرئيسية، بما في ذلك أبل باي، فيزا وماستر كارد. تتبع تقنية الدفع الذاتي العمل على مدار 24 ساعة. ربط البوابات ببرنامج ولاء للعملاء",
      icon: <Phone className="h-8 w-8" />
    }
  ];

  // Brush Features
  const brushFeatures = [
    {
      title: "5 فرش ناعمة جدا",
      subtitle: "مصنوعة من المايكروفايبر وطبقات ايفا فوم",
      items: [
        "1 فرش علوية",
        "2 فرش جانبية", 
        "2 فرش للجنوط والإطارات"
      ]
    },
    {
      title: "فرش صناعة يابانية تم تصميمها خصيصا للبيئة القاسية والصحراوية، لأكثر كفاءة وتكيفا",
      subtitle: "يمكن إعادة ضبط الفرش للفرش على حسب الرغبة (المسافة بين الفرش وسطح السيارة)"
    },
    {
      title: "حركات فرشاة مطورة لغسيل أكثر مرونة:",
      subtitle: "تصميم فرشاة التنظيف العمودية وغسل العجلات لكل برنامج، مما يؤدي إلى تحسين ضبط وقت الغسيل"
    }
  ];

  // Dryer Specifications
  const dryerSpecs = [
    {
      title: "6 مجففات",
      subtitle: "بقوة 7.5KW / 5.5KW",
      description: "أقوى نظام تجفيف!"
    },
    {
      title: "4 مجففات بقوة 5.5 كيلوواط",
      subtitle: "علوية منصصة لتجفيف الجزء العلوي من السيارة"
    },
    {
      title: "2 مجففات جانبية",
      subtitle: "بقوة 7.5 كيلوواط لإزالة منظفي المياه على جوانب السيارة"
    },
    {
      title: "نسبة تجفيف تصل إلى 99%"
    }
  ];

  // Wash Programs
  const washPrograms = [
    {
      name: "أوضاع الغسيل",
      description: "قابلة للتعديل على حسب احتياجاتكم",
      programs: [
        { name: "تجفيف", icon: <Wind className="h-6 w-6" /> },
        { name: "واكس", icon: <Sparkles className="h-6 w-6" /> },
        { name: "رغوة", icon: <Droplets className="h-6 w-6" /> },
        { name: "غسيل مسبق", icon: <WashingMachine className="h-6 w-6" /> },
        { name: "غسيل أسفل السيارة", icon: <Car className="h-6 w-6" /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10"
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Sparkles className="h-4 w-4 ml-2" />
                القطع الرئيسية
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              <span className="block text-primary text-6xl lg:text-8xl mb-4">BT500</span>
              نظام غسيل السيارات الأوتوماتيكي
            </motion.h1>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              اكتسبت شركة سي باك سمعتها باعتبارها واحدة من أكثر أنظمة الغسيل كفاءة وجودة في السوق المحلي.
            </motion.p>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://wa.me/966594196930', '_blank')}
              >
                <Phone className="h-6 w-6 ml-3" />
                تواصل معنا
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <PlayCircle className="h-6 w-6 ml-3" />
                تفاصيل أكثر
              </Button>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative mt-16"
            >
              <img 
                src="/lovable-uploads/e89cd551-3511-4ec1-aadb-18212024e5db.png" 
                alt="BT500 Car Wash System"
                className="mx-auto max-w-4xl w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Premium Components Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              القطع الرئيسية
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              تم تصميم أنظمة غسيل سي باك لتناسب البيئة القاسية في السعودية، باستخدام أفضل القطع من علامات تجارية عالمية معروفة بالجودة وأحدث التقنيات
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              تلتزم سي باك بتوفير قطع الغيار محلياً
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumComponents.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 transition-all">
                  <CardContent className="p-0 space-y-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary mb-2">{component.brand}</h3>
                      <h4 className="text-lg font-semibold text-foreground">{component.title}</h4>
                      <p className="text-muted-foreground">{component.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-6xl font-bold text-primary mb-4">{feature.title}</h3>
                  <h4 className="text-2xl font-semibold text-foreground mb-6">{feature.subtitle}</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={index === 0 ? "/lovable-uploads/e89cd551-3511-4ec1-aadb-18212024e5db.png" : 
                         index === 1 ? "/lovable-uploads/2c185df4-8651-44c9-a01d-f8f9d159db05.png" :
                         "/lovable-uploads/2c185df4-8651-44c9-a01d-f8f9d159db05.png"}
                    alt={feature.title}
                    className="w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {smartFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="text-primary mt-1">{feature.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brush Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              الفرش المتطورة
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              5 فرش ناعمة جدا
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/4c42ff2d-e801-4786-9064-53a1448293d0.png"
                alt="Brush Features"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              {brushFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
                    <CardContent className="p-0">
                      <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                      {feature.subtitle && (
                        <p className="text-muted-foreground mb-4">{feature.subtitle}</p>
                      )}
                      {feature.items && (
                        <ul className="space-y-2">
                          {feature.items.map((item, i) => (
                            <li key={i} className="flex items-center text-muted-foreground">
                              <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dryer Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
                  نظام التجفيف
                </Badge>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  6 مجففات بقوة 7.5KW / 5.5KW
                </h2>
                <p className="text-2xl font-semibold text-primary mb-8">أقوى نظام تجفيف!</p>
              </div>
              
              {dryerSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-r from-secondary/5 to-primary/5">
                    <CardContent className="p-0">
                      <h3 className="text-lg font-bold text-foreground mb-2">{spec.title}</h3>
                      {spec.subtitle && (
                        <p className="text-muted-foreground">{spec.subtitle}</p>
                      )}
                      {spec.description && (
                        <p className="text-primary font-semibold mt-2">{spec.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gradient-to-r from-primary to-secondary rounded-3xl text-white"
              >
                <div className="text-6xl font-bold mb-2">99%</div>
                <div className="text-xl">نسبة تجفيف تصل إلى</div>
              </motion.div>
            </div>
            
            <div>
              <img 
                src="/lovable-uploads/6db42f46-e57e-4002-a108-a0b5041244bd.png"
                alt="Dryer System"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wash Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/c9baf9a5-94a4-4717-ae23-7f2541cc1d82.png"
                alt="Wash Programs"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                برامج الغسيل
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                أوضاع الغسيل
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                قابلة للتعديل على حسب احتياجاتكم
              </p>
              
              <div className="space-y-4">
                {washPrograms[0].programs.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl"
                  >
                    <div className="text-primary ml-4">{program.icon}</div>
                    <span className="text-lg font-semibold text-foreground">{program.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pump Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img 
              src="/lovable-uploads/c92821dc-17f1-4a4b-98b0-79e8434b6da6.png"
              alt="PINFL Pump Specifications"
              className="mx-auto max-w-4xl w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-bold">
              جاهز لبدء مشروعك؟
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/966594196930', '_blank')}
              >
                <Phone className="h-6 w-6 ml-3" />
                تواصل معنا الآن
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              >
                <Calendar className="h-6 w-6 ml-3" />
                احجز موعد زيارة
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CarWashBT500;
