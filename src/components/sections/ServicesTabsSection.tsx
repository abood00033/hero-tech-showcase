import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, Cog, MessageCircle } from "lucide-react";

// Feature component with hover effects
interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature = ({ title, description, icon, index }: FeatureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col py-12 px-8 relative group/feature hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all duration-500",
        index % 2 === 1 && "lg:border-r border-border/50",
        index < 2 && "border-b border-border/50"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="mb-6 relative z-10 flex justify-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover/feature:scale-110 group-hover/feature:rotate-6 transition-all duration-300">
          {icon}
        </div>
      </div>
      
      <div className="text-center relative z-10 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover/feature:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover/feature:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

// Main component
interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface ServicesTabsSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const ServicesTabsSection = ({
  badge = "خدمات سي باك",
  heading = "خدمات سي باك لوجستك",
  description = "نقدم خدمات شاملة للاستيراد والشحن وتوريد الآلات مع الخبرة والكفاءة العالية",
  tabs = [
    {
      value: "shipping",
      icon: <img src="/lovable-uploads/a965f2ca-5f88-46aa-b258-0ab30861e7ef.png" alt="خدمات الشحن" className="w-20 h-20" />,
      label: "خدمات الشحن والاستيراد",
      content: {
        badge: "حلول لوجستية متكاملة",
        title: "خدمات الشحن والاستيراد",
        description: "نوفر حلولاً لوجستية متكاملة للشركات والأفراد، وكيل شحن معتمد من الصين، مع ضمان أعلى معايير الأمان والاحترافية. نتفهم التحديات التي تواجه الشركات والأفراد في عمليات الاستيراد من الصين، نقدم خدمات احترافية ودعم عملاء قوي.\n\n• خدمة الشحن من الباب للباب: تتكفل الشركة بكل تفاصيل شحن بضائعك من مكان موردك مباشرة إلى عنوانك.\n• تفاوض مع المصانع: بفضل الخبرة في المصانع والسوق الصيني، تستطيع الشركة تقديم أسعار ذات قيمة إضافية من خلال التفاوض مع المصنع وتوفير في مدة التصنيع والأسعار.\n• نستلم شحنتك من مصانع الصين ونسلّمها مباشرة إلى عنوانك في السعودية.\n• حلول لوجستية ذكية: تقدم شحنًا جزئيًا سريعًا ومباشرًا من الصين إلى السعودية، مما يتيح لك استيراد بضائعك بمرونة وكفاءة عبر مشاركة مساحة الحاوية مع شحنات أخرى لتقليل التكاليف.",
        buttonText: "تفاصيل اكثر",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        imageAlt: "شحن بحري وجوي",
      },
    },
    {
      value: "consultation",
      icon: <img src="/lovable-uploads/ad748a22-b280-4e40-8a29-eb0225627a3d.png" alt="خدمات استشارية" className="w-20 h-20" />,
      label: "خدمات استشارية",
      content: {
        badge: "خبرة متخصصة",
        title: "خدمات استشارية",
        description: "تمتلك سي باك معرفة واسعة وخبرة متراكمة في التعامل مع الموردين الصينيين وفهم ديناميكيات السوق لتوفر لك أفضل حلول الاستيراد من الصين.\n\n• خبرة عميقة بالسوق الصيني: تعمل بخبرة عميقة وواسعة في عالم الأعمال الصينية ولديها خبرة متراكمة في التعامل مع الموردين وفهم الديناميكيات السوق.\n• حلول مخصصة لاحتياجاتك: تحليل احتياجاتك وتقديم حلول مصممة خصيصًا لتلبية أهدافك الاستيرادية.\n• توفير الوقت والجهد والمال: تساعدك في توفير الوقت والجهد والمال عن طريق تجنب الأخطاء المكلفة وتبسيط الإجراءات.\n• بناء علاقات قوية مع الموردين: تساعدك في بناء علاقات قوية مع الموردين الصينيين من خلال شبكتها الواسعة من الموردين الموثوقين.\n• تغطية شاملة لجميع جوانب الاستيراد: تقدم لك خطوات تغطي جميع جوانب الاستيراد بدءًا من البحث عن الموردين وحتى الشحن والتخليص الجمركي.",
        buttonText: "تفاصيل اكثر",
        imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        imageAlt: "استشارات تجارية",
      },
    },
    {
      value: "machinery",
      icon: <img src="/lovable-uploads/2a1593de-0f57-407c-90c8-6e1d6a86f04d.png" alt="توريد الآلات" className="w-20 h-20" />,
      label: "توريد وتركيب الآلات",
      content: {
        badge: "خبرة تقنية متقدمة",
        title: "توريد وتركيب الآلات",
        description: "في سي باك ماشين، تمتد الخبرة التقنية إلى ما وراء مجرد التوريد. لدينا فهم عالٍ في كثير من المجالات والأنظمة التقنية المعقدة، مع إدراك دقيق لتعقيدات عملها الميكانيكي ومبادئ تصميمها الحركي، وذلك يشمل تحليل القوى والإجهادات، ودراسة المواد المكونة منها، وكفاءة نقل الحركة والطاقة.",
        buttonText: "تفاصيل اكثر",
        imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        imageAlt: "آلات صناعية",
      },
    },
  ],
}: ServicesTabsSectionProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasUserInteracted) {
            // Start auto-cycling through tabs for 5 seconds only
            let currentIndex = 0;
            intervalRef.current = setInterval(() => {
              currentIndex = (currentIndex + 1) % tabs.length;
              setActiveTab(tabs[currentIndex].value);
            }, 2000); // Change tab every 2 seconds
            
            // Stop auto-cycling after 5 seconds
            setTimeout(() => {
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
            }, 5000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [tabs, hasUserInteracted]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setHasUserInteracted(true);
    // Clear the auto-cycling interval when user interacts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            {badge}
          </Badge>
          <h1 className="max-w-4xl text-5xl md:text-6xl font-bold text-foreground font-cairo">
            {heading}
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl font-cairo">
            {description}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="mt-16">
          <div className="relative">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 h-auto bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl p-2 shadow-lg">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex flex-col items-center gap-3 rounded-xl px-6 py-8 text-base font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg hover:bg-accent/50 font-cairo"
                >
                  <div className="text-xl">{tab.icon}</div>
                  <span className="text-center text-2xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text font-cairo">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="mt-12">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="flex justify-center items-center"
              >
                <div className="flex flex-col gap-6 text-center max-w-4xl">
                  <div className="space-y-4">
                    <Badge variant="outline" className="w-fit mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 text-primary font-semibold">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-4xl font-bold lg:text-5xl text-foreground leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text font-cairo">
                      {tab.content.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground xl:text-lg leading-relaxed whitespace-pre-line font-cairo">
                    {tab.content.description}
                  </p>
                  <Button className="mt-8 w-fit mx-auto gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-10 py-7 font-cairo" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

      </div>
    </section>
  );
};

export default ServicesTabsSection;