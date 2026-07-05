import "./About.css";
import aboutImage from "../../assets/Image/about.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-image">

        <img src={aboutImage} alt="About Miracle Cafe" />

      </div>

      <div className="about-content">

        <span>ABOUT US</span>

        <h2>
          More Than Coffee,
          <br />
          We Create Memories.
        </h2>

        <p>
          Miracle Cafe blends authentic Ethiopian traditions with
          modern dining. From freshly roasted coffee to delicious
          traditional dishes and international favorites,
          every meal is prepared with quality and passion.
        </p>

        <button>
          Explore Our Menu
        </button>

      </div>

    </section>
  );
}

export default About;