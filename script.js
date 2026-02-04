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

function getHumanChoice() {
    rockBtn = document.createElement("button");
    paperBtn = document.createElement("button");
    scissorsBtn = document.createElement("button");

    return humanChoice
}

function playGame() {
    computerScore = 0
    humanScore = 0
    gameRound = 0

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

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

        gameRound++
    }

    console.log(`Your score: ${humanScore}\n Computer score: ${computerScore}`)

    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (computerScore > humanScore){
        console.log("You lose!")
    } else {
        console.log("It's a tie. No one wins!")
    }
}

playGame()