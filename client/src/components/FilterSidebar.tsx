import { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { brands, categories, formatPrice } from '@/lib/data';
import { useStore } from '@/lib/store';
import StarRating from './StarRating';
import CategoryIcon from './CategoryIcon';

interface FilterSidebarProps {
  onFilterChange?: () => void;
}

function FilterContent({ onFilterChange }: FilterSidebarProps) {
  const {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    selectedBrands,
    setSelectedBrands,
    minRating,
    setMinRating,
    sortBy,
    setSortBy,
    resetFilters,
  } = useStore();

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    brand: true,
    rating: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleBrandToggle = (brandId: string) => {
    const newBrands = selectedBrands.includes(brandId)
      ? selectedBrands.filter(id => id !== brandId)
      : [...selectedBrands, brandId];
    setSelectedBrands(newBrands);
    onFilterChange?.();
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
    onFilterChange?.();
  };

  const handleRatingChange = (rating: number) => {
    setMinRating(rating === minRating ? 0 : rating);
    onFilterChange?.();
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Sort */}
      <div>
        <label className="text-sm font-medium mb-2 block">مرتب‌سازی</label>
        <Select value={sortBy} onValueChange={(v) => { setSortBy(v as typeof sortBy); onFilterChange?.(); }}>
          <SelectTrigger data-testid="sort-select">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">جدیدترین</SelectItem>
            <SelectItem value="cheapest">ارزان‌ترین</SelectItem>
            <SelectItem value="expensive">گران‌ترین</SelectItem>
            <SelectItem value="rating">بالاترین امتیاز</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Categories */}
      <div>
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-sm font-medium mb-2"
        >
          <span>دسته‌بندی</span>
          {expandedSections.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.category && (
          <div className="flex flex-col gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => { setSelectedCategory(category.id === selectedCategory ? null : category.id); onFilterChange?.(); }}
                className={cn(
                  'flex items-center gap-2 p-2 rounded-md text-sm text-right hover-elevate',
                  selectedCategory === category.id && 'bg-primary/10'
                )}
                data-testid={`filter-category-${category.id}`}
              >
                <CategoryIcon categoryId={category.id} color={category.color} size="xs" />
                <span className="flex-1">{category.name}</span>
                <span className="text-xs text-muted-foreground">
                  {new Intl.NumberFormat('fa-IR').format(category.productCount)}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-sm font-medium mb-2"
        >
          <span>محدوده قیمت</span>
          {expandedSections.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.price && (
          <div className="px-2">
            <Slider
              value={priceRange}
              min={0}
              max={2000000}
              step={50000}
              onValueChange={handlePriceChange}
              className="mt-4"
              data-testid="price-slider"
            />
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        )}
      </div>

      {/* Brands */}
      <div>
        <button
          onClick={() => toggleSection('brand')}
          className="flex items-center justify-between w-full text-sm font-medium mb-2"
        >
          <span>برند</span>
          {expandedSections.brand ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.brand && (
          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
            {brands.map(brand => (
              <label
                key={brand.id}
                className="flex items-center gap-2 text-sm cursor-pointer"
              >
                <Checkbox
                  checked={selectedBrands.includes(brand.id)}
                  onCheckedChange={() => handleBrandToggle(brand.id)}
                  data-testid={`filter-brand-${brand.id}`}
                />
                <span>{brand.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div>
        <button
          onClick={() => toggleSection('rating')}
          className="flex items-center justify-between w-full text-sm font-medium mb-2"
        >
          <span>حداقل امتیاز</span>
          {expandedSections.rating ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.rating && (
          <div className="flex flex-col gap-2">
            {[4, 3, 2, 1].map(rating => (
              <button
                key={rating}
                onClick={() => handleRatingChange(rating)}
                className={cn(
                  'flex items-center gap-2 p-2 rounded-md hover-elevate',
                  minRating === rating && 'bg-primary/10'
                )}
                data-testid={`filter-rating-${rating}`}
              >
                <StarRating rating={rating} size="sm" />
                <span className="text-xs text-muted-foreground">و بالاتر</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Reset */}
      <Button
        variant="outline"
        onClick={() => { resetFilters(); onFilterChange?.(); }}
        className="w-full"
        data-testid="reset-filters"
      >
        <X className="w-4 h-4 ml-2" />
        پاک کردن فیلترها
      </Button>
    </div>
  );
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 bg-card rounded-md border border-card-border p-4">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Filter className="w-5 h-5" />
            فیلترها
          </h2>
          <FilterContent onFilterChange={onFilterChange} />
        </div>
      </aside>

      {/* Mobile filter sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden fixed bottom-20 left-4 z-40 shadow-lg" data-testid="mobile-filter-btn">
            <Filter className="w-4 h-4 ml-2" />
            فیلترها
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              فیلترها
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterContent onFilterChange={onFilterChange} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
