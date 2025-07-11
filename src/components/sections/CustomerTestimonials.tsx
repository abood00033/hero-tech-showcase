import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin } from 'lucide-react';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: "مغسلة غيمة نجد",
      location: "القصيم",
      review: "التعامل مع الشركة كان راقي جدا. المغسلة عملية والتنظيف متميز. شكرا على الدعم المتواصل وسرعة الرد على استفساراتنا",
      rating: 5
    },
    {
      name: "عميل راضي",
      location: "القصيم",
      review: "آلات جودة عالية وخدمة الصيانة سريعة والفني يحضر في الوقت المحدد. أنصح الجميع بالتعامل معهم",
      rating: 5
    },
    {
      name: "مغسلة لمسة لسيارة",
      location: "الرياض: طويق",
      review: "المغسلة تشتغل مضبوط. المهندسين عندهم خبرة ممتازة وقطع الغيار متوفرة. أنصح بالتعامل مع هالشركة",
      rating: 5
    },
    {
      name: "مغسلة محمد بن عبد الله",
      location: "المجمعة",
      review: "ماشاء الله اشتريت المغسلة وكانت ممتازة وتشغيلها بسيط، أفضل تعامل وحسن خلق من العاملين في الشركة فشكرا لكم من الأعماق",
      rating: 5
    },
    {
      name: "الغسيل الذكي",
      location: "خميس مشيط",
      review: "الماكينة ما شاء الله تعمل بكفاءة وتتحمل الاستخدام المتكرر بدون مشاكل. دعم الفني ممتاز وسريع",
      rating: 5
    },
    {
      name: "مغاسل نجم الرغوة",
      location: "حائل",
      review: "شكرا لحسن المعاملة وسرعة الاستجابة والمهنية العالية وشكرا لموظفين خدمة العملاء، مكاينهم نظيفة وأنصح بالتعامل معهم",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
            آراء عملائنا
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            شهادات من مختلف المدن
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            تجارب حقيقية من عملائنا في أكثر من 20 مدينة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-background/80 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{testimonial.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{testimonial.review}"
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 inline-block">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                أكثر من 40+ شريك نجاح
              </h3>
              <p className="text-lg text-muted-foreground">
                في 20+ مدينة حول المملكة
              </p>
              <div className="grid grid-cols-3 gap-8 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-foreground">40+</div>
                  <div className="text-sm text-muted-foreground">مشروع منجز</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-foreground">20+</div>
                  <div className="text-sm text-muted-foreground">مدينة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-foreground">100%</div>
                  <div className="text-sm text-muted-foreground">رضا العملاء</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;