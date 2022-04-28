import {
  getAnswer, getName, check, randomInteger, arithmeticProgression, Congratulations,
} from '../index.js';

const progressionGame = () => {
  const name = String(getName());
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const progression = arithmeticProgression(10);
    const missingIndex = randomInteger(10);
    const def = progression[missingIndex];
    progression[missingIndex] = '..';
    console.log('Question:', progression.join(' '));
    const usr = Number(getAnswer());
    console.log(check(usr, def, name));
    if (check(usr, def, name) !== 'Correct!') {
      return;
    }
  }
  console.log(Congratulations(name));
};

export default progressionGame;
