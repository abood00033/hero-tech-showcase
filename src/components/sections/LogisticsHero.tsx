import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Ship, Settings, Phone, ArrowRight, Globe, Truck, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Animated Text Cycle Component
interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

const AnimatedTextCycle: React.FC<AnimatedTextCycleProps> = ({
  words,
  interval = 3000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  const containerVariants = {
    hidden: { 
      y: -20,
      opacity: 0,
      filter: "blur(8px)"
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)"
    },
    exit: { 
      y: 20,
      opacity: 0,
      filter: "blur(8px)"
    },
  };

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          className={cn("inline-block font-bold", className)}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ whiteSpace: "nowrap" }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

// 3D Icon Component
interface Icon3DProps {
  icon: React.ReactNode;
  variant: 'primary' | 'secondary' | 'accent';
  delay?: number;
}

const Icon3D: React.FC<Icon3DProps> = ({ icon, variant, delay = 0 }) => {
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground shadow-primary/30',
    secondary: 'bg-secondary text-secondary-foreground shadow-secondary/30',
    accent: 'bg-accent text-accent-foreground shadow-accent/30'
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.1, 
        rotateY: 15,
        rotateX: 10,
        transition: { duration: 0.3 }
      }}
    >
      <div 
        className={cn(
          "w-14 h-14 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden",
          variantStyles[variant]
        )}
      >
        {/* 3D effect layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent rounded-xl" />
        
        {/* Icon */}
        <div className="relative z-10">
          {icon}
        </div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

// Service Card Component
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant: 'primary' | 'secondary' | 'accent';
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, variant, delay = 0 }) => {
  return (
    <motion.div
      className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <Icon3D icon={icon} variant={variant} delay={delay + 0.2} />
        
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors font-cairo">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed font-cairo">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Floating Elements Component
const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-primary/20 rounded-full"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

// Main Hero Component
const LogisticsHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Ship size={24} />,
      title: "شحن بحري",
      description: "خدمات الشحن البحري العالمية مع أفضل الأسعار والجودة المضمونة",
      variant: "primary" as const
    },
    {
      icon: <Plane size={24} />,
      title: "شحن جوي",
      description: "شحن سريع وآمن عبر الطيران لجميع أنحاء العالم",
      variant: "secondary" as const
    },
    {
      icon: <Settings size={24} />,
      title: "تركيب وصيانة الآلات",
      description: "توريد وتركيب وصيانة آلات حديثة بأحدث التقنيات",
      variant: "accent" as const
    }
  ];

  const rotatingWords = ["ذكية", "متطورة", "موثوقة"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 relative overflow-hidden font-cairo">
      <FloatingElements />
      
      {/* Header */}
      <motion.header
        className="relative z-50 p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Globe className="text-primary-foreground" size={20} />
            </div>
            <span className="text-xl font-bold text-foreground font-cairo">سي باك</span>
          </div>
          
          <nav className="hidden md:flex space-x-6 font-cairo">
            <a href="#services" className="text-sm text-foreground hover:text-primary transition-colors">الخدمات</a>
            <a href="#about" className="text-sm text-foreground hover:text-primary transition-colors">من نحن</a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">اتصل بنا</a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-3xl lg:text-4xl font-bold text-foreground leading-tight font-cairo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                لوجستيات{' '}
                <AnimatedTextCycle
                  words={rotatingWords}
                  className="text-primary"
                  interval={2500}
                />
              </motion.h1>
              
              <motion.h2
                className="text-xl lg:text-2xl font-semibold text-muted-foreground font-cairo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                وآلات متطورة
              </motion.h2>
              
              <motion.p
                className="text-base text-muted-foreground leading-relaxed font-cairo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                شريكك للنمو - توريد وتركيب وصيانة آلات حديثة
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300 font-cairo"
              >
                <Phone className="ml-2" size={18} />
                اتصل بنا الآن
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 font-cairo"
              >
                احصل على عرض سعر
                <ArrowRight className="mr-2" size={18} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Services Grid */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid gap-4">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variant={service.variant}
                  delay={0.6 + index * 0.2}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      
      {/* Floating Action Elements */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
        >
          <Phone size={20} />
        </Button>
      </motion.div>
    </div>
  );
};

export default LogisticsHero;