import * as React from "react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl leading-[1.1]",
} as const;

type SizeClassKey = keyof typeof sizeClasses;

type ResponsiveSize = {
  default: SizeClassKey;
  sm?: SizeClassKey;
  md?: SizeClassKey;
  lg?: SizeClassKey;
  xl?: SizeClassKey;
};

type Props = {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: SizeClassKey | ResponsiveSize;
  color?: string;
  align?: "left" | "center" | "right";
  backlight?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Title = ({
  order = 1,
  size = "2xl",
  color = "text-zinc-100",
  align = "left",
  backlight,
  className,
  children,
}: Props) => {
  const getSizeClasses = (sizeProps: Props["size"]): string => {
    if (typeof sizeProps === "string") {
      return sizeClasses[sizeProps];
    }

    if (typeof sizeProps === "object") {
      return Object.entries(sizeProps)
        .map(([breakpoint, value]) =>
          breakpoint === "default"
            ? sizeClasses[value]
            : `${breakpoint}:${sizeClasses[value]}`
        )
        .join(" ");
    }

    if (typeof size === "string" && size in sizeClasses) {
      return sizeClasses[size as SizeClassKey];
    }

    return sizeClasses["2xl"];
  };

  const commonClasses = "font-semibold";
  const colorClass = color;
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  const backlightClass = backlight && "rounded-md bg-zinc-100/20 px-2 py-0.5";

  const classes = cn(
    commonClasses,
    getSizeClasses(size),
    colorClass,
    alignClass[align],
    backlightClass,
    className
  );

  const HeadingTag = `h${order}` as keyof JSX.IntrinsicElements;

  return backlight ? (
    <span className={classes}>{children}</span>
  ) : (
    <HeadingTag className={classes}>{children}</HeadingTag>
  );
};

export default Title;
