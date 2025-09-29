// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html.

let beerSong = "";
for (let i = 99; i > 0; i--) {
    beerSong += i + " bottles of beer on the wall, " + i + " bottles of beer.<br>";
    beerSong += "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.<br><br>";
}
document.getElementById("beer").innerHTML = beerSong;

//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

let months = ["January", "February", "March", "April", "May", "June"];
let monthOutput = "";
for (let index in months) {
    monthOutput += months[index] + "<br>";
}
document.getElementById("for-in").innerHTML = monthOutput;

// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string.
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

let word = "HELLO";
let letters = "";
for (let char of word) {
    letters += char + "<br>";
}
document.getElementById("for-of").innerHTML = letters;

// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

let count = 1;
let numbers = "";
while (count <= 50) {
    numbers += count + " ";
    count++;
}
document.getElementById("while").innerHTML = numbers;