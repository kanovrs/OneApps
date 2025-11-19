'use client';
import Tag from '../Tag';
import InteractiveCardsSection from './InteractiveCardsSection';
import InteractiveScreensSection from './InteractiveScreensSection';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function ProdReadySection() {
  const isMobile = useIsMobile();

  return (
    <section className={`mt-[64px] md:mt-[180px] relative ${isMobile ? '' : 'overflow-hidden'}`}>
      <div className="flex flex-col items-center gap-[8px] pt-[32px] relative z-30">
        <Tag square text="[: Production Ready" />
        <h2 className="text-center font-bold text-[32px] md:text-h2 uppercase text-neutral-20 whitespace-pre-line pt-[8px]">
          Інтерфейси з наших{'\n'}live‑проєктів
        </h2>
      </div>
      <div className="w-full md:w-auto">
        <InteractiveScreensSection />
      </div>
      <InteractiveCardsSection />
    </section>
  );
}