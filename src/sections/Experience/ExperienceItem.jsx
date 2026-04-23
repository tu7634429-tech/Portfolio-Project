import SlideUp from "../../components/animations/SlideUp";
import "./Experience.scss";

const ExperienceItem = ({ data, index, delay }) => {
  const formattedNumber = String(index + 1).padStart(2, "0");

  return (
    <SlideUp className="experience-item" delay={delay}>
      <div className="experience-item__count">{formattedNumber}</div>

      <div className="experience-item__wrapper">
        <div className="experience-item__content">
          <h3>
            {data.role} <span>- {data.company}</span>
          </h3>

          <div className="experience-item__period">{data.period}</div>

          <p>{data.description}</p>
        </div>

        <div className="experience-item__action">
          <button type="button" className="exp-btn">
            <span>Explore Now</span>
            <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </SlideUp>
  );
};

export default ExperienceItem;