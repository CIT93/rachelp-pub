console.log('app.js has loaded.');

// Import
import * as orderHandler from './order-handler.js';
import * as priceCalculator from './price-calculator.js';
import * as resultsDisplay from './results-display.js';

// Select Element(s)
const orderForm = document.getElementById('order-form');

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
    // Compile all order data
    const newOrder = {
        ...orderFormSelections,
        ...calculatedPrice,
        timestamp: new Date().toISOString()
    };
    // Push new order into (volatile) order history
    orders.push(newOrder);
    console.log(orders);
    // Update the page
    resultsDisplay.updateResults(newOrder);
    console.log('Order submission successfully processed.');
};

// The Init Function
const init = function() {
    orderForm.addEventListener('submit', handleOrderSubmit);
    console.log('App initialized.');
};

document.addEventListener('DOMContentLoaded', init);