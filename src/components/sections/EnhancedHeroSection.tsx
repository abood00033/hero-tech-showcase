
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, FileText, Star, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const EnhancedHeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 overflow-hidden font-cairo" dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Badge variant="outline" className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">معتمد ومرخص</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">+10 سنوات خبرة</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">أكثر من 1000 عميل</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="text-center lg:text-right space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  سي باك لوجستيك
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-primary leading-relaxed">
                شريكك المتكامل للخدمات اللوجستية والتشغيلية في السعودية
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                حلولًا متكاملة تشمل خدمات الشحن، الاستيراد، توريد الآلات، تركيب والصيانة
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://wa.me/+966594196930" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 ml-2" />
                  اتصل بنا الآن
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <FileText className="w-5 h-5 ml-2" />
                احصل على عرض سعر
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">دعم فني</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-border/20">
              <div className="grid grid-cols-2 gap-6">
                {/* Service Cards */}
                {[
                  { icon: "🚢", title: "شحن بحري", desc: "من الصين للسعودية" },
                  { icon: "✈️", title: "شحن جوي", desc: "سريع وآمن" },
                  { icon: "⚙️", title: "توريد آلات", desc: "تركيب وصيانة" },
                  { icon: "📋", title: "خدمات استشارية", desc: "دعم متخصص" }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-background/80 backdrop-blur-sm rounded-xl p-4 text-center space-y-2 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-2xl">{service.icon}</div>
                    <h3 className="font-semibold text-sm">{service.title}</h3>
                    <p className="text-xs text-muted-foreground">{service.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full blur-md" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted/10 to-transparent" />
    </section>
  );
};

export default EnhancedHeroSection;
