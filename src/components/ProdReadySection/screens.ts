const generatePaths = (basePath: string, count: number) => 
  Array.from({ length: count }, (_, i) => `${basePath}${i + 1}.png`);

export const phoneScreens = generatePaths('/Design/productionReady-card/screens/screen-phone', 20);
export const sideScreens = generatePaths('/Design/productionReady-card/screens/', 20);

export const SCREEN_CONFIG = {
  phone: {
    width: 366,
    height: 782,
  },
  sideScreens: {
    inner: { width: 200, height: 356 },
    middle: { width: 180, height: 320 },
    outer: { width: 180, height: 260 },
  },
} as const;