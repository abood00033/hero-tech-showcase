import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Clock, Users, Star, Globe, Headphones, Truck, ShoppingCart, MessageCircle, Search, Eye, Package, MapPin, Zap, Factory, Handshake, CheckCircle, Warehouse, Ship, Archive } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  route?: string;
}

const ServiceCard = ({ icon: Icon, title, description, isHovered, onHover, onLeave, route }: ServiceCardProps) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <article 
      className={`group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 focus-within:ring-4 focus-within:ring-sebaaq-blue/50 ${
        isHovered ? 'scale-105 shadow-2xl -translate-y-2' : 'scale-100'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      tabIndex={0}
      role="article"
      aria-labelledby={`service-title-${title.replace(/\s+/g, '-')}`}
    >
      {/* Icon Container */}
      <div className="mb-6 text-center">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-sebaaq-blue to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-10 h-10 text-white" aria-hidden="true" />
        </div>
      </div>
      
      {/* Content */}
      <div className="text-center space-y-4">
        <h3 
          id={`service-title-${title.replace(/\s+/g, '-')}`}
          className="font-playfair text-xl font-bold text-sebaaq-midnight group-hover:text-sebaaq-blue transition-colors duration-300"
        >
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        {route && (
          <button
            onClick={handleDetailsClick}
            className="mt-4 px-6 py-2 bg-sebaaq-blue text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
          >
            تفاصيل اكثر
          </button>
        )}
      </div>
      
      {/* Hover Effect Background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5 rounded-2xl transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} aria-hidden="true"></div>
    </article>
  );
};

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Search,
      title: "بحث عن أفضل المصانع",
      description: "نساعدك في العثور على المصانع الحقيقية التي تُنتج المنتجات التي تحتاجها بجودة عالية وسعر مناسب، مع التأكد من أن المصنع مرخص وموثوق.",
      route: "/factory-search"
    },
    {
      icon: Handshake,
      title: "تفاوض مع المصانع",
      description: "فريقنا في الصين يتولى مهمة التحقق النهائي من جودة وشكل وعدد المنتجات قبل شحنها، مما يقلل من احتمالية المفاجآت عند الوصول.",
      route: "/consultation-services"
    },
    {
      icon: Truck,
      title: "خدمة الشحن من الباب للباب",
      description: "نتولى عملية الشحن كاملة من عنوان المصنع في الصين وحتى باب العميل في السعودية، مما يوفر عليك الوقت والتعقيد والمتابعة مع أطراف متعددة.",
      route: "/shipping-calculator"
    },
    {
      icon: Zap,
      title: "شحن جزئي",
      description: "نوفر لك أنظمة شحن مرنة (مثل الشحن الجزئي أو الموحد) باستخدام أدوات تقنية لتقليل التكاليف وتسريع العمليات.",
      route: "/shipping-calculator"
    },
    {
      icon: Eye,
      title: "فحص البضاعة قبل الشحن",
      description: "نؤمن بأن الثقة لا تكفي. نقوم بفحص المنتجات قبل الشراء والتأكد من مطابقتها للمواصفات، مع التفاوض على أي تعديل أو تحسين مطلوب قبل التصنيع النهائي.",
      route: "/consultation-services"
    },
    {
      icon: Package,
      title: "تجميع الشحنات من عدة موردين",
      description: "إذا اشتريت من أكثر من مصنع أو مورد، نقوم بتجميع الشحنات جميعها في مستودعاتنا في الصين لضمان شحن موحد وتوفير في التكاليف.",
      route: "/shipping-calculator"
    },
    {
      icon: Warehouse,
      title: "تجميع وتخزين مؤقت في مستودعاتنا",
      description: "نمتلك مستودعات استراتيجية في الصين والسعودية لتخزين شحنتك بشكل آمن ومنظم إلى حين موعد الشحن أو التوزيع النهائي.",
      route: "/shipping-calculator"
    },
    {
      icon: CheckCircle,
      title: "فحص الجودة والتفاوض",
      description: "فريقنا المتخصص يقوم بفحص دقيق للمنتجات والتفاوض مع المصانع لضمان الحصول على أفضل جودة وأسعار مناسبة.",
      route: "/consultation-services"
    },
    {
      icon: Shield,
      title: "التخليص الجمركي في السعودية",
      description: "فريق التخليص التابع لنا يتعامل مع الجمارك السعودية باحترافية عالية لتسريع دخول الشحنة وتقليل أي تأخير محتمل أو رسوم إضافية.",
      route: "/shipping-calculator"
    },
    {
      icon: MapPin,
      title: "تتبع شحنتك لحظة بلحظة",
      description: "نقدم لك نظام تتبع إلكتروني حديث يتيح لك معرفة موقع شحنتك في كل لحظة، من لحظة الشحن إلى التسليم، لضمان الشفافية وراحة البال.",
      route: "/shipping-calculator"
    },
    {
      icon: ShoppingCart,
      title: "حلول خدمات التجارة الإلكترونية",
      description: "ندعم المتاجر الإلكترونية في السعودية بخدمات مخصصة تشمل الشحن الجزئي، التغليف حسب الطلب، وربط مباشر بين الموردين والمتاجر.",
      route: "/alibaba"
    },
    {
      icon: MessageCircle,
      title: "استشارات مجانية",
      description: "نقدم لك توجيهًا مجانيًا عبر خبرائنا المتخصصين في السوق الصيني، يشمل توصيات للمنتجات والموردين، وتحذيرات من المخاطر المحتملة.",
      route: "/consultation-services"
    }
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="services-title"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sebaaq-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 id="services-title" className="font-playfair text-4xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
            شركة سي باك لوجستيك:
            <span className="gradient-text block mt-2">حلول الشحن من الصين</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            نوفر حلولاً لوجستية متكاملة للشركات والأفراد، وكيل شحن معتمد من الصين، مع ضمان أعلى معايير الأمان والاحترافية. نستلم شحنتك من مصانع الصين ونسلّمها مباشرة إلى عنوانك في السعودية.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-8xl mx-auto"
          role="region"
          aria-label="خدمات سي باك لوجستيك"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
              route={service.route}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-sebaaq-midnight to-sebaaq-blue rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              جاهز لبدء رحلة الاستيراد؟
            </h3>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              تواصل معنا اليوم واحصل على استشارة مجانية
            </p>
            <button className="bg-white text-sebaaq-midnight px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white/50">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
