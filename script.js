let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);



const compareGuesses = (humanGuess, computerGuess, generateTarget)  =>  {
    if (humanGuess <0 || humanGuess > 9)  {
        return alert("Number out of range");
    } else if (getAbsoluteDistance(generateTarget,humanGuess) > getAbsoluteDistance(generateTarget,computerGuess))  {
        return true;
    } else{
        return false;
    }
}

const getAbsoluteDistance = (num1,num2) => Math.abs(num1 - num2); 

const updateScore = (winner) => winner === 'computer' ? computerScore += 1:humanScore += 1;

const advanceRound = () => currentRoundNumber += 1;



