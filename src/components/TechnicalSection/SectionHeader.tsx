interface SectionHeaderProps {
  tag: string;
  title: string;
}

export default function SectionHeader({ tag, title }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-2 py-6 md:py-8 mb-6 md:mb-8">
      <div className="flex items-center gap-1 uppercase text-xs md:text-sup font-semibold text-neutral-30 pb-2">
        <div className="p-1.5">
          <span className="w-1 h-1 bg-neutral-30 block" />
        </div>
        <span>{tag}</span>
      </div>
      <h2 className="max-w-[90%] md:max-w-[42%] text-center font-bold text-2xl md:text-h2 uppercase text-[color:var(--Color-Bg-Gray-10,#E8E8E6)]">
        {title}
      </h2>
    </div>
  );
}