
const VisionSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sebaaq-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-8">
            الثقة خلف
            <span className="gradient-text block">التكنولوجيا</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
            التزامنا يتجاوز الخدمات اللوجستية. نحن نبني شراكات دائمة تقوم على الشفافية والموثوقية والحلول المبتكرة التي تتجاوز التوقعات.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون الشريك اللوجستي المفضل لربط التجارة بين الصين والمملكة العربية السعودية، وتعزيز النمو الاقتصادي والازدهار.
              </p>
            </div>

            {/* Values */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">قيمنا</h3>
              <p className="text-gray-600 leading-relaxed">
                الشفافية والموثوقية والتركيز على العميل تشكل أساس كل شراكة نبنيها، مما يضمن الثقة في كل خطوة.
              </p>
            </div>

            {/* Goal */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-4 h-4 bg-white rounded-full mr-1"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">هدفنا</h3>
              <p className="text-gray-600 leading-relaxed">
                بناء علاقات طويلة الأمد وتقديم حلول مبتكرة تحقق النجاح وتتجاوز توقعات العملاء باستمرار.
              </p>
            </div>
          </div>

          {/* Company Stats in a more visual way */}
          <div className="mt-16 bg-gradient-to-r from-sebaaq-midnight to-sebaaq-blue rounded-2xl p-8 text-white">
            <h3 className="font-playfair text-2xl font-bold mb-6">بناء طريق الحرير الرقمي</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              من خلال الشراكات الاستراتيجية والتكنولوجيا المتطورة والالتزام الثابت بالتميز، تقود سيباك مستقبل العلاقات التجارية بين الصين والمملكة العربية السعودية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
