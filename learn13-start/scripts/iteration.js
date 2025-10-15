/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
let movies = ["Inception", "The Dark Knight", "Interstellar", "Dune", "Avatar"];
let movieList = "";

for (let movie of movies) {
    movieList += movie + "<br>";
}
document.getElementById("list").innerHTML = movieList;

/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/
let songs = new Set(["Imagine", "Bohemian Rhapsody", "Hotel California", "Hey Jude", "Smells Like Teen Spirit"]);
let songList1 = "";

for (let song of songs) {
    songList1 += song + "<br>";
}
document.getElementById("set1").innerHTML = songList1;

// add two more songs to the set then display in the set2 paragraph
songs.add("Billie Jean");
songs.add("Shape of You");

let songList2 = "";
for (let song of songs) {
    songList2 += song + "<br>";
}
document.getElementById("set2").innerHTML = songList2;

/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
let contacts = new Map([
    ["Alice", "alice@example.com"],
    ["Bob", "bob@example.com"],
    ["Charlie", "charlie@example.com"],
    ["Diana", "diana@example.com"],
    ["Ethan", "ethan@example.com"]
]);

let mapOutput1 = "";
contacts.forEach(function (email, name) {
    mapOutput1 += name + ": " + email + "<br>";
});
document.getElementById("map1").innerHTML = mapOutput1;


// add two new names and emails and display in map2 use the forEach() method
contacts.set("Fiona", "fiona@example.com");
contacts.set("George", "george@example.com");

let mapOutput2 = "";
contacts.forEach(function (email, name) {
    mapOutput2 += name + ": " + email + "<br>";
});
document.getElementById("map2").innerHTML = mapOutput2;

// get and display the email of one person, display in map3

let oneEmail = contacts.get("Charlie");
document.getElementById("map3").innerHTML = "Charlie's email is: " + oneEmail;