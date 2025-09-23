function calculate() {
    let chi = '';
    let myname = document.getElementById("fname").value;
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);


    switch (year % 12) {
        case 0: chi = "Monkey"; break;
        case 1: chi = "Rooster"; break;
        case 2: chi = "Dog"; break;
        case 3: chi = "Pig"; break;
        case 4: chi = "Rat"; break;
        case 5: chi = "Ox"; break;
        case 6: chi = "Tiger"; break;
        case 7: chi = "Rabbit"; break;
        case 8: chi = "Dragon"; break;
        case 9: chi = "Snake"; break;
        case 10: chi = "Horse"; break;
        case 11: chi = "Goat"; break;
        default: chi = "Please enter a valid month";
    }

    if ((month == 1 && date >= 20) || (month == 2 && date <= 18)) {
        western = "Aquarius";
    } else if ((month == 2 && date >= 19) || (month == 3 && date <= 20)) {
        western = "Pisces";
    } else if ((month == 3 && date >= 21) || (month == 4 && date <= 19)) {
        western = "Aries";
    } else if ((month == 4 && date >= 20) || (month == 5 && date <= 20)) {
        western = "Taurus";
    } else if ((month == 5 && date >= 21) || (month == 6 && date <= 20)) {
        western = "Gemini";
    } else if ((month == 6 && date >= 21) || (month == 7 && date <= 22)) {
        western = "Cancer";
    } else if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) {
        western = "Leo";
    } else if ((month == 8 && date >= 23) || (month == 9 && date <= 22)) {
        western = "Virgo";
    } else if ((month == 9 && date >= 23) || (month == 10 && date <= 22)) {
        western = "Libra";
    } else if ((month == 10 && date >= 23) || (month == 11 && date <= 21)) {
        western = "Scorpio";
    } else if ((month == 11 && date >= 22) || (month == 12 && date <= 21)) {
        western = "Sagittarius";
    } else if ((month == 12 && date >= 22) || (month == 1 && date <= 19)) {
        western = "Capricorn";
    } else {
        western = "The day and month you entered does not seem to exist";
    }


    document.getElementById("nameout").innerHTML = "Hello, " + myname + "!";
    document.getElementById("zodiac").innerHTML = "Your Western zodiac sign is: " + western;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
}