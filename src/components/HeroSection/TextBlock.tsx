import Tag from '../Tag';
interface TextBlockProps {
  text: string;
  tag: string;
}

export default function TextBlock({ text, tag }: TextBlockProps) {
  return (
    <div>
      <Tag text={tag} square={false} />
      <p className="mt-[62px]">{text}</p>
    </div>
  );
}
