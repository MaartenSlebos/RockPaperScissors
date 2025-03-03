function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3); 
    if (randomInt == 0) {
        let computerChoice = 'rock'
        return computerChoice;
    } else if (randomInt == 1) {
        let computerChoice = 'paper'
        return computerChoice;
    } else {
        let computerChoice = 'scissors'
        return computerChoice;
    }
    
}

function getHumanChoice() {
    let humanInput = window.prompt('Choose: Rock, Paper, or Scissors');
    let humanChoice = humanInput.toLowerCase();
    return humanChoice;
}

function playRound(computerChoice, humanChoice) {
    console.log('Computer choice: ' + computerChoice)
    console.log('Human choice: ' + humanChoice)
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! Rock beats scissors!")
    } else {
        console.log('it was a different outcome')
    }
}

let humanScore = 0;
let computerScore = 0;


playRound(getComputerChoice(),getHumanChoice())