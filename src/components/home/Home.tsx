import Header from './sections/header/Header';
import HeroSection from './sections/hero-section/HeroSection';
import Stats from './sections/stats';
import ProblemSolution from './sections/problem-solution';
import HowItWorks from './sections/how-it-works';
import Features from './sections/features';
import ForWho from './sections/for-who';
import Pricing from './sections/pricing';
import Testimonials from './sections/testimonials';
import CTA from './sections/cta';
import Footer from '../shared/footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      <HeroSection />
      <Stats />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <ForWho />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
