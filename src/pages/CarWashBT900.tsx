import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import OptimizedImage from '@/components/ui/optimized-image';
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
  
  // Product Images for BT900
  const heroImages = [
    "/lovable-uploads/d7f46067-5eb1-4e56-8b93-d7c37d04c951.png",
    "/lovable-uploads/ca0e3cbf-cfd3-4fe0-88e7-173dc3ac0bc2.png",
    "/lovable-uploads/ad748a22-b280-4e40-8a29-eb0225627a3d.png",
    "/lovable-uploads/4d48ca1a-8931-4f9e-9817-ec991f917135.png"
  ];

  const productImages = [
    {
      src: "/lovable-uploads/d7f46067-5eb1-4e56-8b93-d7c37d04c951.png",
      alt: "BT900 نظام غسيل السيارات المستقبلي - المنظر الأمامي"
    },
    {
      src: "/lovable-uploads/ca0e3cbf-cfd3-4fe0-88e7-173dc3ac0bc2.png",
      alt: "BT900 نظام غسيل السيارات المستقبلي - المنظر الجانبي"
    },
    {
      src: "/lovable-uploads/ad748a22-b280-4e40-8a29-eb0225627a3d.png",
      alt: "BT900 نظام غسيل السيارات المستقبلي - نظام الذكاء الاصطناعي"
    },
    {
      src: "/lovable-uploads/4d48ca1a-8931-4f9e-9817-ec991f917135.png",
      alt: "BT900 نظام غسيل السيارات المستقبلي - التقنيات المتقدمة"
    },
    {
      src: "/lovable-uploads/cc671829-aaa7-4559-affa-11d056fbcf5d.png",
      alt: "BT900 نظام غسيل السيارات المستقبلي - واجهة التحكم"
    },
    {
      src: "/lovable-uploads/c816dc83-442d-40b5-89e3-58f1872702cd.png",
      alt: "BT900 نظام غسيل السيارات المستقبلي - نظام الاستشعار"
    }
  ];
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
                <span className="font-bold">سي باك</span>
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
              غسيل السيارات BT900
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

            {/* Interactive BT900 System */}
            <motion.div
              className="max-w-4xl mx-auto mt-16"
              initial={{ opacity: 0, y: 50 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 shadow-2xl">
                {/* Main System Display */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Central System */}
                  <div className="lg:col-span-2 text-center space-y-6">
                    <div className="w-40 h-40 mx-auto bg-primary/20 rounded-full flex items-center justify-center border-4 border-primary/30">
                      <div className="text-center">
                        <Factory className="h-20 w-20 text-primary mx-auto mb-2" />
                        <p className="text-lg font-bold text-primary">BT900</p>
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                        <Droplets className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                        <p className="text-sm font-semibold">بدون لمس</p>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                        <Activity className="h-8 w-8 text-green-500 mx-auto mb-2" />
                        <p className="text-sm font-semibold">بالفرش</p>
                      </div>
                      <div className="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
                        <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                        <p className="text-sm font-semibold">1 دقيقة</p>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                        <Car className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                        <p className="text-sm font-semibold">60+ سيارة/ساعة</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Advanced Features */}
                  <div className="space-y-4">
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <Brain className="h-6 w-6 text-primary mb-2" />
                      <p className="text-sm font-semibold">ذكاء اصطناعي</p>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                      <Cloud className="h-6 w-6 text-secondary mb-2" />
                      <p className="text-sm font-semibold">تخزين سحابي</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                      <Radar className="h-6 w-6 text-accent mb-2" />
                      <p className="text-sm font-semibold">مستشعرات ذكية</p>
                    </div>
                  </div>
                </div>
                
                {/* Warranty Badge */}
                <div className="absolute -bottom-4 -right-4">
                  <Badge className="bg-red-500/90 text-white border-red-600 px-6 py-3">
                    <Shield className="h-5 w-5 ml-2" />
                    <span className="text-xl font-bold">10</span>
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
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
                onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
              >
                <Phone className="w-5 h-5 ml-2" />
                تواصل معنا
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
            {/* 2-in-1 System Visual */}
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-12 border border-primary/20 shadow-2xl">
              <div className="text-center space-y-8">
                <h3 className="text-4xl font-bold text-primary">نظام 2 في 1</h3>
                
                {/* System Comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Touchless System */}
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                        <Droplets className="h-10 w-10 text-blue-500" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-600">غسيل بدون لمس</h4>
                      <div className="space-y-2">
                        <p className="text-sm">• ضغط عالي</p>
                        <p className="text-sm">• رغوة نشطة</p>
                        <p className="text-sm">• حماية الطلاء</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Plus Symbol */}
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                      <span className="text-3xl font-bold text-primary">+</span>
                    </div>
                  </div>
                  
                  {/* Brush System */}
                  <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                        <Activity className="h-10 w-10 text-green-500" />
                      </div>
                      <h4 className="text-xl font-bold text-green-600">غسيل بالفرش</h4>
                      <div className="space-y-2">
                        <p className="text-sm">• فرش ناعمة</p>
                        <p className="text-sm">• تنظيف عميق</p>
                        <p className="text-sm">• إزالة الأوساخ</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Result */}
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <h4 className="text-2xl font-bold text-primary mb-4">النتيجة</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">99%</div>
                      <p className="text-sm text-muted-foreground">تنظيف مثالي</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">60+</div>
                      <p className="text-sm text-muted-foreground">سيارة/ساعة</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">1</div>
                      <p className="text-sm text-muted-foreground">دقيقة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            {/* Performance Metrics Visual */}
            <div className="bg-gradient-to-br from-orange-500/10 via-red-500/10 to-yellow-500/10 rounded-2xl p-12 border border-orange-500/20 shadow-2xl">
              <div className="text-center space-y-8">
                <h3 className="text-4xl font-bold text-orange-600">أداء خارق</h3>
                
                {/* Main Performance Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Speed */}
                  <div className="bg-background/50 rounded-xl p-8 border border-orange-500/20">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center border-4 border-orange-500/30">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-orange-600">1</div>
                          <p className="text-sm text-orange-600">دقيقة</p>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-foreground">وقت الغسيل</h4>
                      <p className="text-muted-foreground">أسرع نظام غسيل في العالم</p>
                    </div>
                  </div>
                  
                  {/* Capacity */}
                  <div className="bg-background/50 rounded-xl p-8 border border-red-500/20">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto bg-red-500/20 rounded-full flex items-center justify-center border-4 border-red-500/30">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-red-600">60+</div>
                          <p className="text-sm text-red-600">سيارة</p>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-foreground">الطاقة الإنتاجية</h4>
                      <p className="text-muted-foreground">في الساعة الواحدة</p>
                    </div>
                  </div>
                </div>
                
                {/* Comparison Chart */}
                <div className="bg-background/30 rounded-xl p-6 border border-yellow-500/20">
                  <h4 className="text-xl font-bold text-foreground mb-4">مقارنة مع الأنظمة التقليدية</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">الأنظمة التقليدية</p>
                      <div className="h-20 bg-gray-300 rounded flex items-end">
                        <div className="w-full h-8 bg-gray-500 rounded-b"></div>
                      </div>
                      <p className="text-sm mt-2">15 سيارة/ساعة</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">أنظمة متطورة</p>
                      <div className="h-20 bg-gray-300 rounded flex items-end">
                        <div className="w-full h-12 bg-blue-500 rounded-b"></div>
                      </div>
                      <p className="text-sm mt-2">30 سيارة/ساعة</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">BT900</p>
                      <div className="h-20 bg-gray-300 rounded flex items-end">
                        <div className="w-full h-20 bg-gradient-to-t from-orange-500 to-red-500 rounded"></div>
                      </div>
                      <p className="text-sm mt-2 font-bold text-red-600">60+ سيارة/ساعة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            {/* AI & Smart Features Visual */}
            <div className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl p-12 border border-purple-500/20 shadow-2xl">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center space-x-4 space-x-reverse mb-8">
                  <Brain className="h-12 w-12 text-purple-500" />
                  <h3 className="text-4xl font-bold text-purple-600">الذكاء الاصطناعي</h3>
                  <Sparkles className="h-12 w-12 text-cyan-500" />
                </div>
                
                {/* Smart Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-background/50 rounded-xl p-6 border border-purple-500/20">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                        <Radar className="h-8 w-8 text-purple-500" />
                      </div>
                      <h4 className="font-bold text-sm">نظام ذكي ضد الاصطدام</h4>
                      <p className="text-xs text-muted-foreground">حماية تلقائية متطورة</p>
                    </div>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-6 border border-blue-500/20">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                        <AlertTriangle className="h-8 w-8 text-blue-500" />
                      </div>
                      <h4 className="font-bold text-sm">تشخيص ذاتي للأخطاء</h4>
                      <p className="text-xs text-muted-foreground">اكتشاف فوري للمشاكل</p>
                    </div>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-6 border border-cyan-500/20">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                        <Cloud className="h-8 w-8 text-cyan-500" />
                      </div>
                      <h4 className="font-bold text-sm">تخزين سحابي</h4>
                      <p className="text-xs text-muted-foreground">تقارير ومراقبة مستمرة</p>
                    </div>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-6 border border-green-500/20">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                        <CreditCard className="h-8 w-8 text-green-500" />
                      </div>
                      <h4 className="font-bold text-sm">دفع ذكي</h4>
                      <p className="text-xs text-muted-foreground">جميع طرق الدفع</p>
                    </div>
                  </div>
                </div>
                
                {/* AI Brain Visualization */}
                <div className="bg-background/30 rounded-xl p-8 border border-purple-500/20">
                  <div className="flex items-center justify-center space-x-8 space-x-reverse">
                    <div className="text-center">
                      <Eye className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">مراقبة بصرية</p>
                    </div>
                    <div className="text-center">
                      <Network className="h-12 w-12 text-purple-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">شبكة ذكية</p>
                    </div>
                    <div className="text-center">
                      <Cpu className="h-12 w-12 text-cyan-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">معالجة فورية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            {/* 9 Brushes System Visual */}
            <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-2xl p-12 border border-green-500/20 shadow-2xl">
              <div className="text-center space-y-8">
                <h3 className="text-4xl font-bold text-green-600">9 فرش ناعمة جداً</h3>
                
                {/* Brush Layout Visualization */}
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-9 gap-2 items-center">
                    {/* Top Brushes */}
                    <div className="col-span-9 text-center mb-4">
                      <div className="grid grid-cols-3 gap-4">
                        {[1,2,3].map((i) => (
                          <div key={i} className="text-center space-y-2">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                              <Activity className="h-8 w-8 text-green-500" />
                            </div>
                            <p className="text-xs font-semibold">فرشة علوية {i}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Side and Wheel Brushes */}
                    <div className="col-span-9 grid grid-cols-6 gap-4 items-center">
                      {/* Left Side */}
                      <div className="text-center space-y-2">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                          <Activity className="h-6 w-6 text-blue-500" />
                        </div>
                        <p className="text-xs font-semibold">جانبية يسار</p>
                      </div>
                      
                      {/* Wheel Brushes */}
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                          <Car className="h-5 w-5 text-orange-500" />
                        </div>
                        <p className="text-xs font-semibold">عجلة</p>
                      </div>
                      
                      {/* Car in Center */}
                      <div className="col-span-2 text-center">
                        <div className="w-24 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                          <Car className="h-10 w-10 text-purple-500" />
                        </div>
                        <p className="text-sm font-semibold mt-2">السيارة</p>
                      </div>
                      
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                          <Car className="h-5 w-5 text-orange-500" />
                        </div>
                        <p className="text-xs font-semibold">عجلة</p>
                      </div>
                      
                      {/* Right Side */}
                      <div className="text-center space-y-2">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                          <Activity className="h-6 w-6 text-blue-500" />
                        </div>
                        <p className="text-xs font-semibold">جانبية يمين</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Brush Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-background/50 rounded-xl p-4 border">
                    <h4 className="font-bold text-foreground mb-2">مواد عالية الجودة</h4>
                    <p className="text-sm text-muted-foreground">مايكروفايبر وطبقات إيفا فوم</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border">
                    <h4 className="font-bold text-foreground mb-2">تصميم متطور</h4>
                    <p className="text-sm text-muted-foreground">حركات مرنة وقابلة للتعديل</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border">
                    <h4 className="font-bold text-foreground mb-2">صناعة يابانية</h4>
                    <p className="text-sm text-muted-foreground">مصممة للبيئة الصحراوية</p>
                  </div>
                </div>
              </div>
            </div>
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
            {/* 6 Dryers System Visual */}
            <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-2xl p-12 border border-cyan-500/20 shadow-2xl">
              <div className="text-center space-y-8">
                <h3 className="text-4xl font-bold text-cyan-600">6 مجففات بقوة 5.5KW / 7.5KW</h3>
                
                {/* Dryers Layout */}
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Top Dryers */}
                    <div className="lg:col-span-2">
                      <h4 className="text-xl font-bold text-cyan-600 mb-4">4 مجففات علوية - 5.5KW</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1,2,3,4].map((i) => (
                          <div key={i} className="text-center space-y-2">
                            <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                              <Wind className="h-8 w-8 text-cyan-500" />
                            </div>
                            <p className="text-xs font-semibold">مجفف علوي {i}</p>
                            <p className="text-xs text-muted-foreground">5.5 كيلوواط</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Side Dryers */}
                    <div>
                      <h4 className="text-xl font-bold text-blue-600 mb-4">2 مجفف جانبي - 7.5KW</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1,2].map((i) => (
                          <div key={i} className="text-center space-y-2">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                              <Wind className="h-8 w-8 text-blue-500" />
                            </div>
                            <p className="text-xs font-semibold">مجفف جانبي {i}</p>
                            <p className="text-xs text-muted-foreground">7.5 كيلوواط</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Performance Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-background/50 rounded-xl p-4 border text-center">
                    <div className="text-3xl font-bold text-cyan-600">6</div>
                    <p className="text-sm font-semibold">مجففات قوية</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border text-center">
                    <div className="text-3xl font-bold text-blue-600">37</div>
                    <p className="text-sm font-semibold">كيلوواط إجمالي</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border text-center">
                    <div className="text-3xl font-bold text-indigo-600">99%</div>
                    <p className="text-sm font-semibold">نسبة التجفيف</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border text-center">
                    <div className="text-3xl font-bold text-purple-600">60+</div>
                    <p className="text-sm font-semibold">سيارة/ساعة</p>
                  </div>
                </div>
              </div>
            </div>
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
            {/* Wash Programs Visual */}
            <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-2xl p-12 border border-green-500/20 shadow-2xl">
              <div className="text-center space-y-8">
                <h3 className="text-4xl font-bold text-green-600">أوضاع الغسيل المتقدمة</h3>
                
                {/* Wash Programs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                      <Wind className="h-10 w-10 text-blue-500" />
                    </div>
                    <h4 className="font-bold text-sm">تجفيف فائق</h4>
                    <p className="text-xs text-muted-foreground">99% نسبة تجفيف</p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center border border-yellow-500/30">
                      <Sparkles className="h-10 w-10 text-yellow-500" />
                    </div>
                    <h4 className="font-bold text-sm">واكس متطور</h4>
                    <p className="text-xs text-muted-foreground">لمعان وحماية</p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
                      <Droplets className="h-10 w-10 text-green-500" />
                    </div>
                    <h4 className="font-bold text-sm">رغوة ذكية</h4>
                    <p className="text-xs text-muted-foreground">تنظيف عميق</p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                      <Activity className="h-10 w-10 text-purple-500" />
                    </div>
                    <h4 className="font-bold text-sm">غسيل مسبق</h4>
                    <p className="text-xs text-muted-foreground">إزالة الأوساخ الصعبة</p>
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                      <Car className="h-10 w-10 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-sm">غسيل أسفل</h4>
                    <p className="text-xs text-muted-foreground">تنظيف الهيكل السفلي</p>
                  </div>
                </div>
                
                {/* Advanced Features */}
                <div className="bg-background/30 rounded-xl p-6 border">
                  <h4 className="text-xl font-bold text-foreground mb-4">مميزات متقدمة</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold">تحكم ذكي بالذكاء الاصطناعي</p>
                    </div>
                    <div className="text-center">
                      <Settings className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold">قابلة للتخصيص والبرمجة</p>
                    </div>
                    <div className="text-center">
                      <Radar className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold">استشعار تلقائي للمركبة</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            {/* PINFL Pump System Visual */}
            <div className="bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-2xl p-12 border border-red-500/20 shadow-2xl">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center space-x-4 space-x-reverse">
                  <Factory className="h-12 w-12 text-red-500" />
                  <h3 className="text-4xl font-bold text-red-600">مضخة PINFL الألمانية</h3>
                  <Award className="h-12 w-12 text-yellow-500" />
                </div>
                
                {/* Pump Specifications */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-background/50 rounded-xl p-6 border">
                    <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                      <Gauge className="h-10 w-10 text-red-500" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2">ضغط قوي</h4>
                    <p className="text-3xl font-bold text-red-600 mb-2">120</p>
                    <p className="text-sm text-muted-foreground">بار ضغط</p>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-6 border">
                    <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                      <Zap className="h-10 w-10 text-orange-500" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2">قوة فائقة</h4>
                    <p className="text-3xl font-bold text-orange-600 mb-2">22</p>
                    <p className="text-sm text-muted-foreground">كيلوواط</p>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-6 border">
                    <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-500/30">
                      <Droplets className="h-10 w-10 text-yellow-500" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2">تدفق عالي</h4>
                    <p className="text-3xl font-bold text-yellow-600 mb-2">60</p>
                    <p className="text-sm text-muted-foreground">لتر/دقيقة</p>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-6 border">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                      <Shield className="h-10 w-10 text-green-500" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2">موثوقية</h4>
                    <p className="text-3xl font-bold text-green-600 mb-2">99.9%</p>
                    <p className="text-sm text-muted-foreground">معدل التشغيل</p>
                  </div>
                </div>
                
                {/* German Quality Features */}
                <div className="bg-background/30 rounded-xl p-6 border">
                  <h4 className="text-xl font-bold text-foreground mb-4">مميزات الجودة الألمانية</h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">مقاومة التآكل</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">كفاءة طاقة عالية</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">صيانة قليلة</p>
                    </div>
                    <div className="text-center">
                      <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-semibold">عمر تشغيلي طويل</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              صور شاملة لنظام BT900 المستقبلي
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              استكشف تفاصيل نظام غسيل السيارات BT900 المتطور من جميع الزوايا
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
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
              >
                <Phone className="w-5 h-5 ml-2" />
                تواصل معنا
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BT900FuturisticPage;