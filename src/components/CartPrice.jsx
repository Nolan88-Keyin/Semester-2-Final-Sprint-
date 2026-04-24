function CartPrice({ items = [] }) {
  let total = 0;

  items.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  const roundedTotal = Math.round(total * 100) / 100;

  return <h2 className="cart-total">Total: ${roundedTotal}</h2>;
}

export default CartPrice;