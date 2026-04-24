// CHECKOUT PAGE 
// Users can view final total and place orders

import { useState } from 'react'
import { Link } from 'react-router-dom'
import CartPrice from '../components/CartPrice'

function Checkout({ cartItems = [], clearCart = () => {} }) {
  // tracks if the order has been submitted so we can show comfirmation message.
  const [isSubmitted, setIsSubmitted] = useState(false)
  // places the order when user clicks the button
  const handlePlaceOrder = async () => {
    setIsSubmitted(true);
    // clear the cart after order is placed
    await clearCart();
  };

  return (
    <div>
      <h1 className="page-title" style={{ marginLeft: '1rem', marginBottom: '1rem' }}>Checkout</h1>

      {isSubmitted ? (
        <div className="checkout-card">
          <p>Your order has been placed successfully.</p>
          <p>
            <Link to="/">Return to Home</Link>
          </p>
        </div>
      ) : cartItems.length === 0 ? (
        <p className="empty-message" style={{ marginLeft: '1rem' }}>
          No items to review. <Link to="/">Browse products</Link>
        </p>
      ) : (
        <div className="checkout-card" style={{ marginLeft: '1rem' }}>
          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price}
              </span>
            </div>
          ))}

          <CartPrice items={cartItems} />

          <button
            className="primary-btn"
            type="button"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  )
}

export default Checkout
