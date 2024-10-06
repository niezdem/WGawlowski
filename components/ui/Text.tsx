import * as React from 'react';
import { cn } from '@/lib/utils';

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
} as const;

export type SizeClassKey = keyof typeof sizeClasses;
export type ResponsiveSize = {
  default: SizeClassKey;
  sm?: SizeClassKey;
  md?: SizeClassKey;
  lg?: SizeClassKey;
  xl?: SizeClassKey;
};

type Props = {
  size?: SizeClassKey | ResponsiveSize;
  color?: string;
  weight?: 'normal' | 'bold';
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
  backlight?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Text = ({
  size = 'lg',
  color = 'text-zinc-100/60',
  weight = 'normal',
  align = 'left',
  truncate,
  backlight,
  className,
  children,
}: Props) => {
  const getSizeClasses = (sizeProps: Props['size']): string => {
    if (typeof sizeProps === 'string') {
      return sizeClasses[sizeProps];
    }

    if (typeof sizeProps === 'object') {
      return Object.entries(sizeProps)
        .map(([breakpoint, value]) =>
          breakpoint === 'default'
            ? sizeClasses[value]
            : `${breakpoint}:${sizeClasses[value]}`,
        )
        .join(' ');
    }

    if (typeof size === 'string' && size in sizeClasses) {
      return sizeClasses[size as SizeClassKey];
    }

    return sizeClasses['lg'];
  };

  const colorClass = color && `${color}`;
  const weightClass = {
    normal: 'font-normal',
    bold: 'font-semibold',
  };
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  const truncateClass = truncate && 'truncate';
  const backlightClass =
    backlight && 'rounded-md bg-zinc-100/20 px-2 py-0.5 font-semibold';

  const classes = cn(
    getSizeClasses(size),
    colorClass,
    weightClass[weight],
    alignClass[align],
    truncateClass,
    backlightClass,
    className,
  );

  return backlight ? (
    <span className={classes}>{children}</span>
  ) : (
    <p className={classes}>{children}</p>
  );
};

export default Text;
