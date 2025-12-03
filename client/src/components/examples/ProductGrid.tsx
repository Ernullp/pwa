import ProductGrid from '../ProductGrid';
import { products } from '@/lib/data';

export default function ProductGridExample() {
  return (
    <div className="p-4" dir="rtl">
      <ProductGrid
        products={products}
        onProductClick={(p) => console.log('Product clicked:', p.name)}
      />
    </div>
  );
}
