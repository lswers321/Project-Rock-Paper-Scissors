     let playerScore = 0
     let compScore = 0

// computer returns a random play
function compSelection() {
    let options = ["rock", 'paper', 'scissor'];
    let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice.toLowerCase();
    }   

// user inputs selection 
function playerSelection() {
    let playerSelection = prompt('Please choose rock, paper or scissor.').toLowerCase();
     return playerSelection;
     }

// play single round
function singleRound(playerSelection, compSelection) {
    console.log(compSelection);
    console.log(playerSelection);
    if (playerSelection === compSelection) {
        console.log('Tie! Play again!');
    } else if ((playerSelection === 'rock' && compSelection === 'scissor') ||
                (playerSelection === 'paper' && compSelection === 'rock') || 
                (playerSelection === 'scissor' && compSelection === 'paper')) {
        playerScore++
        console.log(playerScore)
        console.log('You\'ve won this round! Play again!');
    } else {
        compScore++
        console.log(compScore)
        console.log('Sorry, you\'ve lost this round! Play again!');
    }   
}

function game() {
    for (let i = 0; i < 5; i++) {
        singleRound(playerSelection(), compSelection());
    }
    if (playerScore > compScore) {
        console.log('Congrats! You won the game.')
    }
    else if (playerScore < compScore) {
        console.log('You lost the game, sorry!')
    }
}

game()

