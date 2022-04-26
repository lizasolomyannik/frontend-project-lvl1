import {
  getAnswer, getName, isEven, check, Congratulations,
} from '../src/index.js';

const evenGame = () => {
  const name = String(getName());
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = Math.round(Math.random() * 20); // без умножения слишком маленькие числа
    console.log('Question:', number);
    const usr = getAnswer();
    let def;
    if (isEven(number) === true) {
      def = 'yes';
    } else {
      def = 'no';
    }
    console.log(check(usr, def, name));
    if (check(usr, def, name) !== 'Correct!') {
      return;
    }
  }
  console.log(Congratulations(name));
};

export default evenGame;
