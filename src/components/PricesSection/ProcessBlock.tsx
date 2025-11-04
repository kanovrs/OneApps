import Tag from '../Tag';
import ProgressBars from './ProgressBars';

export default function ProcessBlock() {
  return (
    <div className="mt-[32px]">
      <div className="">
        <Tag square={true} text="[: ONEAPPS" />
        <h3>Гарантія якості заміни</h3>
        <p>OneApps покриває технічні збої без зайвих питань</p>
      </div>
      <ProgressBars />
    </div>
  );
}
