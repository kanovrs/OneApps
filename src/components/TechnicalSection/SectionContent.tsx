import Image from 'next/image';
import AccordionItem from './AccordionItem';

interface Item {
  id: string | number;
  title: string;
  text: string;
}

interface Section {
  id: number;
  title: string;
  items: Item[];
  image: string;
}

interface SectionContentProps {
  sections: Section[];
  activeSection: number;
  activeItem: string | number | null;
  onAccordionClick: (itemId: string | number) => void;
}

export default function SectionContent({
  sections,
  activeSection,
  activeItem,
  onAccordionClick,
}: SectionContentProps) {
  const renderMobileSection = (section: Section) => (
    <div key={section.id} className="mb-8 last:mb-0">
      <h3 className="text-[28px] font-semibold text-white mb-4">
        {section.title}
      </h3>
      <Image
        src={section.image}
        alt="illustration"
        width={675}
        height={553}
        className="rounded-2xl w-full mb-6"
      />
      <div className="flex flex-col">
        {section.items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            onClick={onAccordionClick}
          />
        ))}
      </div>
    </div>
  );

  const renderDesktopSection = (section: Section, index: number) => (
    <div
      key={section.id}
      className={`transition-all duration-1000 ease-in-out ${
        index === activeSection
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-8 absolute top-0'
      }`}
    >
      <h3 className="text-[32px] font-semibold pb-[40px] pt-[32px] text-white">
        {section.title}
      </h3>
      <div className="flex flex-col">
        {section.items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            onClick={onAccordionClick}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex justify-between gap-[40px] items-start min-h-[550px] relative">
      <div className="hidden md:block w-[50%] relative">
        <div className="w-full sticky top-4">
          <div className="relative">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`transition-all duration-1000 ease-in-out ${
                  index === activeSection
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105 absolute top-0'
                }`}
              >
                <Image
                  src={section.image}
                  alt="illustration"
                  width={675}
                  height={553}
                  className="rounded-2xl w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full">
        {sections.map(renderMobileSection)}
      </div>

      <div className="hidden md:block w-[50%] relative">
        {sections.map(renderDesktopSection)}
      </div>
    </div>
  );
}
