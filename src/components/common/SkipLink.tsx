
import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="skip-link bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 transition-transform duration-300"
      style={{ transform: 'translateY(-100%)' }}
      onFocus={(e) => {
        e.target.style.transform = 'translateY(0)';
      }}
      onBlur={(e) => {
        e.target.style.transform = 'translateY(-100%)';
      }}
    >
      انتقل إلى المحتوى الرئيسي
    </a>
  );
};

export default SkipLink;
