interface WasilMarkProps {
  className?: string;
}

/**
 * The academy's signature mark: an eight-point khatam star built from two
 * overlapping squares. Used sparingly as a bullet, divider and accent
 * throughout the site to tie the brand name — Wasil, "one who connects" —
 * to a single recognizable geometric form.
 */
export default function WasilMark({ className = 'w-4 h-4' }: WasilMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="6.3"
        y="6.3"
        width="19.4"
        height="19.4"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(0 16 16)"
      />
      <rect
        x="6.3"
        y="6.3"
        width="19.4"
        height="19.4"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(45 16 16)"
      />
    </svg>
  );
}
