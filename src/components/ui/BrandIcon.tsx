/**
 * Brand sunflower icon - use in header, footer, and elsewhere.
 * Uses the official favicon.svg for consistency.
 */
import Image from "next/image";

type BrandIconProps = {
  size?: number;
  className?: string;
};

export default function BrandIcon({ size = 32, className = "" }: BrandIconProps) {
  return (
    <Image
      src="/favicon.svg"
      alt=""
      width={size}
      height={size}
      className={`flex-shrink-0 ${className}`}
      aria-hidden
      unoptimized
    />
  );
}
