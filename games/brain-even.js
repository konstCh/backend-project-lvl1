import readlineSync from 'readline-sync';

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max) + 1);

const getAnswer = () => {
  const correctAnswer = 'yes';
  const incorrectAnswer = 'no';

  console.log(`Answer "${correctAnswer}" if the number is even, otherwise answer "${incorrectAnswer}".`);
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  const isEven = number % 2 === 0;
  const expectedAnswer = isEven ? correctAnswer : incorrectAnswer;
  const isCorrectAnswer = answer === expectedAnswer;
  if (!isCorrectAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
  }
  return isCorrectAnswer;
};

export default getAnswer;
