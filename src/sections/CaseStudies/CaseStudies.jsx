import { useMemo, useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import SlideUp from "../../components/animations/SlideUp";
import CaseStudyCard from "./CaseStudyCard";
import caseStudies from "../../data/caseStudies";
import "./CaseStudies.scss";

const filters = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Graphic Design",
  "Mobile App Development",
];

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return caseStudies;
    return caseStudies.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="section case-studies" id="case-studies">
      <div className="container">
        <SlideUp>
          <SectionTitle
            eyebrow="Selected Work"
            title="Case Studies & Projects"
            description="Explore projects across web development, UI/UX design, graphic design, and mobile app development."
          />
        </SlideUp>

        <div className="case-studies__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`case-studies__filter ${
                activeFilter === filter ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="case-studies__grid">
          {filteredProjects.map((item, index) => (
            <CaseStudyCard
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

export default CaseStudies;