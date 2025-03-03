function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3); 
    if (randomInt == 0) {
        return 'rock'
    } else if (randomInt == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    let humanInput = window.prompt('Choose: Rock, Paper, or Scissors');
    let formattedInput = humanInput.toLowerCase();
    return formattedInput
}

