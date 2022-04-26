import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  const message = ['Hello, ', name, '!'];
  console.log(message.join(''));
};

export default welcome;
