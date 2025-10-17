// export default function Title() {
//   return <h1 className="gradient-text">One Apps</h1>;
// }
export default function Title() {
  return (
    <div className="w-[860px]">
      {' '}
      <svg
        viewBox="0 0 860 250"
        width="100%"
        height="auto"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="One Apps"
      >
        <defs>
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
        >
          One Apps
        </text>
      </svg>
    </div>
  );
}
