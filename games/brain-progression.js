import readlineSync from 'readline-sync';
import getRandomInt from '../src/utils.js';

const getProgression = (start, d, count = 10) => {
  let current = start;
  const progression = [current];
  for (let i = 1; i < count; i += 1) {
    current += d;
    progression.push(current);
  }
  return progression;
};

const getAnswer = () => {
  console.log('What number is missing in the progression?');
  const start = getRandomInt();
  const d = getRandomInt(5);
  const count = 10;
  const progression = getProgression(start, d, count);
  const indexToHide = getRandomInt(count) - 1;
  const expectedAnswer = progression[indexToHide];
  progression[indexToHide] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');

  const isCorrectAnswer = Number(answer) === expectedAnswer;
  if (!isCorrectAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
  }
  return isCorrectAnswer;
};

export default getAnswer;
