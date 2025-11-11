'use client';
import Tag from '../Tag';
import InteractiveCardsSection from './InteractiveCardsSection';
import InteractiveScreensSection from './InteractiveScreensSection';

export default function ProdReadySection() {
  return (
    <section className="mt-[120px] md:mt-[180px] relative overflow-hidden">
      <div className="flex flex-col items-center gap-[8px] pt-[32px] relative z-30">
        <Tag square text="[: Production Ready" />
        <h2 className="text-center font-bold text-h2 uppercase text-neutral-20 whitespace-pre-line pt-[8px]">
          Інтерфейси з наших{'\n'}live‑проєктів
        </h2>
      </div>
      <InteractiveScreensSection />
      <InteractiveCardsSection />
    </section>
  );
}