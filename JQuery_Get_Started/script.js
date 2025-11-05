$(document).ready(function () {

    // Hide ONLY paragraphs when this button is clicked
    $("#hideParasBtn").click(function () {
        $("p").hide();
    });

    // Hide only the div with ID
    $("#hideDivBtn").click(function () {
        $("#myDiv").hide();
    });

    // Clicking any <h2> hides it
    $("h2").click(function () {
        $(this).hide();
    });

});