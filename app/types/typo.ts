export const sizeClasses = {
  sm: "text-sm/6",
  base: "text-base/7",
  lg: "text-lg/8",
  xl: "text-xl/8",
  "2xl": "text-2xl font-semibold",
  "3xl": "text-3xl font-semibold",
  "4xl": "text-4xl font-semibold tracking-tight",
  "5xl": "text-5xl font-semibold tracking-tight",
  "7xl": "text-7xl font-semibold tracking-tight",
} as const;

export type SizeClassKey = keyof typeof sizeClasses;

export type ResponsiveSize = {
  default: SizeClassKey;
  sm?: SizeClassKey;
  md?: SizeClassKey;
  lg?: SizeClassKey;
  xl?: SizeClassKey;
};

export type BaseTypographyProps = {
  size?: SizeClassKey | ResponsiveSize;
  color?: string;
  backlight?: boolean;
  textPretty?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const getSizeClasses = (
  sizeProps: BaseTypographyProps["size"]
): string => {
  if (!sizeProps) return sizeClasses["base"];

  if (typeof sizeProps === "string") {
    return sizeClasses[sizeProps];
  }

  return Object.entries(sizeProps)
    .map(([breakpoint, value]) =>
      breakpoint === "default"
        ? sizeClasses[value]
        : `${breakpoint}:${sizeClasses[value]}`
    )
    .join(" ");
};
