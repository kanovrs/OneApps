import Tag from "../Tag";
import PricesCards from "./PricesCards";
import ProcessBlock from "./ProcessBlock";
export default function PricesSection() {
  return (
    <section className="mt-[180px]">
      <div className="flex flex-col items-center gap-[8px] py-[32px]">
        <Tag square={true} text="[: ціни" />
        <h2 className="text-center font-bold text-h2 uppercase text-neutral-20">
          Flexible Plans
        </h2>
        <p className="max-w-[611px] text-center mt-[16px] text-neutral-20">
          Оберіть план, який відповідає вашим потребам, від Mini до Pro,
          пропонуюємо правильний баланс функцій та вартості.
        </p>
      </div>
      <div className="">
        <PricesCards />
      </div>
      <ProcessBlock />
    </section>
  );
}
