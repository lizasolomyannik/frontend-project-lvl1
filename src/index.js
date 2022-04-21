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

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const wrongAnswer = (usr, def, name) => {
  console.log('\'' + usr + '\' is wrong answer ;(. Correct answer was \'' + def + '\'.');
  console.log('Let\'s try again, ' + name + '!');
};

export {
  isEven, randomNumber, randomExpression, wrongAnswer, getAnswer,
};
