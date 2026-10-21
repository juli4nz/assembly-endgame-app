import './Status.css';

import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = PropsWithChildren & {
  variant?: 'info' | 'error' | 'success';
  title?: string;
  message: string;
};

export default function Status({ variant = 'info', title, message }: Props) {
  return (
    <div aria-live="polite" className={clsx('status', `status-${variant}`)}>
      {title && <h2>{title}</h2>}
      {message}
    </div>
  );
}
