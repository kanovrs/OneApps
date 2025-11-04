'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import PhoneMockup from './PhoneMockup';
import ScreensLoop from './ScreensLoop';

const screens = [
  '/screens/1.png',
  '/screens/2.png',
  '/screens/3.png',
  '/screens/4.png',
  '/screens/5.png',
  '/screens/6.png',
  '/screens/7.png',
  '/screens/8.png',
];

export default function ScreensSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-[#0a0a0a] mt-[150px]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-visible">
        <div
          className="absolute inset-y-0 left-0 w-[15%] pointer-events-none z-[60] left-fade"
          style={{
            background:
              'linear-gradient(to right, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%)',
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-[15%] pointer-events-none z-[60] right-fade"
          style={{
            background:
              'linear-gradient(to left, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none z-[60] botom-fade"
          style={{
            background:
              'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 100%)',
          }}
        />

        <div className="relative w-full max-w-[1285px] flex items-center justify-center">
          <ScreensLoop images={screens} />

          <PhoneMockup scrollProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}
