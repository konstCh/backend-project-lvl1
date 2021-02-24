import readlineSync from 'readline-sync';
import getRandomInt from '../src/utils.js';

const gcd = (num1, num2) => {
  const [max, min] = num1 > num2 ? [num1, num2] : [num2, num1];
  const divider = max % min;
  if (divider === 0) {
    return min;
  }
  return gcd(min, divider);
};

const getAnswer = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const expectedAnswer = gcd(number1, number2);
  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  const isCorrectAnswer = Number(answer) === expectedAnswer;
  if (!isCorrectAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
  }
  return isCorrectAnswer;
};

export default getAnswer;
