import run from '../index.js';
import { randomInteger } from '../utils.js';

const arithmeticProgression = () => {
  const firstElement = randomInteger(1, 1000);
  const step = randomInteger(1, 100);
  const progression = [firstElement];
  for (let j = 1; j < 10; j += 1) {
    const element = progression[j - 1] + step;
    progression.push(element);
  }
  return progression;
};

const getRound = () => {
  const progression = arithmeticProgression(10);
  const missingIndex = randomInteger(0, 10);
  let answer = progression[missingIndex];
  progression[missingIndex] = '..';
  const question = `${progression.join(' ')}`;
  answer = answer.toString();
  return [question, answer];
};

const progressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  run(gameDescription, getRound);
};

export default progressionGame;
