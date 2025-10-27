import Button from '../Button/Button';

export interface CardProps {
  title: string;
  titleCard?: React.ReactNode;
  subTitle: React.ReactNode;
  price: string;
  text: string;
  list: React.ReactNode;
  pay: string;
  active?: boolean;
  isUnderBg?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Card({
  title,
  titleCard,
  subTitle,
  price,
  text,
  list,
  pay,
  active,
  isUnderBg,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`card flex flex-col items-start gap-[24px] h-[850px]
        p-[40px] rounded-[16px] transition-all duration-500 cursor-pointer text-reg text-text-gray
        hover:scale-105
        group
        ${active ? 'active ' : ''}
        hover:text-black
        ${isUnderBg ? 'text-black' : 'text-text-gray'}
      `}
    >
      <div className="flex flex-col gap-[12px]">
        <div className="flex items-center gap-[12px] ">
          <h4
            className={` ${
              isUnderBg ? 'text-black' : 'text-neutral-10'
            } text-h3 font-bold`}
          >
            {title}
          </h4>
          {titleCard}
        </div>
        <p className="text-reg">{subTitle}</p>
      </div>

      <div className="flex items-start text-[48px] font-bold transition-all duration-500">
        <span
          className={`block leading-none ${
            isUnderBg ? 'text-bg-black' : 'text-primary-yellow'
          }`}
        >
          {price}
        </span>
        <span className="ml-[9px] text-[14px] leading-none text-text-gray">
          /додаток
        </span>
      </div>

      <Button saleBtn={!!active} text={active ? 'Залишити заявку' : ''} />

      <p className="">{text}</p>

      <div className="">
        <p className="font-medium mb-[22px]">Що входить:</p>
        {list}
      </div>

      <div className="mt-auto">{pay}</div>
    </div>
  );
}
