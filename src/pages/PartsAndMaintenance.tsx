
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Wrench, 
  Settings, 
  Shield, 
  Zap, 
  Clock, 
  CheckCircle,
  Phone,
  Mail,
  FileText,
  Upload
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PartsAndMaintenance = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    machineType: '',
    machineModel: '',
    description: '',
    image: null as File | null
  });

  const benefits = [
    {
      title: "الجودة الموثوقة",
      description: "قطع غيار مصنعة وفق معايير هندسية دقيقة",
      icon: Shield
    },
    {
      title: "الأداء الأمثل",
      description: "تحافظ على كفاءة وإنتاجية آلاتك كما صُممت",
      icon: Zap
    },
    {
      title: "عمر افتراضي أطول",
      description: "تزيد من متانة وموثوقية جهازك على المدى الطويل",
      icon: Clock
    },
    {
      title: "تجنب الأعطال",
      description: "تقلل من خطر الأعطال المفاجئة والتوقفات غير المخطط لها",
      icon: CheckCircle
    }
  ];

  const machineCategories = [
    {
      title: "مكائن البيع الذاتي",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      link: "/parts-maintenance/vending-machine-parts"
    },
    {
      title: "أنظمة خطوط الإنتاج والمصانع",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      link: "/parts-maintenance/production-line-parts"
    },
    {
      title: "مغاسل السيارات الأوتوماتيكية",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      link: "/parts-maintenance/car-wash-parts"
    },
    {
      title: "الأنظمة الترفيهية",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      link: "/parts-maintenance/entertainment-system-parts"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, image: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            قطع الغيار والصيانة
            <span className="gradient-text block mt-2">دعم متواصل لأداء لا يتوقف</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            في <strong>سي باك</strong>، ندرك أن استمرارية عمل آلاتك بأعلى كفاءة هو مفتاح نجاح أعمالك. لذا، نقدم لك قسماً متكاملاً لخدمات ما بعد البيع، يضم <strong>قطع الغيار</strong> و<strong>خدمات الصيانة الاحترافية</strong>، لضمان استثمارك آمن وموثوق به.
          </p>
        </div>
      </section>

      {/* Why Choose Sebaak Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-8">
            لماذا تختار سي باك
            <span className="gradient-text block">لقطع الغيار والصيانة؟</span>
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            نحن ندرك أهمية كل مكون في آلاتك. لهذا السبب، نوفر قطع الغيار التي تم تصميمها واختبارها بدقة لتتوافق تمامًا مع مواصفات آلاتك. استخدام قطع الغيار المخصصة يضمن لك:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-sebaaq-blue/5 hover:to-blue-400/5">
                <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-8">
            آلاتنا وقطع غيارها
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            اكتشفوا قطع الغيار المتوفرة لكل نوع من آلاتنا المتطورة لضمان استمرارية عملها بأعلى كفاءة.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {machineCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg font-bold text-sebaaq-midnight mb-4">
                    {category.title}
                  </CardTitle>
                  <Link to={category.link}>
                    <Button className="w-full bg-sebaaq-blue hover:bg-blue-600 text-white">
                      عرض قطع الغيار
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Parts & Maintenance Request Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-sebaaq-midnight text-center mb-8">
            نموذج طلب قطع الغيار / خدمة الصيانة
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            يرجى ملء النموذج أدناه وسنتواصل معك في أقرب وقت ممكن.
          </p>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sebaaq-midnight font-medium">الاسم الكامل *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sebaaq-midnight font-medium">البريد الإلكتروني *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-sebaaq-midnight font-medium">رقم الهاتف *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sebaaq-midnight font-medium">اسم الشركة (اختياري)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sebaaq-midnight font-medium">نوع الخدمة المطلوبة *</Label>
                <RadioGroup 
                  value={formData.serviceType} 
                  onValueChange={(value) => handleInputChange('serviceType', value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="parts" id="parts" />
                    <Label htmlFor="parts">طلب قطع غيار</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="maintenance" id="maintenance" />
                    <Label htmlFor="maintenance">طلب خدمة صيانة</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="machineType" className="text-sebaaq-midnight font-medium">نوع الآلة *</Label>
                  <select
                    id="machineType"
                    value={formData.machineType}
                    onChange={(e) => handleInputChange('machineType', e.target.value)}
                    required
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sebaaq-blue"
                  >
                    <option value="">اختر نوع الآلة</option>
                    <option value="vending">مكائن البيع الذاتي</option>
                    <option value="production">أنظمة خطوط الإنتاج والمصانع</option>
                    <option value="carwash">مغاسل السيارات الأوتوماتيكية</option>
                    <option value="entertainment">الأنظمة الترفيهية</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="machineModel" className="text-sebaaq-midnight font-medium">نموذج/موديل الآلة (إن أمكن)</Label>
                  <Input
                    id="machineModel"
                    value={formData.machineModel}
                    onChange={(e) => handleInputChange('machineModel', e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-sebaaq-midnight font-medium">وصف المشكلة / القطعة المطلوبة *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                  rows={4}
                  className="mt-2"
                  placeholder="يرجى وصف المشكلة أو تحديد القطعة المطلوبة بالتفصيل..."
                />
              </div>

              <div>
                <Label htmlFor="image" className="text-sebaaq-midnight font-medium">هل ترغب في إرفاق صورة؟ (اختياري)</Label>
                <div className="mt-2 flex items-center space-x-2 space-x-reverse">
                  <Upload className="w-5 h-5 text-gray-400" />
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="flex-1"
                  />
                </div>
                {formData.image && (
                  <p className="text-sm text-gray-600 mt-1">
                    تم اختيار: {formData.image.name}
                  </p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse"
              >
                إرسال الطلب
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Service and Support Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-8">
            خدمة الصيانة الاحترافية
            <span className="gradient-text block">لضمان استمرارية عملك</span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              لأننا نؤمن بأهمية الدعم الشامل، نقدم لك <strong>خدمات صيانة احترافية</strong> لجميع الآلات التي نوفرها. فريقنا من الفنيين المدربين والمجهزين بأحدث الأدوات مستعدون لتقديم:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-sebaaq-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sebaaq-midnight">الصيانة الوقائية:</h4>
                    <p className="text-gray-600">جداول صيانة دورية للحفاظ على أداء الآلات ومنع الأعطال قبل حدوثها.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-sebaaq-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Wrench className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sebaaq-midnight">الصيانة التصحيحية:</h4>
                    <p className="text-gray-600">تشخيص سريع وإصلاح فعال لأي أعطال قد تحدث.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-sebaaq-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Settings className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sebaaq-midnight">الترقية والتحديثات:</h4>
                    <p className="text-gray-600">مساعدتك في تحديث آلاتك بأحدث التقنيات والميزات لتحسين الأداء.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-sebaaq-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sebaaq-midnight">الدعم الفني عن بُعد:</h4>
                    <p className="text-gray-600">في بعض الحالات، يمكننا تقديم الدعم والإرشاد عبر الهاتف أو الإنترنت لمساعدتك في حل المشكلات البسيطة.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed mt-8">
              هدفنا هو تقليل وقت التوقف عن العمل لديك وضمان أقصى قدر من الكفاءة لعملياتك.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-8">
            هل لديك أسئلة؟
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            فريق دعم العملاء لدينا جاهز لمساعدتك. تواصل معنا مباشرة عبر:
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-sebaaq-blue rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">الهاتف</h3>
              <p className="text-gray-300">+966 920031826</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-sebaaq-blue rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-300">info@sebaaq.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-sebaaq-blue rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">ساعات العمل</h3>
              <p className="text-gray-300">الأحد - الخميس، 9:00 صباحاً - 5:00 مساءً</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartsAndMaintenance;
