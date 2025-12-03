import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { formatPrice } from '@/lib/data';
import { useStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';
import StarRating from './StarRating';

interface WishlistProps {
  onContinueShopping?: () => void;
}

export default function Wishlist({ onContinueShopping }: WishlistProps) {
  const { wishlist, removeFromWishlist, addToCart } = useStore();
  const { toast } = useToast();

  const handleMoveToCart = (product: typeof wishlist[0]) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast({
      title: 'به سبد خرید منتقل شد',
      description: product.name,
    });
  };

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
          <Heart className="w-12 h-12 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-bold mb-2">لیست علاقه‌مندی‌ها خالی است</h2>
        <p className="text-muted-foreground mb-6">
          محصولات مورد علاقه خود را با کلیک روی قلب ذخیره کنید
        </p>
        <Button onClick={onContinueShopping} data-testid="browse-products">
          <ArrowLeft className="w-4 h-4 ml-2" />
          مشاهده محصولات
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">
        علاقه‌مندی‌ها ({new Intl.NumberFormat('fa-IR').format(wishlist.length)} محصول)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {wishlist.map((product) => (
          <Card key={product.id} className="p-4" data-testid={`wishlist-item-${product.id}`}>
            <div className="flex gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{product.brand}</p>
                <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                <StarRating rating={product.rating} size="sm" className="mt-1" />
                <p className="font-bold text-primary mt-2">{formatPrice(product.price)}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button
                className="flex-1"
                onClick={() => handleMoveToCart(product)}
                data-testid={`move-to-cart-${product.id}`}
              >
                <ShoppingCart className="w-4 h-4 ml-2" />
                افزودن به سبد
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="text-destructive"
                onClick={() => removeFromWishlist(product.id)}
                data-testid={`remove-wishlist-${product.id}`}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
