
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'جاري التحميل...' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2" role="status" aria-live="polite">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-primary`} />
      {text && (
        <span className="text-sm text-muted-foreground font-medium">
          {text}
        </span>
      )}
      <span className="sr-only">جاري تحميل المحتوى</span>
    </div>
  );
};

export default LoadingSpinner;
