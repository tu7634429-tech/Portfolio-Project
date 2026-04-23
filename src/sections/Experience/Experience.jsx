import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import SlideUp from "../../components/animations/SlideUp";
import experience from "../../data/experience";
import ExperienceItem from "./ExperienceItem";
import "./Experience.scss";

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SlideUp>
          <SectionTitle
            eyebrow="Experience"
            title="Work Experience"
            description="A timeline of roles, learning phases, and practical experience that shaped my design and development journey."
          />
        </SlideUp>

        <div className="experience__list">
          {experience.map((item, index) => (
            <ExperienceItem
              key={item.id}
              data={item}
              index={index}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;