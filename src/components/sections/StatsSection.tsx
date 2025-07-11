
import { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
}

const StatItem = ({ number, label, delay }: StatItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const targetNumber = parseInt(number.replace(/[+,]/g, ''), 10);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCurrentNumber(targetNumber);
          clearInterval(timer);
        } else {
          setCurrentNumber(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetNumber]);

  const formatNumber = (num: number) => {
    if (number.includes('+')) {
      return `${num.toLocaleString()}+`;
    }
    if (number.includes('%')) {
      return `${num}%`;
    }
    return num.toLocaleString();
  };

  return (
    <div 
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-4xl md:text-5xl font-bold text-sebaaq-blue mb-2">
        {formatNumber(currentNumber)}
      </div>
      <div className="text-gray-400 text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section 
      className="relative py-20 bg-sebaaq-charcoal overflow-hidden"
      aria-labelledby="stats-title"
    >
      {/* Animated Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-midnight/50 to-transparent"></div>
        <div className="tech-grid opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="stats-title" className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
            لماذا يثق بنا عملاؤنا؟
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            خبرة طويلة في العمل مع موردي الصين. أنجزنا آلاف الشحنات وبنينا شبكة قوية من الشركاء. حققنا رضا عملائنا بنسبة عالية.
          </p>
        </div>

        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16"
          role="region"
          aria-label="إحصائيات أداء الشركة"
        >
          <StatItem number="370+" label="عميل دائم يثق بنا" delay={0} />
          <StatItem number="9000+" label="شحنة تم توصيلها" delay={200} />
          <StatItem number="10+" label="سنين خبراتنا في السوق الصيني" delay={400} />
          <StatItem number="95%" label="دقة في مواعيد التسليم" delay={600} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-sebaaq-blue rounded-full opacity-10 animate-float" aria-hidden="true"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-float" style={{animationDelay: '1.5s'}} aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default StatsSection;
