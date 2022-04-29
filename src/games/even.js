import run from '../index.js';
import { randomInteger } from '../utils.js';

const isEven = (n) => {
  if ((n % 2) === 0) {
    return true;
  }
  return false;
};

const getRound = () => {
  const question = randomInteger(0, 1000);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const evenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  run(gameDescription, getRound);
};

export default evenGame;
