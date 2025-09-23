// declare and initialize array
let game = ["COBOL", "JAVA", "PYTHON", "JAVASCRIPT", "RUBY", "RUST", "SQL", "SWIFT", "PERL", "MATLAB"];
let choice = Math.floor(Math.random() * game.length);
let answer = game[choice];
let myLength = answer.length;
let display = [];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let maxAttempts = 6;
let output = '';
let userLetter = '';
let guessedLetters = [];

function setup() {
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_";
        output += display[i] + " ";
    }
    document.getElementById("word").innerHTML = output;
    document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left";
    document.getElementById("guessed").innerHTML = "Guessed: ";
}

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value.toUpperCase();
    document.getElementById("guess").value = ''; // reset input

    if (!userLetter || userLetter.length !== 1) {
        document.getElementById("guesses").innerHTML = "Enter a single letter!";
        return;
    }

    if (guessedLetters.includes(userLetter)) {
        document.getElementById("guesses").innerHTML = userLetter + " was already guessed!";
        return;
    } else {
        guessedLetters.push(userLetter);
    }

    let found = false;
    for (let c = 0; c < answer.length; c++) {
        if (userLetter === letters[c]) {
            display[c] = userLetter;
            win--;
            found = true;
        }
        output += display[c] + ' ';
    }

    if (!found) {
        attemptsLeft--;
    }

    // Update messages
    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!! Answer was: ' + answer;
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }

    // Update guessed letters
    document.getElementById("guessed").innerHTML = "Guessed: " + guessedLetters.join(", ");

    // Update hangman image
    let stage = maxAttempts - attemptsLeft + 1;
    if (stage > maxAttempts) stage = maxAttempts;
    document.getElementById("hangman").src = "images/0" + stage + ".png";

    // Update word display
    document.getElementById("word").innerHTML = output;
    output = '';
});
