import { Suspense } from 'react';
import Container from '@/components/Container';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
export default function Home() {
  return (
    <div className="min-h-screen ">
      <Suspense fallback={<div>Загрузка...</div>}></Suspense>
      <Container>
        <div className="">
          <Header />
          <HeroSection />
        </div>
        <div></div>
      </Container>
    </div>
  );
}
