import readlineSync from 'readline-sync';

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max) + 1);

const operations = {
  1: '+',
  2: '-',
  3: '*',
};

const getAnswer = () => {
  console.log('What is the result of the expression?');
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const operation = operations[getRandomInt(3)];
  let expectedAnswer;
  switch (operation) {
    case '+':
      expectedAnswer = number1 + number2;
      break;
    case '-':
      expectedAnswer = number1 - number2;
      break;
    default:
      expectedAnswer = number1 * number2;
      break;
  }
  console.log(`Question: ${number1} ${operation} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  const isCorrectAnswer = Number(answer) === expectedAnswer;
  if (!isCorrectAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
  }
  return isCorrectAnswer;
};

export default getAnswer;
