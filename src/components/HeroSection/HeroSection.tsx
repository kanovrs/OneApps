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
    <section className="mt-[80px]">
      <div className="mb-[24px]">
        <Tag text="[: android app ]" square={true} />
      </div>

      <div className="flex justify-between pb-[20px]">
        <Title />
        <MockUp />
      </div>

      <div className="flex justify-between items-start gap-[8px]">
        <div className="w-1/3">
          <Button text="Залишити заявку" />
        </div>
        <div className="flex gap-[8px] w-2/3">
          {tags.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-1/2"
              transition={{
                duration: 0.6,
                delay: (index + 1) * 0.4, // 0.4s, 0.8s, ...
                ease: 'easeOut',
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
