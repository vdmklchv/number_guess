let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1,num2) => Math.abs(num1 - num2);

const compareGuesses = (humanGuess,computerGuess,generateTarget) => getAbsoluteDistance(generateTarget,humanGuess) > getAbsoluteDistance(generateTarget,computerGuess) ? false:true;   
//const compareGuesses = (humanGuess,computerGuess,generateTarget) => Math.abs(generateTarget - humanGuess) > Math.abs(generateTarget - computerGuess) ? false:true;   

const updateScore = (winner) => winner === 'computer' ? computerScore += 1:humanScore += 1;

const advanceRound = () => currentRoundNumber += 1;