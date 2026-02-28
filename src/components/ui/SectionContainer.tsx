"use client";

interface SectionContainerProps {
  children: React.ReactNode;
  /** Max width: default (7xl), narrow (4xl), wide (full) */
  size?: "default" | "narrow" | "wide";
  /** Additional class names */
  className?: string;
}

/**
 * Consistent section container for landing page layout.
 * - max-w-7xl (1280px) on desktop
 * - Responsive horizontal padding: 16px mobile, 24px tablet, 32px desktop
 * - Ensures content never touches viewport edges
 */
export default function SectionContainer({
  children,
  size = "default",
  className = "",
}: SectionContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
}
