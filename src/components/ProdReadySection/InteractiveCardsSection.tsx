'use client';
import Image from 'next/image';
import { useState } from 'react';
import { CARD_CONFIG } from './constants';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function InteractiveCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();

  const cfg = isMobile ? CARD_CONFIG.mobile : CARD_CONFIG.desktop;

  const handleCardClick = (index: number) => {
    if (isAnimating) return;

    const newSet = index + 1;
    if (newSet !== currentSet) {
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => {
        setCurrentSet(newSet);
        setIsAnimating(false);
      }, 300);
    } else {
      setActiveIndex(index);
    }
  };

  const calculateCardPosition = (index: number) => {
    const totalCards = 7;
    const centerIndex = activeIndex;

    let virtualIndex = index - centerIndex;
    if (virtualIndex < -3) virtualIndex += totalCards;
    else if (virtualIndex > 3) virtualIndex -= totalCards;

    const targetIndex = virtualIndex === 0 ? 3 : 3 + virtualIndex;
    const boundedIndex = Math.max(0, Math.min(6, targetIndex));

    return {
      offset: cfg.offsets[boundedIndex],
      size: cfg.sizes[boundedIndex],
      zIndex: 50 - Math.abs(virtualIndex) * 10,
      opacity: Math.abs(virtualIndex) > 3 ? 0 : 1,
    };
  };

  const animationClass = isAnimating
    ? 'opacity-0 scale-95'
    : 'opacity-100 scale-100';

  return (
    <section
      className={`
    relative flex flex-col items-center 
    justify-center overflow-visible w-full mt-[48px]
    ${
      isMobile
        ? 'scale-[0.85] origin-top' 
        : 'scale-100' 
    }
  `}
    >
      <div className="flex items-center justify-center mb-[24px]"> 
        {['left', 'center', 'right'].map((position) => (
          <div
            key={position}
            className={`relative mx-1 transition-all duration-500 ${animationClass}`}
            style={{
              width: cfg.topCards.width,
              height: cfg.topCards.height,
            }}
          >
            <Image
              src={`/Design/productionReady-card/cards-sets/card-set-${currentSet}/card-${position}-${currentSet}.png`}
              alt={`card ${position}`}
              fill
              className="object-cover rounded-[8px]"
            />
          </div>
        ))}
      </div>

      <div className="relative w-full flex justify-center overflow-visible">
        <div
          className="relative flex items-end justify-center"
          style={{
            width: isMobile ? cfg.loop.container.width : '100%',
            height: isMobile ? cfg.loop.container.height : 350,
          }}
        >
          {Array.from({ length: 7 }).map((_, index) => {
            const position = calculateCardPosition(index);
            return (
              <div
                key={index}
                className="absolute transition-all duration-500 cursor-pointer"
                style={{
                  width: `${position.size.width}px`,
                  height: `${position.size.height}px`,
                  transform: `translateX(${position.offset}px)`,
                  zIndex: position.zIndex,
                  left: `calc(50% - ${position.size.width / 2}px)`,
                  opacity: position.opacity,
                }}
                onClick={() => handleCardClick(index)}
              >
                <Image
                  src={`/Design/productionReady-card/category-cards/category-card-${
                    index + 1
                  }.png`}
                  alt=""
                  fill
                  className="object-cover rounded-[6px]"
                />
              </div>
            );
          })}
        </div>

        {!isMobile && (
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none"
            style={{
              height: '200px',
              top: '250px',
              background:
                'linear-gradient(181.71deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.3) 25%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.8) 75%, #0A0A0A 98%)',
              maskImage:
                'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
            }}
          />
        )}
      </div>
    </section>
  );
}