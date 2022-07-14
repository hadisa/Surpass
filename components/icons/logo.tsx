export const Logo = ({ className }: { className?: string }) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}

  >
    <circle cx="100" cy="100" r="90" fill="#4B6DF3" fill-opacity="0.1" />

    <circle
      cx="100"
      cy="100"
      r="60"
      fill="white"
      stroke="#4B6DF3"
      stroke-width="4"
    />

    <path
      d="M100 100 L100 60"
      stroke="#4B6DF3"
      stroke-width="6"
      stroke-linecap="round"
    />

    <path
      d="M100 100 L130 70"
      stroke="#4B6DF3"
      stroke-width="6"
      stroke-linecap="round"
    />
    <path
      d="M125 65 L140 80 L160 50"
      stroke="#4B6DF3"
      stroke-width="6"
      stroke-linecap="round"
    />

    <rect
      x="70"
      y="120"
      width="60"
      height="40"
      rx="4"
      fill="white"
      stroke="#4B6DF3"
      stroke-width="3"
    />
    <rect
      x="70"
      y="120"
      width="60"
      height="15"
      fill="#4B6DF3"
      fill-opacity="0.2"
    />
    <line
      x1="85"
      y1="140"
      x2="115"
      y2="140"
      stroke="#4B6DF3"
      stroke-width="2"
    />
    <line
      x1="85"
      y1="150"
      x2="135"
      y2="150"
      stroke="#4B6DF3"
      stroke-width="2"
    />

    <text
      x="100"
      y="190"
      font-family="Arial"
      font-size="24"
      font-weight="bold"
      text-anchor="middle"
      fill="#4B6DF3"

    >
      Taskly
    </text>
  </svg>
);
