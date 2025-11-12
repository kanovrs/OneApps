import Tag from '../Tag';
import ProgressBars from './ProgressBars';

export default function ProcessBlock() {
  return (
    <div className="mt-[32px]">
      <div className="text-neutral-20 py-8 pr-[40px]">
        <div className="mb-[8px]">
          <Tag square={true} text="[: ONEAPPS" />
        </div>
        <h3 className="text-h3 font-bold pb-[24px]">Гарантія якості заміни</h3>
        <p className="whitespace-pre-line">OneApps покриває технічні збої{'\n'} без зайвих питань</p>
      </div>
      <ProgressBars />
    </div>
  );
}
