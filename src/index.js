import greeting from './cli.js';
import brainEven from '../games/brain-even.js';
import brainCalc from '../games/brain-calc.js';
import brainGcd from '../games/brain-gcd.js';

const games = {
  even: brainEven,
  calc: brainCalc,
  gcd: brainGcd,
};

const play = (game) => {
  const userName = greeting();
  const correctAnswersToEnd = 3;
  let currentCorrectAnswers = 0;
  while (currentCorrectAnswers < correctAnswersToEnd) {
    const answer = games[game]();
    if (answer) {
      currentCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      currentCorrectAnswers = 0;
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default play;
