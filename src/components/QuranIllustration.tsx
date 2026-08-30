interface Props {
  className?: string;
}

/**
 * A modest, illustrative rendering of an open book on a stand — used in
 * place of photography so the site never depends on external image
 * licensing. Kept deliberately simple and line-based to match the
 * academy's quiet, premium visual language.
 */
export default function QuranIllustration({ className = 'w-full h-full' }: Props) {
  return (
    <svg viewBox="0 0 400 340" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="200" cy="300" rx="140" ry="14" fill="#0a1826" opacity="0.06" />

      {/* Rehal / book stand */}
      <path d="M120 250 L200 220 L280 250 L280 262 L200 234 L120 262 Z" fill="#0f2032" opacity="0.9" />
      <path d="M120 250 L80 268 L200 300 L320 268 L280 250 L200 278 Z" fill="#152941" />

      {/* Open book */}
      <path
        d="M200 96 C 168 82, 122 78, 96 90 L96 214 C 122 202, 168 206, 200 220 Z"
        fill="#faf6ee"
        stroke="#c2a05a"
        strokeWidth="1.5"
      />
      <path
        d="M200 96 C 232 82, 278 78, 304 90 L304 214 C 278 202, 232 206, 200 220 Z"
        fill="#fefdfb"
        stroke="#c2a05a"
        strokeWidth="1.5"
      />
      <path d="M200 96 L200 220" stroke="#c2a05a" strokeWidth="1.5" />

      {/* Text lines - left page */}
      {[112, 128, 144, 160, 176, 192].map((y, i) => (
        <line
          key={`l-${y}`}
          x1={108}
          y1={y}
          x2={i % 2 === 0 ? 190 : 170}
          y2={y}
          stroke="#0f2032"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      {/* Text lines - right page */}
      {[112, 128, 144, 160, 176, 192].map((y, i) => (
        <line
          key={`r-${y}`}
          x1={210}
          y1={y}
          x2={i % 2 === 0 ? 292 : 272}
          y2={y}
          stroke="#0f2032"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}

      {/* Decorative eight-point star accent */}
      <g transform="translate(200, 60)">
        <rect x="-14" y="-14" width="28" height="28" stroke="#c2a05a" strokeWidth="1.4" fill="none" />
        <rect
          x="-14"
          y="-14"
          width="28"
          height="28"
          stroke="#c2a05a"
          strokeWidth="1.4"
          fill="none"
          transform="rotate(45 0 0)"
        />
      </g>
    </svg>
  );
        }
