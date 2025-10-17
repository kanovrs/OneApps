'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = { images: string[]; speed?: number };

// Ширины в px для контейнера 1285px
const slotWidthsPx = [85, 112, 133, 133, 133, 133, 112, 85];
const GAP_PX = 51; // промежуток между слотами в px
const CONTAINER_MAX_WIDTH = 1285;

export default function ScreensLoop({ images, speed = 3000 }: Props) {
  const [order, setOrder] = useState<number[]>([]);

  useEffect(() => {
    if (!images.length) return;
    setOrder(images.slice(0, slotWidthsPx.length).map((_, i) => i));

    const interval = setInterval(() => {
      setOrder((prev) => {
        const newOrder = [...prev];
        newOrder.push(newOrder.shift()!);
        return newOrder;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [images, speed]);

  const getSlotStyle = (index: number) => {
    const centerIndex = Math.floor(slotWidthsPx.length / 2);

    // Считаем позицию слева в px
    let leftPosition = 0;
    for (let i = 0; i < index; i++) {
      leftPosition += slotWidthsPx[i] + GAP_PX;
    }

    // Центрируем всю композицию
    const totalWidth =
      slotWidthsPx.reduce((a, b) => a + b, 0) +
      GAP_PX * (slotWidthsPx.length - 1);
    const centerOffset = (CONTAINER_MAX_WIDTH - totalWidth) / 2;
    leftPosition += centerOffset;

    // Конвертируем в проценты
    const leftPercent = (leftPosition / CONTAINER_MAX_WIDTH) * 100;
    const widthPercent = (slotWidthsPx[index] / CONTAINER_MAX_WIDTH) * 100;
    const heightPercent =
      ((slotWidthsPx[index] * 1.78) / CONTAINER_MAX_WIDTH) * 100; // 237/133 ≈ 1.78

    const zIndex = 10 - Math.abs(centerIndex - index);
    const opacity = 1 - Math.abs(centerIndex - index) * 0.1;

    return {
      left: `${leftPercent}%`,
      top: '50%',
      transform: 'translateY(-50%)',
      width: `${widthPercent}%`,
      paddingBottom: `${heightPercent}%`,
      zIndex,
      opacity,
    };
  };

  return (
    <div
      className="relative w-full max-w-[1285px] mx-auto overflow-hidden"
      style={{ paddingBottom: '18.44%' }}
    >
      {order.map((imgIdx, i) => (
        <div
          key={imgIdx}
          className="absolute rounded-2xl overflow-hidden transition-all duration-500"
          style={getSlotStyle(i)}
        >
          <div className="absolute inset-0">
            <Image
              src={images[imgIdx]}
              alt={`screen-${imgIdx}`}
              fill
              className="object-cover"
              sizes="(max-width: 1285px) 15vw, 200px"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
