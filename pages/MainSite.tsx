import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { BentoServices } from '../components/BentoServices';
import { StatsSection } from '../components/StatsSection';
import { VisionarySection } from '../components/VisionarySection';
import { ProblemSolver } from '../components/ProblemSolver';
import { CaseStudies } from '../components/CaseStudies';
import { ManifestoStrip } from '../components/ManifestoStrip';
import { WhyEmozen } from '../components/WhyEmozen';
import { Testimonials } from '../components/Testimonials';
import { Careers } from '../components/Careers';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export function MainSite() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100svh', overflowX: 'hidden' }}>
      <Navigation />
      <Hero />
      <TrustBar />
      <BentoServices />
      <StatsSection />
      <VisionarySection />
      <ProblemSolver />
      <CaseStudies />
      <ManifestoStrip />
      <WhyEmozen />
      <Testimonials />
      <Careers />
      <CTA />
      <Footer />
    </div>
  );
}