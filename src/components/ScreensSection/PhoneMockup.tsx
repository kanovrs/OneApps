import Image from 'next/image';
import { motion, useTransform, MotionValue } from 'framer-motion';
type Props = {
  scrollProgress: MotionValue<number>;
};
export default function PhoneMockup({ scrollProgress }: Props) {
  console.log(scrollProgress);
  const scale = useTransform(scrollProgress, [0.1, 0.9], [1, 2]);
  const scaleDrago = useTransform(scrollProgress, [0.4, 0.85], [0.2, 1]);
  const opacityDrago = useTransform(scrollProgress, [0.4, 0.85], [0, 1]);
  const scaleFire = useTransform(scrollProgress, [0.5, 0.95], [0, 4]);

  return (
    <div className="absolute z-40 left-1/2 -translate-x-1/2 flex items-center justify-center ">
      {/* Телефон */}
      <div className="relative w-[302px] h-[655px] overflow-visible">
        <Image
          src={'/screens/phone.png'}
          alt="PhoneMockup"
          fill
          className="object-cover"
          sizes="(max-width: 1285px) 15vw, 200px"
        />

        {/* Карточки поверх телефона */}
        <motion.div
          style={{
            scale: scale,
          }}
          className="absolute bottom-[10%] left-0 w-full flex flex-row justify-between gap-[10px] z-40"
        >
          <div
            className="relative w-1/3 h-[160px]"
            style={{
              boxShadow:
                '0px 0px 20px 22px rgba(0, 0, 0, 0.25), 0px 0px 20px 0px rgba(0, 0, 0, 1);',
            }}
          >
            <Image
              src={'/screens/phone1.png'}
              alt={`screen 1`}
              fill
              className="object-cover rounded-[10px] overflow-hidden"
            />
            <div className="absolute w-[90px] h-[60px] bottom-0 left-[-20px] z-30">
              <Image
                src={'/screens/drago.png'}
                alt={`screen 1`}
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              style={{
                scale: scaleDrago,
                opacity: opacityDrago,
              }}
              className="absolute w-[230px] h-[140px] bottom-0 left-[-55px] z-20"
            >
              <Image
                src={'/screens/drago-gold.png'}
                alt={`screen 1`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <div
            className="relative w-1/3 h-[160px] rounded-[10px] overflow-hidden"
            style={{
              boxShadow:
                '0px 0px 20px 22px rgba(0, 0, 0, 0.25), 0px 0px 20px 0px rgba(0, 0, 0, 1);',
            }}
          >
            <Image
              src={'/screens/phone2.png'}
              alt={`screen 2`}
              fill
              className="object-cover"
            />
          </div>
          <div
            className="relative w-1/3 h-[160px] rounded-[10px] overflow-hidden"
            style={{
              boxShadow:
                '0px 0px 20px 22px rgba(0, 0, 0, 0.25), 0px 0px 20px 0px rgba(0, 0, 0, 1);',
            }}
          >
            <Image
              src={'/screens/phone3.png'}
              alt={`screen 3`}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          style={{
            scale: scaleFire,
          }}
          className="absolute bottom-[10%] left-0 w-full flex flex-row justify-between gap-[10px] z-30 "
        >
          <div className="w-[600px] h-[300px]">
            <Image
              src="/screens/fire.png"
              alt="Fire"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
