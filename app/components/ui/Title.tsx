import { BaseTypographyProps, getSizeClasses } from "@/app/types/typo";
import { cn } from "@/lib/utils";

const Title = ({
  size = "4xl",
  color = "text-gray-900",
  backlight,
  textPretty,
  className,
  children,
}: BaseTypographyProps) => {
  const backlightClass = backlight && "rounded-md bg-zinc-300/20 px-2 py-0.5";
  const textPrettyClass = textPretty && "text-pretty";

  const classes = cn(
    getSizeClasses(size),
    color,
    backlightClass,
    textPrettyClass,
    className
  );

  return backlight ? (
    <span className={classes}>{children}</span>
  ) : (
    <h2 className={classes}>{children}</h2>
  );
};

export default Title;
