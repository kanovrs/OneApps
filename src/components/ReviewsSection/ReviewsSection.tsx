'use client';




export default function ReviewsSection() {
  
  return (
    <section className="mt-[180px]">
      <div className="flex flex-col items-center gap-[8px] py-[32px] mb-[32px]">
        <div className="flex items-center gap-[4px] uppercase text-sup font-semibold text-neutral-30 pb-[8px]">
          <div className="p-[6px]">
            <span className="w-[4px] h-[4px] bg-neutral-30 block"></span>
          </div>
          <span>[: android app</span>
        </div>

        <h2 className="max-w-[42%] text-center font-bold text-h2 uppercase text-[color:var(--Color-Bg-Gray-10,#E8E8E6)]">
          Відгуки
        </h2>
      </div>
    </section>
  );
}
