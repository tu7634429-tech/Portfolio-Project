import SlideUp from "../../components/animations/SlideUp";
import "./Services.scss";

const ServiceCard = ({ data, delay }) => {
  return (
    <SlideUp className="service-card" delay={delay}>
      <div className="service-card__top">
        <span className="service-card__number">
          {String(data.id).padStart(2, "0")}
        </span>
      </div>

      <div className="service-card__content">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>

      <div className="service-card__bottom">
        <a href="#contact" className="service-card__link">
          Discuss Project
        </a>
      </div>
    </SlideUp>
  );
};

export default ServiceCard;