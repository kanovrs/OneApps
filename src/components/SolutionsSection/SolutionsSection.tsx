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
    <section className="mt-[180px]">
      <div className="flex flex-col items-center gap-[8px] py-[32px]">
        <Tag square={true} text="[: OneApps обирають" />
        <h2 className="max-w-[50%] text-center font-bold text-h2 uppercase">
          Готові рішення для арбітражу
        </h2>
      </div>
      <div className="flex gap-[8px]">
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
