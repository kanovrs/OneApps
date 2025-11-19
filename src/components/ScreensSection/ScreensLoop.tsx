'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';

type Props = { images: string[]; speed?: number };

const slotWidthsPx = [85, 112, 133, 133, 133, 133, 112, 85];
const slotWidthsPxMobile = [27, 30, 36, 36, 36, 36, 30, 27];
const GAP_PX = 51;
const GAP_PX_MOBILE = 16;
const CONTAINER_MAX_WIDTH = 1285;

export default function ScreensLoop({ images, speed = 3000 }: Props) {
  const [order, setOrder] = useState<number[]>([]);
  const isMobile = useIsMobile();
  const [viewportWidth, setViewportWidth] = useState(CONTAINER_MAX_WIDTH);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!images.length) return;
    const slotCount = isMobile ? slotWidthsPxMobile.length : slotWidthsPx.length;
    setOrder(images.slice(0, slotCount).map((_, i) => i));

    const interval = setInterval(() => {
      setOrder((prev) => {
        const newOrder = [...prev];
        newOrder.push(newOrder.shift()!);
        return newOrder;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [images, speed, isMobile]);

  const widths = isMobile ? slotWidthsPxMobile : slotWidthsPx;
  const gap = isMobile ? GAP_PX_MOBILE : GAP_PX;
  const effectiveMaxWidth = Math.min(viewportWidth, CONTAINER_MAX_WIDTH);
  const maxWidth = isMobile ? effectiveMaxWidth : CONTAINER_MAX_WIDTH;
  const centerIndex = Math.floor(widths.length / 2);

  const getSlotStyle = (index: number) => {

    let leftPosition = 0;
    for (let i = 0; i < index; i++) {
      leftPosition += widths[i] + gap;
    }

    const totalWidth =
      widths.reduce((a, b) => a + b, 0) + gap * (widths.length - 1);
    const centerOffset = (maxWidth - totalWidth) / 2;
    leftPosition += centerOffset;

    const leftPercent = (leftPosition / maxWidth) * 100;
    const widthPercent = (widths[index] / maxWidth) * 100;
    const heightPercent = ((widths[index] * 1.78) / maxWidth) * 100; // 237/133 ≈ 1.78

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

  const centerHeight = (widths[centerIndex] * 1.78 / maxWidth) * 100;
  const paddingBottom = `${centerHeight}%`;

  return (
    <div
      className="relative w-full mx-auto overflow-hidden"
      style={{
        maxWidth: `${maxWidth}px`,
        paddingBottom: paddingBottom,
      }}
    >
      {order.map((imgIdx, i) => (
        <div
          key={imgIdx}
          className="absolute overflow-hidden transition-all duration-500"
          style={{
            ...getSlotStyle(i),
            borderRadius: isMobile ? '4px' : '16px',
          }}
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
