'use client';
import Image from 'next/image';
import './floating.css';

interface ReviewBlockProps {
  username: string;
  rating: number;
  reviewText: string;
  avatarUrl?: string;
  className?: string;
  animationClass?: string;
}

export default function ReviewBlock({
  username,
  rating,
  reviewText,
  avatarUrl,
  className = '',
  animationClass = '',
}: ReviewBlockProps) {
  return (
    <div
      className={`w-[360px] min-w-[360px] max-w-[360px] rounded-[16px] p-[20px] border border-neutral-20 bg-white/95 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 ${animationClass} ${className}`}
      style={{ willChange: 'transform' }}
    >
      <div className="flex gap-3 h-full">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden border border-gray-200">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={`${username} avatar`}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-text-dark font-bold text-base">
                {username.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 min-w-0">
          <div className="flex justify-between items-start">
            <span className="text-bg-black font-bold text-sm leading-5">
              {username}
            </span>

            <div className="flex items-center gap-1 py-1 px-2 rounded-lg bg-white border border-neutral-20 shadow-sm">
              <span className="text-bg-black font-semibold text-xs">
                {rating.toFixed(1)}
              </span>
              <Image
                src="/Design/review-card/raiting-star.svg"
                alt="rating star"
                width={12}
                height={12}
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="font-normal text-sm leading-5 text-text-dark">
              «{reviewText}»
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
