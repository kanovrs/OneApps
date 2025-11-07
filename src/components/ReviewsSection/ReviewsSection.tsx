'use client';
import Tag from '../Tag';
import ReviewsList from './ReviewsList';
import ReviewBlock from './ReviewBlock';
import Image from 'next/image';
import { mobileReviews } from './reviews-data';

export default function ReviewsSection() {
  return (
    <section className="mt-[120px] md:mt-[180px] overflow-hidden -mx-[50vw] relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] max-w-none w-screen md:w-auto md:mx-0 md:left-auto md:right-auto md:max-w-full">
      <div className="flex flex-col items-center gap-[8px] py-[32px] mb-[60px] md:mb-[32px] relative z-30">
        <Tag square={true} text="[: android app" />
        <h2 className="text-center font-bold uppercase text-neutral-20 text-[32px] md:text-h2">
          Відгуки
        </h2>
      </div>

      <div className="hidden md:block relative overflow-hidden">
        <div className="flex flex-col p-0 m-0">
          <div
            className="w-full h-[94px] bg-cover bg-center bg-no-repeat m-0 p-0"
            style={{
              backgroundImage: "url('/Design/review-card/Grid-top.svg')",
            }}
          />

          {[...Array(7)].map((_, index) => (
            <div
              key={index}
              className="w-full h-[94px] bg-cover bg-center bg-no-repeat m-0 p-0"
              style={{
                backgroundImage: "url('/Design/review-card/Grid-mid.svg')",
              }}
            />
          ))}

          <div
            className="w-full h-[94px] bg-cover bg-center bg-no-repeat m-0 p-0"
            style={{
              backgroundImage: "url('/Design/review-card/Grid-bottom.svg')",
            }}
          />
        </div>

        <div className="absolute top-[-80px] right-[-20px] inset-x-0 bottom-0">
          <ReviewsList />
        </div>
      </div>

      <div className="block md:hidden relative pb-8 w-full">
        <div className="relative z-10 flex justify-center py-4 -mt-16 mb-8 w-full">
          <Image
            src="/Design/review-card/review-phone.svg"
            alt="Android Phone Mockup"
            width={200}
            height={422}
            className="w-[200px] h-[422px] object-contain drop-shadow-2xl"
            priority
          />
        </div>

        <div className="absolute inset-0 z-0 top-9 w-full overflow-hidden">
          <div className="flex flex-col items-center w-full h-full">
            <div className="w-[500px] max-w-[100vw] overflow-hidden">
              <div
                className="w-full h-[94px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/Design/review-card/Grid-top.svg')",
                }}
              />
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-full h-[94px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/Design/review-card/Grid-mid.svg')",
                  }}
                />
              ))}
              <div
                className="w-full h-[94px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/Design/review-card/Grid-bottom.svg')",
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 -mt-6 w-full">
          <div className="flex gap-[75px] overflow-x-auto pb-4 scrollbar-hide w-full px-4">
            {mobileReviews.map((review) => (
              <div key={review.id} className="flex-shrink-0 w-[300px]">
                <ReviewBlock
                  username={review.username}
                  rating={review.rating}
                  reviewText={review.reviewText}
                  avatarUrl={review.avatarUrl}
                  className="transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
