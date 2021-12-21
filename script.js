// Click on buttons, and start game
function eventButtons() {
    const buttons = document.querySelectorAll('.buttons');
    console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.alt);
            console.log(button.alt);
        });
    });
}

// How a round is played
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    // If draw
    if (playerSelection == computerSelection)
    displayRoundResult("draw", playerSelection, computerSelection);   
    // If Player wins
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
    displayRoundResult("player", playerSelection, computerSelection)
    }   
    // If Computer wins
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')) {
    displayRoundResult("computer", playerSelection, computerSelection)
    };
    if (roundNumber == 5) endGame();
}

// Computer chooses
function computerPlay() {
    let randomNumber = Math.floor(Math.random()*100)
    if (randomNumber < 33) return 'rock'
    else if (randomNumber >= 33 && randomNumber < 66) return 'paper'
    else if (randomNumber >= 66) return 'scissors'
}

// Display the results of a round
function displayRoundResult(result, playerSelection, computerSelection) {
    roundNumber++;
    const roundNum = document.querySelector("#roundNumber")
    roundNum.textContent = `Round ${roundNumber} / 5`;
    const results = document.querySelector("#results");
    if (result == "draw")
    results.textContent = `It's a draw ! ${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)} against ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)}`;
    else if (result == "player") {
        results.textContent = `You win! ${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)}`;
        playerScore++;
        const playSco = document.querySelector('#playerScore')
        playSco.textContent = playerScore;
    }
    else if (result == "computer") {
        results.textContent = `You lose! ${computerSelection.charAt(0).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()}${playerSelection.slice(1)}`;
        computerScore++;
        const compSco = document.querySelector('#computerScore')
        compSco.textContent = computerScore;
    }

}

// End of the game
function endGame(end) {
    //const endResult = document.createElement('div');
    const endResult = document.querySelector('#endGame');
    if (playerScore == computerScore) {
        endResult.textContent = `It's a draw, ${playerScore} to ${computerScore}!`
    }
    else if (playerScore > computerScore) {
        endResult.textContent = `You won the game ${playerScore} to ${computerScore}!`
    }
    else if (playerScore < computerScore) {
    endResult.textContent = `You lost the game ${playerScore} to ${computerScore}!`
    };
    //const results = document.querySelector('#results');
    //results.appendChild(endResult);
    // New Game button
    const newGame =  document.querySelector('#buttons')
    newGame.innerHTML = '<button id="newButton">New game?</button>';
    const newButton = document.querySelector('#newButton');
    newButton.addEventListener('click', () => {
        // location.reload();
        restartGame();
    });
}

// Restart the game
function restartGame() {
    const restoreButtons =  document.querySelector('#buttons')
    restoreButtons.innerHTML ='<img class="im buttons" src="./images/rock.png" alt="rock" value="rock"><img class="im buttons" src="./images/paper.png" alt="paper" value="paper"><img class="im buttons" src="./images/scissors.png" alt="scissors" value="scissors">';
    eventButtons();

    playerScore = 0;
    const playSco = document.querySelector('#playerScore')
    playSco.textContent = playerScore;
    computerScore = 0;
    const compSco = document.querySelector('#computerScore')
    compSco.textContent = computerScore;
    roundNumber = 0;
    const roundNum = document.querySelector("#roundNumber")
    roundNum.textContent = '';

    const results = document.querySelector('#results');
    results.textContent = '';

    const endResult = document.querySelector('#endGame');
    endResult.textContent = '';
};

let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;
eventButtons();