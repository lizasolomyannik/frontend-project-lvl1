import {
  getAnswer, getName, check, randomNumber, isPrime,
} from '../src/index.js';

const primeGame = () => {
  const name = String(getName());
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber();
    console.log('Question:', number);
    const def = String(isPrime(number));
    const usr = getAnswer();
    console.log(check(usr, def, name));
    if (check(usr, def, name) !== 'Correct!') {
      return;
    }
  }
  console.log('Congratulations, ' + name + '!');
};

export default primeGame;
