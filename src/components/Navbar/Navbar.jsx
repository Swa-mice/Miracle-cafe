import "./Navbar.css";
import logo from "../../assets/Logo/miracle-logo.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <img src={logo} alt="Miracle Cafe" />

        <h2>Miracle Coffee House</h2>

      </div>

      <nav>

        <a href="#">Home</a>

        <a href="#about">About</a>

        <a href="#menu">Menu</a>

        <a href="#reviews">Reviews</a>

        <a href="#contact">Contact</a>

      </nav>

      <button className="book-btn">
        Order Now
      </button>

    </header>
  );
}

export default Navbar;