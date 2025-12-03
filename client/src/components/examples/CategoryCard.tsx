import CategoryCard from '../CategoryCard';
import { categories } from '@/lib/data';

export default function CategoryCardExample() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4" dir="rtl">
      {categories.slice(0, 4).map(category => (
        <CategoryCard
          key={category.id}
          category={category}
          onClick={() => console.log('Category clicked:', category.name)}
        />
      ))}
    </div>
  );
}
