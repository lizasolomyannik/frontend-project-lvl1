import run from '../index.js';

const randomInteger = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const GCD = (a, b) => {
  if (b > a) return GCD(b, a);
  if (!b) return a;
  if (a === b) return a;
  return GCD(b, a % b);
};

const getRound = () => {
  const [a, b] = [randomInteger(1, 1000), randomInteger(1, 1000)];
  const question = `${a} ${b}`;
  const answer = GCD(a, b);
  return [question, answer.toString()];
};

const gcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  run(gameDescription, getRound);
};

export default gcdGame;
