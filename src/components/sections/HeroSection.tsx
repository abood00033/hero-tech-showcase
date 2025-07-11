"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, FileText } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// Glow Component
const glowVariants = cva("absolute w-full", {
  variants: {
    variant: {
      top: "top-0",
      above: "-top-[128px]",
      bottom: "bottom-0",
      below: "-bottom-[128px]",
      center: "top-[50%]",
    },
  },
  defaultVariants: {
    variant: "top",
  },
});

const Glow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof glowVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(glowVariants({ variant }), className)}
    {...props}
  >
    <div
      className={cn(
        "absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/.5)_10%,_hsl(var(--primary)/0)_60%)] sm:h-[512px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
    <div
      className={cn(
        "absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/.3)_10%,_hsl(var(--primary)/0)_60%)] sm:h-[256px]",
        variant === "center" && "-translate-y-1/2",
      )}
    />
  </div>
));
Glow.displayName = "Glow";

// Mockup Components
const mockupVariants = cva(
  "flex relative z-10 overflow-hidden shadow-2xl border border-border/5 border-t-border/15",
  {
    variants: {
      type: {
        mobile: "rounded-[48px] max-w-[350px]",
        responsive: "rounded-md",
      },
    },
    defaultVariants: {
      type: "responsive",
    },
  },
);

interface MockupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof mockupVariants> {}

const Mockup = React.forwardRef<HTMLDivElement, MockupProps>(
  ({ className, type, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(mockupVariants({ type, className }))}
      {...props}
    />
  ),
);
Mockup.displayName = "Mockup";

const frameVariants = cva(
  "bg-accent/5 flex relative z-10 overflow-hidden rounded-2xl",
  {
    variants: {
      size: {
        small: "p-2",
        large: "p-4",
      },
    },
    defaultVariants: {
      size: "small",
    },
  },
);

interface MockupFrameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof frameVariants> {}

const MockupFrame = React.forwardRef<HTMLDivElement, MockupFrameProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(frameVariants({ size, className }))}
      {...props}
    />
  ),
);
MockupFrame.displayName = "MockupFrame";

// AnimatedGroup Component
const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface AnimatedGroupProps {
  children: React.ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
}

function AnimatedGroup({
  children,
  className,
  variants,
}: AnimatedGroupProps) {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = variants?.item || defaultItemVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Main Hero Component
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
        "py-8 sm:py-16 md:py-20 px-4",
        "overflow-hidden pb-0 relative min-h-[80vh]"
      )}
      dir="rtl"
    >
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/0acca5e2-695b-4689-8fa8-8590b6067f22.png')`
        }}
      />
      
      {/* Stronger overlay for better text readability - focusing more on the right side */}
      <div className="absolute inset-0 bg-gradient-to-l from-background/98 via-background/90 to-background/60"></div>
      
      {/* Additional overlay specifically for the right side where text is located */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/70 to-background/95"></div>

      {/* Background Effects - now more subtle */}
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.1) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, hsl(var(--primary) / 0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 pt-12 sm:gap-16">
        <div className="flex flex-col items-center gap-4 text-center sm:gap-8">
          {/* Badge */}
          <AnimatedGroup variants={transitionVariants}>
            <Badge variant="outline" className="gap-3 text-sm px-6 py-2.5 border-primary/30 bg-primary/15 backdrop-blur-sm font-cairo shadow-sm hover:bg-primary/20 transition-colors duration-300">
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
            <h1 className="relative z-10 inline-block bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-4xl font-bold leading-tight text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight font-cairo">
              {companyName}
            </h1>
            <p className="text-xl relative z-10 max-w-[800px] font-semibold text-primary opacity-95 sm:text-2xl md:text-2xl lg:text-3xl font-cairo leading-relaxed drop-shadow-lg">
              {tagline}
            </p>
            <p className="text-lg relative z-10 max-w-[900px] text-muted-foreground sm:text-xl md:text-xl lg:text-2xl font-cairo leading-relaxed mt-4 drop-shadow-md">
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
            <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 hover:shadow-lg hover:scale-105 transition-all duration-300 font-cairo shadow-md">
              <Phone className="h-5 w-5 ml-2" />
              {ctaButtons.contact}
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 hover:shadow-lg hover:scale-105 transition-all duration-300 font-cairo bg-background/80 backdrop-blur-sm">
              <FileText className="h-5 w-5 ml-2" />
              {ctaButtons.quote}
            </Button>
          </AnimatedGroup>

          {/* Hero Image - removed since we now have background image */}
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1.2,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative pt-8 w-full">
              <MockupFrame
                className="opacity-0 animate-appear delay-700 bg-background/10 backdrop-blur-sm"
                size="small"
              >
                <Mockup type="responsive">
                  <div className="w-full h-[300px] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
                  </div>
                </Mockup>
              </MockupFrame>
              <Glow
                variant="top"
                className="opacity-0 animate-appear-zoom delay-1000"
              />
            </div>
          </AnimatedGroup>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes appear {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes appear-zoom {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-appear {
            animation: appear 0.5s ease-out forwards;
          }
          
          .animate-appear-zoom {
            animation: appear-zoom 0.5s ease-out forwards;
          }
          
          .delay-700 {
            animation-delay: 700ms;
          }
          
          .delay-1000 {
            animation-delay: 1000ms;
          }
        `
      }} />
    </section>
  );
}

export default LogisticsHero;
