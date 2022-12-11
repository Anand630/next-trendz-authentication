import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-bar-container">
      <img
        className="navbar-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="list-options-container">
        <li className="home-option">
          <Link to="/" className="link-item">
            Home
          </Link>
        </li>
        <li className="product-option">
          <Link to="/products" className="link-item">
            Products
          </Link>
        </li>
        <li className="cart-option">
          <Link to="/cart" className="link-item">
            Cart
          </Link>
        </li>
        <li className="logout-button-container">
          <button type="button" className="logout-button">
            Logout
          </button>
        </li>
      </ul>
      <button type="button" className="logout-icon-mobile-view-button">
        <img
          alt="nav logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          className="logout-mobile-view-icon"
        />
      </button>
    </div>
    <ul className="mobile-view-nav-bar">
      <li className="mobile-nav-bar-menu-item">
        <Link to="/" className="mobile-view-button-link">
          <img
            className="mobile-view-nav-icon"
            alt="nav home"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          />
        </Link>
      </li>
      <li className="mobile-nav-bar-menu-item">
        <Link to="/products" className="mobile-view-button-link">
          <img
            className="mobile-view-nav-icon"
            alt="nav products"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          />
        </Link>
      </li>
      <li className="mobile-nav-bar-menu-item">
        <Link to="/cart" className="mobile-view-button-link">
          <img
            className="mobile-view-nav-icon"
            alt="nav cart"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          />
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
