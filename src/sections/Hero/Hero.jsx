import { motion } from "framer-motion";
import Button from "../../components/ui/Button/Button";
import SocialLinks from "../../components/ui/SocialLinks/SocialLinks";
import SlideUp from "../../components/animations/SlideUp";
import ScaleIn from "../../components/animations/ScaleIn";
import HyperspeedCanvas from "../../components/animations/HyperspeedCanvas";
import { SITE_CONFIG } from "../../utils/constants";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <HyperspeedCanvas />
      <div className="hero__overlay" />
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container hero__wrapper">
        <div className="hero__content">
          <SlideUp delay={0.1}>
            <span className="eyebrow">{SITE_CONFIG.role}</span>
          </SlideUp>

          <SlideUp delay={0.2}>
            <h1 className="hero__title">
              Creative
              <br />
              Interfaces
            </h1>
          </SlideUp>

          <SlideUp delay={0.35}>
            <p className="hero__description">
              I build modern web experiences with clean UI, strong motion, and
              thoughtful frontend structure.
            </p>
          </SlideUp>

          <SlideUp delay={0.5}>
            <div className="hero__actions">
              <Button href="#case-studies" variant="primary">
                View Work
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </SlideUp>

          <SlideUp delay={0.65}>
            <div className="hero__socials">
              <SocialLinks />
            </div>
          </SlideUp>
        </div>

        <ScaleIn delay={0.35} className="hero__visual">
          <motion.div
            className="hero__image-card"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="hero__image-wrap">
              <img
                src="/assets/images/profile.jpeg"
                alt="Thevindu Ransara"
              />
            </div>

            <div className="hero__image-info">
              <h3>Thevindu Ransara</h3>
              <p>Software Engineer / UI Designer</p>
              <span>Available for freelance projects</span>
            </div>
          </motion.div>
        </ScaleIn>
      </div>

      <div className="hero__marquee">
        <div className="hero__marquee-track">
          <span>React JS</span>
          <span>UI/UX Design</span>
          <span>Frontend Development</span>
          <span>Portfolio Websites</span>
          <span>Mobile App UI</span>
          <span>Creative Direction</span>
          <span>Modern Web Design</span>
          <span>Interaction Design</span>

          <span>React JS</span>
          <span>UI/UX Design</span>
          <span>Frontend Development</span>
          <span>Portfolio Websites</span>
          <span>Mobile App UI</span>
          <span>Creative Direction</span>
          <span>Modern Web Design</span>
          <span>Interaction Design</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;