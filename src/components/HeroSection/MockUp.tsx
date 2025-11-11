import Image from 'next/image';

export default function MockUp() {
  return (
    <div className="relative flex flex-col items-center group pr-[80px]">
      {/* Подсветка под всем */}
      <div className="absolute bottom-[-5px] -translate-x-0 z-0">
        <div
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, #F9FF00 0%, rgba(249,255,0,0) 100%)',
          }}
          className="w-[420px] h-[13px] blur-[15px]"
        ></div>

        <div
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%)',
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[210px] h-[26px] blur-[5px]"
        ></div>
      </div>

      {/* Телефон */}
      <div className="relative w-[145px] z-10">
        <div className="transition-all duration-700 ease-in-out group-hover:-rotate-[-8deg]">
          <Image
            src="/Design/MockUp/phone.png"
            width={150}
            height={300}
            alt="phone"
            className="relative z-10"
          />
        </div>

        {/* Карточки поверх экрана */}
        <div className="absolute top-[145px] left-1/2 -translate-x-1/2 flex gap-[4px] z-20">
          {/* Левая карточка с бананами и bg-item */}
          <div className="relative w-[90px] h-[150px] group">
            {/* Банан снизу (под карточкой, сдвигается влево при ховере) */}
            <div className="absolute -bottom-[30px] left-1/3 -translate-x-1/2 w-[50px] h-[50px] rotate-[100deg] z-0 pointer-events-none transition-transform duration-500 ease-in-out group-hover:-translate-x-[50px]">
              <Image
                src="/Design/MockUp/banana.png"
                alt="banana-under"
                fill
                className="object-contain blur-[5px]"
              />
            </div>

            {/* Карточка (вращается и сдвигается независимо) */}
            <div className="relative z-10 transition-all duration-700 ease-in-out group-hover:-rotate-[10deg] group-hover:-translate-x-[12px]">
              <Image
                src="/Design/MockUp/card1.png"
                width={90}
                height={150}
                alt="card1"
                className="object-contain"
              />
            </div>

            {/* Банан над карточкой */}
            <div className="absolute -top-[35px] left-[35px] -translate-x-1/2 rotate-[80deg] w-[40px] h-[40px] z-20 pointer-events-none transition-transform duration-500 ease-in-out group-hover:scale-[2] group-hover:-translate-y-[20px] ">
              <Image
                src="/Design/MockUp/banana.png"
                alt="banana-top"
                fill
                className="object-contain  blur-[2px]"
              />
            </div>

            {/* Декор (всегда поверх карточки) */}
            <div className="absolute z-30 pointer-events-none w-[94px] h-[94px] right-8 top-0 transition-all duration-1000 ease-in-out group-hover:translate-x-[-20px] group-hover:translate-y-[-10px]">
              <Image
                src="/Design/MockUp/bg-item.png"
                alt="bg-item"
                unoptimized
                fill
                className="object-contain  blur-[1px]"
              />
            </div>

            <div className="absolute z-50 pointer-events-none w-[43px] h-[43px] right-[-20px] bottom-[-5px] rotate-[90deg] transition-all duration-300 ease-in-out group-hover:scale-[2]">
              <Image
                src="/Design/MockUp/bg-item.png"
                alt="bg-item"
                unoptimized
                fill
                className="object-contain blur-[1px]"
              />
            </div>
          </div>

          {/* Средняя (card2) с гориллой */}
          <div className="relative w-[90px] h-[150px] transition-all duration-700 ease-in-out z-20 overflow-visible">
            <Image
              src="/Design/MockUp/card2.png"
              width={90}
              height={150}
              alt="card2"
              className="relative z-10"
            />

            <div className="absolute bottom-[15px] left-[65px] -translate-x-1/2 w-[140px] h-[110px] z-20 pointer-events-none overflow-visible">
              <Image
                src="/Design/MockUp/gorilaz.png"
                alt="gorilaz"
                fill
                className="object-contain transition-transform duration-1000 ease-in-out origin-bottom group-hover:scale-[2]"
              />
            </div>
            <div className="absolute z-30 pointer-events-none w-[50px] h-[50px] blur-[1px] right-[-50px] bottom-[-10px] transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
              <Image
                src="/Design/MockUp/bg-item2.png"
                alt="bg-item"
                unoptimized
                fill
                className="object-contain opacity-100"
              />
            </div>
          </div>

          {/* Правая карточка */}
          <div className="relative w-[90px] h-[150px] transition-all duration-700 ease-in-out group-hover:rotate-[10deg] group-hover:translate-x-[12px] ">
            {/* Банан снизу (под карточкой, выезжает при ховере) */}
            <div className="absolute -bottom-[-10px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] z-0 pointer-events-none transition-all duration-700 ease-in-out group-hover:translate-y-[40px] rotate-[40deg]">
              <Image
                src="/Design/MockUp/banana.png"
                alt="banana-under"
                fill
                className="object-contain"
              />
            </div>

            {/* Карточка */}
            <Image
              src="/Design/MockUp/card3.png"
              width={90}
              height={150}
              alt="card3"
              className="relative z-10"
            />

            {/* Банан над карточкой */}
            <div className="absolute -top-[10px] left-full -translate-x-1/2 w-[60px] h-[60px] z-20 pointer-events-none transition-all duration-700 ease-in-out group-hover:scale-[2] group-hover:translate-y-[-20px]">
              <Image
                src="/Design/MockUp/banana.png"
                alt="banana-top"
                fill
                className="object-contain"
              />
            </div>

            {/* Декор поверх карточки */}
            <div className="absolute z-30 pointer-events-none w-[94px] h-[94px] right-[-43px] top-0">
              <Image
                src="/Design/MockUp/bg-item2.png"
                alt="bg-item"
                unoptimized
                fill
                className="object-contain opacity-80 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
