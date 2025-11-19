import Tag from '../Tag';
import Image from 'next/image';

type CardProps = { tag: string; tittle?: string; text: string; image: string };

export default function Card({ tag, tittle, text, image }: CardProps) {
  return (
    <div
      className="
        flex flex-col justify-between 
        bg-[#0F0F0F] rounded-[16px] 
        w-[374px] h-[400px] gap-[8px] 
        md:rounded-[24px] md:w-1/2 md:h-auto md:bg-bg-black90
      "
    >
      <div className="flex flex-col gap-[16px] p-[24px] md:p-[40px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[12px]">
            <Tag square={true} text={tag} />
            <Image
              src="/Design/arow-gray.png"
              width={16}
              height={16}
              alt="arrow"
            />
          </div>
          <h3 className="text-[24px] md:text-h3 text-neutral-20 leading-[1.2]">
            {tittle}
          </h3>
        </div>
        <p className="text-[14px] md:text-lg text-neutral-20 leading-[1.5]">
          {text}
        </p>
      </div>

      {/* убраны паддинги у картинки на мобильных */}
      <div className="flex-grow flex items-center justify-center md:pt-[64px] md:pb-[32px]">
        <div className="relative w-full h-[200px] md:h-[382px]">
          <Image src={image} alt="card-image" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
