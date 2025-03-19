import { BaseTypographyProps, getSizeClasses } from "@/app/types/typo";
import { cn } from "@/lib/utils";

const Title = ({
  size = { default: "4xl", sm: "5xl" },
  color = "text-gray-900",
  textPretty,
  className,
  children,
}: BaseTypographyProps) => {
  const textPrettyClass = textPretty && "text-pretty";

  const classes = cn(getSizeClasses(size), color, textPrettyClass, className);

  return <h2 className={classes}>{children}</h2>;
};

export default Title;
