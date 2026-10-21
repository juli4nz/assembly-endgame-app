import './Badge.css';

import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = PropsWithChildren & {
  variant: 'light' | 'dark';
  bgColor: string;
  disabled: boolean;
};

export default function Badge({ variant = 'light', bgColor, disabled, children }: Props) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={clsx('badge', `badge-${variant}`, disabled && 'badge-disabled')}
    >
      {children}
    </div>
  );
}
