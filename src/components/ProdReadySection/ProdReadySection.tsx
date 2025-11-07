'use client';
import Tag from '../Tag';

export default function ProdReadySection() {
  return (
    <section className="mt-[120px] md:mt-[180px] relative overflow-hidden">
      <div className="flex flex-col items-center gap-[8px] py-[32px] mb-[32px] relative z-30">
        <Tag square={true} text="[: Production Ready" />
        <h2 className="text-center font-bold text-h2 uppercase text-[#e8e8e6]">
          Інтерфейси з наших live‑проєктів
        </h2>
      </div>
    </section>
  );
}
