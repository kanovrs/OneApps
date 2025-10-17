import Tag from '../Tag';
import Image from 'next/image';

type CardProps = { tag: string; tittle?: string; text: string; image: string };

export default function Card({ tag, tittle, text, image }: CardProps) {
  return (
    <div className="w-1/2 bg-bg-black90 rounded-[24px]">
      <div className="card__header flex flex-col gap-[16px] p-[40]">
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
          <h3 className="text-h3">{tittle}</h3>
        </div>
        <p>{text}</p>
      </div>
      <div className="py-[36.5px] pt-[64px] pb-[32px]">
        <div className="w-full relative h-[382px]">
          <Image src={image} alt="card-image" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
