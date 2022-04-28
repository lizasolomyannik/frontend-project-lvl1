import run from '../index.js';

const randomInteger = (min, max) => {
  Math.ceil(min);
  Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomExpression = () => {
  const chars = ['-', '+', '*', '/'];
  const len = chars.length;
  const randomIndex = Math.floor(Math.random() * (len - 1));
  return chars[randomIndex];
};

const getRound = () => {
  const [firstNumber, sign, secondNumber] = [
    randomInteger(1, 1000), randomExpression(), randomInteger(1, 1000),
  ];
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  let answer;
  switch (sign) {
    case '+':
      answer = firstNumber + secondNumber;
      break;
    case '-':
      answer = firstNumber - secondNumber;
      break;
    case '*':
      answer = firstNumber * secondNumber;
      break;
    case '/':
      answer = firstNumber / secondNumber;
      break;
    default:
      break;
  }
  return [question, answer];
};

const calcGame = () => {
  const gameDescription = 'What is the result of the expression?';
  run(gameDescription, getRound);
};

export default calcGame;
