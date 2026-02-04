// 1. Select your elements
const orderForm = document.getElementById('order-form');

// Get references to the Quantity input, the Gift Wrap checkbox, and the Size radio buttons
const qtyInput = orderForm.querySelector('#qty');
const giftWrapCheckbox = orderForm.querySelector('#gift-wrap');
// (checked form-handler.js to correct the querySelectorAll input syntax)
const sizeRadioButtons = orderForm.querySelectorAll('input[name="size"]');

// 2. Create a helper function
// Write a function to figure out which Size radio button is checked.
// (checked form-handler.js to build the for/if blocks)
const getSelectedRadioValue = function(radioButtons) {
    for (const radio of radioButtons) {
        if (radio.checked) {
            return radio.value;
        };
    };
};

// 3. Export the Main Function
// Create and export a function
export const getOrderInputs = function() {
    console.log('getOrderInputs is running...');
    const orderFormSelections = {
        qty: parseInt(qtyInput.value),
        giftWrap: giftWrapCheckbox.checked,
        size: getSelectedRadioValue(sizeRadioButtons)
    };

    console.log('getOrderInputs is returning...');
    return orderFormSelections;
};