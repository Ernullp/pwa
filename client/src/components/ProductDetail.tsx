import { useState } from 'react';
import { Heart, ShoppingCart, Share2, Minus, Plus, Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import StarRating from './StarRating';
import Reviews from './Reviews';
import { formatPrice, getCategoryColor, type Product, mockReviews } from '@/lib/data';
import { useStore } from '@/lib/store';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ProductDetailProps {
  product: Product;
  onBack?: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, cart } = useStore();
  const { toast } = useToast();
  
  const categoryColor = getCategoryColor(product.categoryId);
  const inWishlist = isInWishlist(product.id);
  const inCart = cart.some(item => item.product.id === product.id);

  // Mock multiple images
  const images = product.images || [product.image, product.image, product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast({
      title: 'به سبد خرید اضافه شد',
      description: `${new Intl.NumberFormat('fa-IR').format(quantity)} عدد ${product.name}`,
    });
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast({ title: 'از لیست علاقه‌مندی‌ها حذف شد' });
    } else {
      addToWishlist(product);
      toast({ title: 'به لیست علاقه‌مندی‌ها اضافه شد' });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: 'لینک کپی شد' });
    }
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <button onClick={onBack} className="hover:text-foreground" data-testid="back-btn">
          صفحه اصلی
        </button>
        <ChevronRight className="w-4 h-4" />
        <span>{product.brand}</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-md bg-muted">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.originalPrice && (
              <Badge className="absolute top-4 right-4 bg-red-500">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% تخفیف
              </Badge>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  'w-20 h-20 rounded-md overflow-hidden border-2 shrink-0',
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                )}
                data-testid={`thumbnail-${index}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
            <h1 className="text-2xl font-bold">{product.name}</h1>
          </div>

          <StarRating
            rating={product.rating}
            size="lg"
            showValue
            reviewCount={product.reviewCount}
          />

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Stock status */}
          <div className="flex items-center gap-2">
            {product.inStock ? (
              <>
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm text-green-600">موجود در انبار</span>
              </>
            ) : (
              <>
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-sm text-red-600">ناموجود</span>
              </>
            )}
          </div>

          {/* Quantity selector */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">تعداد:</span>
            <div className="flex items-center gap-2 bg-muted rounded-md">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                data-testid="decrease-qty"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-10 text-center font-medium">
                {new Intl.NumberFormat('fa-IR').format(quantity)}
              </span>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setQuantity(quantity + 1)}
                data-testid="increase-qty"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              style={{ backgroundColor: inCart ? '#16a34a' : categoryColor }}
              data-testid="add-to-cart"
            >
              {inCart ? (
                <>
                  <Check className="w-5 h-5 ml-2" />
                  در سبد خرید
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  افزودن به سبد خرید
                </>
              )}
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={handleToggleWishlist}
              className={cn(inWishlist && 'text-red-500 border-red-500')}
              data-testid="wishlist-toggle"
            >
              <Heart className={cn('w-5 h-5', inWishlist && 'fill-current')} />
            </Button>
            <Button size="icon" variant="outline" onClick={handleShare} data-testid="share-btn">
              <Share2 className="w-5 h-5" />
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {product.isNew && <Badge className="bg-green-500">محصول جدید</Badge>}
            {product.isBestSeller && <Badge className="bg-amber-500">پرفروش</Badge>}
            <Badge variant="outline">ارسال سریع</Badge>
            <Badge variant="outline">گارانتی اصالت</Badge>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="description" className="mt-8">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            توضیحات
          </TabsTrigger>
          <TabsTrigger
            value="ingredients"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            مواد تشکیل‌دهنده
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
          >
            نظرات ({new Intl.NumberFormat('fa-IR').format(product.reviewCount)})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4">
          <Card className="p-6">
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </Card>
        </TabsContent>
        <TabsContent value="ingredients" className="mt-4">
          <Card className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              {product.ingredients || 'اطلاعات مواد تشکیل‌دهنده در حال به‌روزرسانی است.'}
            </p>
          </Card>
        </TabsContent>
        <TabsContent value="reviews" className="mt-4">
          <Reviews productId={product.id} reviews={mockReviews} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
