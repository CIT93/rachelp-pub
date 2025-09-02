// Pseudocode:
// 1. Listen for a form submission
// 2. Store that submission as a variable
// 3. Use that variable in the output

// Reviewed w3 code for multiple aspects

console.log("app.js loaded");

const init = function() {
    document.addEventListener("submit", formSubmitted);
};

const formSubmitted = function() {
    console.log("Form submission function successfully started...");
    event.preventDefault();

    const myForm = document.getElementById('myForm');
    const formInput = document.getElementById('formInput');
    const myMessage = document.getElementById('myMessage');

    myMessage.innerText = "Hello, " + formInput.value + "!";
    console.log("Message printed");

    formInput.value = "";
    console.log("Form cleared");
    console.log("Form submission function successfully finished!");
};

document.addEventListener("DOMContentLoaded", init);