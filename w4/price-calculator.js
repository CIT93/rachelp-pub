const shirtPrice = 15;
const giftWrapPrice = 2;

export const calculateTotal = function(data) {
    if (data.giftWrap) {
        return {
            totalPrice: (parseInt(data.qty) * shirtPrice) + giftWrapPrice
        };
    } else if (data.giftWrap === false) {
        return {
            totalPrice: parseInt(data.qty) * shirtPrice
        };
    };
};