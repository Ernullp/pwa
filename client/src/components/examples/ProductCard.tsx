import ProductCard from '../ProductCard';
import { products } from '@/lib/data';

export default function ProductCardExample() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4" dir="rtl">
      {products.slice(0, 4).map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={() => console.log('Product clicked:', product.name)}
        />
      ))}
    </div>
  );
}
