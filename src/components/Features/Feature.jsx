import "./Feature.css";
import FeatureCard from "../FeatureCard/FeatureCard";

const features = [
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    description:
      "We prepare every meal using fresh and carefully selected ingredients.",
  },
  {
    icon: "☕",
    title: "Authentic Ethiopian Coffee",
    description:
      "Enjoy traditional Ethiopian coffee prepared with passion and care.",
  },
  {
    icon: "⚡",
    title: "Fast Service",
    description:
      "Delicious food served quickly without compromising quality.",
  },
  {
    icon: "❤️",
    title: "Warm Hospitality",
    description:
      "Every customer is welcomed like family at Miracle Cafe.",
  },
];

function Features() {
  return (
    <section className="features">

      <h2 className="features-title">
        Why Choose Miracle Cafe?
      </h2>

      <div className="features-container">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

    </section>
  );
}

export default Features;