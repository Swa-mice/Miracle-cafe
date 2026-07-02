import "./Hero.css";
import logo from "../../assets/Logo/miracle-logo.png";
import heroImage from "../../assets/Image/hero.jpg";
function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
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
          Enjoy premium coffee, delicious burgers,
          handmade pizzas, authentic Ethiopian dishes,
          and unforgettable hospitality.
        </p>

      </div>
    </section>
  );
}

export default Hero;