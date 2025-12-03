import { cn } from '@/lib/utils';

interface CategoryIconProps {
  categoryId: string;
  color: string;
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

export default function CategoryIcon({ categoryId, color, size = 'md', className }: CategoryIconProps) {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
  };
  
  const iconSize = sizeClasses[size];
  const strokeWidth = size === 'xs' ? 2 : 1.5;

  const icons: Record<string, JSX.Element> = {
    'face-makeup': (
      <svg viewBox="0 0 24 24" className={cn(iconSize, className)} fill="none" stroke={color} strokeWidth={strokeWidth}>
        <path d="M3 12c0-1 .5-2 1-2.5L5 7c.5-.5 1-1 2-1h10c1 0 1.5.5 2 1l1 2.5c.5.5 1 1.5 1 2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12h16" strokeLinecap="round" />
        <circle cx="8" cy="10" r="1" fill={color} />
        <circle cx="16" cy="10" r="1" fill={color} />
        <path d="M7 14h10" strokeLinecap="round" />
      </svg>
    ),
    'eye-makeup': (
      <svg viewBox="0 0 24 24" className={cn(iconSize, className)} fill="none" stroke={color} strokeWidth={strokeWidth}>
        <path d="M2 12s3-5 10-5 10 5 10 5-3 5-10 5-10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.5" fill={color} opacity="0.3" />
        <circle cx="12" cy="12" r="1.5" fill={color} />
        <path d="M4 9s1-2 2-2.5M20 9s-1-2-2-2.5" strokeLinecap="round" />
      </svg>
    ),
    'eyebrow-makeup': (
      <svg viewBox="0 0 24 24" className={cn(iconSize, className)} fill="none" stroke={color} strokeWidth={strokeWidth}>
        <path d="M3 9c3-1 6-1.5 9-1.5s6 .5 9 1.5" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.2" />
        <path d="M3 9c3-1 6-1.5 9-1.5s6 .5 9 1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="14" r="0.7" fill={color} />
        <circle cx="16" cy="14" r="0.7" fill={color} />
        <path d="M8 14h8" strokeLinecap="round" />
      </svg>
    ),
    'lip-makeup': (
      <svg viewBox="0 0 24 24" className={cn(iconSize, className)} fill="none" stroke={color} strokeWidth={strokeWidth}>
        <path d="M6 14c0 1.5 2 2.5 6 2.5s6-1 6-2.5" fill={color} opacity="0.2" strokeLinecap="round" />
        <path d="M6 14c0 1.5 2 2.5 6 2.5s6-1 6-2.5" strokeLinecap="round" />
        <path d="M6 14c0-1 2-1.5 6-1.5s6 .5 6 1.5" strokeLinecap="round" />
        <path d="M12 12.5v2" strokeLinecap="round" />
      </svg>
    ),
    'skincare': (
      <svg viewBox="0 0 24 24" className={cn(iconSize, className)} fill="none" stroke={color} strokeWidth={strokeWidth}>
        <rect x="7" y="6" width="10" height="12" rx="2" fill={color} opacity="0.2" />
        <rect x="7" y="6" width="10" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" fill={color} opacity="0.5" />
        <path d="M10 9h4M10 15h4" strokeLinecap="round" />
      </svg>
    ),
    'haircare': (
      <svg viewBox="0 0 24 24" className={cn(iconSize, className)} fill="none" stroke={color} strokeWidth={strokeWidth}>
        <path d="M8 4c0-1 2-2 4-2s4 1 4 2v2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6v10" strokeLinecap="round" />
        <path d="M8 10c-1 0-2 1-2 2v4c0 1 1 2 2 2" strokeLinecap="round" />
        <path d="M16 10c1 0 2 1 2 2v4c0 1-1 2-2 2" strokeLinecap="round" />
        <path d="M9 8l-1-2M15 8l1-2" strokeLinecap="round" />
      </svg>
    ),
    'perfume': (
      <svg viewBox="0 0 24 24" className={cn(iconSize, className)} fill="none" stroke={color} strokeWidth={strokeWidth}>
        <rect x="10" y="2" width="4" height="2" rx="0.5" fill={color} opacity="0.3" />
        <rect x="10" y="2" width="4" height="2" rx="0.5" />
        <path d="M12 4v1" strokeLinecap="round" />
        <path d="M8 5h8l1 14c0 1-1 2-2 2h-8c-1 0-2-1-2-2l1-14z" strokeLinecap="round" strokeLinejoin="round" fill={color} opacity="0.1" />
        <path d="M8 5h8l1 14c0 1-1 2-2 2h-8c-1 0-2-1-2-2l1-14z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="1.5" fill={color} opacity="0.4" />
      </svg>
    ),
    'hygiene': (
      <svg viewBox="0 0 24 24" className={cn(iconSize, className)} fill="none" stroke={color} strokeWidth={strokeWidth}>
        <rect x="6" y="6" width="12" height="12" rx="2" fill={color} opacity="0.1" />
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <circle cx="12" cy="12" r="3" fill={color} opacity="0.2" />
        <path d="M10 12h4M12 10v4" strokeLinecap="round" />
        <path d="M7 7l-2-2M17 7l2-2" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[categoryId] || (
    <svg viewBox="0 0 24 24" className={cn(iconSize, className)} fill="none" stroke={color} strokeWidth={strokeWidth}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" />
    </svg>
  );
}
