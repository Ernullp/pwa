import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Sparkles, Gift, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BannerSlide {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  accent: string;
}

interface HeroBannerProps {
  onButtonClick?: (link: string) => void;
}

const slides: BannerSlide[] = [
  {
    id: '1',
    title: 'تخفیف ویژه زمستانه',
    subtitle: 'تا ۵۰٪ تخفیف روی بهترین محصولات مراقبت پوست',
    badge: 'پیشنهاد ویژه',
    buttonText: 'مشاهده محصولات',
    buttonLink: '/category/skincare',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80',
    accent: '#FF6B9D',
  },
  {
    id: '2',
    title: 'کالکشن جدید آرایشی',
    subtitle: 'برندهای معتبر جهانی با ضمانت اصالت کالا',
    badge: 'جدید',
    buttonText: 'کشف کنید',
    buttonLink: '/category/face-makeup',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&q=80',
    accent: '#A8D8EA',
  },
  {
    id: '3',
    title: 'عطرهای اصل و اورجینال',
    subtitle: 'مجموعه‌ای منحصربه‌فرد از بهترین رایحه‌های دنیا',
    badge: 'اورجینال',
    buttonText: 'خرید کنید',
    buttonLink: '/category/perfume',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80',
    accent: '#FFB6C1',
  },
];

export default function HeroBanner({ onButtonClick }: HeroBannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="space-y-4">
      {/* Main Banner */}
      <div 
        className="relative w-full aspect-[16/9] md:aspect-[21/8] overflow-hidden rounded-md"
        data-testid="hero-banner"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-lg text-white">
              {slide.badge && (
                <span 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3 bg-white/20 backdrop-blur-sm text-white"
                >
                  <Sparkles className="w-3 h-3" />
                  {slide.badge}
                </span>
              )}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg opacity-90 mb-5 leading-relaxed">
                {slide.subtitle}
              </p>
              <Button
                size="lg"
                onClick={() => onButtonClick?.(slide.buttonLink)}
                className="text-white border-2 border-white bg-white/20 backdrop-blur-sm hover:bg-white/30"
                data-testid={`banner-btn-${slide.id}`}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          size="icon"
          variant="ghost"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
          data-testid="banner-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
          data-testid="banner-next"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                index === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              )}
              data-testid={`banner-dot-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Feature Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        {[
          { icon: Truck, text: 'ارسال رایگان بالای ۵۰۰ هزار', color: '#4CAF50' },
          { icon: Shield, text: 'ضمانت اصالت کالا', color: '#2196F3' },
          { icon: Gift, text: 'هدیه ویژه خرید اول', color: '#FF6B9D' },
          { icon: Sparkles, text: 'بازگشت ۷ روزه', color: '#FFB300' },
        ].map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-2 p-2.5 md:p-3 rounded-md bg-card border border-card-border"
          >
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${feature.color}20` }}
            >
              <feature.icon className="w-4 h-4" style={{ color: feature.color }} />
            </div>
            <span className="text-xs font-medium text-foreground leading-tight">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
