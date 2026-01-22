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

// console.log(getComputerChoice())