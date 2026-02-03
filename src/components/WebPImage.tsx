'use client';

import Image, { ImageProps } from 'next/image';

const rasterExt = /\.(png|jpe?g)$/i;

export default function WebPImage(props: ImageProps) {
  const src = typeof props.src === 'string' ? props.src : (props.src as { src: string }).src;
  const webpSrc = rasterExt.test(src) ? src.replace(rasterExt, '.webp') : null;

  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <Image {...props} />
      </picture>
    );
  }
  return <Image {...props} />;
}
