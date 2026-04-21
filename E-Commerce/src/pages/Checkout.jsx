import { useState } from 'react'
import { Link } from 'react-router-dom'
import { calculateTotal } from '../utils/cartUtils'

function Checkout({ cartItems = [], clearCart = () => {} }) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const total = calculateTotal(cartItems)

  const handlePlaceOrder = async () => {
    setIsSubmitted(true)
    await clearCart()
  }

  return (
    <div>
      <h1 className="page-title">Checkout</h1>

      {isSubmitted ? (
        <div className="checkout-card">
          <p>Your order has been placed successfully.</p>
          <p>
            <Link to="/">Return to Home</Link>
          </p>
        </div>
      ) : cartItems.length === 0 ? (
        <p className="empty-message">
          No items to review. <Link to="/">Browse products</Link>
        </p>
      ) : (
        <div className="checkout-card">
          {cartItems.map((item) => (
            <div className="checkout-item" key={item.id}>
              <span>{item.name}</span>
              <span>
                {item.quantity} x ${item.price}
              </span>
            </div>
          ))}

          <h2 className="cart-total">Total: ${total}</h2>

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
