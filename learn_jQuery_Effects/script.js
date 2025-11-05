$(document).ready(function () {

    // Hide / Show
    $("#hideBtn").click(function () {
        $("#img1").hide(500);
    });

    $("#showBtn").click(function () {
        $("#img1").show(500);
    });

    // Fade
    $("#fadeOut").click(function () {
        $("#img2").fadeOut(800);
    });

    $("#fadeIn").click(function () {
        $("#img2").fadeIn(800);
    });

    // Slide
    $("#slideUp").click(function () {
        $("#panel").slideUp(600);
    });

    $("#slideDown").click(function () {
        $("#panel").slideDown(600);
    });

});
