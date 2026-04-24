import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({ cartItemCount = 0 }) {
  return (
    <header className="navbar-shell">
      <nav aria-label="Main navigation" className="navbar">
        <ul className="navbar-list">
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Checkout
            </NavLink>
          </li>
          <li className="cart-chip" aria-label="Cart item count">
            {cartItemCount}
          </li>
        </ul>
        <h1 className='logo'>VINTAGE ESSENTIALS</h1>
      </nav>
    </header>
  )
}

export default Navbar
