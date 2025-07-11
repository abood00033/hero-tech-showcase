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
  TrendingUp
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
  const [activeTab, setActiveTab] = useState('brain');
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
                <span className="font-bold">نظام الذكاء الاصطناعي BT900</span>
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
              مغسلة المستقبل
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              عقل اصطناعي يفهم ويعتني بكل مركبة - تجربة غسيل الجيل القادم
            </motion.p>

            {/* Car Simulation */}
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <CarSimulation />
            </motion.div>

            {/* BT900 System Gallery */}
            <motion.div
              className="max-w-6xl mx-auto mt-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="relative group overflow-hidden rounded-2xl border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/lovable-uploads/c5375e9e-6274-4fe3-ace0-0c5f793ff6d0.png"
                    alt="نظام BT900 - منظر جانبي"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <motion.div
                  className="relative group overflow-hidden rounded-2xl border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/lovable-uploads/28144a1c-943b-408f-ad5d-00076e8779ae.png"
                    alt="نظام BT900 - منظر علوي"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <motion.div
                  className="relative group overflow-hidden rounded-2xl border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/lovable-uploads/3ccf25e5-f98e-46f9-be3c-88ad951e5499.png"
                    alt="نظام BT900 - منظر ثلاثي الأبعاد"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
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
              value="60"
              label="سيارة في الساعة"
              icon={<Car className="w-8 h-8 text-primary" />}
            />
            <FuturisticStat
              value="1"
              label="دقيقة للغسيل"
              icon={<Clock className="w-8 h-8 text-green-400" />}
              color="green"
            />
            <FuturisticStat
              value="99%"
              label="نسبة التجفيف"
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

      {/* Interactive Tabs Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            تكنولوجيا المستقبل
          </motion.h2>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-background/50 backdrop-blur-md">
              <TabsTrigger value="brain" className="font-cairo">العقل الذكي</TabsTrigger>
              <TabsTrigger value="wash" className="font-cairo">نظام الغسيل</TabsTrigger>
              <TabsTrigger value="sensors" className="font-cairo">المستشعرات</TabsTrigger>
              <TabsTrigger value="performance" className="font-cairo">الأداء</TabsTrigger>
            </TabsList>

            <TabsContent value="brain" className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-purple-900/10 to-blue-900/10 border border-purple-500/20">
                <div className="text-center space-y-6">
                  <motion.div
                    className="inline-flex p-6 rounded-full bg-purple-500/20 border border-purple-500/30"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Brain className="w-12 h-12 text-purple-400" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-purple-300">الذكاء الاصطناعي المتطور</h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    نظام ذكي يتعلم من كل عملية غسيل، يحلل نوع المركبة ومستوى الاتساخ، ويقرر أفضل برنامج غسيل تلقائياً
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="wash" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border border-blue-500/20">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-blue-300">
                    <Droplets className="w-6 h-6 ml-2" />
                    غسيل بدون لمس متطور
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                      ضغط 100 بار فائق القوة
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                      رش X2 عند الدخول والخروج
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                      مضخات PINFL الألمانية
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-green-900/10 to-emerald-900/10 border border-green-500/20">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-green-300">
                    <Settings className="w-6 h-6 ml-2" />
                    نظام الفرش الياباني
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                      9 فرش مايكروفايبر ناعمة
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                      مقاومة للبيئة الصحراوية
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 ml-2 text-green-400" />
                      عمر 100,000 سيارة
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sensors" className="space-y-8">
              <Card className="p-8 bg-gradient-to-br from-orange-900/10 to-red-900/10 border border-orange-500/20">
                <div className="text-center space-y-6">
                  <motion.div
                    className="inline-flex p-6 rounded-full bg-orange-500/20 border border-orange-500/30"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Radar className="w-12 h-12 text-orange-400" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-orange-300">مستشعرات ذكية 360°</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="space-y-2">
                      <Eye className="w-8 h-8 text-orange-400 mx-auto" />
                      <h4 className="font-bold">كشف الأبعاد</h4>
                      <p className="text-sm text-muted-foreground">تحديد طول وعرض وارتفاع المركبة</p>
                    </div>
                    <div className="space-y-2">
                      <Activity className="w-8 h-8 text-orange-400 mx-auto" />
                      <h4 className="font-bold">تحليل الحالة</h4>
                      <p className="text-sm text-muted-foreground">فحص مستوى الاتساخ والمناطق المطلوبة</p>
                    </div>
                    <div className="space-y-2">
                      <ShieldCheck className="w-8 h-8 text-orange-400 mx-auto" />
                      <h4 className="font-bold">نظام الأمان</h4>
                      <p className="text-sm text-muted-foreground">حماية ذكية ضد الاصطدامات</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-to-br from-emerald-900/10 to-teal-900/10 border border-emerald-500/20">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-emerald-300">
                    <TrendingUp className="w-6 h-6 ml-2" />
                    الكفاءة التشغيلية
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>سرعة الغسيل</span>
                      <Badge className="bg-emerald-500/20 text-emerald-300">60 سيارة/ساعة</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>وقت الدورة</span>
                      <Badge className="bg-emerald-500/20 text-emerald-300">1 دقيقة</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>نسبة التجفيف</span>
                      <Badge className="bg-emerald-500/20 text-emerald-300">99%</Badge>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-violet-900/10 to-purple-900/10 border border-violet-500/20">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-violet-300">
                    <Settings className="w-6 h-6 ml-2" />
                    الميزات المتقدمة
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>نظام دفع ذاتي 24/7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>تشخيص ذاتي للأخطاء</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>ربط تطبيق الولاء</span>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold">جاهز لاستكشاف المستقبل؟</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                احجز عرضاً تفاعلياً واكتشف كيف يمكن لتقنية BT900 أن تثور أعمالك
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-4 text-lg bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 ml-2" />
                  احجز عرضاً تفاعلياً
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  <Mail className="w-5 h-5 ml-2" />
                  تواصل عبر البريد
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex flex-col items-center gap-2">
                  <Phone className="w-8 h-8 text-primary" />
                  <span className="font-bold">هاتف</span>
                  <span className="text-muted-foreground">920031826</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="w-8 h-8 text-primary" />
                  <span className="font-bold">بريد إلكتروني</span>
                  <span className="text-muted-foreground">sales@SmartComachine.com</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Globe className="w-8 h-8 text-primary" />
                  <span className="font-bold">موقع إلكتروني</span>
                  <span className="text-muted-foreground">www.SmartComachine.com</span>
                </div>
              </div>
            </motion.div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BT900FuturisticPage;