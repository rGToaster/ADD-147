function addDate() {
    let today = new Date();
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";

}

let numRooms;
function showRooms() {
    numRooms = document.getElementById("rooms").value;
    if (numRooms == 1) {
        document.getElementById(room2).style = "display:none";
        document.getElementById(room3).style = "display:none";
    }
    elseif(numRooms == 2){
        document.getElementById(room2).style = "display:block";
        document.getElementById(room3).style = "display:none";
    }
    else (numRooms == 3){
        document.getElementById(room2).style = "display:block";
        document.getElementById(room3).style = "display:block";
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
    document.getElementById("estimate").innerHTML = name + ", your estimate is $" + cost.toFixed(2);







}