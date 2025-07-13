import { ArrowRight, Truck, Coffee, Gamepad2, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const RecentMachinesSection = () => {
  const navigate = useNavigate();

  const machineCategories = [
    {
      title: "مكائن غسيل السيارات",
      description: "أحدث مكائن غسيل السيارات بدون لمس وتقنيات متطورة",
      icon: Truck,
      image: "/lovable-uploads/130fbaf4-5a41-47ad-9bb9-9693989a851b.png",
      link: "/مغاسل-السيارات",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "مكائن البيع الذاتي",
      description: "مكائن بيع ذاتي حديثة للمشروبات والوجبات الخفيفة",
      icon: Coffee,
      image: "/lovable-uploads/2fc2a141-25e3-4241-bc17-0ef9df326747.png",
      link: "/مكائن-البيع-الذاتي",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "أنظمة الترفيه",
      description: "أحدث أنظمة الترفيه والألعاب التفاعلية",
      icon: Gamepad2,
      image: "/lovable-uploads/37056213-2124-45ce-9651-78c7bee23056.png",
      link: "/أنظمة-الترفيه",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "خطوط الإنتاج",
      description: "خطوط إنتاج متكاملة وحلول التصنيع الآلي",
      icon: Wrench,
      image: "/lovable-uploads/356f179f-e8fa-4feb-b522-afde2648de6a.png",
      link: "/خطوط-الإنتاج",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  const handleCategoryClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
            <Wrench className="h-5 w-5 text-primary ml-2" />
            <span className="text-sm font-medium text-primary">أحدث المكائن</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            أحدث المكائن 
            <span className="block mt-2 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              والمعدات الصناعية
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اكتشف مجموعتنا المتنوعة من أحدث المكائن والمعدات الصناعية المستوردة من أفضل المصانع العالمية
          </p>
        </div>

        {/* Machine Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {machineCategories.map((category, index) => (
            <Card 
              key={index}
              className="group cursor-pointer border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              onClick={() => handleCategoryClick(category.link)}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    <span>تصفح المزيد</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-2xl border border-primary/10 p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            لم تجد ما تبحث عنه؟
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            تواصل معنا للحصول على استشارة مجانية وإيجاد أفضل الحلول المخصصة لاحتياجاتك
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 font-semibold group"
            onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
          >
            تواصل معنا الآن
            <ArrowRight className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentMachinesSection;