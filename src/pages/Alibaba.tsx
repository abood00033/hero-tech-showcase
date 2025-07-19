
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Truck, 
  ShoppingCart, 
  Handshake, 
  MessageCircle, 
  Shield, 
  Package, 
  Users, 
  Zap,
  Search,
  MapPin,
  Clock,
  Star
} from 'lucide-react';

const Alibaba = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    shipments: 0,
    years: 0,
    accuracy: 0
  });

  // Services data
  const services = [
    {
      title: "خدمة الشحن من الباب للباب",
      description: "نتكفل بكل تفاصيل شحن بضائعك من مكان موردك مباشرة إلى عنوانك.",
      icon: Truck,
      color: "text-blue-600"
    },
    {
      title: "حلول خدمات التجارة الإلكترونية",
      description: "ندعم نمو تجارتك الإلكترونية بتوفير خدمات لوجستية متخصصة تلبي احتياجات متجرك.",
      icon: ShoppingCart,
      color: "text-green-600"
    },
    {
      title: "تفاوض مع المصانع",
      description: "بفضل خبرتنا في المصانع والسوق الصيني، نستطيع تقديم لك أسعارًا ذات قيمة إضافية عن طريق التفاوض مع المصنع وتوفير في مدة التصنيع والأسعار.",
      icon: Handshake,
      color: "text-orange-600"
    },
    {
      title: "استشارات مجانية",
      description: "نوفر رؤى متعمقة ونصائح عملية في سوق الصناعة الصيني في كافة المجالات.",
      icon: MessageCircle,
      color: "text-purple-600"
    },
    {
      title: "فحص البضاعة",
      description: "نضمن لك جودة المنتجات من خلال فحصها والتأكد من سلامتها قبل الشحن.",
      icon: Shield,
      color: "text-red-600"
    },
    {
      title: "تجميع وتخزين",
      description: "إذا كنت تتعامل مع عدة موردين، نوفر لك خدمة تجميع شحناتك وتخزينها.",
      icon: Package,
      color: "text-indigo-600"
    },
    {
      title: "خبرة محلية طويلة",
      description: "نتمتع بخبرة طويلة في مجال الخدمات اللوجستية والشحن بين الصين والسعودية، نسهل عملية الاستيراد عن طريق علاقتنا القوية مع الموردين والمصانع.",
      icon: Users,
      color: "text-teal-600"
    },
    {
      title: "حلول لوجستية ذكية",
      description: "شحن جزئي سريع ومباشر من الصين إلى السعودية. استورد بضائعك بمرونة وكفاءة. يتيح لك الشحن الجزئي مشاركة مساحة الحاوية مع شحنات أخرى، مما يقلل التكاليف.",
      icon: Zap,
      color: "text-yellow-600"
    }
  ];

  const stats = [
    { value: 370, label: "عميل دائم يثق بنا", suffix: "+" },
    { value: 9000, label: "شحنة تم توصيلها", suffix: "+" },
    { value: 10, label: "سنين خبراتنا في السوق الصيني", suffix: "+" },
    { value: 95, label: "دقة في مواعيد التسليم", suffix: "%" }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            سي باك لوجيستيك: شريكك الموثوق
            <span className="block text-blue-600 mt-2">للاستيراد من الصين</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            نوفر حلولًا لوجستية متكاملة للشركات والأفراد، بصفتنا وكيل شحن معتمد من الصين، مع ضمان أعلى معايير الأمان والاحترافية. نستلم شحنتك من مصانع الصين ونسلّمها مباشرة إلى عنوانك في السعودية.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg border max-w-md mx-auto mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">اعرف تكلفة الشحن فورًا</h3>
            <p className="text-gray-600 mb-4">احصل على تقدير أولي لتكلفة الشحن من الصين إلى السعودية بشكل فوري.</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              احسب التكلفة الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose C Pack Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              لماذا تختار سي باك؟
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              سي باك لوجيستيك هي شركة سعودية متخصصة في الخدمات اللوجستية، تتفهم التحديات التي تواجه الشركات والأفراد في عمليات الاستيراد من الصين. نوفر خدمات احترافية ودعم عملاء قوي.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors ${service.color}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              لماذا يثق بنا عملاؤنا؟
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              من خلال سنوات من العمل المباشر مع الموردين والمصانع في الصين، أنجزنا آلاف الشحنات، وبنينا شبكة قوية من الشركاء، وحققنا رضا عملائنا بنسبة عالية. إليك لمحة سريعة عن إنجازاتنا:
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {stat.suffix === "+" ? "+" : ""}{stat.value}{stat.suffix === "%" ? "%" : ""}
                  </span>
                </div>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Search Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              البحث عن أفضل المصانع والأسعار
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نساعدك في العثور على مصانع حقيقية، تقييم الجودة، ومقارنة الأسعار.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">90%</span>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                من المنتجات المعروضة اون لاين مثل في علي بابا وغيره، هي من وسطاء وشركات تجارية ليست بشكل مباشر من المصانع.
              </h3>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                اعرف اكثر
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              تتبع شحنتك لحظة بلحظة
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              ابقَ على اطلاع دائم: تتبع الشحنات المباشر.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              اعرف اكثر
            </Button>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-reverse space-x-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">الصين</p>
              </div>
              <div className="flex-1 h-1 bg-gradient-to-l from-green-500 to-blue-500 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-700 font-medium">السعودية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Network Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              مستودعات متكاملة في السعودية والصين
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نمتلك شبكة متطورة من المستودعات في مواقع استراتيجية في المملكة العربية السعودية والصين. تمكننا هذه البنية التحتية من تقديم مجموعة شاملة من خدمات التخزين، التجميع، والتوزيع، المصممة لتحسين كفاءة سلسلة الإمداد الخاصة بك وتقليل زمن التسليم.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">مستودعات الصين</h3>
              <p className="text-gray-600">شبكة متطورة من المستودعات في المواقع الاستراتيجية</p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">مستودعات السعودية</h3>
              <p className="text-gray-600">مواقع استراتيجية في المملكة العربية السعودية</p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            من نحن
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            سي باك لوجيستيك هي قصة شغف بربط الفرص وتسهيل التجارة بين الصين والمملكة العربية السعودية.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            اعرف المزيد
          </Button>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            سواء كنت تبحث عن منتج معين أو تحتاج إلى شريك موثوق في الشحن من الصين، نحن هنا لمساعدتك.
          </h2>
          <Button className="bg-white hover:bg-gray-100 text-blue-600 px-12 py-4 text-lg font-semibold">
            تواصل معنا
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Alibaba;
