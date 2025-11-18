'use client';
import { motion } from 'framer-motion';
import Tag from '../Tag';
import Title from './Title';
import MockUp from './MockUp';
import Button from '../Button/Button';
import TextBlock from './TextBlock';

const tags = [
  {
    tag: '[: BENEFIT_01 ]',
    text: `Найкращі Android-додатки для арбітражу  в 
нішах гемблінгу, беттингу, слотів і казино.`,
  },
  {
    tag: '[: BENEFIT_02 ]',
    text: `Оренда або викуп ви отримуєте не просто APK, а повністю робочий інструмент для заливки та ROI.`,
  },
];

export default function HeroSection() {
  return (
    <>
      {/* Mobile Version */}
      <section className="mt-[24px] block md:hidden">
        <div className="mb-[12px] flex justify-center">
          <Tag text="[: android app ]" square={true} />
        </div>

        <div className="flex justify-center mb-[64px]">
          <div className="w-[342px] h-[89px]">
            <Title />
          </div>
        </div>

        <div className="flex justify-center mb-[64px]">
          <MockUp />
        </div>

        <div className="flex justify-center mb-[64px] pt-[44px]">
          <a
            href="https://t.me/oneapps_sales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text="Залишити заявку" />
          </a>
        </div>

        <div className="flex flex-col gap-[24px] bg-[#0F0F0F] p-[24px] rounded-[12px]">
          {tags.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full text-neutral-20"
              transition={{
                duration: 0.6,
                delay: (index + 1) * 0.4,
                ease: 'easeOut',
              }}
            >
              <TextBlock tag={item.tag} text={item.text} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Desktop Version */}
      <section className="mt-[80px] hidden md:block">
        <div className="mb-[24px] ">
          <Tag text="[: android app ]" square={true} />
        </div>

        <div className="flex justify-between pb-[20px]">
          <Title />
          <MockUp />
        </div>

        <div className="flex justify-between items-start gap-[8px] mt-[120px]">
          <div className="w-1/3">
            <a
              href="https://t.me/oneapps_sales"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button text="Залишити заявку" />
            </a>
          </div>
          <div className="flex gap-[8px] w-2/3">
            {tags.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-1/2 text-neutral-20"
                transition={{
                  duration: 0.6,
                  delay: (index + 1) * 0.4,
                  ease: 'easeOut',
                }}
              >
                <TextBlock tag={item.tag} text={item.text} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}