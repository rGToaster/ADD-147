let secretNumber;
let previousDiff;
let guesses;

function setup() {
    secretNumber = Math.floor(Math.random() * 1000) + 1;
    previousDiff = null;
    guesses = [];
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("history").innerHTML = "";
    document.getElementById("guessInput").value = "";
    console.log("Secret number:", secretNumber); // Debugging
}

document.getElementById("guessForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const guess = parseInt(document.getElementById("guessInput").value);
    if (isNaN(guess)) return;

    guesses.push(guess);
    const diff = Math.abs(secretNumber - guess);
    let feedback = "";
    let color = "black";

    if (guess === secretNumber) {
        feedback = `Correct! The number was ${secretNumber}. You got it in ${guesses.length} guesses!`;
        color = "green";
    } else {
        if (diff > 500) {
            feedback = "Coldest!";
            color = "#0033cc";
        } else if (diff > 250) {
            feedback = "Colder!";
            color = "#3366ff";
        } else if (diff > 100) {
            feedback = "Cold";
            color = "#6699ff";
        } else if (diff > 50) {
            feedback = "Warm";
            color = "#ff9966";
        } else if (diff > 20) {
            feedback = "Hot";
            color = "#ff3300";
        } else {
            feedback = "Hottest!";
            color = "#cc0000";
        }

        // Compare with previous guess
        if (previousDiff !== null && diff < previousDiff) {
            feedback += " (Getting warmer!)";
        } else if (previousDiff !== null && diff > previousDiff) {
            feedback += " (Getting colder!)";
        }
        previousDiff = diff;
    }

    document.getElementById("feedback").innerHTML = feedback;
    document.getElementById("feedback").style.color = color;
    document.getElementById("history").innerHTML = "Your guesses: " + guesses.join(", ");
    document.getElementById("guessInput").value = "";
});
