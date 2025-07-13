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
  Award
} from 'lucide-react';

const CarWashTL500 = () => {
  const productImages = [
    {
      src: "/lovable-uploads/32137c2d-3ef3-44c2-b0a7-849d53fca26d.png",
      alt: "غسالة السيارات TL500 - المنظر الجانبي"
    },
    {
      src: "/lovable-uploads/3ccf25e5-f98e-46f9-be3c-88ad951e5499.png",
      alt: "غسالة السيارات TL500 - المنظر الأمامي"
    },
    {
      src: "/lovable-uploads/36e35649-f04b-406a-94e8-2c8d6d70df5d.png",
      alt: "غسالة السيارات TL500 - لوحة التحكم"
    },
    {
      src: "/lovable-uploads/356f179f-e8fa-4feb-b522-afde2648de6a.png",
      alt: "غسالة السيارات TL500 - التفاصيل الداخلية"
    }
  ];

  const specifications = [
    { label: "الطول", value: "9.5 متر" },
    { label: "العرض", value: "3.0 متر" },
    { label: "الارتفاع", value: "2.5 متر" },
    { label: "استهلاك المياه", value: "120-150 لتر" },
    { label: "القدرة الكهربائية", value: "10 كيلو واط" },
    { label: "عدد السيارات/ساعة", value: "20-25 سيارة" },
    { label: "ضغط المياه", value: "100 بار" },
    { label: "درجة حرارة الماء", value: "30-50 درجة مئوية" }
  ];

  const features = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "غسيل فعال",
      description: "نظام غسيل متطور مع توزيع مثالي للرغوة"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "توفير الموارد",
      description: "استهلاك اقتصادي للمياه والطاقة"
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "سرعة مناسبة",
      description: "دورة غسيل في 5-7 دقائق"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "حماية ممتازة",
      description: "فرش متخصصة آمنة على الطلاء"
    }
  ];

  const benefits = [
    "مناسب للمشاريع الصغيرة والمتوسطة",
    "سهولة التركيب والتشغيل",
    "تكلفة تشغيل منخفضة",
    "صيانة بسيطة وسريعة",
    "جودة غسيل ممتازة",
    "ضمان شامل لمدة سنة ونصف"
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/20">
                <Award className="h-4 w-4 ml-2" />
                جودة عالية
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                غسالة السيارات الآلية
                <span className="block text-accent-foreground mt-2">TL500</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                حل مثالي للمشاريع المتوسطة مع تقنية متقدمة وأداء موثوق.
                تصميم مدروس يجمع بين الكفاءة والاقتصادية.
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
              
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">20-25</div>
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
              تصفح مجموعة شاملة من صور غسالة السيارات TL500 من جميع الزوايا
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
                      <span className="text-accent-foreground font-bold">{spec.value}</span>
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
                      <div className="p-2 bg-accent/10 text-accent-foreground rounded-lg">
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
            هل TL500 الخيار المناسب لك؟
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

export default CarWashTL500;
