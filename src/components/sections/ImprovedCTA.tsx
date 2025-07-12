import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, MessageCircle, Calendar, ArrowLeft } from 'lucide-react';

const ImprovedCTA = () => {
  const ctaOptions = [
    {
      icon: Phone,
      title: "اتصل بنا الآن",
      description: "تحدث مع خبرائنا مباشرة",
      action: () => window.open('tel:+966594196930', '_blank'),
      primary: true,
      color: "bg-sebaaq-blue hover:bg-blue-600"
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      description: "راسلنا على الواتساب",
      action: () => window.open('https://wa.me/+966594196930', '_blank'),
      primary: false,
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: Calendar,
      title: "احجز موعد",
      description: "احجز استشارة مجانية",
      action: () => window.open('https://wa.me/+966594196930?text=أرغب في حجز موعد لاستشارة مجانية', '_blank'),
      primary: false,
      color: "bg-orange-600 hover:bg-orange-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sebaaq-blue/5 to-sebaaq-midnight/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            جاهز لبدء مشروعك؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            فريق خبرائنا في انتظارك لتقديم أفضل الحلول المناسبة لاحتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ctaOptions.map((option, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={option.action}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${option.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                <option.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{option.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
              <ArrowLeft className="w-5 h-5 mx-auto text-primary group-hover:translate-x-1 transition-transform" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200">
            <MessageCircle className="w-4 h-4 ml-2" />
            <span className="text-sm font-medium">استجابة فورية خلال دقائق</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovedCTA;