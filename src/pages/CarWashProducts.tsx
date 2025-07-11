import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Droplets, 
  Zap, 
  Timer, 
  Shield, 
  Cog, 
  Phone, 
  ArrowRight,
  CheckCircle,
  Settings,
  Wind,
  Sparkles,
  Recycle,
  Clock,
  WifiOff,
  Eye,
  Gauge,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CarWashProducts = () => {
  const products = [
    {
      id: 'tl300',
      title: 'TL300',
      subtitle: 'نظام الغسيل الأساسي',
      description: 'نقطة البداية المثالية لدخول عالم غسيل السيارات الآلي. تقنية بسيطة وموثوقة بأقل تكلفة استثمارية.',
      image: '/lovable-uploads/abb4e71e-24b1-482b-a871-ee34c063b64f.png',
      features: ['ضغط الماء العالي', 'نظام استشعار أساسي', 'تحكم آلي'],
      capacity: '12-15 سيارة/ساعة',
      power: '6 كيلو واط',
      water: '80-110 لتر',
      pressure: '4-6 بار',
      price: 'الأكثر اقتصادية',
      benefits: [
        'الأنسب للبداية في المجال',
        'أقل تكلفة استثمارية',
        'صيانة سهلة ومنخفضة التكلفة',
        'مناسب للمساحات الصغيرة',
        'عائد استثمار سريع',
        'ضمان لمدة سنة واحدة'
      ]
    },
    {
      id: 'tl400',
      title: 'TL400',
      subtitle: 'نظام الغسيل المتقدم',
      description: 'الحل الأمثل للمشاريع الناشئة والصغيرة. تقنية موثوقة بسعر مناسب وأداء ممتاز يضمن نجاح مشروعك.',
      image: '/lovable-uploads/d3dbcc1a-125e-4102-9c54-9702d6fd142e.png',
      features: ['ضغط الماء المتغير', 'استشعار ذكي', 'ذراع روبوتي متحرك'],
      capacity: '15-20 سيارة/ساعة',
      power: '8 كيلو واط',
      water: '100-130 لتر',
      pressure: '5-8 بار',
      price: 'خيار ذكي',
      benefits: [
        'مثالي للمشاريع الصغيرة',
        'استثمار مربح ومضمون',
        'تشغيل بسيط وآمن',
        'قطع غيار متوفرة',
        'دعم فني متواصل',
        'ضمان لمدة سنة واحدة'
      ]
    },
    {
      id: 'tl500',
      title: 'TL500',
      subtitle: 'نظام الغسيل الاحترافي',
      description: 'حل مثالي للمشاريع المتوسطة مع تقنية متقدمة وأداء موثوق. تصميم مدروس يجمع بين الكفاءة والاقتصادية.',
      image: '/lovable-uploads/dfaffd5e-3ebc-4472-af18-6ece10fc1502.png',
      features: ['ضغط الماء الذكي', 'استشعار متقدم', 'ذراع روبوتي كامل'],
      capacity: '20-25 سيارة/ساعة',
      power: '10 كيلو واط',
      water: '120-150 لتر',
      pressure: '6-10 بار',
      price: 'جودة عالية',
      benefits: [
        'مناسب للمشاريع الصغيرة والمتوسطة',
        'سهولة التركيب والتشغيل',
        'تكلفة تشغيل منخفضة',
        'صيانة بسيطة وسريعة',
        'جودة غسيل ممتازة',
        'ضمان شامل لمدة سنة ونصف'
      ]
    }
  ];

  const specifications = [
    { feature: 'ضغط الماء', tl300: '4-6 بار', tl400: '5-8 بار', tl500: '6-10 بار' },
    { feature: 'استهلاك المياه', tl300: '80-110 لتر', tl400: '100-130 لتر', tl500: '120-150 لتر' },
    { feature: 'القدرة الكهربائية', tl300: '6 كيلو واط', tl400: '8 كيلو واط', tl500: '10 كيلو واط' },
    { feature: 'عدد السيارات/ساعة', tl300: '12-15', tl400: '15-20', tl500: '20-25' },
    { feature: 'الطول', tl300: '7.5 متر', tl400: '8.5 متر', tl500: '9.5 متر' },
    { feature: 'العرض', tl300: '2.6 متر', tl400: '2.8 متر', tl500: '3.0 متر' },
    { feature: 'الارتفاع', tl300: '2.2 متر', tl400: '2.4 متر', tl500: '2.5 متر' },
    { feature: 'نظام التحكم الذكي', tl300: '✓', tl400: '✓', tl500: '✓' },
    { feature: 'الذراع الروبوتي', tl300: '—', tl400: '✓', tl500: '✓' },
    { feature: 'نظام التجفيف المتقدم', tl300: '—', tl400: '✓', tl500: '✓' },
    { feature: 'استشعار ثلاثي الأبعاد', tl300: '—', tl400: '—', tl500: '✓' }
  ];

  const tl500Features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'استشعار ذكي ثلاثي الأبعاد',
      description: 'تقنية متقدمة لفحص السيارة وتحديد أفضل برنامج غسيل'
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: 'ذراع روبوتي متطور',
      description: 'حركة دقيقة ومرنة تضمن تنظيف شامل لجميع أجزاء السيارة'
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: 'نظام ضغط المياه الذكي',
      description: 'تحكم تلقائي في ضغط المياه حسب نوع السطح'
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: 'نظام التجفيف المتقدم',
      description: 'مجففات عالية الكفاءة لتجفيف سريع ومثالي'
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'رغوة ثلاثية المراحل',
      description: 'نظام رغوة متطور للحصول على أفضل نتائج التنظيف'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'التحكم الذكي',
      description: 'واجهة تحكم متقدمة مع برامج غسيل متعددة'
    }
  ];

  const optionalTechnologies = [
    {
      icon: <Recycle className="h-6 w-6" />,
      title: 'نظام إعادة تدوير المياه',
      description: 'توفير 40% من استهلاك المياه'
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: 'تقنية البخار المدمج',
      description: 'تنظيف عميق وتعقيم فعال'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'الخدمة الذاتية 24H',
      description: 'تشغيل آلي على مدار الساعة'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-4 w-4 ml-2" />
              تقنية SeaPaac المتطورة
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              أنظمة الغسيل بدون لمس من
              <span className="block text-primary mt-2">SeaPaac</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              المفهوم الجديد لغسيل السيارات الذي يمنح أماناً عالياً وتقنية لا مثيل لها
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <ArrowRight className="h-5 w-5 mr-2" />
                استكشف منتجاتنا
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-foreground mb-12"
          >
            مجموعة أنظمة الغسيل الآلية
          </motion.h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-background border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="relative mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-accent/5">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <Badge className="mb-3 bg-primary/10 text-primary">
                      {product.subtitle}
                    </Badge>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {product.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6 text-sm">
                      <div className="bg-muted/50 p-2 rounded">
                        <div className="text-muted-foreground">السعة</div>
                        <div className="font-semibold">{product.capacity}</div>
                      </div>
                      <div className="bg-muted/50 p-2 rounded">
                        <div className="text-muted-foreground">القدرة</div>
                        <div className="font-semibold">{product.power}</div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all duration-300"
                      onClick={() => {
                        const element = document.getElementById(`details-${product.id}`);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      تفاصيل أكثر
                      <ArrowRight className="h-4 w-4 mr-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-foreground mb-12"
          >
            مقارنة المواصفات التقنية
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-background rounded-lg shadow-lg border border-border">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-4 text-right font-bold text-foreground">المواصفات</th>
                  <th className="p-4 text-center font-bold text-primary">TL300</th>
                  <th className="p-4 text-center font-bold text-primary">TL400</th>
                  <th className="p-4 text-center font-bold text-primary">TL500</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-4 font-semibold text-foreground">{spec.feature}</td>
                    <td className="p-4 text-center text-muted-foreground">{spec.tl300}</td>
                    <td className="p-4 text-center text-muted-foreground">{spec.tl400}</td>
                    <td className="p-4 text-center font-bold text-primary">{spec.tl500}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* TL500 Feature Spotlight */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary text-primary-foreground">
              TL500 المتقدم
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              تقنية المستقبل في غسيل السيارات
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اكتشف أحدث ما توصلت إليه التقنية في مجال غسيل السيارات الآلي
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tl500Features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="h-full bg-background/80 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id} 
          id={`details-${product.id}`}
          className={`py-20 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-primary text-primary-foreground">
                {product.price}
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                تفاصيل {product.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {product.description}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-foreground mb-6">المواصفات التقنية</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{product.capacity}</div>
                      <div className="text-sm text-muted-foreground">السعة</div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{product.power}</div>
                      <div className="text-sm text-muted-foreground">القدرة</div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{product.water}</div>
                      <div className="text-sm text-muted-foreground">استهلاك المياه</div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{product.pressure}</div>
                      <div className="text-sm text-muted-foreground">ضغط المياه</div>
                    </div>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">الفوائد والمزايا</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Optional Technologies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-foreground mb-12"
          >
            تقنيات إضافية متقدمة
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {optionalTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-background border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent"
                    >
                      {tech.icon}
                    </motion.div>
                    <h3 className="font-bold text-foreground mb-2">{tech.title}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                    <Badge variant="outline" className="mt-3 text-xs">
                      اختياري
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              ابدأ مشروعك مع TL500 الآن
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              انضم إلى شركائنا الناجحين واحصل على أحدث تقنيات غسيل السيارات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-background text-primary hover:bg-background/90"
              >
                <Phone className="h-5 w-5 ml-2" />
                اطلب عرض سعر
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                استشارة مجانية
                <ArrowRight className="h-5 w-5 mr-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CarWashProducts;