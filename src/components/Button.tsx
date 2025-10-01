import { clsx } from 'clsx';
import type { ReactNode } from 'react';

type ButtonProps = {
  className?: string;
  text: string;
  type: 'anchor' | 'button';
  style?: 'primary' | 'secondary' | 'primary-simple' | 'secondary-simple';
  href?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};

export const Button = ({
  className,
  text,
  type,
  style = 'primary',
  href,
  iconLeft,
  iconRight,
}: ButtonProps) => {
  const baseClasses = clsx(
    className,
    'rounded-lg flex items-center gap-1',
    style === 'primary' && 'bg-midnight text-beige1 p-2 ',
    style === 'secondary' && 'bg-beige1 font-semibold text-midnight p-2 ',
    style === 'primary-simple' && 'font-semibold text-beige1',
    style === 'secondary-simple' && 'font-semibold text-midnight',
  );

  if (type === 'anchor' && href) {
    return (
      <a href={href} className={baseClasses}>
        {iconLeft}
        <span>{text}</span>
        {iconRight}
      </a>
    );
  }

  return (
    <button className={baseClasses}>
      {iconLeft}
      <span>{text}</span>
      {iconRight}
    </button>
  );
};
