import { useState } from 'react';
import { Search, ShoppingCart, Heart, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useStore } from '@/lib/store';
import { categories } from '@/lib/data';
import CategoryIcon from './CategoryIcon';

interface HeaderProps {
  onSearch?: (query: string) => void;
  onCategorySelect?: (categoryId: string) => void;
  onCartClick?: () => void;
  onWishlistClick?: () => void;
}

export default function Header({ onSearch, onCategorySelect, onCartClick, onWishlistClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartCount, wishlist, selectedCategory, setSelectedCategory } = useStore();
  const cartCount = getCartCount();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategorySelect?.(categoryId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button size="icon" variant="ghost" data-testid="mobile-menu-btn">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4 mt-8">
                <h3 className="font-bold text-lg">دسته‌بندی‌ها</h3>
                <div className="flex flex-col gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className={cn(
                        'flex items-center gap-3 p-3 rounded-md hover-elevate text-right',
                        selectedCategory === category.id && 'bg-primary/10'
                      )}
                    >
                      <CategoryIcon categoryId={category.id} color={category.color} size="sm" />
                      <span className="font-medium">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div 
              className="w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg border border-border bg-card"
            >
              د
            </div>
            <h1 className="font-bold text-xl hidden sm:block text-foreground">
              درمارُخ
            </h1>
          </div>

          {/* Search bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-4">
            <div className="relative w-full">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="جستجو در محصولات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 w-full"
                data-testid="search-input"
              />
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Search mobile */}
            <Button size="icon" variant="ghost" className="md:hidden" data-testid="mobile-search-btn">
              <Search className="w-5 h-5" />
            </Button>
            
            {/* Wishlist */}
            <Button
              size="icon"
              variant="ghost"
              onClick={onWishlistClick}
              className="relative"
              data-testid="wishlist-btn"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <Badge className="absolute -top-1 -left-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                  {wishlist.length > 9 ? '۹+' : new Intl.NumberFormat('fa-IR').format(wishlist.length)}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button
              size="icon"
              variant="ghost"
              onClick={onCartClick}
              className="relative"
              data-testid="cart-btn"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -left-1 h-5 w-5 p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs">
                  {cartCount > 9 ? '۹+' : new Intl.NumberFormat('fa-IR').format(cartCount)}
                </Badge>
              )}
            </Button>

            {/* User */}
            <Button size="icon" variant="ghost" className="hidden md:flex" data-testid="user-btn">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category navigation - Desktop */}
      <nav className="hidden md:block border-t border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            <Button
              variant={selectedCategory === null ? 'default' : 'ghost'}
              size="sm"
              onClick={() => {
                setSelectedCategory(null);
                onCategorySelect?.('');
              }}
              className="whitespace-nowrap"
            >
              همه محصولات
            </Button>
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => handleCategoryClick(category.id)}
                className="whitespace-nowrap gap-2"
                style={selectedCategory === category.id ? { backgroundColor: category.color } : undefined}
              >
                <CategoryIcon categoryId={category.id} color={selectedCategory === category.id ? '#fff' : category.color} size="xs" />
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
