console.log('app.js has loaded.');

// Import
import * as orderHandler from './order-handler.js';
import * as priceCalculator from './price-calculator.js';

// Select Elements
const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');

// Order History
const orders = [];

// The Submit Function
const handleOrderSubmit = function(event) {
    // Stop reload
    event.preventDefault();
    // Get data
    const orderFormSelections = orderHandler.getOrderInputs();
    // Calculate total
    const calculatedPrice = priceCalculator.calculateTotal(orderFormSelections);
    const newOrder = {
        ...orderFormSelections,
        ...calculatedPrice,
        timestamp: new Date().toISOString()
    };
    orders.push(newOrder);
    console.log(orders);

    // Update the page
    orderSummary.textContent = `Ordered ${orderFormSelections.qty} ${orderFormSelections.size} T-Shirt`;

    if(orderFormSelections.qty > 1) {
        orderSummary.textContent += `s`;
    };

    if(orderFormSelections.giftWrap === true) {
        orderSummary.textContent += ` with Gift Wrapping`;
    } else {
        orderSummary.textContent += ` (no Gift Wrapping)`;
    };

    orderSummary.textContent += '. Thank you for your purchase!';
    console.log('Order submission successfully processed.');
};

// The Init Function
const init = function() {
    orderForm.addEventListener('submit', handleOrderSubmit);
    console.log('App initialized.');
};

document.addEventListener('DOMContentLoaded', init);