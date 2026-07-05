import "./Hero.css";
import heroImage from "../../assets/Image/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-left">

          <span className="hero-tag">
            🇪🇹 Ethiopian Taste • Premium Coffee
          </span>

          <h1>
            Experience The
            <br />
            Finest Ethiopian
            <br />
            Cafe & Restaurant
          </h1>

          <p className="hero-text">
            Fresh Coffee • Traditional Ethiopian Foods • Burgers • Pizza •
            Chicken Meals • Fresh Juices
            <br />
            <br />
            Crafted with Passion. Served with Love.
          </p>

          <div className="hero-buttons">

            <a href="#menu">
              <button className="primary-btn">
                🍽 Order Now
              </button>
            </a>

            <a href="#about">
              <button className="secondary-btn">
                Discover More
              </button>
            </a>

          </div>

          <div className="hero-info">

            <div>
              <h2>10+</h2>
              <span>Years</span>
            </div>

            <div>
              <h2>80+</h2>
              <span>Menu Items</span>
            </div>

            <div>
              <h2>5000+</h2>
              <span>Happy Customers</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;