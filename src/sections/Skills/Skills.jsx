import { useState } from "react";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import SlideUp from "../../components/animations/SlideUp";
import SkillCard from "./SkillCard";
import skills from "../../data/skills";
import "./Skills.scss";

const INITIAL_VISIBLE = 6;

const Skills = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const visibleSkills = skills.slice(0, visibleCount);
  const hasMore = visibleCount < skills.length;

  const handleLoadMore = () => {
    setVisibleCount(skills.length);
  };

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SlideUp>
          <SectionTitle
            eyebrow="Core Skills"
            title="My Skillset"
            description="A combination of design thinking, interface craft, and frontend execution used to create refined digital experiences."
          />
        </SlideUp>

        <div className="skills__grid">
          {visibleSkills.map((item, index) => (
            <SkillCard
              key={item.id}
              data={item}
              index={index}
              delay={index * 0.06}
            />
          ))}
        </div>

        {hasMore && (
          <div className="skills__actions">
            <button
              type="button"
              className="skills__load-more"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;