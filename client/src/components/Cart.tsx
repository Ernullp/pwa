import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/data';
import { useStore } from '@/lib/store';

interface CartProps {
  onCheckout?: () => void;
  onContinueShopping?: () => void;
}

export default function Cart({ onCheckout, onContinueShopping }: CartProps) {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useStore();
  const total = getCartTotal();
  const shippingCost = total >= 500000 ? 0 : 45000;
  const finalTotal = total + shippingCost;

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
          <ShoppingBag className="w-12 h-12 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-bold mb-2">سبد خرید خالی است</h2>
        <p className="text-muted-foreground mb-6">
          محصولات مورد علاقه خود را به سبد خرید اضافه کنید
        </p>
        <Button onClick={onContinueShopping} data-testid="continue-shopping">
          <ArrowLeft className="w-4 h-4 ml-2" />
          ادامه خرید
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Cart items */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">
            سبد خرید ({new Intl.NumberFormat('fa-IR').format(cart.length)} محصول)
          </h2>
          <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive" data-testid="clear-cart">
            <Trash2 className="w-4 h-4 ml-2" />
            پاک کردن سبد
          </Button>
        </div>

        {cart.map(({ product, quantity }) => (
          <Card key={product.id} className="p-4" data-testid={`cart-item-${product.id}`}>
            <div className="flex gap-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{product.brand}</p>
                <h3 className="font-medium text-sm line-clamp-2">{product.name}</h3>
                <p className="font-bold text-primary mt-1">{formatPrice(product.price)}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-destructive"
                  onClick={() => removeFromCart(product.id)}
                  data-testid={`remove-item-${product.id}`}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <div className="flex items-center gap-2 bg-muted rounded-md">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    data-testid={`decrease-qty-${product.id}`}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">
                    {new Intl.NumberFormat('fa-IR').format(quantity)}
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    data-testid={`increase-qty-${product.id}`}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Order summary */}
      <Card className="lg:w-80 p-6 h-fit lg:sticky lg:top-24">
        <h3 className="font-bold text-lg mb-4">خلاصه سفارش</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">مجموع محصولات</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">هزینه ارسال</span>
            <span className={shippingCost === 0 ? 'text-green-600' : ''}>
              {shippingCost === 0 ? 'رایگان' : formatPrice(shippingCost)}
            </span>
          </div>
          {shippingCost > 0 && (
            <p className="text-xs text-muted-foreground">
              خرید بالای ۵۰۰,۰۰۰ تومان ارسال رایگان
            </p>
          )}
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between font-bold mb-4">
          <span>مبلغ قابل پرداخت</span>
          <span className="text-primary">{formatPrice(finalTotal)}</span>
        </div>

        <Button
          className="w-full"
          size="lg"
          onClick={onCheckout}
          data-testid="checkout-btn"
        >
          تکمیل خرید
        </Button>

        <Button
          variant="ghost"
          className="w-full mt-2"
          onClick={onContinueShopping}
          data-testid="continue-shopping-btn"
        >
          <ArrowLeft className="w-4 h-4 ml-2" />
          ادامه خرید
        </Button>
      </Card>
    </div>
  );
}
