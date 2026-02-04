console.log('app.js has loaded.');

// 1. Import
import * as orderHandler from "./order-handler.js";

// 2. Select Elements
const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');

// 3. The Submit Function
const handleOrderSubmit = function(event) {
    // Stop reload
    event.preventDefault();
    // Get data
    const orderFormSelections = orderHandler.getOrderInputs();

    // Update the page
    orderSummary.textContent = `Ordered ${orderFormSelections.qtyInputSelection} ${orderFormSelections.sizeRadioButtonsSelection} T-Shirt`;

    if(orderFormSelections.qtyInputSelection > 1) {
        orderSummary.textContent += `s`;
    };

    if(orderFormSelections.giftWrapCheckboxSelection === true) {
        orderSummary.textContent += ` with Gift Wrapping`;
    } else {
        orderSummary.textContent += ` (no Gift Wrapping)`;
    };

    orderSummary.textContent += '. Thank you for your purchase!';
    console.log('Order submission successfully processed.');
};

// 4. The Init Function
const init = function() {
    orderForm.addEventListener('submit', handleOrderSubmit);
    console.log('App initialized.');
};

document.addEventListener('DOMContentLoaded', init);