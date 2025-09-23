/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph

let basic = new Date();
document.getElementById("basic").innerHTML = basic;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

let today = new Date();
let todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
document.getElementById("today").innerHTML = todayString;


// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph

let birthday = new Date("1999-07-16");
document.getElementById("birthday").innerHTML = birthday;


// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

document.getElementById("iso").innerHTML = basic.toISOString();


//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

let date1 = new Date("09/22/2025"); // mm/dd/yyyy
let date2 = new Date("22 September 2025"); // long date
let date3 = new Date("2025-09-22T10:30:00"); // ISO
document.getElementById("date1").innerHTML = date1;
document.getElementById("date2").innerHTML = date2;
document.getElementById("date3").innerHTML = date3;




//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

document.getElementById("get1").innerHTML = "Day of month: " + today.getDate();
document.getElementById("get2").innerHTML = "Day of week (0-6): " + today.getDay();
document.getElementById("get3").innerHTML = "Month (0-11): " + today.getMonth();
document.getElementById("get4").innerHTML = "Milliseconds since 1970: " + today.getTime();



// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

let custom = new Date(); // start with today

custom.setFullYear(2030);
document.getElementById("set1").innerHTML = "Set year to 2030: " + custom;

custom.setMonth(11); // December
document.getElementById("set2").innerHTML = "Set month to December: " + custom;

custom.setDate(25); // Christmas day
document.getElementById("set3").innerHTML = "Set date to 25th: " + custom;

custom.setHours(15); // 3 PM
document.getElementById("set4").innerHTML = "Set hours to 15 (3 PM): " + custom;