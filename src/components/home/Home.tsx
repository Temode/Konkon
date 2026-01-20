import Header from './sections/header/Header';
import HeroSection from './sections/hero-section/HeroSection';
import HowItWorks from './sections/how-it-works';
import FeaturedProperties from './sections/featured-properties';
import Features from './sections/features';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <HeroSection />
      <HowItWorks />
      <FeaturedProperties />
      <Features />
    </div>
  );
}
