'use client';
import { useState, useRef, useEffect } from 'react';
import Card, { CardProps } from './Card';

const prices: CardProps[] = [
  {
    title: 'Starter',
    subTitle: (
      <>
        Для тестів Offers/Geo <br /> та швидких гіпотез
      </>
    ),
    price: '$1600',
    text: 'Заміна у разі технічної помилки протягом 72 годин',
    list: (
      <ul className="list-disc list-inside flex flex-col gap-[12px] text-reg">
        <li className="flex items-start  gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Інтеграція у трекер (Keitaro / Binom)
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Підтримка при запуску
        </li>

        <li className="flex items-start gap-[8px] line-through text-text-gray">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
          before:bg-gray-400 after:bg-gray-400
          
    `}
          ></span>
          Вбудовані пуші
        </li>
        <li className="flex items-start gap-[8px] line-through text-text-gray">
          <span
            className={`mt-[4px] shrink-0 shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-gray-400 after:bg-gray-400
    `}
          ></span>
          Клоака
        </li>
        <li className="flex items-start gap-[8px] line-through text-text-gray">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
          before:bg-gray-400 after:bg-gray-400
      
    `}
          ></span>
          Підключення платних сорсів
        </li>
      </ul>
    ),
    pay: 'Оплата при запуску',
  },
  {
    title: 'Pro',
    titleCard: (
      <span className="py-[4px] px-[12px] bg-bg-red rounded-[4px] text-primary-red text-[12px] leading-[20px]">
        Популярний вибір
      </span>
    ),
    subTitle: 'Для команд з обсягами та кастомною логікою',
    price: '$2500',
    text: 'заміна при бані 5 днів або до 3k інсталів',
    list: (
      <ul className="list-disc list-inside flex flex-col gap-[12px] text-reg">
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Будь-яке наповнення за ТЗ (казино, спорт, слоти, ігри)
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Інтеграція будь-якого трекера
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Підключення FB Ads, Google UAC, Unity, Moloco, in-app
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Вбудовані пуші
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Клоака
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Гарантія до 3k інсталів / 5 днів
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Інтеграція MMP (Adjust/AppsFlyer)
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Атрибуція під Facebook
        </li>
        <li className="flex items-start gap-[8px] line-through text-text-gray">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
          before:bg-gray-400 after:bg-gray-400
          
    `}
          ></span>
          Кастомний WebView / Chrome Custom Tabs
        </li>
      </ul>
    ),
    pay: '50% передоплата на старті  50% після передачі',
  },
  {
    title: 'Max',
    titleCard: (
      <span className="py-[4px] px-[12px] bg-primary-yellow rounded-[4px] text-bg-black text-[12px] leading-[20px]">
        Premium
      </span>
    ),
    subTitle: 'Для команд з обсягами та кастомною логікою',
    price: '$2800',
    text: '1 безкоштовна заміна протягом 7 днів',
    list: (
      <ul className="list-disc list-inside flex flex-col gap-[12px] text-reg">
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Все що у тарифах вище
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Пріоритетна підтримка • швидка реалізація
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Більш сіра тематика додатків
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Розширена антибан-оптимізація збірки
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Кастомний WebView / Chrome Custom Tabs • Гнучка адаптація під
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Безкоштовний ресбір при зміні оффера (1 раз)
        </li>
        <li className="flex items-start gap-[8px]">
          <span
            className={`mt-[4px] shrink-0
      relative w-[16px] h-[16px] 
      before:content-[''] before:absolute before:top-[3px] before:right-[4px]
      before:w-[9px] before:h-[2px]
      after:content-[''] after:absolute after:top-[3px] after:right-[4px]
      after:w-[2px] after:h-[9px]
      before:bg-red-500 after:bg-red-500
    `}
          ></span>
          Готові інструкції для впровадження
        </li>
      </ul>
    ),
    pay: '50% передоплата на старті  50% після передачі',
  },
];
export default function PricesCards() {
  const [active, setActive] = useState(1);
  const [hoverActive, setHoverActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgStyle, setBgStyle] = useState({});

  const updateBg = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;

    setBgStyle({
      width: `${card.offsetWidth}px`,
      height: `${card.offsetHeight}px`,
      transform: `translateX(${card.offsetLeft}px)`,
    });
  };

  useEffect(() => {
    updateBg(active);
  }, [active]);

  useEffect(() => {
    if (hoverActive !== null) {
      updateBg(hoverActive);
    } else {
      updateBg(active);
    }
  }, [hoverActive]);
  const bgIndex = hoverActive !== null ? hoverActive : active;

  return (
    <div className="relative mt-[64px] bg-bg-black80 p-[50px] rounded-[24px] overflow-hidden">
      {/* Фон за активной карточкой */}
      <div
        className="absolute top-[50px] left-[50px] rounded-[20px] bg-white transition-all duration-500 ease-[cubic-bezier(0.45,0,0.55,1)]"
        style={bgStyle}
      />

      {/* Сетка карточек */}
      <div
        ref={containerRef}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-[20px]"
      >
        {prices.map((price, i) => (
          <Card
            key={i}
            {...price}
            active={active === i}
            isUnderBg={bgIndex === i}
            onClick={() => setActive(i)}
            onMouseEnter={() => setHoverActive(i)}
            onMouseLeave={() => setHoverActive(null)}
          />
        ))}
      </div>
    </div>
  );
}
