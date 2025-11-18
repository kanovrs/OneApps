import Tag from '../Tag';
import Card from './Card';

const cards = [
  {
    tag: '[: STABLE PERFORMANCE',
    tittle: 'Стабільна робота',
    text: 'App, що тримаються довше завдяки нашим акаунтам. Мінімізуємо ризики бану.',
    image: '/Design/solution-card/1.png',
  },
  {
    tag: '[: FULL SETUP',
    tittle: 'Усе, що потрібно для зливу',
    text: 'Готові додатки з інтеграцією у трекер, пушами, клоаками й атрибуцією.',
    image: '/Design/solution-card/2.png',
  },
];

export default function SolutionsSection() {
  return (
    <section className="mt-[64px] md:mt-[180px] flex flex-col items-center">
      {/* Контейнер с центрированием на десктопе и левым краем на мобильных */}
      <div className="flex flex-col items-start md:items-center gap-[8px] py-[32px] w-full  md:px-0">
        <Tag square={true} text="[: OneApps обирають" />
        <h2 className="max-w-[600px] font-bold uppercase text-neutral-20 text-left md:text-center text-[32px] md:text-h2 leading-[1.2]">
          Готові рішення для арбітражу
        </h2>
      </div>

      {/* Контейнер для карточек */}
      <div className="flex flex-col md:flex-row gap-[8px] px-4 md:px-0 items-center">
        {cards.map((item, index) => (
          <Card
            image={item.image}
            tag={item.tag}
            text={item.text}
            tittle={item.tittle}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}