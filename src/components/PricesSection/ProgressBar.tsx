'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

import Tag from '../Tag';

interface ProgressBarProps {
  label: string;
  tagText: string;
  percent: number;
  delay?: number;
  color?: string;
}
export default function ProgressBar({
  label,
  tagText,
  percent,
  delay = 0,
  color = 'bg-bg-yellow',
}: ProgressBarProps) {
  const ref = useRef(null);
  const controls = useAnimation();
  const textControls = useAnimation();
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percent}%`,
        transition: { duration: 1.5, delay, ease: 'easeOut' },
      });

      textControls.start({
        left: `${percent}%`,
        transition: { duration: 1.5, delay, ease: 'easeOut' },
      });
    }
  }, [inView, controls, textControls, percent, delay]);

  return (
    <div className="relative w-full h-[72px] rounded overflow-hidden" ref={ref}>
      <motion.div
        initial={{ width: 0 }}
        animate={controls}
        className={`absolute left-0 top-0 h-full ${color} rounded`}
      />
      <motion.div
        initial={{ left: 0 }}
        animate={textControls}
        className="absolute flex flex-col items-start top-1/2 -translate-y-1/2 text-sm font-medium px-2 whitespace-nowrap pl-[20px]"
      >
        <div className="text-[24px] font-bolt mb-[12px]">{label}</div>

        <div className="flex items-center mb-1">
          <Tag square={true} text={tagText} />
          <Image
            src="/Design/arrow-right.svg"
            width={16}
            height={16}
            alt="arrow"
            className="ml-3 filter brightness-0 saturate-100 invert-[45%]"
          />
        </div>
      </motion.div>
    </div>
  );
}
