function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Anthony Cervantes";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home."
    document.getElementById("length").innerHTML = myString.length

    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    let text = "We are the so-called \"Vikings\" from the north. " + 'It\'s alright.' + "The character \\ is called backslash.";
    document.getElementById("escape").innerHTML = text;

    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    let name = "Mary Ann Smith";
    // Use the JavaScript slice function to display your first name to first paragraph
    let first_name = name.slice(0, 4);
    document.getElementById("first").innerHTML = first_name;

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let middle_name = name.slice(4, 8);
    document.getElementById("middle").innerHTML = middle_name;

    // Use the JavaScript subst Method to display your last name to the last paragraph
    let last_name = name.slice(8, 14);
    document.getElementById("last").innerHTML = last_name;


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College";
    let newMajor = major.replace("Physical Therapy", "Computer Science");
    document.getElementById("major").innerHTML = newMajor;

    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let upperText = myText.toUpperCase();
    document.getElementById("upper").innerHTML = upperText;
    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let newText = trimText.trim();
    document.getElementById("trim").innerHTML = newText;
    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let newMonths = months.indexOf("May");
    document.getElementById("index").innerHTML = newMonths;

    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = `Anthony`;
    let last = `Cervantes`;

    // Use Variable substitutions to create a greeting that incorporates your first and last name and
    // print to the greeting paragraph
    let greeting = `Hello, my name is ${first} ${last}. Welcome to my page!`;

    // Print to the paragraph with id="greeting"
    document.getElementById("greeting").innerHTML = greeting;
}