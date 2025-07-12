
import { Cog, Settings, Users, Clock, Package } from 'lucide-react';

const SebaqStats = () => {
  const stats = [{
    number: "90+",
    label: "آلة تم تركيبها",
    icon: Cog
  }, {
    number: "800+",
    label: "عملية صيانة",
    icon: Settings
  }, {
    number: "60+",
    label: "عميل دائم",
    icon: Users
  }, {
    number: "8+",
    label: "سنوات خبرة",
    icon: Clock
  }, {
    number: "490+",
    label: "قطعة غيار",
    icon: Package
  }];

  return (
    <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/643ddcfe-a488-42a0-9ed2-b681b28a670c.png')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
            إنجازاتنا بالأرقام
          </h2>
          <p className="text-gray-300 text-lg">نفخر بثقة عملائنا وإنجازاتنا المتميزة</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group" role="article" aria-labelledby={`stat-${index}`}>
              <div className="w-16 h-16 bg-sebaaq-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-sebaaq-blue" aria-hidden="true" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-sebaaq-blue mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div id={`stat-${index}`} className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SebaqStats;
