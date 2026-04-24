// Displays and manages cart items
import CartPrice from "./CartPrice";

function Cart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  return (
    <div>

      {cart.length === 0 ? (
        <p className="empty-message" style={{ marginLeft: '1.5rem' }}>Your cart is empty.</p>
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

      <CartPrice items={cart} />
    </div>
  );
}

export default Cart;