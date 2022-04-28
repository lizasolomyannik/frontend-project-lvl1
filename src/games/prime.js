import run from '../index.js';

const randomInteger = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

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
  const result = isPrime(question);
  let answer = 'no';
  if (result) {
    answer = 'yes';
  }
  return [question, answer];
};

const primeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  run(gameDescription, getRound);
};

export default primeGame;
