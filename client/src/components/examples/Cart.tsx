import Cart from '../Cart';
import { products } from '@/lib/data';
import { useStore } from '@/lib/store';
import { useEffect } from 'react';

export default function CartExample() {
  const { addToCart } = useStore();

  // TODO: Remove mock - add sample items to cart
  useEffect(() => {
    addToCart(products[0]);
    addToCart(products[1]);
    addToCart(products[2]);
  }, []);

  return (
    <div className="p-4" dir="rtl">
      <Cart
        onCheckout={() => console.log('Checkout clicked')}
        onContinueShopping={() => console.log('Continue shopping')}
      />
    </div>
  );
}
