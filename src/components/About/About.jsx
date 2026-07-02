import "./About.css";
import aboutImage from "../../assets/about/about.jpg";

function About() {
  return (
    <section className="about">

      <div className="about-left">

        <h4>OUR STORY</h4>

        <h2>
          Experience
          <br />
          Ethiopian Coffee Culture
        </h2>

        <p>
          Miracle Cafe combines authentic Ethiopian coffee,
          traditional cuisine and modern dining to create
          unforgettable moments.
        </p>

        <button>Explore Menu</button>

      </div>

      <div className="about-right">

        <img
          src={aboutImage}
          alt="About Miracle Cafe"
        />

      </div>

    </section>
  );
}

export default About;