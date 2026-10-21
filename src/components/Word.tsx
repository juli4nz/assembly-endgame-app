import './Word.css';

import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  word: string;
};

export default function Word({ word }: Props) {
  const letters = word.split('').map((letter, idx) => (
    <span key={idx} className="letter">
      {letter}
    </span>
  ));

  return <div className="word">{letters}</div>;
}
