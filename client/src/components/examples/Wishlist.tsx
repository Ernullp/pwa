import Wishlist from '../Wishlist';
import { products } from '@/lib/data';
import { useStore } from '@/lib/store';
import { useEffect } from 'react';

export default function WishlistExample() {
  const { addToWishlist } = useStore();

  // TODO: Remove mock - add sample items to wishlist
  useEffect(() => {
    addToWishlist(products[5]);
    addToWishlist(products[10]);
    addToWishlist(products[15]);
  }, []);

  return (
    <div className="p-4" dir="rtl">
      <Wishlist onContinueShopping={() => console.log('Browse products')} />
    </div>
  );
}
