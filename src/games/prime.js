import run from '../index.js';
import { randomInteger } from '../utils.js';

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const question = randomInteger(1, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const primeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  run(gameDescription, getRound);
};

export default primeGame;
