import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import OptimizedImage from '@/components/ui/optimized-image';
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
  ArrowRight,
  Award
} from 'lucide-react';

const CarWashBT500 = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Product Images for BT500
  const heroImages = [
    "/lovable-uploads/36e35649-f04b-406a-94e8-2c8d6d70df5d.png",
    "/lovable-uploads/2c185df4-8651-44c9-a01d-f8f9d159db05.png",
    "/lovable-uploads/581c5e13-ec7b-4c0e-b76a-83c44b804207.png",
    "/lovable-uploads/28144a1c-943b-408f-ad5d-00076e8779ae.png"
  ];

  const productImages = [
    {
      src: "/lovable-uploads/36e35649-f04b-406a-94e8-2c8d6d70df5d.png",
      alt: "BT500 نظام غسيل السيارات - المنظر الأمامي"
    },
    {
      src: "/lovable-uploads/2c185df4-8651-44c9-a01d-f8f9d159db05.png", 
      alt: "BT500 نظام غسيل السيارات - المنظر الجانبي"
    },
    {
      src: "/lovable-uploads/581c5e13-ec7b-4c0e-b76a-83c44b804207.png",
      alt: "BT500 نظام غسيل السيارات - نظام الفرش"
    },
    {
      src: "/lovable-uploads/28144a1c-943b-408f-ad5d-00076e8779ae.png",
      alt: "BT500 نظام غسيل السيارات - لوحة التحكم"
    },
    {
      src: "/lovable-uploads/101170ad-c89b-4068-9fcc-505d852ea11e.png",
      alt: "BT500 نظام غسيل السيارات - المجففات"
    },
    {
      src: "/lovable-uploads/22bb837b-a345-4eee-9b23-ceb8ab448568.png",
      alt: "BT500 نظام غسيل السيارات - البنية الداخلية"
    }
  ];

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
                onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
              >
                <Phone className="h-6 w-6 ml-3" />
                تواصل معنا
              </Button>
            </motion.div>

            {/* Hero Images Carousel */}
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative mt-16 max-w-6xl mx-auto"
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {heroImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden">
                        <OptimizedImage
                          src={image}
                          alt={`BT500 صورة نظام غسيل السيارات ${index + 1}`}
                          className="w-full h-full object-cover"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-2xl font-bold">BT500</h3>
                          <p className="text-lg opacity-90">نظام غسيل السيارات المتطور</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </motion.div>

            {/* Visual System Representation */}
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="relative mt-16 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  {/* System Core */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center border-4 border-primary/30 mb-4">
                        <Car className="h-16 w-16 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold text-primary mb-2">BT500</h3>
                      <p className="text-lg text-muted-foreground">نظام 2 في 1</p>
                    </div>
                    
                    {/* System Features */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-lg p-4 text-center border border-muted">
                        <Droplets className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-sm">غسيل بدون لمس</p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 text-center border border-muted">
                        <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-sm">غسيل بالفرش</p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 text-center border border-muted">
                        <Timer className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-sm">3 دقائق</p>
                      </div>
                      <div className="bg-background/50 rounded-lg p-4 text-center border border-muted">
                        <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="font-semibold text-sm">10 سنوات ضمان</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Smart Controls */}
                  <div className="space-y-4">
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <Wifi className="h-6 w-6 text-primary mb-2" />
                      <p className="text-sm font-semibold">تحكم ذكي</p>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                      <Database className="h-6 w-6 text-secondary mb-2" />
                      <p className="text-sm font-semibold">تخزين سحابي</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                      <Settings className="h-6 w-6 text-accent mb-2" />
                      <p className="text-sm font-semibold">تشخيص ذاتي</p>
                    </div>
                  </div>
                </div>
              </div>
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
                  {/* Interactive Visual Design */}
                  <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 shadow-2xl">
                    {index === 0 && (
                      <div className="text-center space-y-6">
                        <div className="flex justify-center space-x-4 space-x-reverse">
                          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                            <Droplets className="h-10 w-10 text-blue-500" />
                          </div>
                          <div className="text-2xl font-bold text-foreground self-center">+</div>
                          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                            <Activity className="h-10 w-10 text-green-500" />
                          </div>
                        </div>
                        <p className="text-lg font-semibold text-primary">نظام 2 في 1 المتطور</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-background/50 rounded-lg p-3 border">
                            <p className="text-sm font-semibold">غسيل بدون لمس</p>
                          </div>
                          <div className="bg-background/50 rounded-lg p-3 border">
                            <p className="text-sm font-semibold">غسيل بالفرش</p>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="text-center space-y-6">
                        <div className="w-32 h-32 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center border-4 border-amber-500/30">
                          <Timer className="h-16 w-16 text-amber-500" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-6xl font-bold text-amber-500">3</div>
                          <p className="text-lg font-semibold text-foreground">دقائق فقط</p>
                        </div>
                        <div className="bg-background/50 rounded-lg p-4 border">
                          <p className="text-sm font-semibold">+20 سيارة في الساعة</p>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="text-center space-y-6">
                        <div className="w-32 h-32 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border-4 border-green-500/30">
                          <Shield className="h-16 w-16 text-green-500" />
                        </div>
                        <div className="space-y-2">
                          <div className="text-6xl font-bold text-green-500">10</div>
                          <p className="text-lg font-semibold text-foreground">سنوات ضمان</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-background/50 rounded-lg p-2 border text-xs">
                            <p>ضمان الهيكل</p>
                          </div>
                          <div className="bg-background/50 rounded-lg p-2 border text-xs">
                            <p>ضمان التحكم</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
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
              {/* Brush System Visual */}
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 shadow-2xl">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">نظام الفرش المتطور</h3>
                  
                  {/* 5 Brushes Visualization */}
                  <div className="grid grid-cols-5 gap-4 mb-6">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                        <Activity className="h-8 w-8 text-blue-500" />
                      </div>
                      <p className="text-xs font-semibold">فرشة علوية</p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                        <Activity className="h-8 w-8 text-green-500" />
                      </div>
                      <p className="text-xs font-semibold">فرشة جانبية</p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                        <Car className="h-8 w-8 text-purple-500" />
                      </div>
                      <p className="text-xs font-semibold">السيارة</p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                        <Activity className="h-8 w-8 text-green-500" />
                      </div>
                      <p className="text-xs font-semibold">فرشة جانبية</p>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                        <Activity className="h-8 w-8 text-orange-500" />
                      </div>
                      <p className="text-xs font-semibold">فرشة إطارات</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-background/50 rounded-lg p-4 border">
                      <p className="text-sm font-semibold text-center">مايكروفايبر</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 border">
                      <p className="text-sm font-semibold text-center">طبقات إيفا فوم</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 border">
                      <p className="text-sm font-semibold text-center">صناعة يابانية</p>
                    </div>
                  </div>
                </div>
              </div>
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
              {/* Dryer System Visual */}
              <div className="bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-3xl p-12 border border-blue-500/20 shadow-2xl">
                <div className="text-center space-y-8">
                  <h3 className="text-4xl font-bold text-blue-600">6 مجففات قوية</h3>
                  
                  {/* Dryer Visualization */}
                  <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
                    {/* Top Dryers */}
                    <div className="col-span-3 lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-2">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="text-center space-y-2">
                          <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                            <Wind className="h-8 w-8 text-blue-500" />
                          </div>
                          <p className="text-xs font-semibold">5.5 كيلوواط</p>
                          <p className="text-xs text-muted-foreground">مجفف علوي</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Side Dryers */}
                    <div className="col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                      {[1,2].map((i) => (
                        <div key={i} className="text-center space-y-2">
                          <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                            <Wind className="h-8 w-8 text-cyan-500" />
                          </div>
                          <p className="text-xs font-semibold">7.5 كيلوواط</p>
                          <p className="text-xs text-muted-foreground">مجفف جانبي</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Performance Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-background/50 rounded-xl p-4 border">
                      <div className="text-2xl font-bold text-blue-600">99%</div>
                      <p className="text-sm font-semibold">نسبة التجفيف</p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4 border">
                      <div className="text-2xl font-bold text-cyan-600">6</div>
                      <p className="text-sm font-semibold">مجففات متطورة</p>
                    </div>
                    <div className="bg-background/50 rounded-xl p-4 border">
                      <div className="text-2xl font-bold text-teal-600">37</div>
                      <p className="text-sm font-semibold">كيلوواط إجمالي</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wash Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Wash Programs Visual */}
              <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-3xl p-12 border border-green-500/20 shadow-2xl">
                <div className="text-center space-y-8">
                  <h3 className="text-4xl font-bold text-green-600">برامج الغسيل المتقدمة</h3>
                  
                  {/* Wash Programs Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                        <Wind className="h-10 w-10 text-blue-500" />
                      </div>
                      <h4 className="font-bold text-sm">تجفيف</h4>
                      <p className="text-xs text-muted-foreground">تجفيف فائق القوة</p>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                        <Sparkles className="h-10 w-10 text-yellow-500" />
                      </div>
                      <h4 className="font-bold text-sm">واكس</h4>
                      <p className="text-xs text-muted-foreground">لمعان وحماية</p>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                        <Droplets className="h-10 w-10 text-green-500" />
                      </div>
                      <h4 className="font-bold text-sm">رغوة</h4>
                      <p className="text-xs text-muted-foreground">تنظيف عميق</p>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                        <WashingMachine className="h-10 w-10 text-purple-500" />
                      </div>
                      <h4 className="font-bold text-sm">غسيل مسبق</h4>
                      <p className="text-xs text-muted-foreground">إزالة الأوساخ</p>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                        <Car className="h-10 w-10 text-orange-500" />
                      </div>
                      <h4 className="font-bold text-sm">غسيل أسفل</h4>
                      <p className="text-xs text-muted-foreground">تنظيف الهيكل السفلي</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="bg-background/30 rounded-xl p-6 border">
                    <p className="text-lg font-semibold text-foreground mb-4">قابلة للتعديل على حسب احتياجاتكم</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">5</div>
                        <p className="text-sm">برامج متنوعة</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">100%</div>
                        <p className="text-sm">قابلة للتخصيص</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">∞</div>
                        <p className="text-sm">إمكانيات لا محدودة</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            {/* PINFL Pump Visual */}
            <div className="bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-3xl p-12 border border-red-500/20 shadow-2xl">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center space-x-4 space-x-reverse">
                  <Settings className="h-12 w-12 text-red-500" />
                  <h3 className="text-4xl font-bold text-red-600">مضخة PINFL الألمانية</h3>
                  <Award className="h-12 w-12 text-yellow-500" />
                </div>
                
                {/* Pump Specifications */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-background/50 rounded-xl p-6 border">
                    <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                      <Gauge className="h-10 w-10 text-red-500" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2">ضغط عالي</h4>
                    <p className="text-3xl font-bold text-red-600 mb-2">100</p>
                    <p className="text-sm text-muted-foreground">بار ضغط</p>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-6 border">
                    <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                      <Zap className="h-10 w-10 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2">قوة المحرك</h4>
                    <p className="text-3xl font-bold text-orange-600 mb-2">15</p>
                    <p className="text-sm text-muted-foreground">كيلوواط</p>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-6 border">
                    <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
                      <Droplets className="h-10 w-10 text-yellow-500" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2">التدفق</h4>
                    <p className="text-3xl font-bold text-yellow-600 mb-2">40</p>
                    <p className="text-sm text-muted-foreground">لتر/دقيقة</p>
                  </div>
                </div>
                
                {/* Quality Indicators */}
                <div className="bg-background/30 rounded-xl p-6 border">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">صناعة ألمانية</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">موثوقية عالية</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">كفاءة طاقة</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">صيانة قليلة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Product Gallery Section */}
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
              صور المنتج
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              صور شاملة لنظام BT500
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              استكشف تفاصيل نظام غسيل السيارات BT500 من جميع الزوايا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-muted">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-sm font-semibold">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <div className="flex justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
              >
                <Phone className="h-6 w-6 ml-3" />
                تواصل معنا
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CarWashBT500;
