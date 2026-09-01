import React, { Suspense, lazy } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Lazy load below-the-fold components
const Highlights = lazy(() => import('@/components/Highlights'));
const FloatingButtons = lazy(() => import('@/components/FloatingButtons'));
const AboutProject = lazy(() => import('@/components/AboutProject'));
const WhyChoose = lazy(() => import('@/components/WhyChoose'));
const Pricing = lazy(() => import('@/components/Pricing'));
const Amenities = lazy(() => import('@/components/Amenities'));
const MasterPlan = lazy(() => import('@/components/MasterPlan'));
const FloorPlans = lazy(() => import('@/components/FloorPlans'));
const Gallery = lazy(() => import('@/components/Gallery'));
const LocationAdvantages = lazy(() => import('@/components/LocationAdvantages'));
const AboutPiramal = lazy(() => import('@/components/AboutPiramal'));
const WhyInvestThane = lazy(() => import('@/components/WhyInvestThane'));
const BankLoans = lazy(() => import('@/components/BankLoans'));
const ConstructionUpdate = lazy(() => import('@/components/ConstructionUpdate'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const FAQ = lazy(() => import('@/components/FAQ'));
const FinalCTA = lazy(() => import('@/components/FinalCTA'));
const Footer = lazy(() => import('@/components/Footer'));

// Simple fallback loader
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-royal-200 border-t-royal-600 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Highlights />
          <AboutProject />
          <WhyChoose />
          <Pricing />
          <Amenities />
          <MasterPlan />
          <FloorPlans />
          <Gallery />
          <LocationAdvantages />
          <AboutPiramal />
          <WhyInvestThane />
          <BankLoans />
          <ConstructionUpdate />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingButtons />
      </Suspense>
    </div>
  );
}

export default App;
