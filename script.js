// Player chooses
function playerPlay() {
    let selectPlease;
    while (selectPlease !== 'rock' && selectPlease !== 'paper' && selectPlease !== 'scissors') {
        selectPlease = prompt("Choose your weapon: rock, paper, or scissors").toLowerCase();
    }
    return selectPlease;
}

// Computer chooses
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*100)
    if (randomNumber < 33) return 'rock'
    else if (randomNumber >= 33 && randomNumber < 66) return 'paper'
    else if (randomNumber >= 66) return 'scissors'
}

// How a round is played
function playRound(playerSelection, computerSelection) {
    // If draw
    if (playerSelection == computerSelection)
    return "draw";    
    // If Player wins
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper'))
    return "player";    
    // If Computer wins
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock'))
    return "computer";
}

// How a game is played
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;
    // 5 rounds to win the game
    for (i = 0; i < 5; i++) {
        // Player selects rock, paper, or scissors
        let playerSelection = playerPlay();
        // Computer selects rock, paper, or scissors
        let computerSelection = computerPlay();
        // A round is played
        roundResult = playRound(playerSelection, computerSelection);
        if (roundResult == "draw") {
            console.log(`It's a draw ! ${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)} against ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)}`)
        }
        else if (roundResult == "player") {
            console.log(`You Win! ${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)}`)
            playerScore++;
        }
        else if (roundResult == "computer") {
            console.log(`You Lose! ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)}`)
            computerScore++;
        }
    }
    // Declare the winner
    if (playerScore == computerScore)
    console.log(`It's a draw, ${playerScore} to ${computerScore}!`)
    else if (playerScore > computerScore)
    console.log(`You win, ${playerScore} to ${computerScore}!`)
    else if (playerScore < computerScore)
    console.log(`You lose, ${playerScore} to ${computerScore}!`)
}

game();