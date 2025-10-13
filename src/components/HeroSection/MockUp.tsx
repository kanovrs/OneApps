import Image from "next/image";

export default function MockUp() {
  return (
    <div className="relative flex flex-col items-center group">
      {/* Подсветка под всем */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #F9FF00 0%, rgba(249,255,0,0) 100%)",
          }}
          className="w-[420px] h-[13px] blur-[15px]"
        ></div>

        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #000000 0%, rgba(0, 0, 0, 0) 100%)",
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
          <div className="relative w-[90px] h-[150px] transition-all duration-700 ease-in-out group-hover:-rotate-[10deg] group-hover:-translate-x-[12px]">
            {/* Банан снизу (под карточкой) */}
            <div className="absolute -bottom-[35px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] z-0 pointer-events-none">
              <Image
                src="/Design/MockUp/banana.png"
                alt="banana-under"
                fill
                className="object-contain opacity-80 blur-[2px] transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Карточка */}
            <Image
              src="/Design/MockUp/card1.png"
              width={90}
              height={150}
              alt="card1"
              className="relative z-10"
            />

            {/* Банан над карточкой */}
            <div className="absolute -top-[35px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] z-20 pointer-events-none">
              <Image
                src="/Design/MockUp/banana.png"
                alt="banana-top"
                fill
                className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-125"
              />
            </div>

            {/* Декоративный слой поверх карточки */}
            <div className="absolute  z-30 pointer-events-none w-[94px] h-[94px] right-10 top-0">
              <Image
                src="/Design/MockUp/bg-item.png"
                alt="bg-item"
                unoptimized
                fill
                className="object-contain opacity-80 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
              />
            </div>
            <div className="absolute  z-30 pointer-events-none w-[43px] h-[43px] blur-[1px] right-0 bottom-[-10px] rotate-[90deg]">
              <Image
                src="/Design/MockUp/bg-item.png"
                alt="bg-item"
                unoptimized
                fill
                className="object-contain opacity-80 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Средняя (card2) с гориллой */}
          <div className="relative w-[90px] h-[150px] transition-all duration-700 ease-in-out z-30 overflow-visible">
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
                className="object-contain transition-transform duration-700 ease-in-out origin-bottom group-hover:scale-[2]"
              />
            </div>
          </div>

          {/* Правая карточка */}
          <div className="relative w-[90px] h-[150px] transition-all duration-700 ease-in-out group-hover:rotate-[10deg] group-hover:translate-x-[12px]">
            <Image
              src="/Design/MockUp/card3.png"
              width={90}
              height={150}
              alt="card3"
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
