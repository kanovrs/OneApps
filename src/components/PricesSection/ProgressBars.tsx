'use client';

import { useState } from 'react';
import ProgressBar from "./ProgressBar";
import { useIsMobile } from '@/hooks/useIsMobile';

export default function ProgressBars() {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div 
      className="space-y-3 text-white mx-auto rounded-lg mt-[48px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProgressBar 
        label="72 ГОДИНИ" 
        tagText="[:Starter" 
        percent={22} 
        isHovered={isHovered}
        isMobile={isMobile}
        color="bg-[#242424]"
      />
      <ProgressBar 
        label={isMobile ? "3 000 інсталів\nабо 5 ДНІВ" : "3 000 інсталів або 5 ДНІВ"} 
        tagText="[: PRO" 
        percent={isMobile ? 35 : 51} 
        isHovered={isHovered}
        isMobile={isMobile}
        color="bg-[#242424]"
      />
      <ProgressBar 
        label="7 ДНІВ" 
        tagText="[: Max" 
        percent={isMobile ? 60 : 81} 
        isHovered={isHovered}
        isMobile={isMobile}
      />
      <p className="text-sm text-neutral-400 mt-4 whitespace-pre-line">
        Гарантія діє лише на технічні дефекти, що стали причиною бану. Не
        покриває випадки блокування через порушення{'\n'} рекламних політик (нетичні
        креативи, фейкові оффери тощо).
      </p>
    </div>
  );
}