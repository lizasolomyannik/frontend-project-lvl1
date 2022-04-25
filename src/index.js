import readlineSync from 'readline-sync';

const isEven = (n) => {
  if ((n % 2) === 0) {
    return true;
  }
  return false;
};

const randomNumber = () => {
  const number = Math.round(Math.random() * 20);
  return number;
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
  console.log('Hello, ' + name + '!');
  return name;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const check = (usr, def, name) => {
  if (usr !== def) {
    return '\'' + usr + '\' is wrong answer ;(. Correct answer was \'' + def + '\' \n Let\'s try again, ' + name + '!';
  }
  return 'Correct!';
};

const wrongAnswer = (usr, def, name) => {
  console.log('\'' + usr + '\' is wrong answer ;(. Correct answer was \'' + def + '\'.');
  console.log('Let\'s try again, ' + name + '!');
};

const GCD = (a, b) => {
  if (b > a) return GCD(b, a);
  if (!b) return a;
  if (a === b) return a;
  return GCD(b, a % b);
};

export {
  isEven, randomNumber, randomExpression, wrongAnswer, getAnswer, GCD, check, getName,
};
