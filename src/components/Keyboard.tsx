import './Keyboard.css';

import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = PropsWithChildren & {
  onClick: (letter: string) => void;
  valid?: string[];
  wrong?: string[];
  disabled?: boolean;
};

export default function Keyboard({ onClick, valid = [], wrong = [], disabled = false }: Props) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const keyboardButtons = alphabet.map(letter => (
    <button
      key={letter}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={`Letter ${letter}`}
      onClick={() => onClick(letter)}
      className={clsx(
        'letter',
        valid.includes(letter) && 'letter-valid',
        wrong.includes(letter) && 'letter-wrong'
      )}
    >
      {letter}
    </button>
  ));

  return <div className="keyboard">{keyboardButtons}</div>;
}
