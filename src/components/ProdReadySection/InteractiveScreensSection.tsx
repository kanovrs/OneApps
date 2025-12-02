'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { phoneScreens, sideScreens, SCREEN_CONFIG } from './screens';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function InteractiveScreensSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement | null>(null);
  const lastScrollTime = useRef(0);
  const scrollDelay = 400;
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phoneScreens.length);
    }, 3500);
  }, []);

  useEffect(() => {
    resetAutoScroll();
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [resetAutoScroll]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % phoneScreens.length);
    resetAutoScroll();
  }, [resetAutoScroll]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? phoneScreens.length - 1 : prev - 1
    );
    resetAutoScroll();
  }, [resetAutoScroll]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let startX = 0;

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < scrollDelay) return;
      if (Math.abs(e.deltaX) < 30) return;

      lastScrollTime.current = now;
      if (e.deltaX > 0) {
        next();
      } else {
        prev();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastScrollTime.current < scrollDelay) return;

      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        lastScrollTime.current = now;
        if (diff > 0) {
          next();
        } else {
          prev();
        }
      }
    };

    section.addEventListener('wheel', handleWheel, { passive: true });
    section.addEventListener('touchstart', handleTouchStart, { passive: true });
    section.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      section.removeEventListener('wheel', handleWheel);
      section.removeEventListener('touchstart', handleTouchStart);
      section.removeEventListener('touchend', handleTouchEnd);
    };
  }, [next, prev]);

  const handleSideScreenClick = useCallback(
    (indexOffset: number) => {
      const newIndex = (currentIndex + indexOffset) % phoneScreens.length;
      setCurrentIndex(
        newIndex >= 0 ? newIndex : phoneScreens.length + newIndex
      );
      resetAutoScroll();
    },
    [currentIndex, resetAutoScroll]
  );

  // Для мобильных - показываем только по 1 экрану с каждой стороны
  const mobileSideScreens = useMemo(
    () => [
      sideScreens[(currentIndex - 1 + sideScreens.length) % sideScreens.length],
      sideScreens[(currentIndex + 1) % sideScreens.length],
    ],
    [currentIndex]
  );

  // Для десктопа - показываем 3 экрана с каждой стороны
  const desktopSideScreens = useMemo(
    () => [
      sideScreens[(currentIndex - 3 + sideScreens.length) % sideScreens.length],
      sideScreens[(currentIndex - 2 + sideScreens.length) % sideScreens.length],
      sideScreens[(currentIndex - 1 + sideScreens.length) % sideScreens.length],
      sideScreens[(currentIndex + 1) % sideScreens.length],
      sideScreens[(currentIndex + 2) % sideScreens.length],
      sideScreens[(currentIndex + 3) % sideScreens.length],
    ],
    [currentIndex]
  );

  const getOpacity = (index: number) =>
    index < 3 ? 1 - (2 - index) * 0.3 : 1 - (index - 3) * 0.3;

  const blurOverlayStyle = {
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  };

  return (
    <section
      ref={sectionRef}
      className={`relative pt-[80px] md:pt-[152px] border-bg-black flex items-center justify-center overflow-hidden ${
        isMobile ? 'w-[calc(100%+80px)] -mx-[40px]' : 'w-full'
      }`}
    >
      <div
        className="absolute inset-y-0 left-0 w-[3%] pointer-events-none z-40"
        style={{
          ...blurOverlayStyle,
          maskImage: 'linear-gradient(to right, black 0%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, black 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[3%] pointer-events-none z-40"
        style={{
          ...blurOverlayStyle,
          maskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to left, black 0%, transparent 100%)',
        }}
      />

      <div
        className={`flex items-center justify-center h-full w-full ${
          isMobile ? 'relative inset-x-0' : 'relative'
        }`}
      >
        {/* Левая сторона - мобильная версия */}
        {isMobile && (
          <div
            className="absolute left-0 flex items-center justify-end h-full z-30"
            style={{ transform: 'translateX(-20%)' }}
          >
            <SideScreen
              src={mobileSideScreens[0]}
              alt="left-mobile"
              config={{ width: 100, height: 200 }}
              opacity={0.7}
              transform="translateY(-20px)"
              onClick={() => handleSideScreenClick(-1)}
              isMobile={true}
            />
          </div>
        )}

        {/* Левая сторона - десктоп версия */}
        {!isMobile && (
          <div
            className="absolute left-0 flex items-center justify-end h-full space-x-4 z-30"
            style={{ transform: 'translateX(-19%)' }}
          >
            <SideScreen
              src={desktopSideScreens[0]}
              alt="left-outer"
              config={SCREEN_CONFIG.sideScreens.outer}
              opacity={getOpacity(0.5)}
              transform="translateY(-30px)"
              onClick={() => handleSideScreenClick(-3)}
              isMobile={false}
            />
            <SideScreen
              src={desktopSideScreens[1]}
              alt="left-middle"
              config={SCREEN_CONFIG.sideScreens.middle}
              onClick={() => handleSideScreenClick(-2)}
              isMobile={false}
            />
            <SideScreen
              src={desktopSideScreens[2]}
              alt="left-inner"
              config={SCREEN_CONFIG.sideScreens.inner}
              transform="translateY(-60px)"
              onClick={() => handleSideScreenClick(-1)}
              isMobile={false}
            />
          </div>
        )}

        {/* Основной экран телефона */}
        <PhoneScreen currentIndex={currentIndex} isMobile={isMobile} />

        {/* Правая сторона - мобильная версия */}
        {isMobile && (
          <div
            className="absolute right-0 flex items-center justify-start h-full z-30"
            style={{ transform: 'translateX(20%)' }}
          >
            <SideScreen
              src={mobileSideScreens[1]}
              alt="right-mobile"
              config={{ width: 100, height: 200 }}
              opacity={0.7}
              transform="translateY(-20px)"
              onClick={() => handleSideScreenClick(1)}
              isMobile={true}
            />
          </div>
        )}

        {/* Правая сторона - десктоп версия */}
        {!isMobile && (
          <div
            className="absolute right-0 flex items-center justify-start h-full space-x-4 z-30"
            style={{ transform: 'translateX(19%)' }}
          >
            <SideScreen
              src={desktopSideScreens[3]}
              alt="right-inner"
              config={SCREEN_CONFIG.sideScreens.inner}
              transform="translateY(-60px)"
              onClick={() => handleSideScreenClick(1)}
              isMobile={false}
            />
            <SideScreen
              src={desktopSideScreens[4]}
              alt="right-middle"
              config={SCREEN_CONFIG.sideScreens.middle}
              onClick={() => handleSideScreenClick(2)}
              isMobile={false}
            />
            <SideScreen
              src={desktopSideScreens[5]}
              alt="right-outer"
              config={SCREEN_CONFIG.sideScreens.outer}
              opacity={getOpacity(0.5)}
              transform="translateY(-30px)"
              onClick={() => handleSideScreenClick(3)}
              isMobile={false}
            />
          </div>
        )}
      </div>
    </section>
  );
}
function PhoneScreen({
  currentIndex,
  isMobile,
}: {
  currentIndex: number;
  isMobile: boolean;
}) {
  const phoneSize = isMobile
    ? { width: 183, height: 391 }
    : { width: 366, height: 782 };

  useEffect(() => {
    phoneScreens.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = typeof src === 'string' ? src : src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <div
      className="relative z-20 pointer-events-none select-none"
      style={{ width: `${phoneSize.width}px`, height: `${phoneSize.height}px` }}
    >
      {/* Корпус телефона */}
      <Image
        src="/Design/productionReady-card/image2.png"
        alt="Phone frame"
        fill
        priority
        className="object-contain"
      />

      {/* Экран */}
      <div
        className={`absolute inset-x-[4.2%] inset-y-[1.2%] overflow-hidden bg-black ${
          isMobile ? 'rounded-[16px]' : 'rounded-[32px]'
        }`}
        style={{
          maskImage: isMobile
            ? 'radial-gradient(circle 4px at 50% 2.2%, transparent 4.5px, black 5px)'
            : 'radial-gradient(circle 8px at 50% 2.2%, transparent 9px, black 9.5px)',
          WebkitMaskImage: isMobile
            ? 'radial-gradient(circle 4px at 50% 2.2%, transparent 4.5px, black 5px)'
            : 'radial-gradient(circle 8px at 50% 2.2%, transparent 9px, black 9.5px)',
        }}
      >
        <AnimatePresence initial={false}>
          {/* Предыдущий экран (остаётся пока новый грузится) */}
          <motion.div
            key={currentIndex + '_prev'}
            initial={false}
            animate={{ opacity: currentIndex > 0 ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={
                phoneScreens[
                  (currentIndex - 1 + phoneScreens.length) % phoneScreens.length
                ]
              }
              alt=""
              fill
              className="object-cover"
              unoptimized
              priority={false}
            />
          </motion.div>

          {/* Текущий экран */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={phoneScreens[currentIndex]}
              alt={`Screen ${currentIndex + 1}`}
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
// function PhoneScreen({
//   currentIndex,
//   isMobile,
// }: {
//   currentIndex: number;
//   isMobile: boolean;
// }) {
//   const phoneSize = isMobile
//     ? { width: 183, height: 391 }
//     : { width: 366, height: 782 };

//   return (
//     <div
//       className="relative z-20 pointer-events-none"
//       style={{ width: `${phoneSize.width}px`, height: `${phoneSize.height}px` }}
//     >
//       <Image
//         src="/Design/productionReady-card/image2.png"
//         alt="Phone"
//         fill
//         priority
//         className="object-contain"
//       />
//       <motion.div
//         className={`absolute inset-x-[4.2%] inset-y-[1.2%] overflow-hidden bg-black ${
//           isMobile ? 'rounded-[16px]' : 'rounded-[22px]'
//         }`}
//         style={{
//           WebkitMaskImage: isMobile
//             ? 'radial-gradient(circle 4px at 50% 2.2%, transparent 4.5px, black 5px)'
//             : 'radial-gradient(circle 8px at 50% 2.2%, transparent 9px, black 9.5px)',
//           maskImage: isMobile
//             ? 'radial-gradient(circle 4px at 50% 2.2%, transparent 4.5px, black 5px)'
//             : 'radial-gradient(circle 8px at 50% 2.2%, transparent 9px, black 9.5px)',
//         }}
//       >
//         <motion.div
//           key={currentIndex}
//           initial={{ filter: 'blur(8px)', opacity: 0 }}
//           animate={{ filter: 'blur(0px)', opacity: 1 }}
//           exit={{ filter: 'blur(8px)', opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={phoneScreens[currentIndex]}
//             alt={`screen-${currentIndex}`}
//             fill
//             className="object-cover"
//           />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

function SideScreen({
  src,
  alt,
  config,
  opacity = 1,
  transform = '',
  onClick,
  isMobile = false,
}: {
  src: string;
  alt: string;
  config: { width: number; height: number };
  opacity?: number;
  transform?: string;
  onClick?: () => void;
  isMobile?: boolean;
}) {
  return (
    <motion.div
      className={`relative rounded-[16px] overflow-hidden shadow-2xl border border-neutral-800 cursor-pointer ${
        isMobile ? 'scale-90' : ''
      }`}
      style={{
        width: `${config.width}px`,
        height: `${config.height}px`,
        opacity,
        transform,
      }}
      onClick={onClick}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </motion.div>
  );
}
