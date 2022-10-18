// computer returns a random play
function getComputerChoice() {
    let options = ["rock", 'paper', 'scissor'];
    let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice.toLowerCase();
    }   

// user inputs selection (playerSelection)
function playerSelection() {
    let playerSelection = prompt('Please choose rock, paper or scissor.').toLowerCase();
     return playerSelection;
     }

// computer returns their selection (computerSelection)
// if values are equal, return 'tie!'
// if playerSelection > computerSelection, return 'win' msg
// if computerSelection > playerSelection, return 'lose' msg
function singleRound(playerSelection, compSelection) {
    function getComputerChoice()
    function playerSelection()
    let compSelection = getComputerChoice()
    if (playerSelection === compSelection) {
        return 'Tie!';
    } else if ((playerSelection === 'rock' && compSelection === 'scissor') ||
                (playerSelection === 'paper' && compSelection === 'rock') || 
                (playerSelection === 'scissor' && compSelection === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }    
}



