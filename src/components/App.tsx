import './App.css';

import BadgeList from './BadgeList';
import Confetti from 'react-confetti';
import Header from './Header';
import Keyboard from './Keyboard';
import Status from './Status';
import Word from './Word';
import { getFarewellText } from '../utils/farewell';
import { languages } from '../data/languages';
import { useState } from 'react';
import { words } from '../data/words';

export default function App() {
  function getRandomWord() {
    return words[Math.ceil(Math.random() * words.length)];
  }

  const [currentWord, setCurrentWord] = useState(() => getRandomWord());

  const [pickedLetters, setPickedLetters] = useState<string[]>([]);

  function handleLetterClick(letter: string) {
    setPickedLetters(letters => (letters.includes(letter) ? letters : [...letters, letter]));
  }

  const validLetters = pickedLetters.filter(l => currentWord.includes(l));
  const wrongLetters = pickedLetters.filter(l => !currentWord.includes(l));
  const wrongGuessesCount = wrongLetters.length;
  const MAX_GUESSES = languages.length - 1;
  const isGameWon = currentWord.split('').every(l => pickedLetters.includes(l));
  const isGameLost = wrongGuessesCount >= MAX_GUESSES;
  const isGameOver = isGameWon || isGameLost;
  const lastPickedLetter = pickedLetters[pickedLetters.length - 1];
  const isLastPickIncorrect = lastPickedLetter && !currentWord.includes(lastPickedLetter);
  const numGuessesLeft = MAX_GUESSES - wrongGuessesCount;
  const missingLetters = currentWord.split('').filter(l => !validLetters.includes(l));

  const statusWonElm = isGameWon && (
    <Status variant="success" title="You win!" message="Well done! 🎉" />
  );

  const statusLostElm = isGameLost && (
    <Status
      variant="error"
      title="Game over!"
      message="You lose! Better start learning Assembly 😭"
    />
  );

  const statusFarewellElm = !isGameOver && isLastPickIncorrect && (
    <Status message={getFarewellText(languages[wrongGuessesCount - 1].label)} />
  );

  function reset() {
    setCurrentWord(getRandomWord());
    setPickedLetters([]);
  }

  return (
    <>
      {isGameWon && <Confetti />}
      <Header />
      <section className="status-section">
        {statusWonElm || statusLostElm || statusFarewellElm}
      </section>
      <BadgeList items={languages} deadCount={wrongGuessesCount} />
      <Word
        word={currentWord}
        displayCorrect={validLetters}
        displayMissing={isGameLost ? missingLetters : []}
      />
      <div className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastPickedLetter)
            ? `Correct! The letter ${lastPickedLetter} is in the word.`
            : `Sorry, the letter ${lastPickedLetter} is not in the word.`}
          You have {numGuessesLeft} attempts left.
        </p>
      </div>
      <Keyboard
        onClick={handleLetterClick}
        valid={validLetters}
        wrong={wrongLetters}
        disabled={isGameOver}
      />
      {isGameOver && (
        <button className="button" onClick={reset}>
          New Game
        </button>
      )}
    </>
  );
}
