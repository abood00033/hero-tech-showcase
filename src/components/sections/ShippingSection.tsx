import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
const shippingFeatures = [{
  emoji: "🔍",
  title: "بحث عن أفضل المصانع",
  description: "نساعدك في العثور على المصانع الحقيقية التي تُنتج المنتجات التي تحتاجها بجودة عالية وسعر مناسب، مع التأكد من أن المصنع مرخص وموثوق."
}, {
  emoji: "🤝",
  title: "تفاوض مع المصانع",
  description: "فريقنا في الصين يتولى مهمة التحقق النهائي من جودة وشكل وعدد المنتجات قبل شحنها، مما يقلل من احتمالية المفاجآت عند الوصول."
}, {
  emoji: "🕵️‍♂️",
  title: "خدمة الشحن من الباب للباب",
  description: "نؤمن بأن الثقة لا تكفي. نقوم بفحص المنتجات قبل الشراء والتأكد من مطابقتها للمواصفات، مع التفاوض على أي تعديل أو تحسين مطلوب قبل التصنيع النهائي."
}, {
  emoji: "📞",
  title: "شحن جزئي",
  description: "نقدم لك توجيهًا مجانيًا عبر خبرائنا المتخصصين في السوق الصيني، يشمل توصيات للمنتجات والموردين، وتحذيرات من المخاطر المحتملة."
}, {
  emoji: "📦",
  title: "فحص البضاعة قبل الشحن",
  description: "نؤمن بأن الثقة لا تكفي. نقوم بفحص المنتجات قبل الشراء والتأكد من مطابقتها للمواصفات، مع التفاوض على أي تعديل أو تحسين مطلوب قبل التصنيع النهائي."
}, {
  emoji: "📥",
  title: "تجميع الشحنات من عدة موردين",
  description: "إذا اشتريت من أكثر من مصنع أو مورد، نقوم بتجميع الشحنات جميعها في مستودعاتنا في الصين لضمان شحن موحد وتوفير في التكاليف."
}, {
  emoji: "🏪",
  title: "تجميع وتخزين مؤقت في مستودعاتنا",
  description: "نمتلك مستودعات استراتيجية في الصين والسعودية لتخزين شحنتك بشكل آمن ومنظم إلى حين موعد الشحن أو التوزيع النهائي."
}, {
  emoji: "🚚",
  title: "فحص الجودة والتفاوض",
  description: "نتولى عملية الشحن كاملة من عنوان المصنع في الصين وحتى باب العميل في السعودية، مما يوفر عليك الوقت والتعقيد والمتابعة مع أطراف متعددة."
}, {
  emoji: "🧾",
  title: "التخليص الجمركي في السعودية",
  description: "فريق التخليص التابع لنا يتعامل مع الجمارك السعودية باحترافية عالية لتسريع دخول الشحنة وتقليل أي تأخير محتمل أو رسوم إضافية."
}, {
  emoji: "📡",
  title: "تتبع شحنتك لحظة بلحظة",
  description: "نقدم لك نظام تتبع إلكتروني حديث يتيح لك معرفة موقع شحنتك في كل لحظة، من لحظة الشحن إلى التسليم، لضمان الشفافية وراحة البال."
}, {
  emoji: "🛒",
  title: "حلول خدمات التجارة الإلكترونية",
  description: "ندعم المتاجر الإلكترونية في السعودية بخدمات مخصصة تشمل الشحن الجزئي، التغليف حسب الطلب، وربط مباشر بين الموردين والمتاجر."
}, {
  emoji: "⚙️",
  title: "استشارات مجانية",
  description: "نوفر لك أنظمة شحن مرنة (مثل الشحن الجزئي أو الموحد) باستخدام أدوات تقنية لتقليل التكاليف وتسريع العمليات."
}, {
  emoji: "🇸🇦",
  title: "خبرة محلية طويلة",
  description: "بخبرتنا الممتدة لأكثر من 10 سنوات في الشحن بين الصين والسعودية، نحن نعرف القوانين، التحديات، وأفضل الطرق لتوصيل شحنتك باسرع وقت وبأمان."
}];
const ShippingSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % shippingFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-16 lg:py-20 bg-gradient-to-br from-muted/30 via-background to-secondary/5" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-6xl mx-auto">
          <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Truck className="h-5 w-5 text-primary ml-2" />
            <span className="text-sm font-medium text-primary">خدمات الشحن والاستيراد</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            حلول لوجستية 
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              متكاملة ومتطورة
            </span>
          </h2>
          
          
          
          
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {shippingFeatures.map((feature, index) => <div key={index} className={`bg-card rounded-xl p-6 shadow-md border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group ${activeTab === index ? 'ring-2 ring-primary bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30' : 'hover:border-primary/30'}`} onClick={() => setActiveTab(index)}>
              <div className="text-center mb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 ${activeTab === index ? 'bg-gradient-to-br from-primary to-secondary shadow-lg scale-110' : 'bg-gradient-to-br from-muted to-muted/50 group-hover:from-primary/20 group-hover:to-secondary/20 group-hover:scale-105'}`}>
                  {feature.emoji}
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-foreground mb-3 text-center leading-tight">
                {feature.title}
              </h4>
              
              <p className={`text-sm text-muted-foreground leading-relaxed text-center transition-all duration-300 ${activeTab === index ? 'text-foreground/80' : ''}`}>
                {feature.description}
              </p>

              {/* Selected Indicator */}
              {activeTab === index && <div className="mt-4 flex justify-center">
                  <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>}
            </div>)}
        </div>

        {/* Featured Service Display */}
        

        {/* CTA */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" onClick={() => window.open('https://wa.me/+966594196930', '_blank')}>
            تواصل معنا الآن
          </Button>
        </div>
      </div>
    </section>;
};
export default ShippingSection;