interface Section {
  id: number;
  tag: string;
}

interface SectionTabsProps {
  sections: Section[];
  activeSection: number;
  onSectionChange: (index: number) => void;
}

export default function SectionTabs({
  sections,
  activeSection,
  onSectionChange,
}: SectionTabsProps) {
  return (
    <div className="relative gap-2 mb-10 w-full hidden md:flex">
      {sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(index)}
          className={`flex-1 h-17 flex items-center px-6 uppercase font-semibold font-[Inter] text-sm transition-all duration-500 ${
            index === activeSection
              ? 'text-[var(--Color-Primary-yellow,#F9FF00)] border-t border-[var(--Color-Primary-yellow,#F9FF00)]'
              : 'text-[var(--Color-Text-Gray-text,#A9A9A9)] border-t border-[var(--Color-Neutral-40,#4D4D4D)] hover:text-white'
          }`}
        >
          <span className="flex items-center gap-2 justify-start w-full text-left pt-[24px]">
            {section.tag}
          </span>
        </button>
      ))}

      <div
        className="absolute top-0 h-px bg-[var(--Color-Primary-yellow,#F9FF00)] transition-all duration-600 ease-in-out"
        style={{
          left: activeSection === 0 ? '0%' : 'calc(50% + 8px)',
          width: 'calc(50% - 4px)',
        }}
      />
    </div>
  );
}