export default function Title() {
  return (
    <div className="w-full md:w-[860px]">
      <svg
        viewBox="0 0 860 250"
        width="100%"
        height="250"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="One Apps"
        className="md:max-w-none max-w-[342px] mx-auto md:mx-0"
      >
        <defs>
          height="250"
          <linearGradient
            id="rotatingGradient"
            gradientUnits="objectBoundingBox"
            gradientTransform="rotate(0)"
          >
            <stop offset="10%" stopColor="#141414" />
            <stop offset="30%" stopColor="#F9FF00" />
            <stop offset="70%" stopColor="#FEFFF8" />
            <stop offset="100%" stopColor="#141414" />

            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 0.5 0.5"
              to="360 0.5 0.5"
              dur="9s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#rotatingGradient)"
          className="uppercase gradient-text"
          style={{
            fontSize: "300px",
            fontWeight: 600,
            fontStyle: "normal",
            lineHeight: "100px",
            letterSpacing: "-0.5px",
          }}
        >
          One Apps
        </text>
      </svg>
    </div>
  );
}
