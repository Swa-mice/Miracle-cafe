import "./Navbar.css";
import logo from "../../assets/Logo/miracle-logo.png";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <img src={logo} alt="Miracle Cafe Logo" className="logo" />

        <h2>Miracle Cafe</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="cart-btn">
        🛒 {cartCount}
      </button>

    </nav>
  );
}

export default Navbar;