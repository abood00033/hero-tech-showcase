import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({
  title = "سباق للآلات الصناعية - استيراد وتوريد المكائن من الصين",
  description = "شركة سباق المتخصصة في استيراد وتوريد المكائن الصناعية من الصين. نقدم خدمات التركيب والصيانة مع ضمان الجودة ودعم فني على مدار الساعة.",
  keywords = "استيراد من الصين, مكائن صناعية, غسيل سيارات, مكائن بيع ذاتي, خطوط إنتاج, صيانة مكائن, سي باك",
  image = "/lovable-uploads/130fbaf4-5a41-47ad-9bb9-9693989a851b.png",
  url = "https://sebaaq.com"
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="شركة سباق للآلات الصناعية" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Arabic" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ar_SA" />
      <meta property="og:site_name" content="سباق للآلات الصناعية" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3b82f6" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "شركة سباق للآلات الصناعية",
          "description": description,
          "url": url,
          "telephone": "+966594196930",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "SA",
            "addressLocality": "الرياض"
          },
          "serviceArea": "المملكة العربية السعودية",
          "priceRange": "$$",
          "openingHours": "Mo-Su 00:00-23:59"
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;