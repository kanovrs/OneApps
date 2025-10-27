import ProgressBar from "./ProgressBar";
export default function ProgressBars() {
  return (
    <div className="space-y-8 p-6  text-white mx-auto rounded-lg">
      <ProgressBar label="72 ГОДИНИ" percent={35} />
      <ProgressBar label="3 000 інсталів або 5 ДНІВ" percent={50} />
      <ProgressBar label="7 ДНІВ" percent={70} />
      <p className="text-xs text-neutral-400 mt-4">
        Гарантія діє лише на технічні дефекти, що стали причиною бану. Не
        покриває випадки блокування через порушення рекламних політик (нетичні
        креативи, фейкові оффери тощо).
      </p>
    </div>
  );
}
