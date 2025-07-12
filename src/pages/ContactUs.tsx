import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Globe,
  Building
} from 'lucide-react';

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with WhatsApp or email
    window.open('https://wa.me/+966594196930', '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "هاتف",
      details: ["+966 59 419 6930", "+966 50 123 4567"],
      action: () => window.open('tel:+966594196930', '_blank')
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "واتساب",
      details: ["+966 59 419 6930"],
      action: () => window.open('https://wa.me/+966594196930', '_blank')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "البريد الإلكتروني",
      details: ["info@sebaaq.com", "sales@sebaaq.com"],
      action: () => window.open('mailto:info@sebaaq.com', '_blank')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "العنوان",
      details: ["الرياض، المملكة العربية السعودية", "حي الملز، طريق الملك فهد"],
      action: () => window.open('https://maps.google.com', '_blank')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "ساعات العمل",
      details: ["الأحد - الخميس: 8:00 ص - 6:00 م", "الجمعة: 8:00 ص - 12:00 م"],
      action: null
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "المكاتب",
      details: ["المكتب الرئيسي: الرياض", "فرع جدة: قريباً"],
      action: null
    }
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              تواصل معنا
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نحن هنا لمساعدتك في جميع احتياجاتك من الآلات الصناعية والشحن من الصين. 
              تواصل معنا اليوم واحصل على استشارة مجانية.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`p-6 ${info.action ? 'cursor-pointer hover:shadow-lg transition-shadow' : ''}`}
                onClick={info.action || undefined}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                أرسل لنا رسالة
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      الاسم الأول
                    </label>
                    <Input 
                      placeholder="أدخل اسمك الأول"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      اسم العائلة
                    </label>
                    <Input 
                      placeholder="أدخل اسم العائلة"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    رقم الهاتف
                  </label>
                  <Input 
                    type="tel"
                    placeholder="+966 5X XXX XXXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    موضوع الرسالة
                  </label>
                  <Input 
                    placeholder="كيف يمكننا مساعدتك؟"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الرسالة
                  </label>
                  <Textarea 
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Send className="h-5 w-5 ml-2" />
                  إرسال الرسالة
                </Button>
              </form>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  لماذا تختار سي باك؟
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      خبرة أكثر من 10 سنوات في مجال الاستيراد والتوريد
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      شراكات قوية مع أفضل المصانع في الصين
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      خدمة عملاء متميزة ودعم فني على مدار الساعة
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-muted-foreground">
                      أسعار تنافسية وضمان الجودة
                    </p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">
                  استشارة مجانية
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  احصل على استشارة مجانية من خبرائنا لتحديد أفضل الحلول لمشروعك
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 ml-2" />
                  احجز استشارة مجانية
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;