import { nanoid } from 'nanoid';
import { languages, type Language } from '../data/languages';
import './App.css';

import Badge from './Badge';
import Header from './Header';
import Status from './Status';
import { useState } from 'react';
import { words } from '../data/words';
import Word from './Word';
import Keyboard from './Keyboard';

type LanguageItem = Language & {
  id: string;
  isDead: boolean;
};
export default function App() {
  const [languageItem, _setLanguageItem] = useState<LanguageItem[]>(() =>
    languages.map(v => ({ ...v, id: nanoid(), isDead: false }))
  );

  const [currentWord, _setCurrentWord] = useState(
    () => words[Math.ceil(Math.random() * words.length)]
  );

  const [pickedLetters, setPickedLetters] = useState<string[]>([]);

  const languageItemList = languageItem.map(v => (
    <Badge key={v.id} disabled={v.isDead} bgColor={v.backgroundColor} variant={v.variant}>
      {v.label}
    </Badge>
  ));

  function handleLetterClick(letter: string) {
    setPickedLetters(letters => (letters.includes(letter) ? letters : [...letters, letter]));
  }

  const validLetters = pickedLetters.filter(l => currentWord.includes(l));
  const wrongLetters = pickedLetters.filter(l => !currentWord.includes(l));

  return (
    <>
      <Header />
      <Status variant="success" title="You win!" message="“Farewell HTML & CSS” 🫡" />
      <section className="badge-section">{languageItemList}</section>
      <Word word={currentWord} />
      <Keyboard onClick={handleLetterClick} valid={validLetters} wrong={wrongLetters} />
    </>
  );
}
