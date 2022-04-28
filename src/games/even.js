import run from '../index.js';

const isEven = (n) => {
  if ((n % 2) === 0) {
    return true;
  }
  return false;
};

const randomInteger = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRound = () => {
  const question = randomInteger(0, 1000);
  let answer = 'no';
  if (isEven(question)) {
    answer = 'yes';
  }
  return [question, answer];
};

const evenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  run(gameDescription, getRound);
};

export default evenGame;
