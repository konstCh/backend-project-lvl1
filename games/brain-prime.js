import readlineSync from 'readline-sync';
import getRandomInt from '../src/utils.js';

const getAnswer = () => {
  const correctAnswer = 'yes';
  const incorrectAnswer = 'no';
  // eslint-disable-next-line max-len
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  console.log(`Answer "${correctAnswer}" if given number is prime. Otherwise answer "${incorrectAnswer}".`);
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const expectedAnswer = primes.includes(number) ? correctAnswer : incorrectAnswer;
  const isCorrectAnswer = answer === expectedAnswer;
  if (!isCorrectAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
  }
  return isCorrectAnswer;
};

export default getAnswer;
