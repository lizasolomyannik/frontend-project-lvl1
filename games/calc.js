import {
  randomNumber, randomExpression, check, getAnswer, getName,
} from '../src/index.js';

const calc = () => {
  const name = String(getName());
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expression = [randomNumber(), randomExpression(), randomNumber()];
    console.log('Question: ', expression.join(' '));
    let def;
    const operation = expression[1];
    switch (operation) {
      case '+':
        def = expression[0] + expression[2];
        break;
      case '-':
        def = expression[0] - expression[2];
        break;
      case '*':
        def = expression[0] * expression[2];
        break;
      case '/':
        def = expression[0] / expression[2];
        break;
      default:
        break;
    }
    const usr = Number(getAnswer());
    console.log(check(usr, def, name));
    if (check(usr, def, name) !== 'Correct!') {
      return;
    }
  }
  console.log('Congratulations, ' + name + '!');
};

export default calc;
