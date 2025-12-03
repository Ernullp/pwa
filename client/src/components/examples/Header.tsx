import Header from '../Header';

export default function HeaderExample() {
  return (
    <div dir="rtl">
      <Header
        onSearch={(q) => console.log('Search:', q)}
        onCategorySelect={(id) => console.log('Category:', id)}
        onCartClick={() => console.log('Cart clicked')}
        onWishlistClick={() => console.log('Wishlist clicked')}
      />
    </div>
  );
}
