import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  reviewCount?: number;
  interactive?: boolean;
  onChange?: (rating: number) => void;
  className?: string;
}

export default function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = false,
  reviewCount,
  interactive = false,
  onChange,
  className
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const handleClick = (index: number) => {
    if (interactive && onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }).map((_, index) => {
          const filled = index < Math.floor(rating);
          const partial = index === Math.floor(rating) && rating % 1 > 0;
          
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(index)}
              className={cn(
                'relative',
                interactive && 'cursor-pointer hover:scale-110 transition-transform'
              )}
              disabled={!interactive}
              data-testid={`star-${index + 1}`}
            >
              <Star
                className={cn(
                  sizeClasses[size],
                  filled ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-gray-600'
                )}
              />
              {partial && (
                <Star
                  className={cn(
                    sizeClasses[size],
                    'absolute inset-0 fill-amber-400 text-amber-400'
                  )}
                  style={{ clipPath: `inset(0 ${100 - (rating % 1) * 100}% 0 0)` }}
                />
              )}
            </button>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm text-muted-foreground mr-1">
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className="text-xs text-muted-foreground">
          ({new Intl.NumberFormat('fa-IR').format(reviewCount)} نظر)
        </span>
      )}
    </div>
  );
}
