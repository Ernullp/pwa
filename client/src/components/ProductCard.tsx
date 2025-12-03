import { Heart, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import StarRating from './StarRating';
import { cn } from '@/lib/utils';
import { formatPrice, getCategoryColor, type Product } from '@/lib/data';
import { useStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, cart } = useStore();
  const { toast } = useToast();
  const categoryColor = getCategoryColor(product.categoryId);
  const inWishlist = isInWishlist(product.id);
  const inCart = cart.some(item => item.product.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast({
      title: 'به سبد خرید اضافه شد',
      description: product.name,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast({
        title: 'از لیست علاقه‌مندی‌ها حذف شد',
        description: product.name,
      });
    } else {
      addToWishlist(product);
      toast({
        title: 'به لیست علاقه‌مندی‌ها اضافه شد',
        description: product.name,
      });
    }
  };

  return (
    <div
      onClick={onClick}
      className="group bg-card rounded-md overflow-visible border border-card-border hover-elevate cursor-pointer"
      data-testid={`product-card-${product.id}`}
    >
      {/* Category color strip */}
      <div
        className="h-1 w-full"
        style={{ backgroundColor: categoryColor }}
      />

      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Wishlist button */}
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            'absolute top-2 left-2 bg-background/80 backdrop-blur-sm',
            inWishlist && 'text-red-500'
          )}
          onClick={handleToggleWishlist}
          data-testid={`wishlist-btn-${product.id}`}
        >
          <Heart className={cn('w-4 h-4', inWishlist && 'fill-current')} />
        </Button>

        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.isNew && (
            <Badge className="bg-green-500 text-white text-xs">جدید</Badge>
          )}
          {product.isBestSeller && (
            <Badge className="bg-amber-500 text-white text-xs">پرفروش</Badge>
          )}
          {product.originalPrice && (
            <Badge className="bg-red-500 text-white text-xs">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% تخفیف
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
        <h3 className="font-medium text-sm text-foreground line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        
        <div className="mt-2">
          <StarRating rating={product.rating} size="sm" reviewCount={product.reviewCount} />
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="font-bold text-sm text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          <Button
            size="sm"
            onClick={handleAddToCart}
            className={cn(
              'transition-colors',
              inCart ? 'bg-green-600 hover:bg-green-700' : ''
            )}
            style={!inCart ? { backgroundColor: categoryColor } : undefined}
            data-testid={`add-to-cart-${product.id}`}
          >
            {inCart ? (
              <Check className="w-4 h-4" />
            ) : (
              <ShoppingCart className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
