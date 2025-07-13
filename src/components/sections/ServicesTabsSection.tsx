import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Cog, MessageCircle } from "lucide-react";

// Service Content Interface
interface ServiceContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

// Service Interface
interface Service {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: ServiceContent;
}

// Main Component Props
interface ServicesTabsSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Service[];
}

const ServicesTabsSection = ({
  badge = "خدمات سي باك",
  heading = "خدمات سي باك لوجستك",
  description = "نقدم خدمات شاملة للاستيراد والشحن وتوريد الآلات مع الخبرة والكفاءة العالية",
  tabs = [
    {
      value: "shipping",
      icon: <Truck className="w-8 h-8 text-primary" />,
      label: "خدمات الشحن والاستيراد",
      content: {
        badge: "حلول لوجستية متكاملة",
        title: "خدمات الشحن والاستيراد",
        description: "نوفر حلولاً لوجستية متكاملة للشركات والأفراد، وكيل شحن معتمد من الصين، مع ضمان أعلى معايير الأمان والاحترافية. نتفهم التحديات التي تواجه الشركات والأفراد في عمليات الاستيراد من الصين، نقدم خدمات احترافية ودعم عملاء قوي.\n\n• خدمة الشحن من الباب للباب: تتكفل الشركة بكل تفاصيل شحن بضائعك من مكان موردك مباشرة إلى عنوانك.\n• تفاوض مع المصانع: بفضل الخبرة في المصانع والسوق الصيني، تستطيع الشركة تقديم أسعار ذات قيمة إضافية من خلال التفاوض مع المصنع وتوفير في مدة التصنيع والأسعار.\n• نستلم شحنتك من مصانع الصين ونسلّمها مباشرة إلى عنوانك في السعودية.\n• حلول لوجستية ذكية: تقدم شحنًا جزئيًا سريعًا ومباشرًا من الصين إلى السعودية، مما يتيح لك استيراد بضائعك بمرونة وكفاءة عبر مشاركة مساحة الحاوية مع شحنات أخرى لتقليل التكاليف.",
        buttonText: "تفاصيل اكثر",
        imageSrc: "/lovable-uploads/356f179f-e8fa-4feb-b522-afde2648de6a.png",
        imageAlt: "شحن بحري وجوي",
      },
    },
    {
      value: "consultation",
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      label: "خدمات استشارية",
      content: {
        badge: "خبرة متخصصة",
        title: "خدمات استشارية",
        description: "تمتلك سي باك معرفة واسعة وخبرة متراكمة في التعامل مع الموردين الصينيين وفهم ديناميكيات السوق لتوفر لك أفضل حلول الاستيراد من الصين.\n\n• خبرة عميقة بالسوق الصيني: تعمل بخبرة عميقة وواسعة في عالم الأعمال الصينية ولديها خبرة متراكمة في التعامل مع الموردين وفهم الديناميكيات السوق.\n• حلول مخصصة لاحتياجاتك: تحليل احتياجاتك وتقديم حلول مصممة خصيصًا لتلبية أهدافك الاستيرادية.\n• توفير الوقت والجهد والمال: تساعدك في توفير الوقت والجهد والمال عن طريق تجنب الأخطاء المكلفة وتبسيط الإجراءات.\n• بناء علاقات قوية مع الموردين: تساعدك في بناء علاقات قوية مع الموردين الصينيين من خلال شبكتها الواسعة من الموردين الموثوقين.\n• تغطية شاملة لجميع جوانب الاستيراد: تقدم لك خطوات تغطي جميع جوانب الاستيراد بدءًا من البحث عن الموردين وحتى الشحن والتخليص الجمركي.",
        buttonText: "تفاصيل اكثر",
        imageSrc: "/lovable-uploads/677a59ea-9c2b-4e12-8293-6290d0781ded.png",
        imageAlt: "استشارات تجارية",
      },
    },
    {
      value: "machinery",
      icon: <Cog className="w-8 h-8 text-primary" />,
      label: "توريد وتركيب الآلات",
      content: {
        badge: "خبرة تقنية متقدمة",
        title: "توريد وتركيب الآلات",
        description: "في سي باك ماشين، تمتد الخبرة التقنية إلى ما وراء مجرد التوريد. لدينا فهم عالٍ في كثير من المجالات والأنظمة التقنية المعقدة، مع إدراك دقيق لتعقيدات عملها الميكانيكي ومبادئ تصميمها الحركي، وذلك يشمل تحليل القوى والإجهادات، ودراسة المواد المكونة منها، وكفاءة نقل الحركة والطاقة.",
        buttonText: "تفاصيل اكثر",
        imageSrc: "/lovable-uploads/677a59ea-9c2b-4e12-8293-6290d0781ded.png",
        imageAlt: "آلات صناعية",
      },
    },
  ],
}: ServicesTabsSectionProps) => {
  const navigate = useNavigate();

  const handleButtonClick = (serviceValue: string) => {
    switch(serviceValue) {
      case "shipping":
        navigate("/الشحن-والاستيراد-من-الصين");
        break;
      case "consultation":
        navigate("/خدمات-الاستشارة");
        break;
      case "machinery":
        navigate("/سي-باك-ماشين");
        break;
      default:
        window.open('https://wa.me/+966594196930', '_blank');
    }
  };

  return (
    <section id="services" className="py-16 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            {badge}
          </Badge>
          <h1 className="max-w-4xl text-4xl md:text-5xl font-bold text-foreground font-cairo">
            {heading}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-cairo">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tabs.map((service, index) => (
              <Card 
                key={service.value} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-border/50 bg-gradient-to-br from-background to-muted/30"
              >
                <CardContent className="p-0">
                  {/* Service Header with Icon */}
                  <div className="p-6 pb-4 border-b border-border/30">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-foreground font-cairo">
                        {service.label}
                      </h3>
                    </div>
                    <Badge variant="outline" className="w-fit bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 text-primary font-semibold">
                      {service.content.badge}
                    </Badge>
                  </div>

                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.content.imageSrc} 
                      alt={service.content.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Service Content */}
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold text-foreground leading-tight font-cairo">
                      {service.content.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line font-cairo line-clamp-6">
                      {service.content.description}
                    </p>
                    
                    <Button 
                      className="w-full gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 font-cairo"
                      onClick={() => handleButtonClick(service.value)}
                    >
                      {service.content.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabsSection;