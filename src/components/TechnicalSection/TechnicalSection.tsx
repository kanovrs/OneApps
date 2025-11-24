'use client';
import { useState } from 'react';
import SectionHeader from './SectionHeader';
import SectionTabs from './SectionTabs';
import SectionContent from './SectionContent';
import Button from '../Button/Button';

const sections = [
  {
    id: 1,
    tag: '[: ТЕХНІЧНА БАЗА',
    title: 'Технічна реалізація під ключ',
    items: [
      {
        id: '001',
        title: 'Розробка Android-додатку на Kotlin',
        text: 'Створюємо сучасні додатки, які відповідають вимогам Google Play та приватних сторів. QA та тестування перед видачею.',
      },
      {
        id: '002',
        title: 'Готове рішення для заливки трафіку',
        text: 'Ви отримуєте активне посилання, яке можна запускати в роботу. Без додаткових кроків чи налаштувань.',
      },
      {
        id: '003',
        title: 'Інтеграція з будь-яким трекером',
        text: 'Keitaro, Binom, AIO підключимо будь-яку систему аналітики, яка вам потрібна для контролю результатів.',
      },
    ],
    image: '/Design/technical-card/1.png',
    logos: ['/logos/kotlin.svg', '/logos/googleplay.svg'],
  },
  {
    id: 2,
    tag: '[: АРБІТРАЖНИЙ ФУНКЦІОНАЛ',
    title: 'Оптимізація під арбітраж і масштаб',
    items: [
      {
        id: '001',
        title: 'Життєвий цикл додатку',
        text: 'Використовуємо акаунти з підвищеним trust — додатки працюють у середньому від 5 до 30 днів.',
      },
      {
        id: '002',
        title: 'Push-нотифікації через Push Express',
        text: 'Автоматичне повернення користувача прямо в додаток. Працює на дохід і утримання з першого дня.',
      },
      {
        id: '003',
        title: 'Клоака під будь-яке гео',
        text: 'Гнучке налаштування логіки, редиректів і контенту під оффери. Підходить для Facebook, Google, TikTok, UAC тощо.',
      },
    ],
    image: '/Design/technical-card/2.png',
    logos: ['/logos/push.svg', '/logos/tracker.svg'],
  },
];

export default function TechnicalSection() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeItem, setActiveItem] = useState<string | number | null>(
    sections[0].items[0].id
  );
  const [, setIsAnimating] = useState(false);

  const handleSectionChange = async (index: number) => {
    if (index === activeSection) return;

    setIsAnimating(true);
    await new Promise((resolve) => setTimeout(resolve, 100));

    setActiveSection(index);
    setActiveItem(sections[index].items[0].id);

    setTimeout(() => setIsAnimating(false), 2000);
  };

  const handleAccordionClick = (itemId: string | number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/test-download.txt';
    link.download = 'test-download.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mt-[64px] md:mt-[180px]">
      <SectionHeader tag="[: СЕРВІС" title="Що ви отримаєте з OneApps" />

      <SectionTabs
        sections={sections}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <SectionContent
        sections={sections}
        activeSection={activeSection}
        activeItem={activeItem}
        onAccordionClick={handleAccordionClick}
      />

      <div className="flex justify-end md:justify-end mt-12">
        <div className="w-full md:w-auto flex justify-center md:block">
          <Button
            text="Отримати файл"
            side="right"
            saleBtn={false}
            icon="/Design/arrow-d.svg"
            onClick={handleDownload}
          />
        </div>
      </div>
    </section>
  );
}
