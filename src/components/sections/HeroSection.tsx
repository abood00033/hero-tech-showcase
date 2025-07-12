
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, FileText } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { cn } from '@/lib/utils';

interface LogisticsHeroProps {
  companyName?: string;
  tagline?: string;
  subtitle?: string;
  ctaButtons?: {
    contact: string;
    quote: string;
  };
}

function LogisticsHero({
  companyName = "سي باك لوجستيك",
  tagline = "شريكك المتكامل للخدمات اللوجستية والتشغيلية في السعودية",
  subtitle = "حلولًا متكاملة تشمل خدمات الشحن، الاستيراد، توريد الآلات، تركيب والصيانة",
  ctaButtons = {
    contact: "اتصل بنا الآن",
    quote: "احصل على عرض سعر"
  }
}: LogisticsHeroProps) {
  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        y: 12,
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  };

  return (
    <section
      className={cn(
        "bg-background text-foreground font-cairo",
        "py-16 md:py-20 px-4",
        "overflow-hidden relative min-h-[80vh]"
      )}
      dir="rtl"
    >
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/e16062b2-0564-4a04-b7f4-0140acddf422.png')`
        }}
      />
      
      {/* Strong overlay for better text readability */}
      <div className="absolute inset-0 bg-background/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>

      {/* Background Effects - subtle */}
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2 opacity-5"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 pt-12 sm:gap-12">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
          {/* Badge */}
          <AnimatedGroup variants={transitionVariants}>
            <Badge 
              variant="outline" 
              className="gap-3 text-sm px-6 py-2.5 border-primary/30 bg-primary/15 backdrop-blur-sm font-cairo shadow-sm hover:bg-primary/20 transition-colors duration-300"
            >
              <span className="text-primary font-medium">✨ خدمات لوجستية متطورة</span>
              <ArrowRight className="h-3 w-3 text-primary" />
            </Badge>
          </AnimatedGroup>

          {/* Company Name & Tagline */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <h1 className="relative z-10 inline-block text-4xl font-bold leading-tight text-foreground sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight font-cairo">
              {companyName}
            </h1>
            <p className="text-xl relative z-10 max-w-[800px] font-semibold text-primary sm:text-2xl md:text-2xl lg:text-3xl font-cairo leading-relaxed">
              {tagline}
            </p>
            <p className="text-lg relative z-10 max-w-[900px] text-muted-foreground sm:text-xl md:text-xl lg:text-2xl font-cairo leading-relaxed mt-4">
              {subtitle}
            </p>
          </AnimatedGroup>

          {/* CTA Buttons */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.9,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 hover:shadow-lg hover:scale-105 transition-all duration-300 font-cairo shadow-md text-primary-foreground min-w-11 min-h-11"
              aria-label={`${ctaButtons.contact} - تواصل معنا للحصول على خدماتنا`}
            >
              <Phone className="h-5 w-5 ml-2" />
              {ctaButtons.contact}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 hover:shadow-lg hover:scale-105 transition-all duration-300 font-cairo bg-background/80 backdrop-blur-sm min-w-11 min-h-11"
              aria-label={`${ctaButtons.quote} - احصل على عرض سعر مخصص`}
            >
              <FileText className="h-5 w-5 ml-2" />
              {ctaButtons.quote}
            </Button>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}

export default LogisticsHero;
