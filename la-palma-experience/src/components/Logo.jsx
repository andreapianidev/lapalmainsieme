const Logo = ({ size = 60, color = "white" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cerchio esterno con gradiente */}
      <defs>
        <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#457b9d', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1d3557', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="sunsetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f4a261', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#e63946', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#d62839', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="palmGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#2d6a4f', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1b4332', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Sfondo circolare - oceano */}
      <circle cx="100" cy="100" r="95" fill="url(#oceanGradient)" />

      {/* Sole/tramonto in alto a destra */}
      <circle cx="150" cy="60" r="25" fill="url(#sunsetGradient)" opacity="0.9">
        <animate
          attributeName="opacity"
          values="0.8;1;0.8"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Montagna/Vulcano (stile La Palma) */}
      <path
        d="M 30 140 L 70 70 L 90 95 L 110 60 L 130 90 L 170 140 Z"
        fill="#2d4a3e"
        opacity="0.8"
      />
      <path
        d="M 50 140 L 80 85 L 100 100 L 120 75 L 150 140 Z"
        fill="#3d5a4e"
        opacity="0.9"
      />

      {/* Palma stilizzata al centro */}
      <g transform="translate(100, 120)">
        {/* Tronco */}
        <rect x="-4" y="0" width="8" height="35" fill="#8b5a3c" rx="2" />

        {/* Foglie di palma */}
        <path
          d="M 0 10 Q -25 -5 -30 -15 Q -25 -10 0 5"
          fill="url(#palmGradient)"
        />
        <path
          d="M 0 10 Q 25 -5 30 -15 Q 25 -10 0 5"
          fill="url(#palmGradient)"
        />
        <path
          d="M 0 5 Q -20 -15 -20 -25 Q -15 -18 0 0"
          fill="url(#palmGradient)"
        />
        <path
          d="M 0 5 Q 20 -15 20 -25 Q 15 -18 0 0"
          fill="url(#palmGradient)"
        />
        <path
          d="M 0 0 Q 0 -20 -5 -30 Q 0 -25 0 -5"
          fill="url(#palmGradient)"
        />
        <path
          d="M 0 0 Q 0 -20 5 -30 Q 0 -25 0 -5"
          fill="url(#palmGradient)"
        />
      </g>

      {/* Onde del mare in basso */}
      <path
        d="M 0 155 Q 25 150 50 155 T 100 155 T 150 155 T 200 155 L 200 200 L 0 200 Z"
        fill="#457b9d"
        opacity="0.6"
      >
        <animate
          attributeName="d"
          values="M 0 155 Q 25 150 50 155 T 100 155 T 150 155 T 200 155 L 200 200 L 0 200 Z;
                  M 0 155 Q 25 160 50 155 T 100 155 T 150 155 T 200 155 L 200 200 L 0 200 Z;
                  M 0 155 Q 25 150 50 155 T 100 155 T 150 155 T 200 155 L 200 200 L 0 200 Z"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M 0 165 Q 30 160 60 165 T 120 165 T 180 165 T 200 165 L 200 200 L 0 200 Z"
        fill="#5fa3c0"
        opacity="0.5"
      >
        <animate
          attributeName="d"
          values="M 0 165 Q 30 160 60 165 T 120 165 T 180 165 T 200 165 L 200 200 L 0 200 Z;
                  M 0 165 Q 30 170 60 165 T 120 165 T 180 165 T 200 165 L 200 200 L 0 200 Z;
                  M 0 165 Q 30 160 60 165 T 120 165 T 180 165 T 200 165 L 200 200 L 0 200 Z"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      {/* Cuore romantico in alto a sinistra */}
      <path
        d="M 40 50 C 40 45 35 40 30 40 C 25 40 22 43 20 46 C 18 43 15 40 10 40 C 5 40 0 45 0 50 C 0 57 20 65 20 65 C 20 65 40 57 40 50 Z"
        transform="translate(30, 30)"
        fill="#e63946"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;1.15;1"
          dur="1.5s"
          repeatCount="indefinite"
          additive="sum"
        />
      </path>
    </svg>
  );
};

export default Logo;
