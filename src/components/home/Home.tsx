import Header from './sections/header/Header';
import HeroSection from './sections/hero-section/HeroSection';
import FeaturedProperties from './sections/featured-properties';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <HeroSection />
      <FeaturedProperties />
    </div>
  );
}
