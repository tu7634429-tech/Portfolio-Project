import { useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../../data/testimonials";
import "./Testimonials.scss";

const ITEMS_PER_VIEW = 3;

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => {
      const nextIndex = prev - ITEMS_PER_VIEW;
      if (nextIndex < 0) {
        const remainder = testimonials.length % ITEMS_PER_VIEW;
        if (remainder === 0) {
          return testimonials.length - ITEMS_PER_VIEW;
        }
        return testimonials.length - remainder;
      }
      return nextIndex;
    });
  };

  const nextSlide = () => {
    setStartIndex((prev) => {
      const nextIndex = prev + ITEMS_PER_VIEW;
      if (nextIndex >= testimonials.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + ITEMS_PER_VIEW
  );

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__top">
          <SectionTitle
            eyebrow="Testimonials"
            title="What People Say"
            description="A few words from people who value thoughtful design, clean execution, and a refined digital experience."
          />

          <div className="testimonials__controls">
            <button type="button" onClick={prevSlide} aria-label="Previous testimonials">
              ←
            </button>
            <button type="button" onClick={nextSlide} aria-label="Next testimonials">
              →
            </button>
          </div>
        </div>

        <div className="testimonials__grid">
          {visibleTestimonials.map((item) => (
            <TestimonialCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;