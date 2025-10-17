import { Suspense } from 'react';
import Container from '@/components/Container';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import ScreensSection from '@/components/ScreensSection/ScreensSection';
import SolutionsSection from '@/components/SolutionsSection/SolutionsSection';
import PricesSection from '@/components/PricesSection/PricesSection';
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
        </div>
        <div></div>
      </Container>
    </div>
  );
}
