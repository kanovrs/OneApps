import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-[100] flex justify-between bg-[url('/Design/head-grid.png')] bg-cover py-[16px] items-center relative">

      <div className="absolute inset-0 backdrop-blur-[50px] -z-10 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"></div>

      <div className="logo relative z-10">
        <Link href="/">
          <Image src="/Logo/logo.png" width={64} height={64} alt="logotype" />
        </Link>
      </div>

      <div className="tg-btn flex relative z-10">
        <Link
          href="https://t.me/oneapps_sales"
          className="flex gap-[12px] items-center relative overflow-hidden group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-[4px] text-neutral-20 uppercase text-sup font-semibold relative pb-[6px]">
            <span>Telegram</span>

            <span className="w-[1px] h-[12px] bg-text-light block origin-center transition-all duration-500 group-hover:translate-y-[6px] group-hover:opacity-0"></span>

            <span>Зв&apos;язатись</span>

            <span className="absolute left-0 bottom-0 h-[1px] bg-text-light w-full origin-left transition-all duration-500 group-hover:-translate-x-full group-hover:opacity-0"></span>
          </div>

          <Image
            src="/Design/arrow-right.svg"
            width={16}
            height={16}
            alt="arrow"
          />
        </Link>
      </div>
    </header>
  );
}
