let contacts = [];

function addme() {
    // Get form values
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Create an object from the form data
    const contact = {
        firstName: fname,
        lastName: lname,
        email: email,
        phone: phone
    };

    // Add contact to array
    contacts.push(contact);

    // Convert the object array to JSON
    const jsonData = JSON.stringify(contacts, null, 2);

    // Display JSON data on the page
    document.getElementById("json-value").textContent = jsonData;

    // Optional: Clear the form
    document.querySelector("form").reset();
}