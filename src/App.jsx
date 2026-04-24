/* Main application componant.*/
/* April 22, 2026*/

/* React and routing imports*/
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
/* Styling*/
import './App.css'
/* Page Componants*/
import Home from './pages/Home'
import ProductDetails from './pages/DetailsPage'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import ErrorMessage from './components/ErrorMessage'

function App() {

  /* Error handling state and function */
  const [error, setError] = useState(null)
  const showError = (message) => {
    setError(message)
    setTimeout(() => {
      setError(null)
    }, 5000)
  }


  /* Product API calls */
  /*==================================*/

  /* Fetch all products */
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products")
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      return data
    } catch (error) {
      console.error("Failed to load products:", error)
      showError("Failed to load products. Please check if the server is running.")
      return []
    }
  }

  /* Fetch single product by ID */
  const fetchProductById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`)
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      return data
    } catch (error) {
      console.error("Failed to load product:", error)
      showError("Failed to load product details.")
      return null
    }
  }


  /* Cart API calls */
  /*==================================*/

  /* Fetch cart items */
  const fetchCart = async () => {
    try {
      const res = await fetch("http://localhost:3000/cart")
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      return data
    } catch (error) {
      console.error("Failed to load cart:", error)
      showError("Failed to load cart items.")
      return []
    }
  }

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await fetchCart()
        setCartItems(storedCart)
      } catch (error) {
        console.error("Failed to load cart:", error)
      }
    }
    loadCart()
  }, [])

  /* Update item in cart */
  let updateCartItem = async (cartId, updates) => {
    try {
      const res = await fetch(`http://localhost:3000/cart/${cartId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
      })
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      setCartItems(cartItems => cartItems.map(item => item.id === cartId ? { ...item, ...data } : item))
      return data
    } catch (error) {
      console.error("Failed to update cart item:", error)
      showError("Failed to update cart item.")
    }
  }

  /* Add item to cart */
  let addToCart = async (product) => {
    try {
      const existingItem = cartItems.find(item => item.name === product.name)

      if (existingItem) {
        await updateCartItem(existingItem.id, {
          quantity: (existingItem.quantity ?? 1) + 1
        })
        return
      }

      const cartItem = {
        ...product,
        quantity: product.quantity ?? 1
      }

      const res = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItem)
      })
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      setCartItems(cartItems => [...cartItems, data])
    } catch (error) {
      console.error("Failed to add item to cart:", error)
      showError("Failed to add item to cart.")
    }
  }

  /* Remove item from cart */
  let removeFromCart = async (cartId) => {
    try {
      const res = await fetch(`http://localhost:3000/cart/${cartId}`, {
        method: "DELETE"
      })
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      setCartItems(cartItems => cartItems.filter(item => item.id !== cartId))
    } catch (error) {
      console.error("Failed to remove item from cart:", error)
      showError("Failed to remove item from cart.")
    }
  }

  /* Clear entire cart */
  let clearCart = async () => {
    try {
      for (let item of cartItems) {
        await fetch(`http://localhost:3000/cart/${item.id}`, {
          method: "DELETE"
        })
      }
      setCartItems([])
    } catch (error) {
      console.error("Failed to clear cart:", error)
      showError("Failed to clear cart.")
    }
  }

  /* Increase quantity */
  let increaseQuantity = async (cartId) => {
    const existingItem = cartItems.find(item => item.id === cartId)

    if (!existingItem) {
      return
    }

    await updateCartItem(cartId, {
      quantity: (existingItem.quantity ?? 1) + 1
    })
  }

  /* Decrease quantity or remove */
  let decreaseQuantity = async (cartId) => {
    const existingItem = cartItems.find(item => item.id === cartId)

    if (!existingItem) {
      return
    }

    if ((existingItem.quantity ?? 1) <= 1) {
      await removeFromCart(cartId)
      return
    }

    await updateCartItem(cartId, {
      quantity: existingItem.quantity - 1
    })
  }


  
  return (
    <>
      <ErrorMessage message={error} onClose={() => setError(null)} />
      <Navbar cartItemCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home fetchProducts={fetchProducts} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} fetchProductById={fetchProductById} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
      </Routes>
    </>
  )
}
export default App
