let getComputerChoice = () => {
    rand = Math.random();
    let computerChoice;

    if (rand <= 0.3) {
        computerChoice = "paper";
    } else if (rand > 0.3 && rand <= 0.6) {
        computerChoice = "rock";
    } else if (rand > 0.6 && rand <= 1) {
        computerChoice = "scissors";
    }

    return computerChoice;
}

let getHumanChoice = () => {
    let humanChoice = prompt("Choose rock, paper or scissors.", "rock")
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let choices = ["rock", "paper", "scissors"];
    humanChoice = humanChoice.toLowerCase()
    let humanSelection = choices.includes(humanChoice)

    if (humanSelection) {
        if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock!")
            humanScore += 1
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors!")
            humanScore += 1
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beat Paper!")
            humanScore += 1
        } else if (humanChoice === computerChoice) {
            console.log("Tie!")
        } else {
            console.log(`You lose. ${computerChoice} beats ${humanChoice}`)
            computerScore += 1
        }

    } else {
        console.log("Invalid input.")
    }
}

function playGame(humanSelection, numRounds) {

    for (let i = 0; i < numRounds; i++) {
        let computerSelection = getComputerChoice() 
        playRound(humanSelection, computerSelection)
        console.log(`
        Human Score: ${humanScore}\n
        Computer Score: ${computerScore}\n`)
    }
}

function announceWinner(humanScore, computerScore) {
    if (humanScore === 5) {
        result.innerText = "\n Your Score: 0 \n Computer Score: 0";
        alert("You won!")
    } else if (computerScore === 5) {
        result.innerText = "\n Your Score: 0 \n Computer Score: 0";
        alert("The computer won :(")
    }
}

let numRounds = 1;
const choices = document.querySelectorAll(".choice");

const result = document.createElement("div");
const body = document.body;

result.innerText = "\n Your Score: 0 \n Computer Score: 0"
body.appendChild(result)

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        announceWinner(humanScore, computerScore);
        playGame(choice.innerText, numRounds);
        result.innerText = `\n Your Score: ${humanScore} \n Computer Score: ${computerScore}`
    })
})