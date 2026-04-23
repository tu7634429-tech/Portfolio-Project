import FadeIn from "../../components/animations/FadeIn";
import "./CaseStudies.scss";

const CaseStudyCard = ({ data, delay }) => {
  return (
    <FadeIn className="case-card" delay={delay}>
      <div className="case-card__image">
        <img src={data.image} alt={data.title} />
      </div>

      <div className="case-card__content">
        <div className="case-card__meta">
          <span>{data.category}</span>
          <span>{data.year}</span>
        </div>

        <h3>{data.title}</h3>
        <p>{data.description}</p>

        <a href="#contact" className="case-card__link">
          View Project
        </a>
      </div>
    </FadeIn>
  );
};

export default CaseStudyCard;