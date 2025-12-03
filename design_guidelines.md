# DermaRokh - Design Guidelines

## Design Approach
**Reference-Based E-Commerce Pattern** inspired by Persian cosmetics platforms (Alanza.ir, RojaShop.com, KimiyaStor.com) with vibrant, category-driven visual identity.

## Core Design Principles
- **RTL-First Architecture**: All layouts flow right-to-left for Persian language
- **Category Color Psychology**: Each product category has a distinct color identity to aid navigation and create visual delight
- **Mobile-First E-Commerce**: Optimized touch targets, thumb-friendly navigation, streamlined mobile checkout

## Color System

**Primary Palette:**
- Light Pink: #FF6B9D (primary actions, makeup category)
- Soft Blue: #A8D8EA (skin care category)
- Soft Orange: #FF9E64 (accents, highlights)
- Cream Background: #FAFAFA (main background)

**Category-Specific Colors:**
- Face Makeup: #FF6B9D (pink)
- Eye Makeup: #FF6B9D (pink variant)
- Eyebrow Makeup: #FF6B9D (pink variant)
- Lip Makeup: #FF6B9D (pink variant)
- Skin Care: #A8D8EA (soft blue)
- Hair Care: #FFD700 (gold)
- Perfumes: #FFB6C1 (light pink)
- Hygiene Products: #90EE90 (light green)

## Typography (RTL Persian Fonts)

**Font Stack:**
- Primary: 'Vazirmatn' or 'Yekan' (modern Persian sans-serif via CDN)
- Fallback: 'Tahoma', 'Arial', sans-serif

**Hierarchy:**
- Hero Headlines: 2.5rem-3.5rem, bold (700)
- Section Headers: 1.75rem-2.25rem, bold (700)
- Product Titles: 1.125rem-1.25rem, medium (500)
- Body Text: 1rem, regular (400)
- Small Text/Prices: 0.875rem, medium (500)
- Micro Text: 0.75rem, regular (400)

## Layout System

**Spacing Units:** Tailwind spacing with focus on 2, 4, 6, 8, 12, 16 units (p-2, p-4, p-6, p-8, etc.)

**Container Structure:**
- Max width: 1280px for desktop
- Mobile: full-width with px-4 padding
- Tablet: px-6 padding
- Desktop: px-8 padding

**Grid Patterns:**
- Product Cards: 1 column (mobile), 2 columns (tablet), 4 columns (desktop)
- Category Cards: 2 columns (mobile), 4 columns (tablet), 8 columns (desktop)
- Cart Layout: Single column (mobile), 2 columns (desktop - items + summary)

## Component Library

### Header/Navigation
- Fixed top header with logo (right), search bar (center), cart/wishlist icons (left)
- Mobile: Hamburger menu (left), logo (center), cart (right)
- Category navigation bar below header with horizontal scroll on mobile
- Each category chip shows category icon + name with its designated color

### Hero Section
- Full-width banner carousel (16:9 ratio on desktop, 4:3 on mobile)
- Lifestyle images showing Persian women using cosmetics products
- Overlaid text with blurred background panel for CTA buttons
- Auto-rotating banners showcasing seasonal offers/new arrivals

### Category Cards (Home Page)
- 8 vibrant category tiles in grid layout
- Each card: gradient background in category color, icon, Persian category name
- Subtle shadow on hover (desktop), tap feedback (mobile)
- Icons: cosmetic-related (lipstick, skincare bottle, perfume bottle, etc.)

### Product Cards
- Vertical card layout: Image (square 1:1) → Brand → Product Name → Price → Rating Stars → Add to Cart button
- Wishlist heart icon (top-right of image)
- Category color accent strip at top of card
- Hover: subtle lift shadow (desktop)
- Lazy-loaded product images with placeholder

### Filter Sidebar (Desktop) / Bottom Sheet (Mobile)
- Price range slider with Persian numerals
- Brand checkboxes with product count
- Star rating filter (5 stars to 1 star)
- Category multi-select
- Sort options: newest, cheapest, most expensive, highest rated
- Real-time filtering with smooth transitions

### Product Detail Page
- Image gallery: large main image + thumbnail strip below
- Right panel (RTL): Brand, Product name (large), Price (prominent), Rating summary
- Add to cart quantity selector + Add to Cart button (category color)
- Tabs below: Description, Ingredients, Reviews
- Related products carousel at bottom

### Search Bar
- Prominent search with magnifying glass icon
- Instant search results dropdown as user types
- Results show: product thumbnail, name, price, category badge
- "View all results" link at bottom

### Shopping Cart
- Floating cart icon with item count badge
- Cart page: Product list with thumbnail, name, price, quantity controls, remove button
- Sticky summary panel: Subtotal, Shipping (if applicable), Total
- Checkout button (prominent, category color)

### Wishlist
- Similar layout to cart
- Move to cart button for each item
- Empty state with illustration and CTA

### Reviews/Ratings
- Star rating component (5-point scale)
- User name, date, verified purchase badge
- Review text with "Read more" for long reviews
- Helpful voting buttons (thumbs up/down)

### Navigation
- Bottom navigation bar (mobile): Home, Categories, Search, Cart, Profile
- Icons with Persian labels
- Active state highlighted in primary color

## Images

**Hero Banners (3-5 rotating):**
- High-quality lifestyle photography of Persian women applying makeup/skincare
- Professional product photography on clean backgrounds
- Seasonal campaign imagery (Nowruz specials, summer skincare, etc.)
- Size: 1920x1080 (desktop), 800x600 (mobile)

**Product Images:**
- Clean white background product photography
- Square format (800x800px minimum)
- Multiple angles where relevant
- Ingredient/packaging detail shots

**Category Headers:**
- Abstract gradients or soft-focus beauty imagery in category colors
- Icons/illustrations for each category

**Empty States:**
- Friendly illustrations for empty cart, empty wishlist, no search results
- Persian text with encouraging CTAs

## Interactions & Micro-animations

**Minimal, Purposeful Motion:**
- Add to cart: Subtle "fly to cart" animation (item image moves toward cart icon)
- Filter changes: Smooth 200ms fade transitions
- Product card hover: Gentle lift (2px) with shadow
- Search: Dropdown slides down (150ms)
- Image galleries: Smooth crossfade between images
- Loading states: Skeleton screens in category colors

## Accessibility (RTL Considerations)

- All text direction: RTL
- Reading order: Right to left
- Navigation arrows: Reversed (← for next, → for previous)
- Form inputs: Right-aligned
- Clear focus states with category color outlines
- Persian screen reader optimization
- Sufficient color contrast (WCAG AA minimum)
- Touch targets minimum 44x44px

## Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Page Structure

**Home Page (Full-featured):**
1. Hero carousel (seasonal campaigns)
2. Category grid (8 categories)
3. Featured products section
4. Best sellers carousel
5. New arrivals section
6. Brand showcase
7. Instagram feed (social proof)
8. Newsletter signup (with offer incentive)
9. Footer (links, contact, social media)

**Product Listing Page:**
- Breadcrumb navigation
- Filter sidebar (desktop) or filter button (mobile)
- Results count and sort dropdown
- Product grid with pagination or infinite scroll

**Product Detail Page:**
- Full product information
- Comprehensive image gallery
- Detailed ingredients list
- Customer reviews section
- Related/recommended products

This design creates a vibrant, accessible, Persian-first e-commerce experience that celebrates beauty products through category-driven color psychology while maintaining professional polish and mobile-first usability.