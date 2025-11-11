import Tag from '../Tag';
import Image from 'next/image';

type CardProps = { tag: string; tittle?: string; text: string; image: string };

export default function Card({ tag, tittle, text, image }: CardProps) {
  return (
    <div className="w-1/2 bg-bg-black90 rounded-[24px] transition-all duration-300 ease-in-out hover:transform hover:scale-[1.02]  group cursor-pointer">
      <div className="card__header flex flex-col gap-[16px] p-[40px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[12px] group-hover:gap-[16px] transition-all duration-300">
            <Tag square={true} text={tag} />
            <Image
              src="/Design/arow-gray.png"
              width={16}
              height={16}
              alt="arrow"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
          <h3 className="text-h3 text-neutral-20 group-hover:text-white transition-colors duration-300">
            {tittle}
          </h3>
        </div>
        <p className="text-neutral-20 group-hover:text-neutral-100 transition-colors duration-300">
          {text}
        </p>
      </div>
      <div className="py-[36.5px] pt-[64px] pb-[32px] group-hover:pt-[60px] group-hover:pb-[36px] transition-all duration-300">
        <div className="w-full relative h-[382px] group-hover:h-[390px] transition-all duration-300">
          <Image
            src={image}
            alt="card-image"
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
