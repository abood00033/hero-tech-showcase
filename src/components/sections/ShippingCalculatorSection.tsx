import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Package } from 'lucide-react';

const ShippingCalculatorSection = () => {
  const [formData, setFormData] = useState({
    length: '',
    width: '',
    height: '',
    weight: '',
    productType: ''
  });

  const [result, setResult] = useState({
    cbm: 0,
    totalPrice: 0,
    showResult: false
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateShipping = () => {
    const { length, width, height, productType } = formData;
    
    if (!length || !width || !height || !productType) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    // Calculate CBM: (Length * Width * Height) / 1,000,000
    const cbm = (parseFloat(length) * parseFloat(width) * parseFloat(height)) / 1000000;
    
    // Price per CBM based on product type
    const pricePerCBM = {
      'non-electronic': 900,
      'electronic-no-battery': 1200,
      'with-battery': 1300
    };
    
    const totalPrice = cbm * pricePerCBM[productType as keyof typeof pricePerCBM];
    
    setResult({
      cbm: parseFloat(cbm.toFixed(6)),
      totalPrice: parseFloat(totalPrice.toFixed(2)),
      showResult: true
    });
  };

  return (
    <section 
      id="shipping-calculator"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal relative overflow-hidden"
      aria-labelledby="calculator-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-5 sm:opacity-10" aria-hidden="true"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="calculator-title" className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            اعرف تكلفة الشحن فورًا
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            احصل على تقدير أولي لتكلفة الشحن من الصين إلى السعودية بشكل فوري. استخدم الحاسبة أدناه لمعرفة السعر المقدر.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Calculator Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-sebaaq-blue/30" role="form">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-white flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-sebaaq-blue" aria-hidden="true" />
                حاسبة تكلفة الشحن
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {/* Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="length" className="text-gray-300 text-sm sm:text-base font-medium">
                    الطول (سم) <span className="text-red-400" aria-label="مطلوب">*</span>
                  </Label>
                  <Input
                    id="length"
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="مثال: 50"
                    value={formData.length}
                    onChange={(e) => handleInputChange('length', e.target.value)}
                    className="bg-white/20 border-gray-400 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm sm:text-base focus:ring-2 focus:ring-sebaaq-blue focus:border-sebaaq-blue"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="width" className="text-gray-300 text-sm sm:text-base font-medium">
                    العرض (سم) <span className="text-red-400" aria-label="مطلوب">*</span>
                  </Label>
                  <Input
                    id="width"
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="مثال: 30"
                    value={formData.width}
                    onChange={(e) => handleInputChange('width', e.target.value)}
                    className="bg-white/20 border-gray-400 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm sm:text-base focus:ring-2 focus:ring-sebaaq-blue focus:border-sebaaq-blue"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height" className="text-gray-300 text-sm sm:text-base font-medium">
                    الارتفاع (سم) <span className="text-red-400" aria-label="مطلوب">*</span>
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="مثال: 20"
                    value={formData.height}
                    onChange={(e) => handleInputChange('height', e.target.value)}
                    className="bg-white/20 border-gray-400 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm sm:text-base focus:ring-2 focus:ring-sebaaq-blue focus:border-sebaaq-blue"
                    required
                  />
                </div>
              </div>

              {/* Weight */}
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-gray-300 text-sm sm:text-base font-medium">
                  الوزن (كيلوغرام) <span className="text-red-400" aria-label="مطلوب">*</span>
                </Label>
                <Input
                  id="weight"
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="مثال: 5.5"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  className="bg-white/20 border-gray-400 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm sm:text-base focus:ring-2 focus:ring-sebaaq-blue focus:border-sebaaq-blue"
                  aria-describedby="weight-help"
                  required
                />
                <div id="weight-help" className="text-xs text-gray-400">
                  أدخل الوزن الإجمالي للشحنة بالكيلوغرام
                </div>
              </div>

              {/* Product Type */}
              <div className="space-y-2">
                <Label htmlFor="productType" className="text-gray-300 text-sm sm:text-base font-medium">
                  نوع المنتج <span className="text-red-400" aria-label="مطلوب">*</span>
                </Label>
                <Select onValueChange={(value) => handleInputChange('productType', value)} required>
                  <SelectTrigger 
                    className="bg-white/20 border-gray-400 text-white h-10 sm:h-11 focus:ring-2 focus:ring-sebaaq-blue focus:border-sebaaq-blue"
                    aria-describedby="product-type-help"
                  >
                    <SelectValue placeholder="اختر نوع المنتج" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-300">
                    <SelectItem value="non-electronic">
                      منتجات غير إلكترونية بدون بطارية
                    </SelectItem>
                    <SelectItem value="electronic-no-battery">
                      أجهزة إلكترونية بدون بطارية
                    </SelectItem>
                    <SelectItem value="with-battery">
                      منتجات تحتوي على بطارية
                    </SelectItem>
                  </SelectContent>
                </Select>
                <div id="product-type-help" className="text-xs text-gray-400">
                  اختر نوع المنتج لتحديد السعر المناسب
                </div>
              </div>

              <Button 
                onClick={calculateShipping}
                className="w-full bg-sebaaq-blue hover:bg-blue-600 text-white h-11 sm:h-12 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-sebaaq-blue/50 transition-all duration-200"
                aria-describedby="calculate-button-help"
              >
                <Package className="w-4 h-4 mr-2" aria-hidden="true" />
                احسب التكلفة
              </Button>
              <div id="calculate-button-help" className="text-xs text-gray-400 text-center mt-2">
                انقر لحساب تكلفة الشحن التقديرية بناءً على البيانات المدخلة
              </div>

              {/* Results */}
              {result.showResult && (
                <div className="mt-6 p-4 bg-sebaaq-blue/20 rounded-lg border border-sebaaq-blue/30">
                  <h3 className="text-white text-lg font-bold mb-3">نتائج الحساب:</h3>
                  <div className="space-y-2 text-gray-200">
                    <div className="flex justify-between">
                      <span>الحجم (CBM):</span>
                      <span className="font-semibold text-sebaaq-blue">{result.cbm} متر مكعب</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span>التكلفة الإجمالية:</span>
                      <span className="text-sebaaq-blue">{result.totalPrice} ريال سعودي</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ShippingCalculatorSection;