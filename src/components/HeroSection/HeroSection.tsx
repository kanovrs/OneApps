"use client";
import { motion } from "framer-motion";
import Tag from "../Tag";
import Title from "./Title";
import MockUp from "./MockUp";
import Button from "../Button/Button";
import TextBlock from "./TextBlock";

const tags = [
  {
    tag: "[: BENEFIT_01 ]",
    text: `Найкращі Android-додатки для арбітражу в
нішах гемблінгу, беттингу, слотів і казино.`,
  },
  {
    tag: "[: BENEFIT_02 ]",
    text: `Оренда або викуп ви отримуєте не просто APK, а повністю робочий інструмент для заливки та ROI.`,
  },
];

export default function HeroSection() {
  return (
    <section className="mt-[24px] md:mt-[80px]">
      <div className="mb-[12px] md:mb-[24px] flex justify-center md:justify-start">
        <Tag text="[: android app ]" square={true} />
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-8 md:gap-0 pb-[20px]">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Title />
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <MockUp />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start gap-8 mt-[64px] md:mt-[120px]">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <a
            href="https://t.me/oneapps_sales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="Залишити заявку" />
          </a>
        </div>

        <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-4 md:gap-8">
          {tags.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full md:w-1/2 text-neutral-20"
              transition={{
                duration: 0.6,
                delay: (index + 1) * 0.4,
                ease: "easeOut",
              }}
            >
              <TextBlock tag={item.tag} text={item.text} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}