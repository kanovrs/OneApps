interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <div className="button-container">
      <div className="gradient-border"></div>
      <button className="animated-button">{text}</button>
    </div>
  );
}
