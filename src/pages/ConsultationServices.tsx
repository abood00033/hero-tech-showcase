
import { ArrowLeft, CheckCircle, Cog, Factory, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultationServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sebaaq-blue hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          العودة للرئيسية
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            الخدمات الاستشارية
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            خبرة عميقة بالسوق الصيني وحلول متقدمة للآلات والمصانع الذكية
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Deep Market Experience */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-sebaaq-blue/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-sebaaq-blue rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-playfair text-2xl font-bold">خبرة عميقة بالسوق الصيني</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              نمتلك معرفة واسعة وخبرة متراكمة في التعامل مع الموردين الصينيين وفهم ديناميكيات السوق
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              لكي نوفر لك أفضل حلول الاستيراد من الصين، نحن نعمل بخبرة عميقة واسعة في عالم الأعمال الصينية ولدينا خبرة متراكمة في التعامل مع الموردين وفهم ديناميكيات السوق.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sebaaq-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">حلول مخصصة لاحتياجاتك</h3>
                  <p className="text-gray-400 text-sm">تحليل احتياجاتك وتقديم حلول مصممة خصيصًا لتلبية أهدافك الاستيرادية</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sebaaq-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">توفير الوقت والجهد والمال</h3>
                  <p className="text-gray-400 text-sm">نساعدك في توفير الوقت والجهد والمال عن طريق تجنب الأخطاء المكلفة وتبسيط الإجراءات</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sebaaq-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">بناء علاقات قوية مع الموردين</h3>
                  <p className="text-gray-400 text-sm">نحن نساعدك في بناء علاقات قوية مع الموردين الصينيين من خلال شبكتنا الواسعة من الموردين الموثوقين</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-sebaaq-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">تغطية شاملة لجميع جوانب الاستيراد</h3>
                  <p className="text-gray-400 text-sm">نحن نقدم لك خطوات تغطي جميع جوانب الاستيراد بدءًا من البحث عن الموردين وحتى الشحن والتخليص الجمركي</p>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Factory Consultation */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-sebaaq-blue/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-sebaaq-blue rounded-lg flex items-center justify-center">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <h2 className="font-playfair text-2xl font-bold">استشارات خبيرة في الآلات والمصانع الذكية</h2>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              نحن على استعداد لتقديم حلول متقدمة في مجال الآلات والأتمتة
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Cog className="w-5 h-5 text-sebaaq-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">حلول الأتمتة الذكية</h3>
                  <p className="text-gray-400 text-sm">نقدم استشارات حول تبني أحدث تقنيات الأتمتة لرفع كفاءة خطوط الإنتاج وتقليل الاعتماد على العمليات اليدوية</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Cog className="w-5 h-5 text-sebaaq-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">اختيار الآلات الصناعية المتقدمة</h3>
                  <p className="text-gray-400 text-sm">نقدم إستشارات متخصصة في مجال الآلات الصناعية، المكائن، وحلول الأتمتة المتقدمة للمساعدة في تحسين كفاءة الإنتاج وخفض التكاليف</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-sebaaq-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">التركيز على الكفاءة والتكلفة</h3>
                  <p className="text-gray-400 text-sm">نحن نعمل على تحسين الكفاءة وتقليص التكاليف في عمليات الإنتاج لديكم، لتحقيق الأرباح العالية والنجاح المستمر</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Factory className="w-5 h-5 text-sebaaq-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">نحو المصانع الذكية</h3>
                  <p className="text-gray-400 text-sm">يمكنك الاعتماد علينا في دعم تحول مصنعك إلى مصنع ذكي، حيث نقدم الحلول المتقدمة في مجال الأتمتة والتكنولوجيا الذكية</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-gradient-to-r from-sebaaq-blue/10 to-blue-400/10 rounded-3xl p-12 mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12">
            ماذا تشمل خدمة الاستشارة؟
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            تقدم خدمة الاستشارة العديد من الخدمات والمساعدات التي تساعدك في إتمام عملية الاستيراد بسهولة وفعالية
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "تحليل الاحتياجات والأهداف الاستيرادية",
              "تحديد أفضل الموردين والمنتجات المناسبة",
              "التفاوض على الأسعار وشروط الدفع",
              "توفير الإرشادات حول العقود والاتفاقيات",
              "شرح إجراءات التفتيش والجودة",
              "توجيهك بشأن خيارات الشحن والتخليص الجمركي",
              "تقديم الدعم المستمر للعملاء",
              "الإجابة على جميع استفساراتك والتوجيه اللازم"
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                <CheckCircle className="w-5 h-5 text-sebaaq-blue mt-1 flex-shrink-0" />
                <span className="text-gray-300">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">تواصل معنا</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            احصل على استشارة مجانية وابدأ رحلتك نحو النجاح في الاستيراد من الصين
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              طلب استشارة مجانية
            </button>
            <Link 
              to="/"
              className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationServices;
