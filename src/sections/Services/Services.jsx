import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import SlideUp from "../../components/animations/SlideUp";
import ServiceCard from "./ServiceCard";
import services from "../../data/services";
import "./Services.scss";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <SlideUp>
          <SectionTitle
            eyebrow="Services"
            title="How I Can Help"
            description="A selection of creative and technical services designed to help brands, products, and personal portfolios stand out with clarity and impact."
          />
        </SlideUp>

        <div className="services__grid">
          {services.map((item, index) => (
            <ServiceCard
              key={item.id}
              data={item}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;