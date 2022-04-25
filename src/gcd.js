import {
  randomNumber, getAnswer, GCD, check, getName,
} from './index.js';

const gcdGame = () => {
  const name = String(getName());
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const a = randomNumber();
    const b = randomNumber();
    console.log('Question: ', a, b);
    const def = GCD(a, b);
    const usr = getAnswer();
    check(usr, def, name);
  }
};

export default gcdGame;
