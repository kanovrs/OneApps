interface TagProps {
  text: string;
  square: boolean;
}
export default function Tag({ text, square }: TagProps) {
  return (
    <div className="text-neutral-30 flex items-center gap-[4px] uppercase text-sup font-semibold ">
      {square ? (
        <div className="p-[6px]">
          <span className="w-[4px] h-[4px] bg-neutral-30 block "></span>
        </div>
      ) : (
        ''
      )}

      <span>{text}</span>
    </div>
  );
}
