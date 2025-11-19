'use client';
import { useState } from 'react';
import Image from 'next/image';
import Tag from '../Tag';
import Button from '../Button/Button';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function ContactUsSection() {
  const [email, setEmail] = useState('');
  const isMobile = useIsMobile();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const titleText = isMobile 
    ? 'Пишіть, щоб отримати консультацію або запустити свій додаток'
    : <>Пишіть, щоб отримати{'\n'} консультацію або{'\n'} запустити свій додаток</>;

  const containerClass = isMobile 
    ? 'w-[calc(100%+80px)] -mx-[40px] px-4' 
    : '';

  return (
    <section className={`mt-[64px] md:mt-[180px] relative ${isMobile ? '' : 'overflow-hidden'}`}>
      <div className="flex flex-col items-start gap-2 pt-8 relative z-30">
        <Tag square text="[: ONEAPPS" />
        <h2 className="w-full font-bold text-[32px] md:text-h2 uppercase text-text-light md:whitespace-pre-line md:leading-[1.2] pt-2 pb-[44px]">
          {titleText}
        </h2>

        <div className={`flex flex-col md:flex-row justify-between items-center w-full mt-15 gap-6 ${isMobile ? 'overflow-x-visible' : ''}`}>
          <div className={containerClass}>
            <form 
              onSubmit={handleSubmit}
              className="flex items-center w-full md:max-w-[450px] lg:max-w-[544px] border-b border-bg-black70 focus-within:border-text-light transition-colors pb-7 mt-6"
            >
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-transparent outline-none text-text-light placeholder-text-dark placeholder:font-bold placeholder:text-[24px] placeholder:leading-[26px] py-3 text-reg autofill-clean ${isMobile ? 'pl-6' : ''}`}
                required
              />
              <Button />
            </form>
          </div>

          <div className={containerClass}>
            <a
              href="https://t.me/oneapps_sales"
              target="_blank"
              rel="noopener noreferrer"
              className="button-container w-full md:w-auto no-border-radius"
            >
              <div className="gradient-border"></div>
              <div className={`animated-button right-side ${isMobile ? 'w-full' : 'w-[379px]'} justify-start`}>
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
        </div>

        <div className="text-neutral-30 text-sup mt-[80px] text-center w-full">
          <p>© 2025 OneApps.</p>
          <p>Всі права захищено. Політика конфіденційності</p>
        </div>

        <div className="w-full mt-[53px]">
          <Image
            src={isMobile ? "/Design/Grid-bottom-mob.svg" : "/Design/review-card/Grid-top.svg"}
            alt="grid"
            width={1200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>

      <style jsx global>{`
        .autofill-clean:-webkit-autofill {
          -webkit-text-fill-color: #fefff8;
          -webkit-box-shadow: 0 0 0px 1000px transparent inset;
          transition: background-color 5000s ease-in-out 0s;
          background-color: transparent;
        }
        .no-border-radius .gradient-border {
          border-radius: 0;
        }
        .no-border-radius .animated-button {
          border-radius: 0;
        }
      `}</style>
    </section>
  );
}