import "./Testimonials.scss";

const TestimonialCard = ({ data }) => {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__quote-mark">“</div>

      <p className="testimonial-card__text">{data.text}</p>

      <div className="testimonial-card__footer">
        <div className="testimonial-card__avatar">
          {data.name.charAt(0)}
        </div>

        <div className="testimonial-card__meta">
          <h4>{data.name}</h4>
          <span>{data.role}</span>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;