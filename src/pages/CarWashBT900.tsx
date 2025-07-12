import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Car, 
  Clock, 
  Shield, 
  Zap, 
  Droplets, 
  Wind, 
  Settings, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  Globe,
  ArrowLeft,
  Gauge,
  Wrench,
  CreditCard,
  Users,
  Award,
  Target,
  Sparkles,
  Brain,
  Radar,
  Eye,
  Activity,
  ShieldCheck,
  TrendingUp,
  Wifi,
  Palette,
  Factory,
  Cloud,
  Timer,
  Truck,
  Brush,
  Network,
  AlertTriangle,
  Database,
  Cpu,
  Power
} from 'lucide-react';

// Interactive Car Simulation Component
const CarSimulation = () => {
  const [isActive, setIsActive] = useState(false);
  const [washMode, setWashMode] = useState<'touchless' | 'brush'>('touchless');

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prev => !prev);
      if (Math.random() > 0.5) {
        setWashMode(prev => prev === 'touchless' ? 'brush' : 'touchless');
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-primary/20 overflow-hidden">
      {/* Sensor Grid */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-2 p-4">
        {[...Array(48)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-primary/20 rounded-sm"
            animate={{
              opacity: isActive ? [0.2, 1, 0.2] : 0.2,
              scale: isActive ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 2,
              delay: i * 0.05,
              repeat: isActive ? Infinity : 0,
            }}
          />
        ))}
      </div>

      {/* Car Animation */}
      <motion.div
        className="absolute top-1/2 transform -translate-y-1/2"
        animate={{
          x: isActive ? ['-100%', '0%', '100%'] : '-100%',
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: isActive ? Infinity : 0,
        }}
      >
        <Car className="w-16 h-16 text-primary" />
      </motion.div>

      {/* Wash Mode Indicator */}
      <div className="absolute top-4 right-4">
        <motion.div
          key={washMode}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className={`px-4 py-2 rounded-full text-sm font-bold ${
            washMode === 'touchless' 
              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
              : 'bg-green-500/20 text-green-300 border border-green-500/30'
          }`}
        >
          {washMode === 'touchless' ? 'بدون لمس' : 'بالفرش'}
        </motion.div>
      </div>

      {/* AI Brain Indicator */}
      <motion.div
        className="absolute bottom-4 left-4 flex items-center gap-2"
        animate={{
          opacity: isActive ? [0.5, 1, 0.5] : 0.5,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <Brain className="w-6 h-6 text-primary" />
        <span className="text-sm text-primary font-cairo">الذكاء الاصطناعي نشط</span>
      </motion.div>
    </div>
  );
};

// Futuristic Stat Card
interface FuturisticStatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  color?: string;
}

const FuturisticStat: React.FC<FuturisticStatProps> = ({ value, label, icon, color = 'primary' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Card className="p-8 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-${color}/20 rounded-lg opacity-0 group-hover:opacity-100`}
          transition={{ duration: 0.3 }}
        />
        
        <div className="relative z-10 text-center">
          <motion.div
            className={`inline-flex p-4 rounded-full bg-${color}/10 border border-${color}/20 mb-4`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {icon}
          </motion.div>
          
          <motion.div
            className={`text-4xl font-bold text-${color} mb-2`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {value}
          </motion.div>
          
          <div className="text-muted-foreground font-cairo">{label}</div>
        </div>

        {/* Energy Lines */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute h-px bg-gradient-to-r from-transparent via-${color}/40 to-transparent`}
              style={{
                top: `${20 + i * 30}%`,
                left: '-100%',
                right: '-100%',
              }}
              animate={{
                x: ['0%', '200%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
              }}
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

// Main Component
const BT900FuturisticPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-cairo" dir="rtl">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* AI Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="px-6 py-3 bg-primary/20 border border-primary/40 text-primary backdrop-blur-md">
                <Brain className="w-4 h-4 ml-2" />
                <span className="font-bold">SMARTCO MACHINES</span>
                <Sparkles className="w-4 h-4 mr-2" />
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              BT900
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              أحدث أنظمة الغسيل في النفق
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xl font-bold mb-8"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-red-500 text-2xl">2 في 1</span>
              <span className="text-foreground">غسيل بدون لمس + غسيل بالفرش</span>
            </motion.div>

            {/* Car Simulation */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <CarSimulation />
            </motion.div>

            {/* Main BT900 Image */}
            <motion.div
              className="max-w-4xl mx-auto mt-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-primary/20">
                <img
                  src="/lovable-uploads/e33530ca-879e-49ec-a973-cfc57943b667.png"
                  alt="نظام BT900 - أحدث أنظمة الغسيل في النفق"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-red-500/90 text-white border-red-600">
                    <span className="text-2xl font-bold">10</span>
                    <span className="mr-2">سنوات ضمان</span>
                  </Badge>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button size="lg" className="px-8 py-4 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300">
                <Eye className="w-5 h-5 ml-2" />
                شاهد العرض التفاعلي
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-primary/40 hover:bg-primary/10 transition-all duration-300">
                <Phone className="w-5 h-5 ml-2" />
                تواصل مع خبير
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            أداء خارق للطبيعة
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FuturisticStat
              value="+60"
              label="سيارة في الساعة"
              icon={<Car className="w-8 h-8 text-primary" />}
            />
            <FuturisticStat
              value="1"
              label="دقيقة غسيل"
              icon={<Clock className="w-8 h-8 text-green-400" />}
              color="green"
            />
            <FuturisticStat
              value="99%"
              label="نسبة تجفيف"
              icon={<Wind className="w-8 h-8 text-blue-400" />}
              color="blue"
            />
            <FuturisticStat
              value="10"
              label="سنوات ضمان"
              icon={<Shield className="w-8 h-8 text-purple-400" />}
              color="purple"
            />
          </div>
        </div>
      </section>

      {/* 2-in-1 System Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/lovable-uploads/101170ad-c89b-4068-9fcc-505d852ea11e.png"
              alt="نظام BT900 - 2 في واحد"
              className="w-full h-auto rounded-2xl border border-primary/20"
            />
          </motion.div>
          
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              تقدم شركة سمارتكو أحدث أنظمة الغسيل BT900، يتميز هذا النظام بتقنيات متطورة تضمن أداء فائق الكفاءة، مع قدرة عالية على غسيل أعداد كبيرة من السيارات بسرعة وفعالية. يساهم ذلك في تعزيز الكفاءة التشغيلية وتقليل أوقات الانتظار بشكل ملحوظ، مما يتيح تحقيق عوائد مالية مرتفعة.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Smart Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/lovable-uploads/2d9ad311-a75a-4f3c-80e2-627dbcdba0bb.png"
              alt="BT900 - دقيقة واحدة و 60+ سيارة في الساعة"
              className="w-full h-auto rounded-2xl border border-primary/20"
            />
          </motion.div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/lovable-uploads/2fc2a141-25e3-4241-bc17-0ef9df326747.png"
              alt="BT900 - الميزات الذكية والذكاء الاصطناعي"
              className="w-full h-auto rounded-2xl border border-primary/20"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <Card className="p-6 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-blue-500/20">
              <div className="text-center space-y-4">
                <Wifi className="w-12 h-12 text-blue-400 mx-auto" />
                <h3 className="text-xl font-bold text-blue-300">نظام ذكي ضد الاصطدام</h3>
                <p className="text-muted-foreground">تقنية المركبات الموجهة تلقائياً لحماية كل من السيارة والمعدات</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-900/10 to-emerald-900/10 border border-green-500/20">
              <div className="text-center space-y-4">
                <AlertTriangle className="w-12 h-12 text-green-400 mx-auto" />
                <h3 className="text-xl font-bold text-green-300">تشخيص ذاتي للأخطاء</h3>
                <p className="text-muted-foreground">نظام ذكي يحدد الأخطاء تلقائياً ويقدم تقارير مفصلة مع استجابة سريعة ودعم فني مستمر</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-900/10 to-violet-900/10 border border-purple-500/20">
              <div className="text-center space-y-4">
                <Cloud className="w-12 h-12 text-purple-400 mx-auto" />
                <h3 className="text-xl font-bold text-purple-300">نظام تخزين سحابي</h3>
                <p className="text-muted-foreground">إرسال تقارير عبر الجوال بعدد السيارات التي تم غسلها المخزون المتوفر مستوى الاستهلاك، رقابة متكاملة عبر الجوال</p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/20">
              <div className="text-center space-y-4">
                <Timer className="w-12 h-12 text-orange-400 mx-auto" />
                <h3 className="text-xl font-bold text-orange-300">الخدمة الذاتية</h3>
                <p className="text-muted-foreground">قبول جميع طرق الدفع الرئيسية، بما في ذلك أبل باي، ميزا، وبدي، تتيح تقنية الدفع الذاتي العمل على مدار 24 ساعة</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Brush System Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/lovable-uploads/581c5e13-ec7b-4c0e-b76a-83c44b804207.png"
              alt="BT900 - 9 فرش ناعمة جداً"
              className="w-full h-auto rounded-2xl border border-primary/20"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="p-6 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">فرش ناعمة جداً من الميكروفايبر</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  9 فرش عالية الجودة
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  تقنية يابانية متطورة
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  ضبط الضغط حسب الاحتياج
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-900/10 to-emerald-900/10 border border-green-500/20">
              <h3 className="text-xl font-bold mb-4 text-green-300">مدة استخدام طويلة</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  حتى 100,000 سيارة
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  تقنية التنظيف الذاتي للفرش
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  مقاومة للتمزق، ضد الرواسب أو الأتربة وجميع الوسائج
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-900/10 to-violet-900/10 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-300">مواد عالية الجودة</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  ضمان ضد الخدوش، أمان عالي
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  مصنوعة من مواد لا تمتص الماء
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Dryer System Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/lovable-uploads/cfc0065f-5c84-45b1-b968-9886a86f2966.png"
              alt="BT900 - 6 مجففات بقوة 5.5KW / 7.5KW"
              className="w-full h-auto rounded-2xl border border-primary/20"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Card className="p-6 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">أقوى نظام تجفيف</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  6 مجففات تعمل معاً لإزالة المياه بانسيابية عالية جداً وسرعة
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  نسبة تجفيف تصل إلى 99%
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-900/10 to-emerald-900/10 border border-green-500/20">
              <h3 className="text-xl font-bold mb-4 text-green-300">خيارات متعددة لنظام التجفيف</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  4 مجففات بقوة 5.5 كيلوواط علوية منفصلة لتجفيف الجزء العلوي من السيارة
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                  2 مجففات جانبية بقوة 7.5 كيلوواط لإزالة مياه منتفخ على جوانب السيارة
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Wash Programs Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/lovable-uploads/6d8feb93-ac5b-49d1-bbec-faf21d0ab5a2.png"
              alt="BT900 - أوضاع الغسيل"
              className="w-full h-auto rounded-2xl border border-primary/20"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <Card className="p-6 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">نظام الغسيل المسبق الآمن</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-muted-foreground">مضخة بقوة 100 بار تزيل بشكل فعال جميع الجزيئات والرواسب من سطح السيارة قبل بدء عمل الفرش، لدرجات عالية من الأمان</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-900/10 to-emerald-900/10 border border-green-500/20">
              <h3 className="text-xl font-bold mb-4 text-green-300">غسيل بدون لمس متكامل</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-blue-400" />
                  <span className="text-muted-foreground">مع دخول السيارة، أضيف المياه لإزالة الأوساخ السطحية، يتبعها رش مواد التنظيف، ثم إعاد رش الماء مرة أخرى عند الخروج لضمان نظافة فائقة بدون لمس</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pump System Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/lovable-uploads/a1b5ab84-e49f-4cc1-8e7a-b097219fe52c.png"
              alt="BT900 - المضخة PINFL"
              className="w-full h-auto rounded-2xl border border-primary/20"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <Card className="p-6 bg-gradient-to-br from-red-900/10 to-pink-900/10 border border-red-500/20">
              <h3 className="text-xl font-bold mb-4 text-red-300">PINFL علامة تجارية ألمانية</h3>
              <p className="text-muted-foreground">عدد المضخات: 2 - غسيل X2 بدون لمس عند دخول السيارة وخروجها لضمان جودة غسيل فائقة</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-blue-500/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">ضغط الماء قابل للتصميم</h3>
              <p className="text-muted-foreground">تسمح المضخة للمستخدمين بتعديل ضغط الماء لتلبية متطلبات التنظيف المحددة</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-900/10 to-emerald-900/10 border border-green-500/20">
              <h3 className="text-xl font-bold mb-4 text-green-300">بناء متين</h3>
              <p className="text-muted-foreground">مصنوع من مواد عالية الجودة لتحمل البيئات القاسية وتوفير أداء طويل الأمد</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-900/10 to-violet-900/10 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-300">كفاءة عالية</h3>
              <p className="text-muted-foreground">مصممة لتحقيق الاستهلاك الأمثل للطاقة وضمان استخدام المياه بكفاءة وتقليل تكاليف التشغيل</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-900/10 to-yellow-900/10 border border-orange-500/20">
              <h3 className="text-xl font-bold mb-4 text-orange-300">ميزات السلامة العالية</h3>
              <p className="text-muted-foreground">تتضمن صمامات الإغلاق التلقائي وتنقيف الضغط لضمان التشغيل الآمن</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-teal-900/10 to-cyan-900/10 border border-teal-500/20">
              <h3 className="text-xl font-bold mb-4 text-teal-300">التكيف</h3>
              <p className="text-muted-foreground">قادر على التعامل مع البيئة القاسية وتحمل درجات حرارة مياه مرتفعة</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-indigo-900/10 to-purple-900/10 border border-indigo-500/20">
              <h3 className="text-xl font-bold mb-4 text-indigo-300">معدل تدفق مرتفع</h3>
              <p className="text-muted-foreground">قادر على توفير معدل تدفق مرتفع لضمان التنظيف الشامل والسريع في خاصية غسيل بدون لمس</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            المواصفات التقنية
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary">النظام الأساسي</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><span className="font-semibold">النوع:</span> نفق غسيل تلقائي متكامل</li>
                <li><span className="font-semibold">الطاقة الإنتاجية:</span> 60+ سيارة/ساعة</li>
                <li><span className="font-semibold">وقت الغسيل:</span> دقيقة واحدة</li>
                <li><span className="font-semibold">الضمان:</span> 10 سنوات على الهيكل وأنظمة التحكم</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary">نظام الغسيل</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><span className="font-semibold">عدد الفرش:</span> 9 فرش ميكروفايبر يابانية</li>
                <li><span className="font-semibold">ضغط الماء:</span> 100 بار</li>
                <li><span className="font-semibold">المضخات:</span> PINFL ألمانية × 2</li>
                <li><span className="font-semibold">النوع:</span> 2 في 1 (بدون لمس + بالفرش)</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary">نظام التجفيف</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><span className="font-semibold">عدد المجففات:</span> 6 مجففات</li>
                <li><span className="font-semibold">القوة:</span> 4×5.5KW + 2×7.5KW</li>
                <li><span className="font-semibold">نسبة التجفيف:</span> 99%</li>
                <li><span className="font-semibold">التصميم:</span> علوي وجانبي</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary">الذكاء الاصطناعي</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><span className="font-semibold">نظام ضد الاصطدام:</span> تقنية موجهة تلقائياً</li>
                <li><span className="font-semibold">التشخيص الذاتي:</span> اكتشاف وتنبيه مبكر</li>
                <li><span className="font-semibold">التخزين السحابي:</span> تقارير ومراقبة عن بُعد</li>
                <li><span className="font-semibold">الخدمة الذاتية:</span> 24/7 مع دعم مدى الحياة</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary">المكونات المميزة</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><span className="font-semibold">المتحكمات:</span> Siemens الألمانية</li>
                <li><span className="font-semibold">المضخات:</span> PINFL الألمانية</li>
                <li><span className="font-semibold">المستشعرات:</span> Baumer السويسرية</li>
                <li><span className="font-semibold">التحكم:</span> Schneider Electric الفرنسية</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-md border border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-primary">برامج الغسيل</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><span className="font-semibold">أوضاع متعددة:</span> قابلة للتعديل حسب الاحتياج</li>
                <li><span className="font-semibold">التخصيص:</span> حسب نوع المركبة</li>
                <li><span className="font-semibold">الذكاء:</span> اختيار تلقائي للبرنامج المناسب</li>
                <li><span className="font-semibold">المرونة:</span> إعدادات مخصصة لكل عميل</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold">ابدأ مشروعك مع BT900</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              انضم إلى مستقبل تقنية غسيل السيارات مع أحدث الأنظمة الذكية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-primary hover:bg-primary/90">
                <Phone className="w-5 h-5 ml-2" />
                احجز استشارة مجانية
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                <Mail className="w-5 h-5 ml-2" />
                اطلب عرض سعر
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BT900FuturisticPage;