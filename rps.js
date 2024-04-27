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

let numRounds = 20;

function playGame(numRounds) {

    for (let i = 0; i <= numRounds; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice() 
        playRound(humanSelection, computerSelection)
        console.log(`
        Human Score: ${humanScore}\n
        Computer Score: ${computerScore}\n`)
    }
}

playGame(numRounds)