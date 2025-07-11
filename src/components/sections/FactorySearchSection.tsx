
import { AlertTriangle } from "lucide-react";

const FactorySearchSection = () => {
  return (
    <section className="py-20 bg-sebaaq-charcoal relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-sebaaq-blue/20 rounded-full blur-2xl animate-float"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6">
              البحث عن أفضل
              <span className="gradient-text block">المصانع والأسعار</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              نساعدك في العثور على مصانع حقيقية، تقييم الجودة، ومقارنة الأسعار
            </p>

             <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 mb-8 border border-red-500/30">
               <div className="text-center mb-6">
                 <div className="flex items-center justify-center gap-4 mb-4">
                   <AlertTriangle className="w-12 h-12 text-red-400" />
                   <div className="text-8xl md:text-9xl font-bold text-red-500 leading-none">
                     90%
                   </div>
                   <AlertTriangle className="w-12 h-12 text-red-400" />
                 </div>
                 <h3 className="text-white font-bold text-xl mb-2">من المنتجات المعروضة أونلاين هي من وسطاء وشركات! وباسعار مرتفعة</h3>
                 <p className="text-white leading-relaxed">
                   في الواقع، أغلب المنتجات المعروضة على الإنترنت – سواء عبر مواقع كبرى مثل علي بابا أو من خلال موردين مستقلين – تُقدَّم من خلال وسطاء أو شركات تجارية لا تُمثل المصنع بشكل مباشر. هذا التعدد في الوساطة يؤدي إلى زيادة مرتفعة في الأسعار، غالبًا تتجاوز القيمة الحقيقية للمنتج. من خلال الشراء المباشر من المصنع، يمكنك الحصول على أسعار المصنع، وضمان أعلى للجودة والمواصفات، وتوفير كبير في التكاليف.
                 </p>
               </div>
             </div>

           </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-sebaaq-blue/20 to-blue-400/20 rounded-3xl p-8 backdrop-blur-sm border border-sebaaq-blue/30">
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-xl mb-2">سي باك طريقك المباشر للمصانع</h3>
                <p className="text-gray-300">تجاهل الوسطاء والكيانات التجارية</p>
              </div>
              
              {/* Desktop: Horizontal Flow */}
              <div className="hidden md:flex items-center justify-between relative">
                {/* Step 1 */}
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="w-16 h-16 bg-sebaaq-blue rounded-full flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white text-sm font-medium">تحديد المصانع</p>
                </div>
                
                {/* Arrow 1 */}
                <div className="flex-1 flex items-center justify-center mx-4">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-sebaaq-blue to-blue-400"></div>
                  <div className="w-0 h-0 border-l-4 border-l-blue-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white text-sm font-medium">فحص الجودة</p>
                </div>
                
                {/* Arrow 2 */}
                <div className="flex-1 flex items-center justify-center mx-4">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-sebaaq-blue"></div>
                  <div className="w-0 h-0 border-l-4 border-l-sebaaq-blue border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="w-16 h-16 bg-sebaaq-blue rounded-full flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white text-sm font-medium">التفاوض</p>
                </div>
                
                {/* Arrow 3 */}
                <div className="flex-1 flex items-center justify-center mx-4">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-sebaaq-blue to-blue-400"></div>
                  <div className="w-0 h-0 border-l-4 border-l-blue-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col items-center animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white text-sm font-medium">الشحن المباشر</p>
                </div>
              </div>
              
              {/* Mobile: Vertical Stack */}
              <div className="md:hidden space-y-6">
                <div className="flex items-center gap-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="w-12 h-12 bg-sebaaq-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white font-medium">تحديد المصانع</p>
                </div>
                
                <div className="flex items-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white font-medium">فحص الجودة</p>
                </div>
                
                <div className="flex items-center gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <div className="w-12 h-12 bg-sebaaq-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white font-medium">التفاوض</p>
                </div>
                
                <div className="flex items-center gap-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-white font-medium">الشحن المباشر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactorySearchSection;
