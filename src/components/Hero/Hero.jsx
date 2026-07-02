import "./Hero.css";
import heroImage from "../../assets/Image/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <span className="hero-subtitle">
          ☕ Premium Ethiopian Coffee
        </span>

        <h1>
          Experience The Real
          <br />
          Taste Of Ethiopia
        </h1>

        <p>
          Fresh Coffee • Traditional Food • Pizza • Burgers
          <br />
          Modern Restaurant Experience
        </p>

        <div className="hero-rating">

          ⭐⭐⭐⭐⭐

          <span>
            500+ Happy Customers
          </span>

        </div>

        <div className="hero-buttons">

          <a href="#menu">
            <button className="hero-primary">
              Order Now
            </button>
          </a>

          <a href="#about">
            <button className="hero-secondary">
              Explore Menu
            </button>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;