import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import productData from "./data/products";
import "./App.css";

function App() {
  const [products] = useState(productData);
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    let found = false;

    let updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        found = true;
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    if (found === true) {
      setCart(updatedCart);
    } else {
      let newProduct = { ...product, quantity: 1 };
      setCart([...cart, newProduct]);
    }
  }

  function removeFromCart(id) {
    let updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  function increaseQuantity(id) {
    let updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    let updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }

  return (
    <div className="app">
      <nav className="navbar">
        <h2 className="logo">Vintage Essentials</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/checkout">Checkout</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
        </div>
      </nav>

      <div className="page-container">
        <Routes>
          <Route
            path="/"
            element={<Home products={products} addToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />

          <Route path="/checkout" element={<Checkout cart={cart} />} />

          <Route
            path="/product/:id"
            element={
              <ProductDetail products={products} addToCart={addToCart} />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;