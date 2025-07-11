
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Globe, 
  Users, 
  TrendingUp, 
  Shield,
  Phone,
  Mail,
  MessageCircle,
  Target,
  Handshake,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  User,
  Lightbulb,
  Truck,
  Package,
  Award,
  Heart,
  Wrench,
  Settings
} from 'lucide-react';

const PitchDeck = () => {
  const founderVision = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "خدمات متكاملة",
      description: "فحص جودة دقيق، تجميع شحنات بكفاءة، تخليص جمركي سريع، وتخزين ذكي بمستودعاتنا"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "تقنيات حديثة",
      description: "نعتمد على الذكاء الاصطناعي لإدارة المخازن وتتبع الشحنات لضمان الشفافية والكفاءة"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "استشارات متخصصة",
      description: "استشارات معمقة حول سوق الصناعة الصينية والآلات الذكية لبناء علاقات قوية مع الموردين"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "توسع جديد",
      description: "إدخال وبيع وصيانة آلات متخصصة وخدمات الاستيداع المتكاملة مباشرة من الصين"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 text-sm sm:text-base">
              عرض شراكة مؤسس
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sebaaq-midnight mb-6 leading-tight">
              رؤيتي لـ
              <span className="gradient-text block mt-2">سـي بـاك لوجستيك</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              أبحث عن شريك مؤسس لـ "سـي بـاك لوجستيك"، شركة ناشئة تختص بحلول الشحن والاستيراد المتكاملة بين الصين والمملكة العربية السعودية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sebaaq-blue hover:bg-blue-600 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                ابدأ الحوار الآن
              </Button>
              <Button variant="outline" size="lg">
                <ArrowRight className="w-5 h-5 mr-2" />
                اعرف المزيد
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-sebaaq-blue/10 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-sebaaq-blue" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-sebaaq-midnight">
                    أهلاً بك،
                  </h2>
                  <p className="text-sebaaq-blue font-semibold">أنا عبد الرحمن، مؤسس "سـي بـاك"</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                بخبرة تجاوزت سبع سنوات في التوريد من الصين، أدركت حجم الفرص في هذا السوق. اليوم، أطلق "سـي بـاك" برؤية طموحة لتكون رائدة في مجالها.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                أسعى لشريك يؤمن بهذه الرؤية، ويشاركني بناء هذا الكيان خطوة بخطوة.
              </p>
            </div>
            
            <Card className="p-6 bg-gradient-to-br from-sebaaq-blue/5 to-blue-50 border-sebaaq-blue/20">
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-sebaaq-blue" />
                  <h3 className="font-semibold text-lg text-sebaaq-blue">آخر التطورات</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  أعمل حاليًا على <strong>جذب مستثمرين</strong> لمساعدتنا في توريد الآلات، ونحن <strong>على وشك إتمام اتفاق</strong> مع أحدهم، مما سيعزز قدرتنا على التوسع سريعًا في هذا المجال.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-sebaaq-blue" />
              <h2 className="text-2xl sm:text-3xl font-bold text-sebaaq-midnight">
                من نحن؟ (رؤية المؤسس)
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              "سـي بـاك" هي ثمرة خبرتي الطويلة وعلاقاتي الممتدة في السوقين الصيني والسعودي. كشركة سعودية ناشئة، نلتزم بتقديم خدمات لوجستية شاملة، من مصانع الصين مباشرة إلى العميل في المملكة. كما نوفر أيضاً توريد وتركيب وصيانة الآلات الحديثة.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founderVision.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:border-sebaaq-blue/30">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-sebaaq-blue/10 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-sebaaq-blue">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sebaaq-midnight mb-4">
              لماذا الشراكة معي؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              خبرة حقيقية، رؤية واضحة، وشراكة قائمة على الثقة والشفافية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-sebaaq-blue/10 rounded-full mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8 text-sebaaq-blue" />
                </div>
                <h3 className="font-semibold text-xl">خبرة 7+ سنوات</h3>
                <p className="text-muted-foreground">خبرة متراكمة في التوريد من الصين وعلاقات قوية مع الموردين</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-sebaaq-blue/10 rounded-full mx-auto flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-sebaaq-blue" />
                </div>
                <h3 className="font-semibold text-xl">رؤية طموحة</h3>
                <p className="text-muted-foreground">خطة واضحة للتوسع وإدخال خدمات جديدة في السوق السعودي</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-sebaaq-blue/10 rounded-full mx-auto flex items-center justify-center">
                  <Heart className="w-8 h-8 text-sebaaq-blue" />
                </div>
                <h3 className="font-semibold text-xl">شراكة حقيقية</h3>
                <p className="text-muted-foreground">توزيع عادل للأسهم والأرباح مع شفافية كاملة في العمل</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sebaaq-midnight mb-4">
              ماذا نقدم؟
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Package className="w-8 h-8 text-sebaaq-blue" />
                  <CardTitle className="text-xl">خدمات سي باك لوجستيك الشاملة</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">فحص جودة دقيق وتجميع شحنات بكفاءة</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">تخليص جمركي سريع وتخزين ذكي</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">مستودعات في السعودية والصين</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Truck className="w-8 h-8 text-sebaaq-blue" />
                  <CardTitle className="text-xl">خدمات الاستيداع المتكاملة</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">استيداع مباشر من الصين</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">تسهيل تخزين وإدارة البضائع</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">كفاءة عالية قبل الشحن النهائي</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-sebaaq-blue/30 bg-gradient-to-br from-sebaaq-blue/5 to-blue-50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <Settings className="w-8 h-8 text-sebaaq-blue" />
                  <CardTitle className="text-xl">توريد وتركيب الآلات الحديثة</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">توريد آلات حديثة ومتطورة للسوق السعودي</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">خدمات تركيب احترافية بواسطة فنيين متخصصين</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">صيانة دورية وخدمات ما بعد البيع</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">تدريب المستخدمين على تشغيل الآلات</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sebaaq-blue to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            هل أنت الشريك الذي أبحث عنه؟
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            إذا كنت تؤمن بالرؤية وترغب في بناء شركة رائدة في مجال اللوجستيات والاستيراد، فلنبدأ حوارًا حقيقيًا اليوم
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-white/10 border-white/20">
              <CardContent className="text-center space-y-3">
                <MessageCircle className="w-8 h-8 text-white mx-auto" />
                <h3 className="font-semibold text-white">واتساب</h3>
                <p className="text-blue-100 text-sm">+966 594 196 930</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/10 border-white/20">
              <CardContent className="text-center space-y-3">
                <Phone className="w-8 h-8 text-white mx-auto" />
                <h3 className="font-semibold text-white">الهاتف</h3>
                <p className="text-blue-100 text-sm">+966 920 031 826</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/10 border-white/20">
              <CardContent className="text-center space-y-3">
                <Mail className="w-8 h-8 text-white mx-auto" />
                <h3 className="font-semibold text-white">البريد الإلكتروني</h3>
                <p className="text-blue-100 text-sm">info@sebaaq.com</p>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" variant="secondary" className="text-sebaaq-blue hover:bg-white/90">
            <Handshake className="w-5 h-5 mr-2" />
            تواصل معي اليوم
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PitchDeck;
