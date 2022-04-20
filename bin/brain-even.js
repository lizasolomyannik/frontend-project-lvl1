import readlineSync from 'readline-sync';

const isEven = (n) => {
  if ((n % 2) === 0) {
    return true;
  }
  return false; // в данной задаче число выбирается рандомно
};

const ex1 = () => {
  let i = 1;
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!'); // использую +, чтобы не было лишних пробелов
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  do {
    const number = Math.round(Math.random() * 20); // без умножения слишком маленькие числа
    console.log('Question:', number);
    const answer = readlineSync.question('Your answer: ');
    let CorrectAnswer;
    if (isEven(number) === true) {
      CorrectAnswer = 'yes';
    } else {
      CorrectAnswer = 'no';
    }
    if (answer === CorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log('\'' + answer + '\' is wrong answer ;(. Correct answer was \'' + CorrectAnswer + '\'.');
      console.log('Let\'s try again, ' + name + '!');
      break;
    }
    i += 1;
  } while (i < 4);
  if (i === 4) {
    console.log('Congratulations, ' + name + '!');
  }
};

export { ex1, isEven };
