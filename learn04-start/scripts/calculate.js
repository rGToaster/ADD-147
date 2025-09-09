function addDate() {
    let today = new Date();
    //document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
}
let numRooms;

function showRooms() {
    numRooms = document.getElementById("rooms").value;
    alert(numRooms);
    if (numRooms == 1) {
        document.getElementById("room2").style = "display:none";
        document.getElementById("room3").style = "display:none";
    }
    else if (numRooms == 2) {
        document.getElementById("room2").style = "display:block";
        document.getElementById("room3").style = "display:none";
    }
    else if (numRooms == 3) {
        document.getElementById("room2").style = "display:block";
        document.getElementById("room3").style = "display:block";
    }
}
function estimate() {
    let name = document.getElementById("name").value;
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * .65);
    document.getElementById("rm1cost").value = cost;
    var totalCost = cost;



    // ===============
    numRooms = document.getElementById("rooms").value;

    if (numRooms == 2) {
        setRoom2();
        let cost = parseFloat(document.getElementById("rm1cost").value);
        let cost2 = parseFloat(document.getElementById("rm2cost").value);
        totalCost = (cost + cost2).toFixed(2);
    }
    else if (numRooms == 3) {
        setRoom2();
        setRoom3();
        let cost = parseFloat(document.getElementById("rm1cost").value);
        let cost2 = parseFloat(document.getElementById("rm2cost").value);
        let cost3 = parseFloat(document.getElementById("rm3cost").value);
        totalCost = (cost + cost2 + cost3).toFixed(2);
    }

    function setRoom2() {
        let length2 = parseFloat(document.getElementById("rm2length").value);
        let width2 = parseFloat(document.getElementById("rm2width").value);
        let height2 = parseFloat(document.getElementById("rm2height").value);
        let totalSqFt2 = parseFloat(((length2 * height2 * 2) + (length2 * width2 * 2)));
        //alert(totalSqFt2);
        let cost2 = (totalSqFt2 * .65).toFixed(2);
        // alert(cost2)
        if (!isNaN(cost2)) {
            document.getElementById("rm2cost").value = cost2;
        }
    }
    function setRoom3() {
        let length3 = parseFloat(document.getElementById("rm3length").value);
        let width3 = parseFloat(document.getElementById("rm3width").value);
        let height3 = parseFloat(document.getElementById("rm3height").value);
        let totalSqFt3 = parseFloat(((length3 * height3 * 2) + (length3 * width3 * 2)));
        //alert(totalSqFt2);
        let cost3 = (totalSqFt3 * .65).toFixed(2);
        // alert(cost2)
        if (!isNaN(cost3)) {
            document.getElementById("rm3cost").value = cost3;
        }
    }
    if (!isNaN(totalCost)) {
        document.getElementById("estimate").innerHTML = name + ", your estimate is: $" + totalCost;
    }
    else {
        document.getElementById("estimate").innerHTML = name + ", some values are missing or incorrect";
    }
}