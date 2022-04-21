import readlineSync from 'readline-sync';

import {
  randomNumber, randomExpression, wrongAnswer, getAnswer,
} from './index.js';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!');
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expression = [randomNumber(), randomExpression(), randomNumber()];
    console.log('Question: ', expression.join(' '));
    let result;
    const operation = expression[1];
    switch (operation) {
      case '+':
        result = expression[0] + expression[2];
        break;
      case '-':
        result = expression[0] - expression[2];
        break;
      case '*':
        result = expression[0] * expression[2];
        break;
      case '/':
        result = expression[0] / expression[2];
        break;
      default:
        break;
    }
    const usr = Number(getAnswer());
    if (usr === result) {
      console.log('Correct!');
    } else {
      wrongAnswer(usr, result, name);
      return;
    }
  }
  console.log('Congratulations, ' + name + '!');
};

export default calc;
