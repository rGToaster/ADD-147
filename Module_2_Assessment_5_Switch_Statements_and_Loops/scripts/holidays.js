function showHolidays() {
    let months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let output = "";

    // loop through all months
    for (let i = 0; i < months.length; i++) {
        let holidayList = "";

        switch (months[i]) {
            case "January":
                holidayList = "New Year's Day, Martin Luther King Jr. Day";
                break;
            case "February":
                holidayList = "Valentine's Day, Presidents' Day";
                break;
            case "March":
                holidayList = "St. Patrick's Day, International Women's Day";
                break;
            case "April":
                holidayList = "April Fool's Day, Earth Day";
                break;
            case "May":
                holidayList = "Memorial Day, Mother's Day";
                break;
            case "June":
                holidayList = "Father's Day, Juneteenth";
                break;
            case "July":
                holidayList = "Independence Day, Parents' Day";
                break;
            case "August":
                holidayList = "International Cat Day, Women's Equality Day";
                break;
            case "September":
                holidayList = "Labor Day, Patriot Day";
                break;
            case "October":
                holidayList = "Halloween, Indigenous Peoples' Day";
                break;
            case "November":
                holidayList = "Thanksgiving, Veterans Day";
                break;
            case "December":
                holidayList = "Christmas, New Year's Eve";
                break;
            default:
                holidayList = "No holidays available.";
        }

        output += `<strong>${months[i]}:</strong> ${holidayList}<br><br>`;
    }

    document.getElementById("holidays").innerHTML = output;
}

// run when page loads
document.addEventListener("DOMContentLoaded", showHolidays);
