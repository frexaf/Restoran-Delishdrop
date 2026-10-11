import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  "neutral" | "primary" | "outline" | "brand" | "accent";

const variantStyles: Record<BadgeVariant, string> = {
  neutral: "bg-muted text-foreground",
  primary: "bg-primary text-primary-foreground",
  outline: "border border-border bg-background text-foreground",
  brand:
    "bg-brand-badge text-brand-badge-foreground border border-border/50 font-semibold",
  accent:
    "bg-badge-accent text-badge-accent-foreground border border-amber-300/40 font-semibold",
};

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({
  variant = "neutral",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm px-2 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
