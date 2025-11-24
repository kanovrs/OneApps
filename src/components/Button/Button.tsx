import Image from 'next/image';
import './button.css';

interface ButtonProps {
  text?: string;
  side?: 'right' | 'left';
  saleBtn?: boolean;
  icon?: string;
  onClick?: () => void;
}

const ArrowIcon = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0688 8L20.1786 11.7099L20.5 12L20.1786 12.2901L18.9725 13.3788L18.3667 12.832L19.2885 12L15.5 8.58022L16.0688 8ZM16.7061 14.331L17.3119 14.8779L16.0688 16L15.5 15.4198L16.7061 14.331Z"
      fill="currentColor"
    />
    <path d="M19.5 12H4.5" stroke="currentColor" />
  </svg>
);

export default function Button({
  text,
  side = 'right',
  saleBtn = false,
  icon,
  onClick,
}: ButtonProps) {
  const ArrowContent = icon ? (
    <Image src={icon} alt="icon" width={16} height={16} />
  ) : (
    <ArrowIcon />
  );

  return (
    <div className={`button-container ${saleBtn ? 'sale' : ''}`}>
      <div className="gradient-border"></div>
      <button
        className={`animated-button ${
          side === 'left' ? 'left-side' : 'right-side'
        }`}
        onClick={onClick}
      >
        {side === 'left' && <span className="arow">{ArrowContent}</span>}

        {text && <span className="button-text">{text}</span>}

        {side === 'right' && <span className="arow">{ArrowContent}</span>}
      </button>
    </div>
  );
}
