// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
var name1 = "Meri";

const taxRate = .07; // This is a constant
// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    //fix the errors
    var firstName = "Meredith",
        lastName = "Engel";
    document.getElementById("name").innerHTML = name1;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Doctor";
    var name = "Beba";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    let firstName = "Meredith",
        lastName = "Engel";
    const taxRate = .07;
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    //taxRate = .08
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    dog2 = "Nessie";
    //dog2 = "Nessie";
    var dog3 = "Paisley";
    var dog2;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog1").innerHTML = dog3;
    var dog2 = "Ory"
    document.getElementById("dog2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    dogs = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
    let subtraction = 10 - 32
    document.getElementById("subtraction").innerHTML = "10 - 32 = " + subtraction;
    let multiplication = 5 * 5
    document.getElementById("multiplication").innerHTML = "5 * 5 = " + multiplication;
    let exponent = 5 ** 2
    document.getElementById("exponent").innerHTML = "5^2 = " + exponent;
    let division = 10 / 2
    document.getElementById("division").innerHTML = "10 / 2 = " + division;
    let modulus = 10 % 3
    document.getElementById("modulus").innerHTML = "10 % 3 = " + modulus;
    let increment = 5;
    increment++;
    document.getElementById("increment").innerHTML = "5 ++ = " + increment;
    let decrement = 5;
    decrement--;
    document.getElementById("decrement").innerHTML = "5 -- = " + decrement;
}

function assignments() {
    // create statements demonstrating the use of each assignment type
    var xequals = 10
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + xequals;
    x += 1
    document.getElementById("plus_equals").innerHTML = "x += 1" + "x = " + x;
    let x = 10;
    x -= 5;
    document.getElementById("minus_equals").innerHTML = "Value of x is: " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const cats = ["Siamese", "Main coon", "Tabby"];
    document.getElementById("array").innerHTML = cats;

}