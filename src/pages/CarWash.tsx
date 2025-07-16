
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Droplets, Wind, Sparkles, Clock, Users, Shield, Star, Gauge, Target, ArrowLeft, Timer, Zap, CheckCircle, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarWash = () => {
  const technicalFeatures = [
    {
      title: "أنظمة التجفيف المدمجة",
      description: "تجفيف سريع وفعال للسيارات"
    },
    {
      title: "المستشعرات الذكية", 
      description: "تحكم دقيق وآمن في عملية الغسيل"
    },
    {
      title: "أنظمة التحكم PLC",
      description: "تحكم متقدم وموثوق في العمليات"
    },
    {
      title: "أنظمة رش الشمع والكريستال",
      description: "حماية وتلميع فائق للسيارات"
    },
    {
      title: "نظم إعادة تدوير المياه",
      description: "التزام بالاستدامة البيئية"
    },
    {
      title: "شاشات اللمس البديهية",
      description: "واجهات سهلة الاستخدام"
    },
    {
      title: "نظم الدفع المتعددة",
      description: "عملات، بطاقات، QR Code، دفع إلكتروني"
    }
  ];

  const benefits = [
    {
      title: "عائد سريع على الاستثمار",
      description: "استرداد سريع لتكلفة الاستثمار",
      icon: Target
    },
    {
      title: "تشغيل مستمر",
      description: "عمل على مدار الساعة بكفاءة عالية",
      icon: Clock
    },
    {
      title: "صيانة قليلة",
      description: "تكلفة صيانة منخفضة وموثوقية عالية",
      icon: Shield
    },
    {
      title: "جودة عالية",
      description: "نتائج تنظيف ممتازة في كل مرة",
      icon: Star
    }
  ];

  const brushProducts = [
    {
      id: "bt900",
      title: "BT900",
      subtitle: "نظام الذكاء الاصطناعي المتطور",
      description: "أحدث تقنيات الغسيل الأوتوماتيكي مع نظام 2 في 1: غسيل بدون لمس + غسيل بالفرش. تقنيات متطورة مع الذكاء الاصطناعي تضمن أداءً فائق الكفاءة.",
      capacity: "60 سيارة/ساعة",
      washTime: "1 دقيقة",
      warranty: "10 سنوات",
      features: [
        "نظام ذكي ضد الاصطدام",
        "تشخيص ذاتي للأخطاء", 
        "9 فرش ناعمة جداً",
        "نسبة تجفيف 99%",
        "مضخة ألمانية 100 بار",
        "دعم فني مدى الحياة"
      ],
      route: "/car-wash/bt900",
      visual: "BT900",
      featured: true
    },
    {
      id: "bt500", 
      title: "BT500",
      subtitle: "نظام الغسيل الاحترافي",
      description: "مغسلة أوتوماتيكية متطورة تجمع بين تقنية الغسيل بالفرش والغسيل بدون لمس في نظام واحد متكامل. مصممة للاستخدام التجاري المكثف.",
      capacity: "45 سيارة/ساعة",
      washTime: "1.5 دقيقة",
      warranty: "5 سنوات",
      features: [
        "نظام مزدوج (فرش + بدون لمس)",
        "فرش عالية الجودة",
        "نظام تجفيف متطور",
        "استهلاك مياه محسّن",
        "واجهة تحكم ذكية",
        "صيانة سهلة"
      ],
      route: "/car-wash/bt500",
      visual: "BT500",
      featured: false
    }
  ];

  const touchlessProducts = [
    {
      id: "tl500",
      title: "TL500",
      subtitle: "غسيل بدون لمس متقدم",
      description: "نظام غسيل بدون لمس عالي الأداء مع ذراع روبوتي متحرك 360 درجة. يوفر تنظيف شامل للمركبة دون أي تلامس مع الطلاء.",
      capacity: "40 سيارة/ساعة",
      washTime: "2 دقيقة",
      warranty: "3 سنوات",
      features: [
        "ذراع روبوتي 360 درجة",
        "ضغط ماء عالي 80 بار",
        "نظام استشعار ذكي",
        "تنظيف بدون خدوش",
        "برامج غسيل متنوعة",
        "تجفيف هوائي قوي"
      ],
      route: "/car-wash/tl500",
      visual: "TL500",
      featured: false
    },
    {
      id: "tl400",
      title: "TL400",
      subtitle: "غسيل بدون لمس متوسط",
      description: "حل اقتصادي للغسيل بدون لمس مع أداء موثوق. مناسب للمحطات متوسطة الحجم والأعمال الناشئة في مجال غسيل السيارات.",
      capacity: "30 سيارة/ساعة",
      washTime: "2.5 دقيقة",
      warranty: "3 سنوات",
      features: [
        "ذراع واحد متحرك",
        "ضغط ماء 60 بار",
        "نظام استشعار أساسي",
        "تشغيل اقتصادي",
        "برامج غسيل أساسية",
        "تجفيف هوائي"
      ],
      route: "/car-wash/tl400",
      visual: "TL400",
      featured: false
    },
    {
      id: "tl300",
      title: "TL300",
      subtitle: "غسيل بدون لمس اقتصادي",
      description: "الحل المثالي للمشاريع الصغيرة والمتوسطة. نظام غسيل بدون لمس بسيط وفعال يقدم نتائج ممتازة بتكلفة معقولة.",
      capacity: "25 سيارة/ساعة",
      washTime: "3 دقائق",
      warranty: "2 سنة",
      features: [
        "تصميم مدمج",
        "ضغط ماء 50 بار",
        "تشغيل بسيط",
        "استهلاك طاقة منخفض",
        "صيانة سهلة",
        "مناسب للمساحات الصغيرة"
      ],
      route: "/car-wash/tl300",
      visual: "TL300",
      featured: false
    }
  ];

  const ProductCard = ({ product, index }) => (
    <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-blue-50 border border-sebaaq-blue/20">
      <div className="flex flex-col h-full">
        {/* Product Header */}
        <div className="flex items-center mb-3">
          {product.featured && (
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold ml-2">
              مميز
            </div>
          )}
          <div>
            <h3 className="font-playfair text-lg font-bold text-sebaaq-midnight leading-tight">
              {product.title}
            </h3>
            <p className="text-sebaaq-blue font-medium text-xs">{product.subtitle}</p>
          </div>
        </div>
        
        {/* Visual Machine Representation */}
        <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-3 border border-primary/20 mb-3 overflow-hidden">
          <div className="h-full flex flex-col justify-between">
            {/* Product Image */}
            <div className="flex-1 flex items-center justify-center mb-2">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <img 
                  src={`/lovable-uploads/${product.id === 'bt900' ? 'd7f46067-5eb1-4e56-8b93-d7c37d04c951' : 
                       product.id === 'bt500' ? '36e35649-f04b-406a-94e8-2c8d6d70df5d' : 
                       product.id === 'tl500' ? '4ee13015-b3ac-447d-a502-1cf522c7758e' :
                       product.id === 'tl400' ? '4fc5de97-552b-4944-9b40-833efae54802' :
                       '57df7416-e6c6-422e-a76e-219744fc7bf2'}.png`}
                  alt={`${product.visual} نظام غسيل السيارات`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                  <h3 className="text-sm font-bold text-white text-center">{product.visual}</h3>
                </div>
              </div>
            </div>
            
            {/* Quick Features */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-background/50 rounded-lg p-2 text-center border border-muted">
                <Timer className="h-3 w-3 text-primary mx-auto mb-1" />
                <p className="text-xs font-semibold">{product.washTime}</p>
              </div>
              <div className="bg-background/50 rounded-lg p-2 text-center border border-muted">
                <Activity className="h-3 w-3 text-primary mx-auto mb-1" />
                <p className="text-xs font-semibold">{product.capacity}</p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-3 leading-relaxed text-xs flex-grow">
          {product.description}
        </p>
        
        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-1 mb-3 text-xs">
          <div className="bg-gradient-to-r from-sebaaq-blue/10 to-blue-400/10 p-2 rounded text-center">
            <div className="flex items-center justify-center mb-1">
              <Gauge className="w-3 h-3 text-sebaaq-blue ml-1" />
              <span className="font-semibold text-sebaaq-midnight text-xs">السرعة</span>
            </div>
            <p className="text-sebaaq-blue font-bold text-xs">{product.capacity}</p>
          </div>
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-400/10 p-2 rounded text-center">
            <div className="flex items-center justify-center mb-1">
              <Timer className="w-3 h-3 text-green-600 ml-1" />
              <span className="font-semibold text-sebaaq-midnight text-xs">الوقت</span>
            </div>
            <p className="text-green-600 font-bold text-xs">{product.washTime}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500/10 to-violet-400/10 p-2 rounded text-center">
            <div className="flex items-center justify-center mb-1">
              <Shield className="w-3 h-3 text-purple-600 ml-1" />
              <span className="font-semibold text-sebaaq-midnight text-xs">الضمان</span>
            </div>
            <p className="text-purple-600 font-bold text-xs">{product.warranty}</p>
          </div>
        </div>
        
        {/* Features */}
        <div className="mb-3">
          <h4 className="font-bold text-sebaaq-midnight mb-2 text-xs">المميزات الرئيسية:</h4>
          <div className="grid grid-cols-1 gap-1">
            {product.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center text-gray-600 text-xs">
                <CheckCircle className="w-3 h-3 text-green-500 ml-2 flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
            {product.features.length > 3 && (
              <div className="text-xs text-gray-500">
                +{product.features.length - 3} مميزات أخرى
              </div>
            )}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="mt-auto">
          <Link to={product.route}>
            <Button className="w-full bg-gradient-to-r from-sebaaq-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-2 rounded-lg font-semibold text-xs group transition-all duration-300">
              تفاصيل أكثر
              <ArrowLeft className="w-3 h-3 mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal overflow-hidden">
        {/* Visual Car Wash Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-blue/10 via-blue-500/5 to-cyan-500/10"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-midnight/80 to-sebaaq-charcoal/80"></div>
        
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            مغاسل السيارات الأوتوماتيكية
            <span className="gradient-text block mt-2">نظافة فائقة، كفاءة لا تضاهى</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            ارتقوا بتجربة غسيل السيارات مع أحدث أنظمة المغاسل الأوتوماتيكية التي نقدمها. سواء كنتم تبحثون عن السرعة، الكفاءة، أو الحماية الفائقة لطلاء المركبات، فإن حلولنا تلبي جميع احتياجاتكم وتفوق توقعاتكم.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              className="bg-sebaaq-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm"
              onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
            >
              تواصل معنا
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-6 py-3 rounded-lg font-semibold text-sm"
              onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
            >
              جولة افتراضية
            </Button>
          </div>
        </div>
      </section>

      {/* Brush Products Section */}
      <section className="py-12 bg-white" dir="rtl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-sebaaq-midnight mb-3">
              أنظمة الغسيل بالفرش
              <span className="gradient-text block">تنظيف عميق وشامل</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              أنظمة متطورة تجمع بين تقنية الفرش الناعمة والتقنيات الحديثة لضمان تنظيف عميق وآمن
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {brushProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Touchless Products Section */}
      <section className="py-12 bg-gray-50" dir="rtl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-sebaaq-midnight mb-3">
              أنظمة الغسيل بدون لمس
              <span className="gradient-text block">حماية فائقة للطلاء</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              تقنية متقدمة تعتمد على ضغط الماء العالي والمواد الكيميائية المتخصصة لتنظيف مثالي دون أي تلامس
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {touchlessProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-sebaaq-midnight text-center mb-8">
            مزايا الاستثمار
            <span className="gradient-text block">في مغاسل السيارات</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-playfair text-lg font-bold text-sebaaq-midnight mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Statistics */}
      <section className="py-12 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-8">
            أداء متميز ونتائج مؤكدة
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-sebaaq-blue mb-2">800</div>
              <div className="text-white font-medium text-sm">حد أقصى يومي</div>
              <div className="text-gray-400 text-xs mt-1">سيارة في اليوم</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sebaaq-blue mb-2">3</div>
              <div className="text-white font-medium text-sm">دقائق فقط</div>
              <div className="text-gray-400 text-xs mt-1">متوسط وقت الغسيل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sebaaq-blue mb-2">95%</div>
              <div className="text-white font-medium text-sm">توفير المياه</div>
              <div className="text-gray-400 text-xs mt-1">مع نظام إعادة التدوير</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sebaaq-blue mb-2">24/7</div>
              <div className="text-white font-medium text-sm">تشغيل مستمر</div>
              <div className="text-gray-400 text-xs mt-1">بدون توقف</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-sebaaq-midnight mb-4">
            ابدأ مشروع مغسلة السيارات معنا
          </h2>
          <p className="text-gray-600 text-sm mb-8 max-w-xl mx-auto">
            تواصل معنا للحصول على دراسة جدوى مجانية وعرض سعر شامل لمشروع مغسلة السيارات
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-sm"
              onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
            >
              تواصل معنا
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-sebaaq-blue text-sebaaq-blue hover:bg-sebaaq-blue hover:text-white px-8 py-3 rounded-lg font-semibold text-sm"
              onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
            >
              دراسة جدوى مجانية
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarWash;
