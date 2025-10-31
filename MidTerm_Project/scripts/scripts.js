// --- VARIABLES & OBJECTS --- //
const choices = ["rock", "paper", "scissors"]; // Array of possible moves
let playerScore = 0;
let computerScore = 0;

// Object to store DOM elements
const gameElements = {
    playerScoreDisplay: document.getElementById("playerScore"),
    computerScoreDisplay: document.getElementById("computerScore"),
    computerChoiceDisplay: document.getElementById("computerChoice"),
    roundResult: document.getElementById("roundResult"),
    resetButton: document.getElementById("resetBtn"),
    buttons: document.querySelectorAll(".choices button"),
};

// --- FUNCTIONS --- //

// Function to randomly select computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine winner
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    gameElements.computerChoiceDisplay.textContent = computerChoice;

    // Compare choices using operators
    if (playerChoice === computerChoice) {
        gameElements.roundResult.textContent = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        gameElements.roundResult.textContent = `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
    } else {
        computerScore++;
        gameElements.roundResult.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
    }

    updateScore();
}

// Function to capitalize the first letter of a string
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to update score display
function updateScore() {
    gameElements.playerScoreDisplay.textContent = playerScore;
    gameElements.computerScoreDisplay.textContent = computerScore;
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameElements.computerChoiceDisplay.textContent = "?";
    gameElements.roundResult.textContent = "Make your move!";
    updateScore();
}

// --- EVENTS --- //

// Add event listeners for each choice button
gameElements.buttons.forEach((button) => {
    button.addEventListener("click", () => playRound(button.id));
});

// Reset button
gameElements.resetButton.addEventListener("click", resetGame);