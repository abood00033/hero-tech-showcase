
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Truck, MessageCircle, Settings, ArrowRight } from 'lucide-react';

const AccessibilityOptimizedServices = () => {
  const services = [
    {
      id: 'shipping',
      title: 'خدمات الشحن والاستيراد',
      icon: Truck,
      description: 'خدمات شحن متكاملة من الصين إلى السعودية مع ضمان الجودة والسرعة',
      features: [
        'شحن بحري وجوي',
        'تخليص جمركي',
        'تتبع الشحنات',
        'تأمين البضائع'
      ],
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      id: 'consultation',
      title: 'خدمات استشارية',
      icon: MessageCircle,
      description: 'استشارات متخصصة في مجال الاستيراد والتجارة الدولية',
      features: [
        'دراسة السوق',
        'تقييم الموردين',
        'التخطيط اللوجستي',
        'إدارة المخاطر'
      ],
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      id: 'machinery',
      title: 'توريد وتركيب الآلات',
      icon: Settings,
      description: 'توريد وتركيب وصيانة الآلات والمعدات الصناعية',
      features: [
        'توريد الآلات',
        'التركيب والتشغيل',
        'الصيانة الدورية',
        'قطع الغيار'
      ],
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    }
  ];

  return (
    <section className="py-16 bg-background" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            خدماتنا المتخصصة
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات اللوجستية والاستشارية المصممة لتلبية احتياجاتك التجارية
          </p>
        </div>

        {/* Mobile-First Design */}
        <div className="lg:hidden space-y-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`${service.color} transition-all duration-300 hover:shadow-lg`}
              >
                <CardHeader className="text-right">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent 
                      className="h-8 w-8 text-primary" 
                      aria-hidden="true"
                    />
                    <div className="flex-1 mr-4">
                      <CardTitle className="text-lg font-bold">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6" role="list">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <ArrowRight className="h-4 w-4 text-primary ml-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    aria-label={`اعرف المزيد عن ${service.title}`}
                  >
                    اعرف المزيد
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Desktop Tabs */}
        <div className="hidden lg:block">
          <Tabs defaultValue="shipping" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1 rounded-xl">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <TabsTrigger 
                    key={service.id}
                    value={service.id} 
                    className="flex items-center gap-3 px-6 py-4 text-base font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="hidden xl:inline">{service.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-8">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-lg mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-lg mb-4 text-primary">
                          المميزات الرئيسية:
                        </h4>
                        <ul className="space-y-3" role="list">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-base">
                              <ArrowRight className="h-5 w-5 text-primary ml-3 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col justify-center">
                        <Button 
                          size="lg" 
                          className="bg-primary hover:bg-primary/90 px-8 py-4"
                          asChild
                        >
                          <a 
                            href="https://wa.me/+966594196930"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`تواصل معنا بخصوص ${service.title}`}
                          >
                            تواصل معنا
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityOptimizedServices;
