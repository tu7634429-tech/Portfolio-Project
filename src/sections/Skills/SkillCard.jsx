import FadeIn from "../../components/animations/FadeIn";
import "./Skills.scss";

const SkillCard = ({ data, index, delay }) => {
  const formattedNumber = String(index + 1).padStart(2, "0");

  return (
    <FadeIn className="skill-card" delay={delay}>
      <div className="skill-card__top">
        <span className="skill-card__number">{formattedNumber}.</span>
        <h3>{data.title}</h3>
      </div>

      <p>{data.text}</p>

      <a href="#case-studies" className="skill-card__link">
        See Past Work
      </a>
    </FadeIn>
  );
};

export default SkillCard;