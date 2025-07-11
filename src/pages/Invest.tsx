
import { useState } from 'react';
import { TrendingUp, Shield, CheckCircle, ArrowRight, Target, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Invest = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null);

  const investmentOpportunities = [
    {
      id: 'car-wash',
      title: 'مغاسل السيارات الأوتوماتيكية',
      description: 'طلب هائل في السوق السعودي',
      icon: <Target className="w-8 h-8 text-sebaaq-blue" />,
      details: 'يشهد هذا القطاع نموًا انفجاريًا في المملكة. شراء آلات مغاسل السيارات الأوتوماتيكية وبيعها للمستثمرين المحليين أو لرجال الأعمال الذين يرغبون في إنشاء مشاريع مغاسل هو فرصة استثمارية مضمونة.'
    },
    {
      id: 'dome-tents',
      title: 'خيام القبة (Dome Tent)',
      description: 'حلول عصرية للفعاليات',
      icon: <Zap className="w-8 h-8 text-sebaaq-blue" />,
      details: 'تُعد خيام القبة من المنتجات المطلوبة بشكل متزايد لأصحاب الفعاليات والمعارض التجارية والمشاريع الترفيهية. شراؤها وتوريدها ثم بيعها في السوق المحلي يمثل فرصة مربحة نظرًا لارتفاع الطلب وتنوع استخداماتها.'
    },
    {
      id: 'vending-machines',
      title: 'مكائن البيع الذاتي',
      description: 'استثمار في المستقبل',
      icon: <Users className="w-8 h-8 text-sebaaq-blue" />,
      details: 'سواء كانت مكائن بيع ذاتي للآيس كريم، الفشار، أو حتى القهوة، فإن هذه الآلات تشهد طلبًا متزايدًا في المجمعات التجارية، الحدائق، والمرافق العامة.'
    }
  ];

  const investmentSteps = [
    {
      number: 1,
      title: 'تحديد الآلات الأكثر طلبًا',
      description: 'بناءً على خبرتنا المتعمقة في السوق السعودي والصيني، نحدد لك الآلات التي تشهد طلبًا مرتفعًا للغاية وإمكانية بيعها بسرعة.'
    },
    {
      number: 2,
      title: 'شراء مباشر من المصدر',
      description: 'نستفيد من علاقاتنا القوية مع كبرى المصانع في الصين لضمان حصولك على أفضل الأسعار عند شراء الآلات، مما يعزز هامش ربحك بشكل كبير.'
    },
    {
      number: 3,
      title: 'إدارة شاملة لعملية التوريد والبيع',
      description: 'نتكفل بجميع إجراءات الشحن والتخليص الجمركي وإتمام المتطلبات القانونية في السعودية، التخزين والتسويق، والبيع والتسليم.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/100/100')] opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TrendingUp className="w-16 h-16 text-sebaaq-blue" />
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              استثمر مع سي باك
              <span className="gradient-text block mt-2">أرباح سريعة من شراء وبيع الآلات</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              هل تبحث عن فرص استثمارية تحقق لك عوائد مجزية وبوتيرة سريعة؟ مع سي باك لوجستيك، نفتح لك أبوابًا واسعة للاستثمار في شراء الآلات وتوريدها وبيعها مباشرة داخل السوق السعودي.
            </p>
            
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 text-lg">
              ابدأ الاستثمار الآن
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-4">
              كيف يعمل نموذجنا الاستثماري
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              فكرة الاستثمار معنا بسيطة ومباشرة: أنت كشريك، تستثمر في شراء آلات محددة وعالية الطلب من المصانع في الصين، ونحن نتولى كل شيء من لحظة الشراء وحتى بيعها بنجاح في السوق المحلي السعودي.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentSteps.map((step, index) => (
              <Card key={step.number} className="border-t-4 border-sebaaq-blue hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-sebaaq-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <CardTitle className="text-xl text-sebaaq-midnight">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-4">
              فرص استثمارية سريعة العوائد
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              اكتشف الفرص الاستثمارية المتاحة في قطاعات عالية الطلب
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {investmentOpportunities.map((opportunity) => (
              <Card 
                key={opportunity.id} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-sebaaq-blue"
                onClick={() => setSelectedOpportunity(selectedOpportunity === opportunity.id ? null : opportunity.id)}
              >
                <CardHeader className="text-center">
                  <div className="mb-4">
                    {opportunity.icon}
                  </div>
                  <CardTitle className="text-xl text-sebaaq-midnight">{opportunity.title}</CardTitle>
                  <CardDescription className="text-sebaaq-blue font-semibold">
                    {opportunity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedOpportunity === opportunity.id && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{opportunity.details}</p>
                    </div>
                  )}
                  <div className="flex justify-center mt-4">
                    <ArrowRight className="w-5 h-5 text-sebaaq-blue" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Guarantee */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-sebaaq-blue to-blue-600 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                شراكة مضمونة وموثوقة
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-xl p-8">
                <CheckCircle className="w-12 h-12 mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">لا مسؤوليات إضافية عليك</h3>
                <p className="text-gray-100 leading-relaxed">
                  لست بحاجة للقلق بشأن تفاصيل التشغيل، الصيانة، التخزين، أو حتى البحث عن المشترين. سي باك لوجستيك تتكفل بكل شيء! من لحظة استثمارك في شراء الآلة حتى تسليمها للعميل النهائي وتحقيق الأرباح.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-8">
                <Shield className="w-12 h-12 mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-4">إجراءات قانونية شفافة</h3>
                <p className="text-gray-100 leading-relaxed">
                  جميع خطوات استثمارك معنا تتم وفقًا لأعلى المعايير القانونية، وبإشراف مباشر من محامٍ مختص، لضمان حماية حقوقك وسلامة استثمارك بالكامل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            انضم إلى شركاء سي باك الآن
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            واستفد من فرص الاستثمار المربحة في سوق الآلات السعودي
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse md:flex md:justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 text-lg">
              تواصل معنا الآن
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 text-lg">
              اعرف المزيد
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invest;
