import SlideUp from "../../components/animations/SlideUp";
import FadeIn from "../../components/animations/FadeIn";
import ParallaxImage from "../../components/animations/ParallaxImage";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import "./About.scss";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="about__glow about__glow--one" />
      <div className="about__glow about__glow--two" />

      <div className="container about__wrapper">
        <FadeIn className="about__visual" delay={0.1}>
          <div className="about__image-shell">
            <div className="about__image card">
              <ParallaxImage
                src="/assets/images/about-bg.jpeg"
                alt="Creative professional"
                distance={40}
              />
            </div>

            <div className="about__floating-card">
              <span className="about__floating-label">Creative Focus</span>
              <strong>UI/UX • Web • Interaction</strong>
            </div>
          </div>
        </FadeIn>

        <div className="about__content">
          <SlideUp delay={0.15}>
            <SectionTitle
              eyebrow="About Me"
              title="Designing with Clarity & Precision"
              description="I enjoy building digital experiences that combine visual elegance with frontend logic. My approach is rooted in clarity, refined interaction, and the details that make an interface feel intentional."
            />
          </SlideUp>

          <SlideUp delay={0.3}>
            <p className="about__text">
              From wireframes to polished frontends, I like turning ideas into
              responsive digital products that feel premium in every section.
              Whether it is a landing page, a portfolio, or a product showcase,
              I care deeply about spacing, typography, rhythm, and motion.
            </p>
          </SlideUp>

          <SlideUp delay={0.42}>
            <div className="about__info-row">
              <div className="about__info-block">
                <span>Based In</span>
                <strong>Sri Lanka</strong>
              </div>

              <div className="about__info-block">
                <span>Focus</span>
                <strong>Design + Development</strong>
              </div>
            </div>
          </SlideUp>

          <SlideUp delay={0.5}>
            <div className="about__stats">
              <div className="about__stat">
                <h3>3+</h3>
                <p>Years of self-driven learning and project building</p>
              </div>

              <div className="about__stat">
                <h3>20+</h3>
                <p>Concept websites and UI explorations created</p>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default About;