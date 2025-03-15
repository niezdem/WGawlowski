import { BaseTypographyProps, getSizeClasses } from "@/app/types/typo";
import { cn } from "@/lib/utils";

type TextProps = BaseTypographyProps & {
  weight?: "normal" | "medium" | "semibold";
};

const Text = ({
  size = "base",
  color = "text-stone-600",
  weight = "normal",
  backlight,
  textPretty,
  className,
  children,
}: TextProps) => {
  const weightClass = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
  }[weight];

  const backlightClass = backlight && "rounded-md bg-zinc-300/20 px-2 py-0.5";
  const textPrettyClass = textPretty && "text-pretty";

  const classes = cn(
    getSizeClasses(size),
    color,
    weightClass,
    backlightClass,
    textPrettyClass,
    className
  );

  return backlight ? (
    <span className={classes}>{children}</span>
  ) : (
    <p className={classes}>{children}</p>
  );
};

export default Text;
