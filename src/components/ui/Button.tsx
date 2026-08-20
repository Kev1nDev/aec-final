import React from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "default" | "icon";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
}

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-transparent font-body text-[13px] font-bold tracking-[0.8px] uppercase no-underline whitespace-nowrap transition duration-[250ms] ease-smooth";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-accent-primary text-white hover:scale-[1.04] hover:bg-accent-hover hover:shadow-glow",
  outline:
    "border-border-medium bg-transparent text-text-primary hover:border-border-active hover:bg-accent-light",
  ghost:
    "border-transparent bg-transparent text-text-secondary hover:bg-bg-elevated hover:text-text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-2.5",
  icon: "size-10 p-0",
};

export function Button({
  variant = "primary",
  size = "default",
  href,
  target,
  rel,
  type = "button",
  className,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <a className={classes} href={href} target={target} rel={rel} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
