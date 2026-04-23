import SocialLinks from "../../ui/SocialLinks/SocialLinks";
import { SITE_CONFIG } from "../../../utils/constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__glow footer__glow--one" />
      <div className="footer__glow footer__glow--two" />

      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__heading">
            <span className="eyebrow">Let’s Build Something Great</span>
            <h2>{SITE_CONFIG.name}</h2>
          </div>

          <div className="footer__newsletter">
            <span className="footer__newsletter-label">Newsletter</span>
            <h3>Stay in the loop with design, projects, and updates.</h3>

            <form className="footer__newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer__middle">
          <div className="footer__intro">
            <p>
              Crafting thoughtful digital experiences with modern design,
              refined interaction, and frontend precision.
            </p>
          </div>

          <div className="footer__contact">
            <span className="footer__contact-title">Contact</span>
            <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
            <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}>
              {SITE_CONFIG.phone}
            </a>
            <span>{SITE_CONFIG.location}</span>
          </div>
        </div>

        <div className="footer__bottom">
          <SocialLinks />
          <div className="footer__bottom-text">
            <p>© 2026 {SITE_CONFIG.name}. All rights reserved.</p>
            <p>Design and Development by Thevindu Ransara</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;