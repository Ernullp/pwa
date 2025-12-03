import { useMemo } from 'react';
import ProductCard from './ProductCard';
import { Skeleton } from '@/components/ui/skeleton';
import { type Product } from '@/lib/data';
import { useStore } from '@/lib/store';

interface ProductGridProps {
  products: Product[];
  onProductClick?: (product: Product) => void;
  loading?: boolean;
}

export default function ProductGrid({ products, onProductClick, loading }: ProductGridProps) {
  const {
    selectedCategory,
    priceRange,
    selectedBrands,
    minRating,
    sortBy,
    searchQuery,
  } = useStore();

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(p => p.categoryId === selectedCategory);
    }

    // Filter by price range
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Filter by brands
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brandId));
    }

    // Filter by rating
    if (minRating > 0) {
      result = result.filter(p => p.rating >= minRating);
    }

    // Sort
    switch (sortBy) {
      case 'cheapest':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'expensive':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        // Keep original order (newest first)
        break;
    }

    return result;
  }, [products, selectedCategory, priceRange, selectedBrands, minRating, sortBy, searchQuery]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-square rounded-md" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
          <span className="text-4xl">🔍</span>
        </div>
        <h2 className="text-xl font-bold mb-2">محصولی یافت نشد</h2>
        <p className="text-muted-foreground">
          لطفا فیلترهای جستجو را تغییر دهید
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4">
        {new Intl.NumberFormat('fa-IR').format(filteredProducts.length)} محصول
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick?.(product)}
          />
        ))}
      </div>
    </div>
  );
}
