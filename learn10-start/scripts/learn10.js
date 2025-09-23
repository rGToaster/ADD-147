function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs

    let num = 7.6;
    document.getElementById("round").innerHTML = "Math.round(7.6) = " + Math.round(num);
    document.getElementById("ceil").innerHTML = "Math.ceil(7.6) = " + Math.ceil(num);
    document.getElementById("floor").innerHTML = "Math.floor(7.6) = " + Math.floor(num);
    document.getElementById("trunc").innerHTML = "Math.trunc(7.6) = " + Math.trunc(num);
    document.getElementById("sign").innerHTML = "Math.sign(-42) = " + Math.sign(-42);

    document.getElementById("pow").innerHTML = "Math.pow(2, 5) = " + Math.pow(2, 5);
    document.getElementById("min").innerHTML = "Math.min(3, 7, 2, 9) = " + Math.min(3, 7, 2, 9);
    document.getElementById("random").innerHTML = "Math.random() = " + Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph

    let randInt = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random2").innerHTML = "Random integer 1–100 = " + randInt;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph

    let x = "5";  // string
    let y = 5;    // number

    let doubleEquals = (x == y);   // true (only checks value)
    let tripleEquals = (x === y);  // false (checks value + type)

    document.getElementById("comparisons").innerHTML =
        `"5" == 5 → ${doubleEquals}<br>` +
        `"5" === 5 → ${tripleEquals}<br>` +
        "== compares values only, === compares values AND types.";

    let age = 17;
    let message;
    if (age >= 18) {
        message = "You are an adult.";
    } else if (age >= 13) {
        message = "You are a teenager.";
    } else {
        message = "You are a child.";
    }
    document.getElementById("conditions").innerHTML = message;

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}