import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

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

const play = () => {
  const userName = greeting();
  const correctAnswersToEnd = 3;
  let currentCorrectAnswers = 0;
  while (currentCorrectAnswers < correctAnswersToEnd) {
    const answer = getAnswer();
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
