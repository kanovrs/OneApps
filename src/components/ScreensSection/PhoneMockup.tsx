import Image from 'next/image';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';

type Props = {
  scrollProgress: MotionValue<number>;
};

export default function PhoneMockup({ scrollProgress }: Props) {
  const isMobile = useIsMobile();

  const scale = useTransform(scrollProgress, [0.1, 0.9], [1, 2]);
  const scaleDrago = useTransform(scrollProgress, [0.4, 0.85], [0.2, 1]);
  const opacityDrago = useTransform(scrollProgress, [0.4, 0.85], [0, 1]);
  const scaleFire = useTransform(
    scrollProgress,
    [0.5, 0.95],
    [0, isMobile ? 2 : 4]
  );

  return (
    <div className="absolute z-40 left-1/2 -translate-x-1/2 flex items-center justify-center ">
      {/* Телефон */}
      <div
        className="relative overflow-visible"
        style={isMobile ? {
          width: '180px',
          height: '391px',
          borderRadius: '4px',
        } : {
          width: '302px',
          height: '655px',
        }}
      >
        <Image
          src={'/screens/phone.png'}
          alt="PhoneMockup"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 180px, 302px"
          style={isMobile ? {
            borderRadius: '4px',
          } : {}}
        />

        {/* Карточки поверх телефона */}
        <motion.div
          style={{
            scale: scale,
          }}
          className="absolute bottom-[10%] left-0 w-full flex flex-row justify-between gap-[2px] md:gap-[10px] z-40"
        >
          <div
            className="relative overflow-visible"
            style={isMobile ? {
              width: '50px',
              height: '89px',
              borderRadius: '4px',
              boxShadow:
                '0px 0px 10px 11px rgba(0, 0, 0, 0.25), 0px 0px 10px 0px rgba(0, 0, 0, 1)',
            } : {
              width: 'calc(33.333% - 6.67px)',
              height: '160px',
              boxShadow:
                '0px 0px 20px 22px rgba(0, 0, 0, 0.25), 0px 0px 20px 0px rgba(0, 0, 0, 1)',
            }}
          >
            <div className={`absolute inset-0 overflow-hidden ${isMobile ? '' : 'rounded-[10px]'}`} style={isMobile ? { borderRadius: '4px' } : {}}>
              <Image
                src={'/screens/phone1.png'}
                alt={`screen 1`}
                fill
                className="object-cover"
                style={isMobile ? {
                  borderRadius: '4px',
                } : {}}
              />
            </div>
            <div
              className="absolute bottom-0 z-30"
              style={isMobile ? {
                width: '30px',
                height: '20px',
                left: '4px',
              } : {
                width: '90px',
                height: '60px',
                left: '-20px',
              }}
            >
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
                ...(isMobile ? {
                  width: '78px',
                  height: '48px',
                  left: '0px',
                } : {
                  width: '230px',
                  height: '140px',
                  left: '-55px',
                }),
              }}
              className="absolute bottom-0 z-20"
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
            className="relative overflow-hidden"
            style={isMobile ? {
              width: '50px',
              height: '89px',
              borderRadius: '4px',
              boxShadow:
                '0px 0px 10px 11px rgba(0, 0, 0, 0.25), 0px 0px 10px 0px rgba(0, 0, 0, 1)',
            } : {
              width: 'calc(33.333% - 6.67px)',
              height: '160px',
              borderRadius: '10px',
              boxShadow:
                '0px 0px 20px 22px rgba(0, 0, 0, 0.25), 0px 0px 20px 0px rgba(0, 0, 0, 1)',
            }}
          >
            <Image
              src={'/screens/phone2.png'}
              alt={`screen 2`}
              fill
              className="object-cover"
              style={isMobile ? {
                borderRadius: '4px',
              } : {}}
            />
          </div>
          <div
            className="relative overflow-hidden"
            style={isMobile ? {
              width: '50px',
              height: '89px',
              borderRadius: '4px',
              boxShadow:
                '0px 0px 10px 11px rgba(0, 0, 0, 0.25), 0px 0px 10px 0px rgba(0, 0, 0, 1)',
            } : {
              width: 'calc(33.333% - 6.67px)',
              height: '160px',
              borderRadius: '10px',
              boxShadow:
                '0px 0px 20px 22px rgba(0, 0, 0, 0.25), 0px 0px 20px 0px rgba(0, 0, 0, 1)',
            }}
          >
            <Image
              src={'/screens/phone3.png'}
              alt={`screen 3`}
              fill
              className="object-cover"
              style={isMobile ? {
                borderRadius: '4px',
              } : {}}
            />
          </div>
        </motion.div>

        <motion.div
          style={{
            scale: scaleFire,
            ...(isMobile ? {
              bottom: '5%',
            } : {
              bottom: '20%',
            }),
          }}
          className="absolute left-0 w-full flex flex-row justify-between gap-[10px] z-30 "
        >
          <div
            style={isMobile ? {
              width: '300px',
              height: '150px',
            } : {
              width: '600px',
              height: '300px',
            }}
          >
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