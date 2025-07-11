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
  Mail, 
  CheckCircle,
  ArrowRight,
  Gem,
  Users,
  Award,
  Clock,
  Cloud,
  Smartphone,
  Settings,
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
  Headphones
} from 'lucide-react';

const CarWashBT500 = () => {
  const [activeTab, setActiveTab] = useState('washing');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const keyFeatures = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "غسيل بدون لمس + بالفرش",
      description: "نظام 2 في 1 متطور",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "أنظمة استشعار دقيقة",
      description: "كشف ذكي للمركبات",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "دعم تقني مدى الحياة",
      description: "فريق متخصص دائماً",
      gradient: "from-purple-500/20 to-violet-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "ضمان 10 سنوات",
      description: "حماية شاملة",
      gradient: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-400"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "20+ سيارة بالساعة",
      description: "أداء فائق السرعة",
      gradient: "from-red-500/20 to-rose-500/20",
      iconColor: "text-red-400"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "تقارير الأداء عبر الجوال",
      description: "مراقبة لحظية",
      gradient: "from-indigo-500/20 to-blue-500/20",
      iconColor: "text-indigo-400"
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "إعادة تدوير المياه",
      description: "نظام بيئي ذكي",
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-400"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "أنظمة تحكم SIEMENS",
      description: "تقنية ألمانية متقدمة",
      gradient: "from-gray-500/20 to-slate-500/20",
      iconColor: "text-gray-400"
    }
  ];

  const techSpecs = {
    washing: [
      { name: "تجفيف", progress: 99, desc: "نسبة التجفيف" },
      { name: "واكس", progress: 95, desc: "طبقة حماية" },
      { name: "رغوة", progress: 100, desc: "تنظيف عميق" },
      { name: "غسيل مسبق", progress: 90, desc: "إزالة الأتربة" },
      { name: "غسيل أسفل السيارة", progress: 85, desc: "تنظيف شامل" },
      { name: "غسيل بدون لمس", progress: 100, desc: "حماية آمنة" }
    ],
    drying: [
      { name: "6 مجففات قوية", progress: 100, desc: "7.5KW / 5.5KW" },
      { name: "4 مجففات علوية", progress: 95, desc: "5.5 كيلوواط" },
      { name: "مجففات جانبية", progress: 98, desc: "7.5 كيلوواط" },
      { name: "نسبة التجفيف", progress: 99, desc: "تجفيف مثالي" }
    ],
    brushes: [
      { name: "5 فرش ناعمة", progress: 100, desc: "مايكروفايبر وإيفا فوم" },
      { name: "فرش يابانية", progress: 95, desc: "مقاومة للبيئة الصحراوية" },
      { name: "عمر افتراضي", progress: 90, desc: "حتى 100,000 سيارة" },
      { name: "تنظيف ذاتي", progress: 100, desc: "صيانة تلقائية" }
    ],
    pump: [
      { name: "قوة الضخ", progress: 100, desc: "100 BAR ألماني" },
      { name: "كفاءة الطاقة", progress: 95, desc: "استهلاك أمثل" },
      { name: "ميزات السلامة", progress: 100, desc: "صمامات تلقائية" },
      { name: "معدل التدفق", progress: 90, desc: "تنظيف سريع" }
    ]
  };

  const cloudFeatures = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "إرسال تقارير يومية",
      description: "عدد السيارات والاستهلاك"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "مراقبة الاستهلاك",
      description: "رقابة متكاملة عبر الجوال"
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "تنبيهات الأعطال",
      description: "استكشاف مبكر للأخطاء"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "تخزين بيانات",
      description: "نظام سحابي متقدم"
    }
  ];

  const successMetrics = [
    { number: "40+", label: "نظام مركب", sublabel: "في 20+ مدينة" },
    { number: "95%", label: "رضا العملاء", sublabel: "تقييم ممتاز" },
    { number: "24/7", label: "دعم فني", sublabel: "استجابة فورية" },
    { number: "10", label: "سنوات ضمان", sublabel: "حماية شاملة" }
  ];

  const testimonials = [
    {
      text: "التعامل مع الشركة كان راقي جدا. المغسلة عملية والتنظيف متميز. شكرا على الدعم المتواصل وسرعة الرد على استفساراتنا",
      name: "مغسلة غيمة نجد",
      city: "القصيم"
    },
    {
      text: "آلات جودة عالية وخدمة الصيانة سريعة والفني يحضر في الوقت المحدد. أنصح الجميع بالتعامل معهم",
      name: "عميل راضي",
      city: "القصيم"
    },
    {
      text: "المغسلة تشتغل مضبوط. المهندسين عندهم خبرة ممتازة وقطع الغيار متوفرة. أنصح بالتعامل مع هالشركة",
      name: "مغسلة لمسة لسيارة",
      city: "الرياض - طويق"
    },
    {
      text: "ماشاء الله اشتريت المغسلة وكانت ممتازة وتشغيلها بسيط، أفضل تعامل وحسن خلق من العاملين في الشركة",
      name: "مغسلة محمد بن عبد الله",
      city: "المجمعة"
    }
  ];

  const purchaseSteps = [
    { icon: <Phone />, title: "الاستفسار", desc: "تواصل معنا لتسجيل اهتمامك" },
    { icon: <Calendar />, title: "حجز موعد", desc: "استشارة مع خبير متخصص" },
    { icon: <MapPin />, title: "تقييم الموقع", desc: "زيارة ميدانية لتقييم المساحة" },
    { icon: <CheckCircle />, title: "توقيع العقد", desc: "الاتفاق على التفاصيل" },
    { icon: <Settings />, title: "التركيب", desc: "تركيب وفحص نهائي" },
    { icon: <Users />, title: "التدريب", desc: "تدريب شامل للفريق" },
    { icon: <Headphones />, title: "المتابعة", desc: "دعم مستمر ومتابعة دورية" }
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(var(--secondary)/0.1),transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                <Sparkles className="h-4 w-4 ml-2" />
                تقنية متطورة من SEBAQ
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              نظام الغسيل الأوتوماتيكي المتطور
              <motion.span 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="block text-primary mt-4 text-6xl lg:text-8xl"
              >
                BT500
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              أداء فائق وتقنيات حديثة تناسب السوق السعودي
            </motion.p>

            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                <Phone className="h-6 w-6 ml-3" />
                اطلب عرض سعر
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary/20 hover:bg-primary/5">
                <Calendar className="h-6 w-6 ml-3" />
                احجز استشارة
              </Button>
            </motion.div>

            {/* 3D Product Mockup */}
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative mt-16"
            >
              <div className="relative mx-auto max-w-4xl">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 overflow-hidden">
                    <img 
                      src="/lovable-uploads/cc671829-aaa7-4559-affa-11d056fbcf5d.png" 
                      alt="نظام BT500 الأوتوماتيكي - منظر أمامي"
                      className="w-full h-full object-contain rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                  
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 overflow-hidden">
                    <img 
                      src="/lovable-uploads/4fc5de97-552b-4944-9b40-833efae54802.png" 
                      alt="نظام BT500 الأوتوماتيكي - منظر جانبي"
                      className="w-full h-full object-contain rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </div>
                
                {/* Floating Stats */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg border border-primary/20"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm opacity-90">سيارة/ساعة</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-2xl shadow-lg border border-secondary/20"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm opacity-90">دقائق</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Key Features Section */}
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
              المميزات الرئيسية
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              تقنيات متطورة لأداء استثنائي
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              مزودة بأحدث التقنيات الذكية لضمان تجربة غسيل آمنة وفعالة ومربحة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className={`p-6 h-full bg-gradient-to-br ${feature.gradient} border border-primary/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm`}>
                  <div className="space-y-4">
                    <motion.div 
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`inline-flex p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20`}
                    >
                      <div className={feature.iconColor}>
                        {feature.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tech Specs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              المواصفات التقنية
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              تفاصيل النظام المتطور
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-muted/50 backdrop-blur-sm">
                <TabsTrigger value="washing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  أوضاع الغسيل
                </TabsTrigger>
                <TabsTrigger value="drying" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  نظام التجفيف
                </TabsTrigger>
                <TabsTrigger value="brushes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  الفرش
                </TabsTrigger>
                <TabsTrigger value="pump" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  المضخة
                </TabsTrigger>
              </TabsList>

              {Object.entries(techSpecs).map(([key, specs]) => (
                <TabsContent key={key} value={key}>
                  <Card className="p-8 bg-gradient-to-br from-background/50 to-muted/30 backdrop-blur-sm border border-primary/10">
                    <div className="grid md:grid-cols-2 gap-6">
                      {specs.map((spec, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="space-y-3"
                        >
                          <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-foreground">{spec.name}</h4>
                            <span className="text-primary font-bold">{spec.progress}%</span>
                          </div>
                          <Progress value={spec.progress} className="h-3" />
                          <p className="text-muted-foreground text-sm">{spec.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Smart Cloud System Visualization */}
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
              النظام السحابي الذكي
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              مراقبة وتحكم عن بُعد
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              نظام متكامل للمراقبة والتحليل والتنبيهات المبكرة
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-center space-y-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20"
                    >
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Flow Diagram */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="p-8 bg-gradient-to-br from-background/50 to-primary/5 backdrop-blur-sm border border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">جمع البيانات</p>
                </div>
                <ArrowRight className="h-6 w-6 text-primary rotate-90 md:rotate-0" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-2">
                    <Cloud className="h-8 w-8 text-secondary" />
                  </div>
                  <p className="text-sm font-medium">معالجة سحابية</p>
                </div>
                <ArrowRight className="h-6 w-6 text-primary rotate-90 md:rotate-0" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-2">
                    <BarChart3 className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-sm font-medium">تقارير ذكية</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Customer Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              نجاحات مؤكدة
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              أرقام تتحدث عن نفسها
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold text-primary mb-2"
                  >
                    {metric.number}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{metric.label}</h3>
                  <p className="text-muted-foreground text-sm">{metric.sublabel}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
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
              آراء عملائنا
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              شهادات من مختلف المدن
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-background/50 to-primary/5 backdrop-blur-sm border border-primary/20">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
              >
                <blockquote className="text-xl leading-relaxed text-foreground">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div>
                  <div className="font-semibold text-primary text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].city}
                  </div>
                </div>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </motion.div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial(currentTestimonial > 0 ? currentTestimonial - 1 : testimonials.length - 1)}
                className="border-primary/20 hover:bg-primary/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial(currentTestimonial < testimonials.length - 1 ? currentTestimonial + 1 : 0)}
                className="border-primary/20 hover:bg-primary/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-primary/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              رحلة الشراء
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              خطوات بسيطة لبدء مشروعك
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              من الاستفسار إلى التشغيل الكامل - رحلة سلسة مع دعم متكامل
            </p>
          </motion.div>

          <div className="grid md:grid-cols-7 gap-4">
            {purchaseSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto border-2 border-primary/20 hover:border-primary/50 transition-colors"
                >
                  <div className="text-primary">
                    {step.icon}
                  </div>
                </motion.div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {index < purchaseSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 transform translate-x-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full"
          />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <Card className="p-12 bg-gradient-to-br from-background/80 to-primary/5 backdrop-blur-sm border border-primary/20 shadow-2xl">
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  ابدأ مشروعك معنا اليوم
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  احصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك. فريقنا المتخصص جاهز لمساعدتك في كل خطوة
                </p>
              </motion.div>

              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button size="lg" className="text-lg px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                  <Phone className="h-6 w-6 ml-3" />
                  احصل على استشارة
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-primary/20 hover:bg-primary/5">
                  <PlayCircle className="h-6 w-6 ml-3" />
                  ابدأ مشروعك معنا
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center space-x-8 text-muted-foreground text-sm"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>استشارة مجانية</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>ضمان 10 سنوات</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>دعم مدى الحياة</span>
                </div>
              </motion.div>
            </div>
          </Card>
        </div>
      </motion.section>
    </div>
  );
};

export default CarWashBT500;