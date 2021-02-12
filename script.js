let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
    let random = Math.floor(Math.random() * 9)
    return random
}

let compareGuesses = (humanGuess,CPUGuess,generateTarget) => {
    if (humanGuess && CPUGuess == generateTarget) {
        //console.log('It\'s a tie, the human wins.')
        return true
    } else if (humanGuess > generateTarget && CPUGuess < generateTarget) {
        //console.log('The CPU wins')
        return false
    } else {
        //console.log('The human wins')
        return true
    }
}

let updateScore = (winner) => {
    if (winner === 'human') {
        humanScore +=1
    } else {
        computerScore +=1
    }
}

let advanceRound = () => {
    currentRoundNumber +=1
}