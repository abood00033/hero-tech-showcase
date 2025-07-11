
import { MapPin, Package, Shield, Truck, Search, Clock } from 'lucide-react';

const WarehouseSection = () => {
  const chinaServices = [
    { icon: Package, text: "استلام وفحص البضائع", color: "text-blue-600" },
    { icon: Search, text: "تجميع الشحنات من موردين متعددين", color: "text-blue-600" },
    { icon: Clock, text: "التخزين المؤقت والطويل الأمد", color: "text-blue-600" },
    { icon: Truck, text: "إعداد الشحنات للنقل الدولي", color: "text-blue-600" }
  ];

  const saudiServices = [
    { icon: Shield, text: "التخليص الجمركي السريع", color: "text-green-600" },
    { icon: Truck, text: "التوزيع على مختلف المدن", color: "text-green-600" },
    { icon: Package, text: "خدمات التخزين المحلية", color: "text-green-600" },
    { icon: Clock, text: "التسليم السريع للعملاء", color: "text-green-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sebaaq-blue/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
            مستودعات متكاملة في
            <span className="gradient-text block">السعودية والصين</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            نمتلك شبكة متطورة من المستودعات في مواقع استراتيجية في المملكة العربية السعودية والصين. تمكننا هذه البنية التحتية من تقديم مجموعة شاملة من خدمات التخزين، التجميع، والتوزيع، المصممة لتحسين كفاءة سلسلة الإمداد الخاصة بك وتقليل زمن التسليم.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-sebaaq-midnight mb-8 text-center">
            خريطة المستودعات التفاعلية
          </h3>
          
          <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8 min-h-[400px]">
            {/* World Map Background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                {/* Simplified world map outline */}
                <path d="M200,150 Q250,120 300,140 L350,160 Q400,150 450,170 L500,180 Q550,160 600,180 L650,190 Q700,170 750,190" 
                      stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M180,200 Q230,180 280,200 L330,220 Q380,200 430,220 L480,230 Q530,210 580,230" 
                      stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            {/* China Warehouse */}
            <div className="absolute top-1/4 right-1/4 group cursor-pointer">
              <div className="relative">
                <div className="w-6 h-6 bg-sebaaq-blue rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-sebaaq-blue/30 rounded-full animate-ping"></div>
                
                {/* Tooltip */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <h4 className="font-bold text-sebaaq-blue mb-2 text-center">مستودعات الصين</h4>
                  <p className="text-sm text-gray-600 mb-3 text-center">جوانجتشو - شنجن</p>
                  <div className="space-y-2">
                    {chinaServices.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <service.icon className={`w-4 h-4 ${service.color}`} />
                        <span className="text-gray-700">{service.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-sm font-semibold text-sebaaq-blue">الصين</span>
              </div>
            </div>

            {/* Saudi Arabia Warehouse */}
            <div className="absolute top-1/3 left-1/2 group cursor-pointer">
              <div className="relative">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500/30 rounded-full animate-ping"></div>
                
                {/* Tooltip */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg shadow-xl p-4 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <h4 className="font-bold text-green-600 mb-2 text-center">مستودعات السعودية</h4>
                  <p className="text-sm text-gray-600 mb-3 text-center">الرياض - جدة - الدمام</p>
                  <div className="space-y-2">
                    {saudiServices.map((service, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <service.icon className={`w-4 h-4 ${service.color}`} />
                        <span className="text-gray-700">{service.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-sm font-semibold text-green-600">السعودية</span>
              </div>
            </div>

            {/* Connection Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2295d1" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.8"/>
                </linearGradient>
              </defs>
              <path d="M750 125 Q600 200 500 167" 
                    stroke="url(#connectionGradient)" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeDasharray="10,5"
                    className="animate-pulse" />
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
              <h5 className="text-sm font-semibold text-gray-800 mb-2">المواقع</h5>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-sebaaq-blue rounded-full"></div>
                  <span className="text-gray-700">مستودعات الصين</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">مستودعات السعودية</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Warehouse Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-sebaaq-midnight mb-4 text-center">
              مستودعات الصين
            </h3>
            <p className="text-center text-gray-600 mb-6">جوانجتشو - شنجن</p>
            <ul className="space-y-3 text-gray-600">
              {chinaServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <service.icon className={`w-5 h-5 ${service.color} mt-0.5 flex-shrink-0`} />
                  <span>{service.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-sebaaq-midnight mb-4 text-center">
              مستودعات السعودية
            </h3>
            <p className="text-center text-gray-600 mb-6">الرياض - جدة - الدمام</p>
            <ul className="space-y-3 text-gray-600">
              {saudiServices.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <service.icon className={`w-5 h-5 ${service.color} mt-0.5 flex-shrink-0`} />
                  <span>{service.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehouseSection;
