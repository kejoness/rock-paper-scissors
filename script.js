computerScore = 0
humanScore = 0

function getComputerChoice() {
    // generate a random integer from 0 to 2
    computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice == 0) {
        return "rock"
    } else if (computerChoice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

humanChoice = getHumanChoice()
computerChoice = getComputerChoice()

function getHumanChoice() {
    humanChoice = prompt("Rock, paper, or scissors?").toLowerCase()

    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if(computerChoice == "rock") {
            console.log("It's a tie!")
        } else if (computerChoice == "paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
            computerScore++
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
            humanScore++
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
            humanScore++
        } else if (computerChoice == "paper") {
            console.log("It's a tie!")
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
            computerScore++
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
            computerScore++
        } else if (computerChoice == "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
            humanScore++
        } else {
            console.log("It's a tie!")
        }
    }
}

playRound(humanChoice, computerChoice)