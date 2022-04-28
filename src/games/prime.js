import run from '../index.js';

const randomInteger = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isPrime = (n) => {
  if (n < 2) {
    return 'no';
  }
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getRound = () => {
  const question = randomInteger(1, 1000);
  const answer = isPrime(question);
  return [question, answer];
};

const primeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  run(gameDescription, getRound);
};

export default primeGame;
