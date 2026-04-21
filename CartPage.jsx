import Cart from "../components/cart";

function CartPage({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  return (
    <div>
      <h1 className="page-title">Your Cart</h1>

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