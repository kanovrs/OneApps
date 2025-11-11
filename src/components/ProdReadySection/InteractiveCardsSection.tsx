'use client';
import Image from 'next/image';
import { useState } from 'react';
import { CARD_CONFIG } from './constants';

export default function InteractiveCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

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
      offset: CARD_CONFIG.offsets[boundedIndex],
      size: CARD_CONFIG.sizes[boundedIndex],
      zIndex: 50 - Math.abs(virtualIndex) * 10,
      opacity: Math.abs(virtualIndex) > 3 ? 0 : 1,
    };
  };

  const animationClass = isAnimating
    ? 'opacity-0 scale-95'
    : 'opacity-100 scale-100';

  return (
    <section className="relative pt-[120px] pb-[100px] border-bg-black flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="flex items-center justify-center mb-12">
        {['left', 'center', 'right'].map((position) => (
          <div
            key={position}
            className={`relative w-[258px] h-[459px] rounded-[16px] mx-1 transition-all duration-500 ease-out ${animationClass}`}
          >
            <Image
              src={`/Design/productionReady-card/cards-sets/card-set-${currentSet}/card-${position}-${currentSet}.png`}
              alt={`card ${position} set ${currentSet}`}
              fill
              className="object-cover rounded-[16px]"
              sizes="258px"
            />
          </div>
        ))}
      </div>

      <div className="relative w-full">
        <div className="relative flex items-end justify-center h-[350px]">
          {Array.from({ length: 7 }).map((_, index) => {
            const position = calculateCardPosition(index);
            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-out cursor-pointer"
                style={{
                  width: `${position.size.width}px`,
                  height: `${position.size.height}px`,
                  transform: `translateX(${position.offset}px)`,
                  zIndex: 49,
                  left: `calc(50% - ${position.size.width / 2}px)`,
                  opacity: position.opacity,
                }}
                onClick={() => handleCardClick(index)}
              >
                <Image
                  src={`/Design/productionReady-card/category-cards/category-card-${
                    index + 1
                  }.png`}
                  alt={`category card ${index + 1}`}
                  fill
                  className="object-cover rounded-[12px] shadow-2xl"
                  sizes={`${position.size.width}px`}
                />
              </div>
            );
          })}
        </div>

        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none z-50"
          style={{
            height: '200px',
            top: '250px',
            opacity: 1,
            background: `
              linear-gradient(
                181.71deg, 
                rgba(10, 10, 10, 0) 0%, 
                rgba(10, 10, 10, 0.3) 25%, 
                rgba(10, 10, 10, 0.6) 50%, 
                rgba(10, 10, 10, 0.8) 75%, 
                #0A0A0A 98.38%
              )
            `,
            backdropFilter: 'blur(2px)',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
          }}
        />
      </div>
    </section>
  );
}
