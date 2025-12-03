import ProductDetail from '../ProductDetail';
import { products } from '@/lib/data';

export default function ProductDetailExample() {
  return (
    <div className="p-4" dir="rtl">
      <ProductDetail
        product={products[0]}
        onBack={() => console.log('Back clicked')}
      />
    </div>
  );
}
