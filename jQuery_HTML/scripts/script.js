$(document).ready(function () {

    // Add info from form fields
    $("#submitBtn").click(function () {
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        let email = $("#email").val();
        let color = $("#color").val();
        let hobby = $("#hobby").val();

        // Append user info to page
        $("#output").append(`
            <p><strong>${fname} ${lname}</strong> | Email: ${email} | Favorite Color: ${color} | Hobby: ${hobby}</p>
        `);

        // Clear form fields
        $("#userForm input").val('');
    });

    // Change to light theme
    $("#lightBtn").click(function () {
        $("body").removeClass("dark").addClass("light");
    });

    // Change to dark theme
    $("#darkBtn").click(function () {
        $("body").removeClass("light").addClass("dark");
    });

    // Increase font size
    $("#increaseFont").click(function () {
        let size = parseInt($("body").css("font-size"));
        $("body").css("font-size", (size + 2) + "px");
    });

    // Decrease font size
    $("#decreaseFont").click(function () {
        let size = parseInt($("body").css("font-size"));
        $("body").css("font-size", (size - 2) + "px");
    });
});
