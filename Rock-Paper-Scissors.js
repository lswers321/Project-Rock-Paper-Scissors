function getComputerChoice() {
    let options = ["rock", 'paper', 'scissor'];
    let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice;
    }

