import readlineSync from 'readline-sync';

const isEven = (n) => {
  if ((n % 2) === 0) {
    return true;
  }
  return false;
};

const Congratulations = (name) => {
  const message = ['Congratulations, ', name, '!'];
  return message.join('');
};

const randomNumber = () => {
  const number = Math.round(Math.random() * 20);
  return number;
};

const randomInteger = (max) => {
  const int = Math.floor(Math.random() * max);
  return int;
};

const randomExpression = () => {
  const chars = ['-', '+', '*', '/'];
  const len = chars.length;
  const randomIndex = Math.floor(Math.random() * (len - 1));
  return chars[randomIndex];
};

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const message = ['Hello, ', name, '!'];
  console.log(message.join(''));
  return name;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const check = (usr, def, name) => {
  if (usr !== def) {
    const message = ['\'', usr, '\' is wrong answer ;(. Correct answer was \'', def, '\'. \nLet\'s try again, ', name, '!'];
    return message.join('');
  }
  return 'Correct!';
};

const GCD = (a, b) => {
  if (b > a) return GCD(b, a);
  if (!b) return a;
  if (a === b) return a;
  return GCD(b, a % b);
};

const arithmeticProgression = (n) => {
  const firstElement = randomNumber();
  const step = randomInteger(n);
  const progression = [firstElement];
  for (let j = 1; j < 10; j += 1) {
    const element = progression[j - 1] + step;
    progression.push(element);
  }
  return progression;
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

export {
  isEven, randomNumber, randomExpression, getAnswer, GCD, check, getName,
  randomInteger, arithmeticProgression, isPrime, Congratulations,
};
