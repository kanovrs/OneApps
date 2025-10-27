import Button from "../Button/Button";

export interface CardProps {
  title: string;
  titleCard?: React.ReactNode;
  subTitle: string;
  price: React.ReactNode;
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
      className={`card flex flex-col gap-[24px] h-[850px]
        p-[40px] rounded-[16px] transition-all duration-500 cursor-pointer text-reg text-text-gray
        hover:scale-105
        group
        ${active ? "active " : ""}
        hover:text-black
        ${isUnderBg ? "text-black" : "text-text-gray"}
      `}
    >
      <div>
        <div className="flex items-center gap-[12px] ">
          <h4 className="text-h3 font-bold">{title}</h4>
          {titleCard}
        </div>
        <p className="text-lg opacity-80">{subTitle}</p>
      </div>

      <div className="mt-3">{price}</div>

      <Button saleBtn={!!active} text={active ? "Залишити заявку" : ""} />

      <p className="mt-3">{text}</p>

      <div className="mt-4">{list}</div>

      <div className="mt-auto  font-semibold text-primary">{pay}</div>
    </div>
  );
}
