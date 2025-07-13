
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/الرئيسية', label: 'الرئيسية' },
    { path: '/الشحن-والاستيراد-من-الصين', label: 'الشحن والاستيراد من الصين' },
    { path: '/سي-باك-ماشين', label: 'سي باك ماشين' },
    { path: '/قطع-الغيار-والصيانة', label: 'قطع الغيار والصيانة' },
    { path: '/حاسبة-تكلفة-الشحن', label: 'حاسبة تكلفة الشحن' },
    { path: '/تواصل-معنا', label: 'تواصل معنا' },
    { path: '/من-نحن', label: 'من نحن' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black shadow-md border-b sticky top-0 z-50 font-cairo" role="navigation" aria-label="التنقل الرئيسي">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link 
            to="/الرئيسية" 
            className="focus:outline-none focus:ring-4 focus:ring-sebaaq-blue/50 rounded-md p-2"
            aria-label="سـي بـاك - الصفحة الرئيسية"
          >
            <img 
              src="/lovable-uploads/7c2e9f17-2da1-4b6e-a919-752816333389.png" 
              alt="شعار شركة سي باك" 
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                role="menuitem"
                className={`px-4 py-3 rounded-lg transition-colors font-medium text-base focus:outline-none focus:ring-2 focus:ring-sebaaq-blue focus:ring-offset-2 ${
                  location.pathname === item.path || (item.path === '/الرئيسية' && location.pathname === '/')
                    ? 'bg-sebaaq-blue text-white shadow-md'
                    : 'text-white hover:bg-gray-800 hover:shadow-sm'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              className="hidden sm:flex bg-sebaaq-blue hover:bg-blue-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 focus:outline-none focus:ring-4 focus:ring-sebaaq-blue/50 font-cairo"
              aria-label="تواصل معنا - اتصال مباشر"
              onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" aria-hidden="true" />
              تواصل معنا
            </Button>
            
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sebaaq-blue focus:ring-offset-2"
              aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-5 h-5 text-white" aria-hidden="true" /> : <Menu className="w-5 h-5 text-white" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
          role="menu"
          aria-hidden={!isOpen}
        >
          <div className="py-4 space-y-2 border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                role="menuitem"
                className={`block px-4 py-4 rounded-lg transition-colors font-medium text-base focus:outline-none focus:ring-2 focus:ring-sebaaq-blue focus:ring-offset-2 ${
                  location.pathname === item.path || (item.path === '/الرئيسية' && location.pathname === '/')
                    ? 'bg-sebaaq-blue text-white shadow-md'
                    : 'text-white hover:bg-gray-800 hover:shadow-sm'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button 
                size="sm" 
                className="w-full sm:hidden bg-sebaaq-blue hover:bg-blue-600 text-white text-base py-3 focus:outline-none focus:ring-4 focus:ring-sebaaq-blue/50 font-cairo"
                aria-label="تواصل معنا - اتصال مباشر"
                onClick={() => window.open('https://wa.me/+966594196930', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
