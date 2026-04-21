/**
 * Calculate the total price of all items in the cart
 * @param {Array} items - Array of cart items with price and quantity properties
 * @returns {number} Total price rounded to 2 decimal places
 */
export const calculateTotal = (items) => {
  let total = 0;
  items.forEach((item) => {
    total = total + item.price * item.quantity;
  });
  return Math.round(total * 100) / 100;
};
