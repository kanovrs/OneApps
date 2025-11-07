export const reviews = [
  {
    id: 5,
    username: 'Ірина Савчук',
    rating: 4.8,
    reviewText:
      "Нарешті нормальний прев'ю без мильних картинок і дивного тексту.",
    avatarUrl: '/Design/review-card/review-ava5.jpg',
    position: { top: '15%', left: '15%' },
    animationClass: 'floating-card-5',
    zIndex: 9,
    opacity: 0.6,
  },
  {
    id: 2,
    username: 'Artem N.',
    rating: 5.0,
    reviewText:
      'Оформлена чітко, без зайвого відразу зрозуміло, що за гра. Скріни кольорові, привертають увагу,не пошкодував те що треба.',
    avatarUrl: '/Design/review-card/review-ava2.png',
    position: { top: '30%', left: '8%' },
    animationClass: 'floating-card-2',
    zIndex: 30,
  },
  {
    id: 1,
    username: 'max_playz',
    rating: 5.0,
    reviewText:
      'Мені потрібно швидко і без зайвих витрат, тут одразу видно, що зроблено з головою. Відчувається, що команда досвідчена.',
    avatarUrl: '/Design/review-card/review-ava1.png',
    position: { top: '50%', left: '13%' },
    animationClass: 'floating-card-1',
    zIndex: 25,
  },
  {
    id: 7,
    username: 'Катерина Мельник',
    rating: 4.5,
    reviewText:
      'Поки що це один з небагатьох додатків, де видно, що хтось справді попрацював над візуалом.',
    avatarUrl: '/Design/review-card/review-ava7.jpg',
    position: { top: '73%', left: '20%' },
    animationClass: 'floating-card-7',
    zIndex: 9,
    opacity: 0.6,
  },
  {
    id: 3,
    username: 'Veronika K.',
    rating: 5.0,
    reviewText:
      'Команда OneApps вкотре приємно здивувала. Завжди все виглядає на рівні.',
    avatarUrl: '/Design/review-card/review-ava3.jpg',
    position: { top: '11%', right: '16%' },
    animationClass: 'floating-card-3',
    zIndex: 20,
  },
  {
    id: 4,
    username: 'Oleksii Bondarenko',
    rating: 4.9,
    reviewText: "Прев'ю топ. Дякую. Давно не бачив такого зібраного підходу.",
    avatarUrl: '/Design/review-card/review-ava4.jpg',
    position: { top: '31%', right: '10%' },
    animationClass: 'floating-card-4',
    zIndex: 35,
  },
  {
    id: 6,
    username: 'Andriy_Tech',
    rating: 4.6,
    reviewText:
      'Професійна подача видно, що над кожним екраном думали. Інтуїтивно і чітко.',
    avatarUrl: '/Design/review-card/review-ava6.jpg',
    position: { top: '48%', right: '13%' },
    animationClass: 'floating-card-6',
    zIndex: 18,
    opacity: 0.6,
  },
  {
    id: 8,
    username: 'alina.io',
    rating: 4.8,
    reviewText:
      'Не часто пишу відгуки, але тут реально все спрацювало. Видно руку людей, які шарять',
    avatarUrl: '/Design/review-card/review-ava8.jpg',
    position: { top: '68%', right: '18%' },
    animationClass: 'floating-card-8',
    zIndex: 28,
  },
];

export const mobileReviews = [1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
  const review = reviews.find((r) => r.id === id);
  return {
    id: review.id,
    username: review.username,
    rating: review.rating,
    reviewText: review.reviewText,
    avatarUrl: review.avatarUrl,
  };
});
