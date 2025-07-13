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
  DollarSign
} from 'lucide-react';

const CarWashTL300 = () => {
  const productImages = [
    {
      src: "/lovable-uploads/22bb837b-a345-4eee-9b23-ceb8ab448568.png",
      alt: "غسالة السيارات TL300 - المنظر الجانبي"
    },
    {
      src: "/lovable-uploads/2a1593de-0f57-407c-90c8-6e1d6a86f04d.png",
      alt: "غسالة السيارات TL300 - المنظر الأمامي"
    },
    {
      src: "/lovable-uploads/28144a1c-943b-408f-ad5d-00076e8779ae.png",
      alt: "غسالة السيارات TL300 - لوحة التحكم"
    },
    {
      src: "/lovable-uploads/130fbaf4-5a41-47ad-9bb9-9693989a851b.png",
      alt: "غسالة السيارات TL300 - التفاصيل الداخلية"
    }
  ];

  const specifications = [
    { label: "الطول", value: "7.5 متر" },
    { label: "العرض", value: "2.6 متر" },
    { label: "الارتفاع", value: "2.2 متر" },
    { label: "استهلاك المياه", value: "80-110 لتر" },
    { label: "القدرة الكهربائية", value: "6 كيلو واط" },
    { label: "عدد السيارات/ساعة", value: "12-15 سيارة" },
    { label: "ضغط المياه", value: "4-6 بار" },
    { label: "درجة حرارة الماء", value: "20-40 درجة مئوية" }
  ];

  const features = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "غسيل أساسي",
      description: "نظام غسيل أساسي فعال ومناسب"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "توفير عالي",
      description: "أقل استهلاك للمياه والكهرباء"
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "وقت معقول",
      description: "دورة غسيل في 7-10 دقائق"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "بساطة",
      description: "تصميم بسيط وسهل الاستخدام"
    }
  ];

  const benefits = [
    "الأنسب للبداية في المجال",
    "أقل تكلفة استثمارية",
    "صيانة سهلة ومنخفضة التكلفة",
    "مناسب للمساحات الصغيرة",
    "عائد استثمار سريع",
    "ضمان لمدة سنة واحدة"
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-muted/20 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-muted/20 text-muted-foreground border-muted-foreground/20">
                <DollarSign className="h-4 w-4 ml-2" />
                الأكثر اقتصادية
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                غسالة السيارات الآلية
                <span className="block text-muted-foreground mt-2">TL300</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                نقطة البداية المثالية لدخول عالم غسيل السيارات الآلي. 
                تقنية بسيطة وموثوقة بأقل تكلفة استثمارية.
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
              
              <div className="absolute -bottom-4 -right-4 bg-muted text-muted-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">12-15</div>
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
              تصفح مجموعة شاملة من صور غسالة السيارات TL300 من جميع الزوايا
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
                      <span className="text-muted-foreground font-bold">{spec.value}</span>
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
                      <div className="p-2 bg-muted/20 text-muted-foreground rounded-lg">
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
            ابدأ مشروعك بأقل تكلفة مع TL300
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

export default CarWashTL300;
