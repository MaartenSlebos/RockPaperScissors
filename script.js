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


const resultsDiv = document.querySelector('#results')

function playRound(computerChoice, humanChoice) {
    resultsDiv.innerHTML = '';
    resultsDiv.innerHTML = 'Computer choice: ' + computerChoice + '<br>' + 'Human choice: ' + humanChoice;
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++
        resultsDiv.innerHTML += '<br>You win! Rock beats scissors!';
        resultsDiv.innerHTML += '<br> Human score: ' + humanScore +" | Computer score: " + computerScore;
        
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++
        resultsDiv.innerHTML += '<br>You win! Paper beats rock!';
        resultsDiv.innerHTML += '<br> Human score: ' + humanScore +" | Computer score: " + computerScore;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        resultsDiv.innerHTML += '<br>You win! Scissors beats paper!';
        humanScore++
        resultsDiv.innerHTML += '<br> Human score: ' + humanScore +" | Computer score: " + computerScore;
    } else if (computerChoice == 'rock' & humanChoice == 'scissors') {
        resultsDiv.innerHTML += '<br>You lose! Rock beats scissors!';
        computerScore++
        resultsDiv.innerHTML += '<br> Human score: ' + humanScore +" | Computer score: " + computerScore;
    } else if (computerChoice == 'paper' & humanChoice == 'rock') {
        resultsDiv.innerHTML += '<br>You lose! Paper beats rock!';
        computerScore++
        resultsDiv.innerHTML += '<br> Human score: ' + humanScore +" | Computer score: " + computerScore;
    } else if (computerChoice == 'scissors' & humanChoice == 'paper') {
        resultsDiv.innerHTML += '<br>You lose! Scissors beats paper!';
        computerScore++
        resultsDiv.innerHTML += '<br> Human score: ' + humanScore +" | Computer score: " + computerScore;
    } else {
        resultsDiv.innerHTML += '<br>It\'s a draw!';
        resultsDiv.innerHTML += '<br> Human score: ' + humanScore +" | Computer score: " + computerScore;
    }

    if (humanScore >= 5) {
        resultsDiv.innerHTML = 'You win! Your score was ' + humanScore + ', and the computer score was ' + computerScore +'.';
    } else if (computerScore >= 5) {
        resultsDiv.innerHTML = 'You lose! Your score was ' + humanScore + ', and the computer score was ' + computerScore +'.';
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



