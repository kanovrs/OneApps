import React, { act } from 'react';
import Button from '../Button/Button';

export interface CardProps {
  title: string;
  titleCard?: React.ReactNode;
  subTitle: string;
  price: React.ReactNode;
  text: string;
  list: React.ReactNode;
  pay: string;
  active?: boolean;
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
  onClick,
  onMouseEnter,
  onMouseLeave,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        p-[40px] rounded-2xl transition-all duration-500 cursor-pointer text-text-gray
        hover:scale-105
        group
        ${active ? 'active' : ''}
      `}
    >
      <div>
        <div className="flex items-center gap-[12px]">
          <h4>{title}</h4>
          {titleCard}
        </div>
        <p className="text-lg opacity-80">{subTitle}</p>
      </div>

      <div className="mt-3">{price}</div>

      <Button saleBtn={!!active} text={active ? 'Залишити заявку' : ''} />

      <p className="mt-3">{text}</p>

      <div className="mt-4">{list}</div>

      <div className="mt-6 text-right font-semibold text-primary">{pay}</div>
    </div>
  );
}
