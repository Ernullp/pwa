import { Home, Grid3X3, Search, ShoppingCart, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useStore } from '@/lib/store';

interface NavItem {
  id: string;
  label: string;
  icon: typeof Home;
  badge?: number;
}

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const { getCartCount } = useStore();
  const cartCount = getCartCount();

  const navItems: NavItem[] = [
    { id: 'home', label: 'خانه', icon: Home },
    { id: 'categories', label: 'دسته‌ها', icon: Grid3X3 },
    { id: 'search', label: 'جستجو', icon: Search },
    { id: 'cart', label: 'سبد', icon: ShoppingCart, badge: cartCount },
    { id: 'profile', label: 'حساب', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border lg:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                'flex flex-col items-center justify-center gap-1 flex-1 h-full relative transition-colors',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
              data-testid={`nav-${item.id}`}
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {item.badge !== undefined && item.badge > 0 && (
                  <Badge className="absolute -top-2 -left-2 h-4 w-4 p-0 flex items-center justify-center bg-primary text-primary-foreground text-[10px]">
                    {item.badge > 9 ? '۹+' : new Intl.NumberFormat('fa-IR').format(item.badge)}
                  </Badge>
                )}
              </div>
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-b-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
