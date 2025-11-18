export const CARD_CONFIG = {
  desktop: {
    topCards: { width: 258, height: 459 },
    loop: {
      container: { width: 800, height: 350 },
      centerCard: { width: 490, height: 296 },
    },
    sizes: [
      { width: 290, height: 175 },
      { width: 340, height: 205 },
      { width: 378, height: 228 },
      { width: 490, height: 296 },
      { width: 378, height: 228 },
      { width: 340, height: 205 },
      { width: 290, height: 175 },
    ],
    offsets: [-530, -430, -280, 0, 280, 430, 530],
  },

  mobile: {
    topCards: { width: 100, height: 180 },

    loop: {
      container: { width: '100%', height: 85 },
      centerCard: { width: 140, height: 85 },
    },
    sizes: [
      { width: 75, height: 40 },
      { width: 90, height: 54 },
      { width: 100, height: 60 },
      { width: 140, height: 85 },
      { width: 100, height: 60 },
      { width: 90, height: 54 },
      { width: 75, height: 40 },
    ],
    offsets: [-150, -110, -70, 0, 70, 110, 150]
  },
};
