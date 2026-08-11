interface ArrowIconProps {
  size?: number;
  className?: string;
}

export function ArrowIcon({ size = 16, className = "" }: ArrowIconProps) {
  const pathD = size === 14 ? "M3 7h8M7 3l4 4-4 4" : "M3 8h10M9 4l4 4-4 4";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={pathD}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
