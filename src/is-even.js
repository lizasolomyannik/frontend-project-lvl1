import readlineSync from 'readline-sync';
import { getAnswer, isEven, wrongAnswer } from './index.js';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!'); // использую +, чтобы не было лишних пробелов
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 20); // без умножения слишком маленькие числа
    console.log('Question:', number);
    const answer = getAnswer();
    let CorrectAnswer;
    if (isEven(number) === true) {
      CorrectAnswer = 'yes';
    } else {
      CorrectAnswer = 'no';
    }
    if (answer === CorrectAnswer) {
      console.log('Correct!');
    } else {
      wrongAnswer(answer, CorrectAnswer, name);
      return;
    }
  }
  console.log('Congratulations, ' + name + '!');
};

export default evenGame;
