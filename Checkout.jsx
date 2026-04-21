function Checkout({ cart }) {
  let total = 0;

  cart.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  return (
    <div>
      <h1 className="page-title">Checkout</h1>

      {cart.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <div className="checkout-card">
          {cart.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price}
              </span>
            </div>
          ))}

          <h2 className="cart-total">Total: ${total}</h2>

          <button className="primary-btn">Place Order</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;