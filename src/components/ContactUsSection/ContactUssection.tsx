'use client';
import { useState } from 'react';
import Image from 'next/image';
import Tag from '../Tag';
import Button from '../Button/Button';

export default function ContactUsSection() {
  const [email, setEmail] = useState('');

  return (
    <section className="mt-[120px] md:mt-[180px] relative overflow-hidden">
      <div className="flex flex-col items-start gap-2 pt-8 relative z-30">
        <Tag square text="[: ONEAPPS" />
        <h2 className="w-full font-bold text-h2 uppercase text-text-light whitespace-pre-line pt-2 pb-[44px]">
          Пишіть, щоб отримати{'\n'} консультацію або{'\n'} запустити свій
          додаток
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center w-full mt-15 gap-6">
          <div className="flex items-center w-full md:max-w-[450px] lg:max-w-[544px] border-b border-bg-black70 focus-within:border-text-light transition-colors pb-7 mt-6">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none text-text-light placeholder-text-dark placeholder:font-bold placeholder:text-[24px] placeholder:leading-[26px] py-3 text-reg autofill-clean"
            />
            <Button />
          </div>

          <a
            href="https://t.me/oneapps_sales"
            target="_blank"
            rel="noopener noreferrer"
            className="button-container"
          >
            <div className="gradient-border"></div>
            <div className="animated-button right-side w-[379px] justify-start">
              <div className="arow flex items-center justify-center w-16 h-16 bg-bg-black80 rounded-lg p-4">
                <Image
                  src="/Design/telegramIcon.svg"
                  alt="Telegram"
                  width={24}
                  height={24}
                />
              </div>
              <span className="button-text">@oneapps_sales</span>
            </div>
          </a>
        </div>

        <div className="text-neutral-30 text-sup mt-[80px] text-center w-full">
          <p>© 2025 OneApps.</p>
          <p>Всі права захищено. Політика конфіденційності</p>
        </div>

        <div className="w-full mt-[53px]">
          <Image
            src="/Design/review-card/Grid-top.svg"
            alt="grid"
            width={1200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>

      <style jsx global>{`
        .autofill-clean:-webkit-autofill,
        .autofill-clean:-webkit-autofill:hover,
        .autofill-clean:-webkit-autofill:focus,
        .autofill-clean:-webkit-autofill:active {
          -webkit-text-fill-color: #fefff8;
          -webkit-box-shadow: 0 0 0px 1000px transparent inset;
          transition: background-color 5000s ease-in-out 0s;
          background-color: transparent;
        }
      `}</style>
    </section>
  );
}
