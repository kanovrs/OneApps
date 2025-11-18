import Tag from "../Tag";
import PricesCards from "./PricesCards";
import ProcessBlock from "./ProcessBlock";

export default function PricesSection() {
  return (
    <section className="mt-[64px] md:mt-[120px] lg:mt-[180px]">
      <div className="flex flex-col items-start lg:items-center gap-[8px] py-[32px] sm:px-4">
        <div className="self-start lg:self-center">
          <Tag square={true} text="[: ціни" />
        </div>
        <h2 className="text-left lg:text-center font-bold text-[32px] sm:text-h2 uppercase text-neutral-20 w-full">
          Flexible Plans
        </h2>
        <p className="max-w-[611px] text-left lg:text-center mt-[16px] text-neutral-20 text-[14px] lg:text-[18px] w-full">
          Оберіть план, який відповідає вашим потребам, від Mini до Pro,
          пропонуюємо правильний баланс функцій та вартості.
        </p>
      </div>
      <div className="sm:px-4">
        <PricesCards />
      </div>
      <div className="sm:px-4">
        <ProcessBlock />
      </div>
    </section>
  );
}