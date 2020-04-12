let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess,computerGuess,currentSecretNumber) => Math.abs(currentSecretNumber - humanGuess) > Math.abs(currentSecretNumber - computerGuess) ? false:true;   

const updateScore = (winner) => winner === 'computer' ? computerScore += 1:humanScore += 1;

const advanceRound = () => currentRoundNumber += 1;