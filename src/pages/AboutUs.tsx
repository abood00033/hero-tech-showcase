import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Truck, 
  Factory,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary">
            من نحن
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground" dir="rtl">
            شركة سي باك لوجستيك
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" dir="rtl">
            شريكك المتكامل للخدمات اللوجستية والتشغيلية في السعودية، نوفر حلولاً متكاملة تشمل خدمات الشحن، الاستيراد، توريد الآلات، التركيب والصيانة
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                قصتنا
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                تأسست شركة سي باك لوجستيك بهدف تقديم حلول لوجستية متكاملة وموثوقة للشركات والأفراد في المملكة العربية السعودية. منذ انطلاقتنا، نعمل على بناء جسور التجارة بين الصين والسعودية، مقدمين خدمات احترافية تلبي أعلى معايير الجودة والكفاءة.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                خبرتنا العميقة في السوق الصيني وفهمنا لاحتياجات السوق السعودي، جعلنا الخيار الأول للشركات التي تسعى لتوسيع أعمالها واستيراد أحدث التقنيات والآلات من الصين.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop" 
                  alt="فريق سي باك لوجستيك" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-muted/50" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              رؤيتنا ورسالتنا
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">رؤيتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  أن نكون الشركة الرائدة في مجال الخدمات اللوجستية والاستيراد من الصين في المملكة العربية السعودية، ونساهم في تطوير الاقتصاد المحلي من خلال توفير أحدث التقنيات والحلول المبتكرة.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 text-center">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">رسالتنا</h3>
                <p className="text-muted-foreground leading-relaxed">
                  تقديم خدمات لوجستية متميزة وحلول استيراد موثوقة، مع ضمان أعلى معايير الجودة والكفاءة. نسعى لبناء شراكات طويلة الأمد مع عملائنا وتحقيق النجاح المشترك.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              خدماتنا
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المتخصصة لتلبية جميع احتياجاتكم
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">خدمات الشحن والاستيراد</h3>
                <p className="text-muted-foreground">
                  حلول شحن متكاملة من الصين إلى السعودية مع ضمان الأمان والسرعة
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Factory className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">توريد وتركيب الآلات</h3>
                <p className="text-muted-foreground">
                  توريد أحدث الآلات والمعدات مع خدمات التركيب والصيانة المتخصصة
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">خدمات استشارية</h3>
                <p className="text-muted-foreground">
                  استشارات متخصصة في السوق الصيني وحلول الاستيراد المثلى
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              لماذا تختار سي باك؟
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">خبرة متخصصة</h3>
              <p className="text-muted-foreground">
                سنوات من الخبرة في السوق الصيني والسعودي
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">فريق محترف</h3>
              <p className="text-muted-foreground">
                فريق عمل مؤهل ومدرب على أعلى المستويات
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">شبكة عالمية</h3>
              <p className="text-muted-foreground">
                شراكات قوية مع أفضل الموردين في الصين
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">خدمة شاملة</h3>
              <p className="text-muted-foreground">
                من الاستيراد إلى التركيب والصيانة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              تواصل معنا
            </h2>
            <p className="text-muted-foreground text-lg">
              نحن هنا لمساعدتك في تحقيق أهدافك التجارية
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">الهاتف</h3>
                <p className="text-muted-foreground">+966 123 456 789</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">البريد الإلكتروني</h3>
                <p className="text-muted-foreground">info@cpack-logistics.com</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground">العنوان</h3>
                <p className="text-muted-foreground">الرياض، المملكة العربية السعودية</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              تواصل معنا الآن
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;