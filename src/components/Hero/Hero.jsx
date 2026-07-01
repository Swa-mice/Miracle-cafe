import "./Hero.css";
import logo from "../../assets/logo/miracle-logo.png";
import heroImage from "../../assets/Image/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">

        <img
          src={logo}
          alt="Miracle Cafe"
          className="hero-logo"
        />

        <p className="welcome">
           Welcome to Miracle Cafe
        </p>

        <h1>
          Where Ethiopian Tradition
          <br />
          Meets Modern Flavor
        </h1>

        <p className="description">
          Enjoy premium coffee, delicious burgers, handmade pizzas,
          authentic Ethiopian dishes, and unforgettable hospitality.
        </p>

        <div className="hero-buttons">

          <a href="#menu">
            <button className="primary-btn">
              🍽 View Menu
            </button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">
              📍 Visit Us
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;