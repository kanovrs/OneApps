"use client";
import { useState, useRef, useEffect } from "react";
import Card, { CardProps } from "./Card";

const prices: CardProps[] = [
  {
    title: "Starter",
    subTitle: "Для тестів Offers/Geo та швидких гіпотез",
    price: (
      <div className="flex items-end gap-1 text-[28px] font-bold leading-none">
        <span>$1600</span>
        <span className="text-sm opacity-70">/додаток</span>
      </div>
    ),
    text: "Заміна у разі технічної помилки протягом 72 годин",
    list: (
      <div className="space-y-2">
        <p className="font-semibold">Що входить:</p>
        <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
          <li className="flex items-center gap-[8px]">
            <span
              className={`
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
          <li className="flex items-center gap-[8px]">
            <span
              className={`
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

          <li className="flex items-center gap-[8px] line-through">
            <span
              className={`
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
          <li className="flex items-center gap-[8px] line-through">
            <span
              className={`
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
          <li className="flex items-center gap-[8px] line-through">
            <span
              className={`
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
      </div>
    ),
    pay: "Оплата при запуску",
  },
  {
    title: "Pro",
    titleCard: (
      <span className="py-[4px] px-[12px] bg-bg-red rounded-[4px] text-primary-red text-[12px] leading-[20px]">
        Популярний вибір
      </span>
    ),
    subTitle: "Для стабільних зв’язок та команд",
    price: (
      <div className="flex items-end gap-1 text-[28px] font-bold leading-none text-[#9cff70]">
        <span>$2600</span>
        <span className="text-sm opacity-70">/додаток</span>
      </div>
    ),
    text: "Підтримка 24/7, оновлення та додаткові фічі",
    list: (
      <div className="space-y-2">
        <p className="font-semibold">Що входить:</p>
        <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
          <li>Усе зі Starter</li>
          <li>Персональний менеджер</li>
          <li>Тестові додатки</li>
          <li>Регулярні оновлення</li>
        </ul>
      </div>
    ),
    pay: "Передплата на місяць",
  },
  {
    title: "Max",
    titleCard: (
      <span className="py-[4px] px-[12px] bg-primary-yellow rounded-[4px] text-bg-black text-[12px] leading-[20px]">
        Premium
      </span>
    ),

    subTitle: "Для великих команд та постійних запусків",
    price: (
      <div className="flex items-end gap-1 text-[28px] font-bold leading-none text-[#ffd166]">
        <span>$4200</span>
        <span className="text-sm opacity-70">/додаток</span>
      </div>
    ),
    text: "Повна кастомізація під ваші задачі",
    list: (
      <div className="space-y-2">
        <p className="font-semibold">Що входить:</p>
        <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
          <li>Усе з Pro</li>
          <li>Преміум підтримка</li>
          <li>Сервера під ключ</li>
          <li>Необмежена кількість оновлень</li>
        </ul>
      </div>
    ),
    pay: "Оплата по контракту",
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
