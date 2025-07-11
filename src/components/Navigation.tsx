
import { Home, User, Briefcase, FileText, Cog, Phone } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

const Navigation = () => {
  const navItems = [
    { name: 'الرئيسية', url: '/', icon: Home },
    { name: 'من نحن', url: '/about-us', icon: User },
    { name: 'سمارتكو ماشين', url: '/sebaaq-machine', icon: Briefcase },
    { name: 'قطع الغيار', url: '/parts-maintenance', icon: Cog },
    { name: 'حاسبة الشحن', url: '/shipping-calculator', icon: FileText }
  ]

  return <NavBar items={navItems} />
};

export default Navigation;
