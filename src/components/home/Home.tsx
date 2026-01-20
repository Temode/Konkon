import Header from './sections/header/Header';
import HeroSection from './sections/hero-section/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <HeroSection />
    </div>
  );
}
