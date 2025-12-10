import { cn } from "@/lib/utils";

interface SkinSenseLogoProps {
  variant?: "color" | "mono";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SkinSenseLogo({ variant = "color", size = "md", className }: SkinSenseLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const fillColor = variant === "color" ? "#4AA8A0" : "currentColor";
  const accentColor = variant === "color" ? "#7BC5BD" : "currentColor";

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn(sizeClasses[size], className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring - smartwatch representation */}
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        stroke={fillColor}
        strokeWidth="3"
        opacity={variant === "mono" ? 0.8 : 1}
      />
      
      {/* Inner skin-like organic shape */}
      <path
        d="M32 12c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 36c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
        fill={accentColor}
        opacity={0.3}
      />
      
      {/* AI wave pattern */}
      <path
        d="M20 32c0-6.6 5.4-12 12-12s12 5.4 12 12"
        fill="none"
        stroke={fillColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 32c0-4.4 3.6-8 8-8s8 3.6 8 8"
        fill="none"
        stroke={accentColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Center dot - health indicator */}
      <circle cx="32" cy="32" r="4" fill={fillColor} />
      
      {/* Pulse indicators */}
      <circle cx="32" cy="32" r="8" fill="none" stroke={fillColor} strokeWidth="1.5" opacity={0.4} />
    </svg>
  );
}

export function SkinSenseWordmark({ variant = "color", className }: { variant?: "color" | "mono"; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <SkinSenseLogo variant={variant} size="md" />
      <span className="font-display text-2xl tracking-tight">
        <span className={variant === "color" ? "text-[#4AA8A0]" : ""}>Skin</span>
        <span className={variant === "color" ? "text-[#2D7A73]" : ""}>Sense</span>
      </span>
    </div>
  );
}
