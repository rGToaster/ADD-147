function getData() {
    document.getElementById("name").value = "";

    document.getElementById("numHamburger").value = "";
    document.getElementById("numBLT").value = "";
    document.getElementById("numSub").value = "";
    document.getElementById("numHotdog").value = "";
    document.getElementById("numSandwich").value = "";

    document.getElementById("numSoda").value = "";
    document.getElementById("numWater").value = "";
    document.getElementById("numShake").value = "";
    document.getElementById("numEnergy").value = "";
    document.getElementById("numBeer").value = "";

    document.getElementById("numFries").value = "";
    document.getElementById("numChip").value = "";
    document.getElementById("numCake").value = "";
    document.getElementById("numCookie").value = "";
    document.getElementById("numCones").value = "";

    document.getElementById("Total").innerHTML = "";
}
function getTotal() {
    // Prices
    const priceHamburger = 5.50;
    const priceBLT = 6.00;
    const priceSub = 7.50;
    const priceHotdog = 4.00;
    const priceSandwich = 5.00;

    const priceSoda = 2.00;
    const priceWater = 1.50;
    const priceShake = 4.50;
    const priceEnergy = 3.50;
    const priceBeer = 5.00;

    const priceFries = 3.00;
    const priceChips = 2.00;
    const priceCake = 4.00;
    const priceCookie = 1.50;
    const priceCone = 2.50;

    // Sandwiches
    let numHamburger = parseInt(document.getElementById("numHamburger").value) || 0;
    let numBLT = parseInt(document.getElementById("numBLT").value) || 0;
    let numSub = parseInt(document.getElementById("numSub").value) || 0;
    let numHotdog = parseInt(document.getElementById("numHotdog").value) || 0;
    let numSandwich = parseInt(document.getElementById("numSandwich").value) || 0;

    let sandwichesTotal =
        numHamburger * priceHamburger +
        numBLT * priceBLT +
        numSub * priceSub +
        numHotdog * priceHotdog +
        numSandwich * priceSandwich;

    // Drinks
    let numSodas = parseInt(document.getElementById("numSoda").value) || 0;
    let numWater = parseInt(document.getElementById("numWater").value) || 0;
    let numShake = parseInt(document.getElementById("numShake").value) || 0;
    let numEnergy = parseInt(document.getElementById("numEnergy").value) || 0;
    let numBeer = parseInt(document.getElementById("numBeer").value) || 0;

    let drinksTotal =
        numSodas * priceSoda +
        numWater * priceWater +
        numShake * priceShake +
        numEnergy * priceEnergy +
        numBeer * priceBeer;

    // Sides
    let numFries = parseInt(document.getElementById("numFries").value) || 0;
    let numChip = parseInt(document.getElementById("numChip").value) || 0;
    let numCake = parseInt(document.getElementById("numCake").value) || 0;
    let numCookie = parseInt(document.getElementById("numCookie").value) || 0;
    let numCones = parseInt(document.getElementById("numCones").value) || 0;

    let sidesTotal =
        numFries * priceFries +
        numChip * priceChips +
        numCake * priceCake +
        numCookie * priceCookie +
        numCones * priceCone;

    // Grand total
    let grandTotal = sandwichesTotal + drinksTotal + sidesTotal;

    // Output
    let name = document.getElementById("name").value || "Customer";
    // TY w3schools template strings 
    document.getElementById("Total").innerHTML =
        `${name}, here is your order:<br><br>
    Sandwiches: $${sandwichesTotal.toFixed(2)}<br>
    Drinks: $${drinksTotal.toFixed(2)}<br>
    Sides: $${sidesTotal.toFixed(2)}<br><br>
    Grand Total: $${grandTotal.toFixed(2)}`;





}
