import { BaseTypographyProps, getSizeClasses } from "@/app/types/typo";
import { cn } from "@/lib/utils";

type TextProps = BaseTypographyProps & {
  weight?: "normal" | "medium" | "semibold";
};

const Text = ({
  size = { default: "lg", sm: "xl" },
  color = "text-stone-600",
  weight = "normal",
  backlight,
  textPretty = true,
  className,
  children,
}: TextProps) => {
  const weightClass = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
  }[weight];

  const backlightClass =
    backlight && "bg-amber-100 px-1 rounded-sm text-amber-700 font-semibold";
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
