
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Ship, MapPin } from "lucide-react";

// DottedMap implementation
class DottedMap {
  private height: number;
  private grid: string;

  constructor({ height, grid }: { height: number; grid: string }) {
    this.height = height;
    this.grid = grid;
  }

  getSVG({
    radius,
    color,
    shape,
    backgroundColor,
  }: {
    radius: number;
    color: string;
    shape: string;
    backgroundColor: string;
  }) {
    const width = this.height * 2;
    const height = this.height;
    const spacing = 4;
    
    let dots = '';
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        if (this.grid === 'diagonal' && (x + y) % (spacing * 2) === 0) {
          dots += `<circle cx="${x}" cy="${y}" r="${radius}" fill="${color}" />`;
        }
      }
    }

    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="background-color: ${backgroundColor}">
      ${dots}
    </svg>`;
  }
}

interface RoutePoint {
  lat: number;
  lng: number;
  label: string;
  city: string;
}

interface CargoShipRouteProps {
  startPort?: RoutePoint;
  endPort?: RoutePoint;
  lineColor?: string;
  shipColor?: string;
}

export function CargoShipRoute({
  startPort = {
    lat: 31.2304,
    lng: 121.4737,
    label: "منفذ المنشأ",
    city: "شنغهاي، الصين"
  },
  endPort = {
    lat: 21.4858,
    lng: 39.1925,
    label: "منفذ الوجهة", 
    city: "جدة، المملكة العربية السعودية"
  },
  lineColor = "#ef4444",
  shipColor = "#059669"
}: CargoShipRouteProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [shipPosition, setShipPosition] = useState(0);
  
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#00000040",
    shape: "circle",
    backgroundColor: "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    // Manual positioning based on the actual map image positions
    if (lng > 120) { // Shanghai area
      return { x: 750, y: 80 }; // Far right position
    } else { // Jeddah area  
      return { x: 180, y: 140 }; // Left side position
    }
  };

  const createShippingRoute = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    // Follow the actual red route in the image: Shanghai -> Singapore -> Djibouti -> Jeddah
    const singapore = { x: 650, y: 280 }; // Singapore position
    const djibouti = { x: 320, y: 240 }; // Djibouti position
    
    return `M ${start.x} ${start.y} 
            Q ${start.x - 50} ${start.y + 80} ${singapore.x} ${singapore.y}
            Q ${singapore.x - 100} ${singapore.y + 20} ${djibouti.x + 80} ${djibouti.y}
            Q ${djibouti.x} ${djibouti.y - 30} ${end.x} ${end.y}`;
  };

  const getPointOnShippingRoute = (t: number, start: { x: number; y: number }, end: { x: number; y: number }) => {
    // Define sea-only waypoints following the blue ocean areas
    const southChinaSea = { x: 680, y: 300 }; // South China Sea
    const malaccaStrait = { x: 620, y: 320 }; // Malacca Strait
    const indianOcean1 = { x: 580, y: 340 }; // Indian Ocean
    const indianOcean2 = { x: 480, y: 360 }; // Indian Ocean middle
    const arabianSea = { x: 380, y: 320 }; // Arabian Sea
    const redSeaEntrance = { x: 300, y: 280 }; // Red Sea entrance
    
    // Divide the route into sea segments
    if (t < 0.15) {
      // Shanghai to South China Sea
      const localT = t / 0.15;
      const x = start.x + (southChinaSea.x - start.x) * localT;
      const y = start.y + (southChinaSea.y - start.y) * localT;
      return { x, y };
    } else if (t < 0.25) {
      // South China Sea to Malacca Strait
      const localT = (t - 0.15) / 0.1;
      const x = southChinaSea.x + (malaccaStrait.x - southChinaSea.x) * localT;
      const y = southChinaSea.y + (malaccaStrait.y - southChinaSea.y) * localT;
      return { x, y };
    } else if (t < 0.4) {
      // Malacca Strait to Indian Ocean
      const localT = (t - 0.25) / 0.15;
      const x = malaccaStrait.x + (indianOcean1.x - malaccaStrait.x) * localT;
      const y = malaccaStrait.y + (indianOcean1.y - malaccaStrait.y) * localT;
      return { x, y };
    } else if (t < 0.6) {
      // Indian Ocean crossing
      const localT = (t - 0.4) / 0.2;
      const x = indianOcean1.x + (indianOcean2.x - indianOcean1.x) * localT;
      const y = indianOcean1.y + (indianOcean2.y - indianOcean1.y) * localT;
      return { x, y };
    } else if (t < 0.8) {
      // Indian Ocean to Arabian Sea
      const localT = (t - 0.6) / 0.2;
      const x = indianOcean2.x + (arabianSea.x - indianOcean2.x) * localT;
      const y = indianOcean2.y + (arabianSea.y - indianOcean2.y) * localT;
      return { x, y };
    } else {
      // Arabian Sea to Red Sea entrance to Jeddah
      const localT = (t - 0.8) / 0.2;
      const x = arabianSea.x + (end.x - arabianSea.x) * localT;
      const y = arabianSea.y + (end.y - arabianSea.y) * localT;
      return { x, y };
    }
  };

  const startPoint = projectPoint(startPort.lat, startPort.lng);
  const endPoint = projectPoint(endPort.lat, endPort.lng);
  const pathData = createShippingRoute(startPoint, endPoint);

  useEffect(() => {
    const interval = setInterval(() => {
      setShipPosition((prev) => (prev + 0.005) % 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const shipPos = getPointOnShippingRoute(shipPosition, startPoint, endPoint);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5">
        <div className="flex items-center gap-3 mb-4">
          <Ship className="h-6 w-6 text-sebaaq-blue" />
          <h2 className="text-2xl font-bold text-sebaaq-midnight font-noto-sans-arabic">مسار الشحن البحري</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div>
              <p className="font-semibold text-sebaaq-midnight font-noto-sans-arabic">{startPort.city}</p>
              <p className="text-sm text-gray-600 font-noto-sans-arabic">منفذ المنشأ</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div>
              <p className="font-semibold text-sebaaq-midnight font-noto-sans-arabic">{endPort.city}</p>
              <p className="text-sm text-gray-600 font-noto-sans-arabic">منفذ الوجهة</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map - Full width, no padding */}
      <div className="relative w-full h-96 bg-white">
        <img
          src="/lovable-uploads/5a935ef4-4a33-4ad3-8dcc-149f4c72098b.png"
          className="w-full h-full object-contain pointer-events-none select-none"
          alt="خريطة مسارات الشحن"
          draggable={false}
        />
        
        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          className="w-full h-full absolute inset-0 pointer-events-none select-none"
        >
          <defs>
            <linearGradient id="route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ship-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={shipColor} />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>

          {/* Remove the route path - use existing red line in map */}

          {/* Start Port */}
          <g>
            <circle
              cx={startPoint.x}
              cy={startPoint.y}
              r="4"
              fill="#22c55e"
            />
            <circle
              cx={startPoint.x}
              cy={startPoint.y}
              r="4"
              fill="#22c55e"
              opacity="0.5"
            >
              <animate
                attributeName="r"
                from="4"
                to="12"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* End Port */}
          <g>
            <circle
              cx={endPoint.x}
              cy={endPoint.y}
              r="4"
              fill="#ef4444"
            />
            <circle
              cx={endPoint.x}
              cy={endPoint.y}
              r="4"
              fill="#ef4444"
              opacity="0.5"
            >
              <animate
                attributeName="r"
                from="4"
                to="12"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Moving Ship */}
          <g transform={`translate(${shipPos.x}, ${shipPos.y})`}>
            {/* Ship shadow/wake */}
            <ellipse rx="12" ry="6" fill="url(#ship-gradient)" opacity="0.2" />
            
            {/* Ship hull */}
            <path
              d="M-8,-3 L8,-3 L6,3 L-6,3 Z"
              fill="#1e40af"
              stroke="#1e3a8a"
              strokeWidth="0.5"
            />
            
            {/* Ship deck */}
            <rect x="-6" y="-2" width="12" height="3" fill="#3b82f6" />
            
            {/* Ship containers */}
            <rect x="-4" y="-4" width="2" height="2" fill="#ef4444" />
            <rect x="-1" y="-4" width="2" height="2" fill="#22c55e" />
            <rect x="2" y="-4" width="2" height="2" fill="#f59e0b" />
            
            {/* Ship bridge */}
            <rect x="3" y="-3" width="3" height="2" fill="#64748b" />
            <rect x="4" y="-4" width="1" height="1" fill="#1e293b" />
          </g>

          {/* Port Labels */}
          <text
            x={startPoint.x}
            y={startPoint.y - 15}
            textAnchor="middle"
            className="fill-sebaaq-midnight text-xs font-medium font-noto-sans-arabic"
          >
            {startPort.city}
          </text>
          <text
            x={endPoint.x}
            y={endPoint.y - 15}
            textAnchor="middle"
            className="fill-sebaaq-midnight text-xs font-medium font-noto-sans-arabic"
          >
            {endPort.city}
          </text>
        </svg>
      </div>

      {/* Route Info */}
      <div className="p-6 bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-sebaaq-midnight">~8,500</p>
            <p className="text-sm text-gray-600 font-noto-sans-arabic">ميل بحري</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-sebaaq-midnight">18-22</p>
            <p className="text-sm text-gray-600 font-noto-sans-arabic">يوم عبور</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-sebaaq-midnight font-noto-sans-arabic">نشط</p>
            <p className="text-sm text-gray-600 font-noto-sans-arabic">حالة المسار</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const TrackingSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Map Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/lovable-uploads/d4715ba8-3fda-4d93-9d3e-41d8c45c54d2.png" 
          alt="Shipping Routes Map" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-tajawal text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
              تتبع شحنتك
              <span className="gradient-text block">لحظة بلحظة</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto font-noto-sans-arabic">
              <strong>ندرك أهمية البقاء على اطلاع دائم بحركة شحناتك، لذلك نقدم لك نظام تتبع شحنات متطور يمنحك رؤية كاملة وراحة بال تامة</strong>
            </p>
          </div>
          
          <CargoShipRoute />
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;

/*
IMPORTANT: src/components/sections/TrackingSection.tsx is 381 lines long. 
This file is getting too long and should be refactored into smaller components after this edit.
*/
