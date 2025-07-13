import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import OptimizedImage from '@/components/ui/optimized-image';
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
  Target
} from 'lucide-react';

const CarWashTL400 = () => {
  const productImages = [
    {
      src: "/lovable-uploads/2c185df4-8651-44c9-a01d-f8f9d159db05.png",
      alt: "غسالة السيارات TL400 - المنظر الجانبي"
    },
    {
      src: "/lovable-uploads/292e60d0-fc4f-41d6-8f28-a0573676f505.png",
      alt: "غسالة السيارات TL400 - المنظر الأمامي"
    },
    {
      src: "/lovable-uploads/2fc2a141-25e3-4241-bc17-0ef9df326747.png",
      alt: "غسالة السيارات TL400 - لوحة التحكم"
    },
    {
      src: "/lovable-uploads/2d9ad311-a75a-4f3c-80e2-627dbcdba0bb.png",
      alt: "غسالة السيارات TL400 - التفاصيل الداخلية"
    }
  ];

  const specifications = [
    { label: "الطول", value: "8.5 متر" },
    { label: "العرض", value: "2.8 متر" },
    { label: "الارتفاع", value: "2.4 متر" },
    { label: "استهلاك المياه", value: "100-130 لتر" },
    { label: "القدرة الكهربائية", value: "8 كيلو واط" },
    { label: "عدد السيارات/ساعة", value: "15-20 سيارة" },
    { label: "ضغط المياه", value: "100 بار" },
    { label: "درجة حرارة الماء", value: "25-45 درجة مئوية" }
  ];

  const features = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "غسيل ذكي",
      description: "نظام غسيل آلي مع تحكم دقيق بالرغوة"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "اقتصادي",
      description: "استهلاك قليل للمياه والكهرباء"
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "وقت جيد",
      description: "دورة غسيل في 6-8 دقائق"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "موثوق",
      description: "تصميم قوي ومتين للاستخدام المتواصل"
    }
  ];

  const benefits = [
    "مثالي للمشاريع الصغيرة",
    "استثمار مربح ومضمون",
    "تشغيل بسيط وآمن",
    "قطع غيار متوفرة",
    "دعم فني متواصل",
    "ضمان لمدة سنة واحدة"
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-muted/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Target className="h-4 w-4 ml-2" />
                خيار ذكي
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                غسالة السيارات الآلية
                <span className="block text-primary mt-2">TL400</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                الحل الأمثل للمشاريع الناشئة والصغيرة. تقنية موثوقة 
                بسعر مناسب وأداء ممتاز يضمن نجاح مشروعك.
              </p>

              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
                >
                  <Phone className="h-5 w-5 ml-2" />
                  تواصل معنا
                </Button>
              </div>
            </div>

            <div className="relative">
              <Carousel className="w-full max-w-md mx-auto">
                <CarouselContent>
                  {productImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <AspectRatio ratio={4/3}>
                          <OptimizedImage
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-2xl"
                            priority={index === 0}
                          />
                        </AspectRatio>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">15-20</div>
                  <div className="text-sm">سيارة/ساعة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">صور المنتج</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              تصفح مجموعة شاملة من صور غسالة السيارات TL400 من جميع الزوايا
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productImages.map((image, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <AspectRatio ratio={4/3}>
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="specs">المواصفات</TabsTrigger>
              <TabsTrigger value="features">المميزات</TabsTrigger>
              <TabsTrigger value="benefits">الفوائد</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">المواصفات التقنية</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{spec.label}</span>
                      <span className="text-primary font-bold">{spec.value}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">المميزات الرئيسية</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">الفوائد والمزايا</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ابدأ مشروعك مع TL400
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            احصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
            >
              <Phone className="h-5 w-5 ml-2" />
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarWashTL400;
