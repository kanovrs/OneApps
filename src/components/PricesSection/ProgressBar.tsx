"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

import Tag from "../Tag";

interface ProgressBarProps {
  label: string;
  percent: number;
  delay?: number;
  color?: string;
}
export default function ProgressBar({
  label,
  percent,
  delay = 0,
  color = "bg-yellow-300",
}: ProgressBarProps) {
  const ref = useRef(null);
  const controls = useAnimation();
  const textControls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${percent}%`,
        transition: { duration: 1.5, delay, ease: "easeOut" },
      });

      textControls.start({
        left: `${percent}%`,
        transition: { duration: 1.5, delay, ease: "easeOut" },
      });
    }
  }, [inView, controls, textControls, percent, delay]);

  return (
    <div
      className="relative w-full h-[72px]  rounded-md overflow-hidden"
      ref={ref}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={controls}
        className={`absolute left-0 top-0 h-full ${color}`}
      />
      <motion.div
        initial={{ left: 0 }}
        animate={textControls}
        className="absolute flex top-1/2 -translate-y-1/2 text-sm font-medium  px-2 whitespace-nowrap"
      >
        {label}
        <Tag square={true} text={label} />
        <Image
          src="/Design/arrow-right.svg"
          width={16}
          height={16}
          alt="arrow"
        />
      </motion.div>
    </div>
  );
}
