import {
  randomNumber, getAnswer, GCD, check, getName,
} from '../src/index.js';

const gcdGame = () => {
  const name = String(getName());
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const a = randomNumber();
    const b = randomNumber();
    console.log('Question:', a, b);
    const def = GCD(a, b);
    const usr = Number(getAnswer());
    console.log(check(usr, def, name));
    if (check(usr, def, name) !== 'Correct!') {
      return;
    }
  }
  console.log('Congratulations, ' + name + '!');
};

export default gcdGame;
