import { cn } from '@/lib/utils';
import type { Category } from '@/lib/data';
import CategoryIcon from './CategoryIcon';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
  compact?: boolean;
}

export default function CategoryCard({ category, onClick, compact = false }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative overflow-visible rounded-md transition-all duration-200 border',
        'hover-elevate active-elevate-2',
        compact ? 'p-2.5' : 'p-4'
      )}
      style={{
        background: `linear-gradient(145deg, ${category.color}08, ${category.color}15)`,
        borderColor: `${category.color}30`,
      }}
      data-testid={`category-card-${category.id}`}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <div 
          className={cn(
            'rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110',
            compact ? 'w-10 h-10' : 'w-14 h-14'
          )}
          style={{ 
            background: `linear-gradient(135deg, ${category.color}20, ${category.color}35)`,
          }}
        >
          <CategoryIcon 
            categoryId={category.id} 
            color={category.color} 
            size={compact ? 'sm' : 'md'}
          />
        </div>
        <div>
          <h3 className={cn('font-semibold text-foreground', compact ? 'text-[10px]' : 'text-sm')}>
            {category.name}
          </h3>
          {!compact && (
            <p className="text-xs text-muted-foreground mt-0.5">
              {new Intl.NumberFormat('fa-IR').format(category.productCount)} محصول
            </p>
          )}
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-md opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: category.color }}
      />
    </button>
  );
}
