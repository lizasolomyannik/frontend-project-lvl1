import readlineSync from 'readline-sync';

const run = (gameDescription, getRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  for (let i = 0; i < 3; i += 1) {
    const [question, def] = getRound();
    console.log(`Question: ${question}`);
    const usr = readlineSync.question('Your answer: ');
    if (usr !== def) {
      console.log(`'${usr}' is wrong answer ;(. Correct answer was '${def}'. \nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default run;
