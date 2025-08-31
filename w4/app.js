// Pseudocode:
// 1. Listen for a form submission
// 2. Store that submission as a variable
// 3. Use that variable in the output

console.log("app.js loaded")

myForm.addEventListener("submit", formSubmitted)

const formSubmitted = function() {
    console.log("Form submission function successfully started");
    event.preventDefault();
    const userName = myForm.getElementID(input.value);
    myMessage.print("Hello, ${userName}!");
    form.reset;
    console.log("Form submission function successfully finished");
}