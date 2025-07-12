
const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-sebaaq-blue/20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6">
          ابدأ شراكتك
          <span className="gradient-text block">الاستراتيجية</span>
        </h2>
        
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          دعنا نناقش كيف يمكن لسيباك أن تهندس نجاحك في المشهد المتطور للتجارة العالمية.
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-sebaaq-blue/50 transition-all duration-300 group cursor-pointer"
                 onClick={() => window.open('https://wa.me/+966594196930', '_blank')}>
              <div className="w-12 h-12 bg-sebaaq-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
              <p className="text-sebaaq-blue font-mono">+966 594 196 930</p>
            </div>

            {/* Email */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-sebaaq-blue/50 transition-all duration-300 group cursor-pointer"
                 onClick={() => window.open('mailto:info@seapaac.com', '_blank')}>
              <div className="w-12 h-12 bg-sebaaq-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">بريد إلكتروني</h3>
              <p className="text-sebaaq-blue">info@seapaac.com</p>
            </div>

            {/* Website */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-sebaaq-blue/50 transition-all duration-300 group cursor-pointer"
                 onClick={() => window.open('https://www.seapaac.com', '_blank')}>
              <div className="w-12 h-12 bg-sebaaq-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">موقع إلكتروني</h3>
              <p className="text-sebaaq-blue">www.seapaac.com</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="bg-gradient-to-r from-sebaaq-blue to-blue-400 rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              هل أنت مستعد لتحويل سلسلة التوريد الخاصة بك؟
            </h3>
            <p className="text-white/90 mb-6">
              انضم إلى مئات الشركات التي تثق بسيباك لاحتياجاتها اللوجستية بين الصين والمملكة العربية السعودية.
            </p>
            <button 
              className="bg-white text-sebaaq-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
