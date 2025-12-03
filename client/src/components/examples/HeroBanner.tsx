import HeroBanner from '../HeroBanner';

export default function HeroBannerExample() {
  return (
    <div className="p-4" dir="rtl">
      <HeroBanner onButtonClick={(link) => console.log('Banner clicked:', link)} />
    </div>
  );
}
