import { calculateTotal } from "../utils/cartUtils";

function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  const total = calculateTotal(cart);

  return (
    <div>
      <h2 className="section-title">Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-card" key={item.id}>
              <img className="cart-image" src={item.image} alt={item.name} />

              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Stock Available: {item.stock}</p>

                <div className="cart-actions">
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h2 className="cart-total">Total: ${total}</h2>
    </div>
  );
}

export default Cart;