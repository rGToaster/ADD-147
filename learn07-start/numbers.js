function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Anthony Cervantes";
    /*
        read/watch the associated reference and complete the directions in the comments.

    */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
    let addResult = 5 + "5"; // JS concatenates numbers with strings
    document.getElementById("add").innerHTML = `5 + "5" = ${addResult} (string concatenation)`;

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    let num = 42;
    document.getElementById("to-string").innerHTML = `Number: ${num}, as string: ${num.toString()}`;

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    let expNum = 12345;
    document.getElementById("exponent").innerHTML = `${expNum} in exponential form: ${expNum.toExponential(2)}`;

    // Demonstrate the use of toFixed() and print to the fixed paragraph
    let fixedNum = 3.14159;
    document.getElementById("fixed").innerHTML = `${fixedNum} to 2 decimal places: ${fixedNum.toFixed(2)}`;


    // Demonstrate the use of toPrecision() and print to the precision paragraph
    let precNum = 123.4567;
    document.getElementById("precision").innerHTML = `${precNum} with precision 4: ${precNum.toPrecision(4)}`;

    // Demonstrate the use of parseFloat() and print to the float paragraph
    let floatNum = parseFloat("123.45abc");
    document.getElementById("float").innerHTML = `parseFloat("123.45abc") = ${floatNum}`;


    // Demonstrate the use of parseInt() and print to the int paragraph
    let intNum = parseInt("123.45abc");
    document.getElementById("int").innerHTML = `parseInt("123.45abc") = ${intNum}`;


    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
    document.getElementById("equals").innerHTML =
        `== compares value only: (5 == "5") is ${5 == "5"}<br>` +
        `=== compares value and type: (5 === "5") is ${5 === "5"}<br>` +
        `So === is stricter because it checks both type and value.`;

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById("logic").innerHTML =
        `In JS, AND (&&) has higher precedence than OR (||).<br>` +
        `Example: true || false && false → true because AND is evaluated first.`;


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    let day = 3;
    let dayName;
    switch (day) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        default:
            dayName = "Unknown";
    }
    document.getElementById("switch").innerHTML = `Day 3 is: ${dayName}`;

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    let age = 20;
    let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";
    document.getElementById("ternary").innerHTML = `Age ${age}: ${canVote}`;
}