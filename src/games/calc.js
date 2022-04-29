import run from '../index.js';
import { randomInteger } from '../utils.js';

const randomExpression = () => {
  const chars = ['-', '+', '*', '/'];
  const len = chars.length;
  const randomIndex = randomInteger(0, len - 1);
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
  return [question, answer.toString()];
};

const calcGame = () => {
  const gameDescription = 'What is the result of the expression?';
  run(gameDescription, getRound);
};

export default calcGame;
