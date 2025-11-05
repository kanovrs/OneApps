import Image from 'next/image';

interface Item {
  id: string | number;
  title: string;
  text: string;
}

interface AccordionItemProps {
  item: Item;
  isActive: boolean;
  onClick: (itemId: string | number) => void;
}

export default function AccordionItem({
  item,
  isActive,
  onClick,
}: AccordionItemProps) {
  return (
    <div className="border-t border-[#242424] relative">
      <button
        onClick={() => onClick(item.id)}
        className="w-full flex justify-between items-start text-left text-white font-medium relative group py-[25px]"
      >
        {isActive && (
          <div
            className="absolute top-0 left-0 h-[1px] bg-[#F9FF00] transition-all duration-500 ease-out"
            style={{
              width: '100%',
              transformOrigin: 'left center',
              animation: 'lineExpand 0.5s ease-out forwards',
            }}
          />
        )}

        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between items-center w-full">
            <span
              className={`flex items-center gap-1 uppercase text-sup font-semibold transition-colors duration-500 ${
                isActive ? 'text-[#F9FF00]' : 'text-neutral-30'
              }`}
            >
              <div className="p-1.5">
                <span
                  className={`w-1 h-1 block transition-colors duration-500 ${
                    isActive ? 'bg-[#F9FF00]' : 'bg-neutral-30'
                  }`}
                ></span>
              </div>
              <span>[: {item.id}]</span>
            </span>

            <div className="relative w-4 h-4">
              <Image
                src="/Design/arrow-up.svg"
                alt="arrow up"
                width={16}
                height={16}
                className={`absolute top-0 left-0 transition-all duration-500 ease-out ${
                  isActive
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 rotate-180 scale-75'
                }`}
              />
              <Image
                src="/Design/arrow-down.svg"
                alt="arrow down"
                width={16}
                height={16}
                className={`absolute top-0 left-0 transition-all duration-500 ease-out ${
                  !isActive
                    ? 'opacity-100 rotate-0 scale-100'
                    : 'opacity-0 -rotate-180 scale-75'
                }`}
              />
            </div>
          </div>

          <span
            className={`text-lg md:text-xl font-medium leading-5 md:leading-6 pt-3 mb-5 md:mb-7 transition-colors duration-500 ${
              isActive ? 'text-[#FEFFF8]' : 'text-[#7A7A7A]'
            }`}
          >
            {item.title}
          </span>
        </div>
      </button>

      {isActive && (
        <div
          className="overflow-hidden"
          style={{
            animation: 'slideDown 0.7s ease-out',
          }}
        >
          <p className="text-gray-400 text-sm md:text-lg pb-4 md:pb-8">
            {item.text}
          </p>
        </div>
      )}

      <style jsx>{`
        @keyframes lineExpand {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}