let humanScore = 0;
let computerScore = 0;

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

function playRound(computerChoice, humanChoice) {
    console.log('Computer choice: ' + computerChoice)
    console.log('Human choice: ' + humanChoice)
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! Rock beats scissors!")
        humanScore++
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper beats rock!")
        humanScore++
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log("You win! Scissors beats paper!")
        humanScore++
    } else if (computerChoice == 'rock' & humanChoice == 'scissors') {
        console.log("You lose! Rock beats scissors!")
        computerScore++
    } else if (computerChoice == 'paper' & humanChoice == 'rock') {
        console.log("You lose! Paper beats rock!")
        computerScore++
    } else if (computerChoice == 'scissors' & humanChoice == 'paper') {
        console.log("You lose! Scissors beats paper!")
        computerScore++
    } else {
        console.log("It's a draw!")
    }
}

const rockButton = document.querySelector('#rock'); 
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors')

rockButton.addEventListener('click', function() {
    humanChoice = 'rock'
    playRound(getComputerChoice(),humanChoice)
})

paperButton.addEventListener('click', function() {
    humanChoice = 'paper'
    playRound(getComputerChoice(),humanChoice)
})

scissorsButton.addEventListener('click', function() {
    humanChoice = 'scissors'
    playRound(getComputerChoice(),humanChoice)
})

