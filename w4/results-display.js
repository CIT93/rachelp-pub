const orderSummary = document.getElementById('order-summary');
const displayTotal = orderSummary.querySelector('#display-total');
const displayQty = orderSummary.querySelector('#display-qty');
const displaySize = orderSummary.querySelector('#display-size');
const displayGift = orderSummary.querySelector('#display-gift');

export const updateResults = function (results) {
    orderSummary.style.display = 'none';
    
    displayTotal.textContent = `${results.totalPrice}`;
    displayQty.textContent = `${results.qty}`;
    displaySize.textContent = `${results.size}`;
    if (results.giftWrap) displayGift.textContent = 'Yes';
    else displayGift.textContent = 'No';

    orderSummary.style.display = 'block';
};