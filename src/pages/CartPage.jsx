import Cart from "../components/Cart";

function CartPage({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  return (
    <div>
      <h1 className="page-title" style={{ marginLeft: '0.8rem', marginTop: '1rem' }}>Your Cart</h1>

      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default CartPage;