import "./Navbar.css";
import logo from "../../assets/Logo/miracle-logo.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <img src={logo} alt="Miracle Cafe" />

        <div>
          <h2>Miracle Cafe</h2>
          <span>Restaurant & Coffee House</span>
        </div>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="nav-right">
        <a href="#menu">
          <button className="book-btn">
            🍽 Order Now
          </button>
        </a>
      </div>

    </header>
  );
}

export default Navbar;