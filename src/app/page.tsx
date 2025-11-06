import { Suspense } from 'react';
import Container from '@/components/Container';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import ScreensSection from '@/components/ScreensSection/ScreensSection';
import SolutionsSection from '@/components/SolutionsSection/SolutionsSection';
import PricesSection from '@/components/PricesSection/PricesSection';
import TechnicalSection from '@/components/TechnicalSection/TechnicalSection';
import ReviewsSection from '@/components/ReviewsSection/ReviewsSection';
import ProdReadySection from '@/components/ProdReadySection/ProdReadySection';

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Suspense fallback={<div>Загрузка...</div>}></Suspense>
      <Container>
        <div className="">
          <Header />
          <HeroSection />
          <ScreensSection />
          <SolutionsSection />
          <PricesSection />
          <TechnicalSection />
          <ReviewsSection />
          <ProdReadySection />
        </div>
        <div></div>
      </Container>
    </div>
  );
}
