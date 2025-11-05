$(document).ready(function () {

    // Move UP
    $("#up").click(function () {
        $("#box").stop().animate({ top: "-=50px" }, 400, function () {
            console.log("Moved Up");
        });
    });

    // Move DOWN
    $("#down").click(function () {
        $("#box").stop().animate({ top: "+=50px" }, 400, function () {
            console.log("Moved Down");
        });
    });

    // Move LEFT
    $("#left").click(function () {
        $("#box").stop().animate({ left: "-=50px" }, 400, function () {
            console.log("Moved Left");
        });
    });

    // Move RIGHT (with chaining + callback!)
    $("#right").click(function () {
        $("#box")
            .stop()
            .animate({ left: "+=50px" }, 400)
            .animate({ opacity: 0.5 }, 200)
            .animate({ opacity: 1 }, 200, function () {
                alert("Right move finished!");
            });
    });

    // STOP animation
    $("#stop").click(function () {
        $("#box").stop();
    });

});
