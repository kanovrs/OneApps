import Tag from "../Tag";
import Title from "./Title";
import MockUp from "./MockUp";
export default function HeroSection() {
  return (
    <section>
      <Tag text="[: android app" square={true} />
      <div className="flex justify-between">
        <Title />
        <MockUp />
      </div>
    </section>
  );
}
