let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    let random = Math.floor(Math.random(9))
    return random
}

function compareGuesses(humanGuess,CPUGuess,generateTarget) {
    if (humanGuess && CPUGuess == generateTarget) {
        console.log('It\'s a tie, the human wins.')
        humanScore += 1
    } else if (humanGuess > generateTarget && CPUGuess < generateTarget) {
        console.log('The CPU wins')
        computerScore += 1
    } else if (humanGuess < generateTarget && CPUGuess > generateTarget) {
        console.log('The human wins')
        humanScore += 1
    } else {
        console.log('Invalid input')
    }
}