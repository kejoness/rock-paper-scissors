const container = document.querySelector("#container");

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

const div = document.createElement("div");

const score = document.createElement("p");

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
container.appendChild(div);
container.appendChild(score);

function getComputerChoice() {
    // generate a random integer from 0 to 2
    computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playGame() {
    computerScore = 0;
    humanScore = 0;
    gameRound = 0;

    rockBtn.addEventListener('click', function() {
        humanChoice = "rock";
        playRound(humanChoice);
    });

    paperBtn.addEventListener('click', function() {
        humanChoice = "paper";
        playRound(humanChoice);
    });

    scissorsBtn.addEventListener('click', function() {
        humanChoice = "scissors";
        playRound(humanChoice);
    });

    function playRound(humanChoice, computerChoice) {
        computerChoice = getComputerChoice();

        if (humanChoice == "rock") {
            if(computerChoice == "rock") {
                div.textContent = "It's a tie!";
            } else if (computerChoice == "paper") {
                div.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                computerScore++;
            } else {
                div.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                humanScore++;
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                div.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                humanScore++;
            } else if (computerChoice == "paper") {
                div.textContent = "It's a tie!";
            } else {
                div.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                computerScore++;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                div.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                computerScore++;
            } else if (computerChoice == "paper") {
                div.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                humanScore++;
            } else {
                div.textContent = "It's a tie!";
            }
        }

        score.textContent = `Your score: ${humanScore}\n Computer score: ${computerScore}`;
    }
    
    // if (humanScore > computerScore) {
    //     console.log("You win!")
    // } else if (computerScore > humanScore){
    //     console.log("You lose!")
    // } else {
    //     console.log("It's a tie. No one wins!")
    // }
}

playGame();