import './Word.css';

import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Props = PropsWithChildren & {
  word: string;
  displayCorrect?: string[];
  displayMissing?: string[];
};

export default function Word({ word, displayCorrect = [], displayMissing = [] }: Props) {
  const letters = word.split('').map((letter, idx) => {
    const isMissing = displayMissing.includes(letter);
    return (
      <span key={idx} className={clsx('letter', isMissing && 'letter-missing')}>
        {[...displayCorrect, ...displayMissing].includes(letter) && letter}
      </span>
    );
  });

  return (
    <>
      <div className="word">{letters}</div>
      <div className="sr-only" aria-live="polite" role="status">
        <p>
          Current word:
          {word
            .split('')
            .map(letter => (displayCorrect.includes(letter) ? `${letter}.` : 'blank.'))
            .join(' ')}
        </p>
      </div>
    </>
  );
}
