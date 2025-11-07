'use client';
import ReviewBlock from './ReviewBlock';
import Image from 'next/image';
import { reviews } from './reviews-data';

export default function ReviewsList() {
  return (
    <div className="relative w-full h-[800px] md:h-[900px] lg:h-[1000px] flex items-center justify-center">
      <div className="relative z-10 w-[262px] h-[557px] flex items-center justify-center">
        <Image
          src="/Design/review-card/review-phone.svg"
          alt="Android Phone Mockup"
          width={262}
          height={557}
          className="w-[262px] h-[557px] object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {reviews.map((review) => (
        <div
          key={review.id}
          className="absolute"
          style={{
            ...review.position,
            zIndex: review.zIndex,
            opacity: review.opacity || 1,
          }}
        >
          <ReviewBlock
            username={review.username}
            rating={review.rating}
            reviewText={review.reviewText}
            avatarUrl={review.avatarUrl}
            animationClass={review.animationClass}
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}