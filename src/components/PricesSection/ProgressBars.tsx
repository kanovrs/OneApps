import ProgressBar from "./ProgressBar";
export default function ProgressBars() {
  return (
    <div className="space-y-8 text-white mx-auto rounded-lg mt-[48px]">
      <ProgressBar 
        label="72 ГОДИНИ" 
        tagText="[:Start" 
        percent={22} 
      />
      <ProgressBar 
        label="3 000 інсталів або 5 ДНІВ" 
        tagText="[: PRO" 
        percent={51} 
      />
      <ProgressBar 
        label="7 ДНІВ" 
        tagText="[: Max" 
        percent={81} 
      />
      <p className="text-sm text-neutral-400 mt-4 whitespace-pre-line">
        Гарантія діє лише на технічні дефекти, що стали причиною бану. Не
        покриває випадки блокування через порушення{'\n'} рекламних політик (нетичні
        креативи, фейкові оффери тощо).
      </p>
    </div>
  );
}