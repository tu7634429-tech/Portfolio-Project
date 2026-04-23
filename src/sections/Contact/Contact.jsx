import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import SlideUp from "../../components/animations/SlideUp";
import ContactForm from "./ContactForm";
import { SITE_CONFIG } from "../../utils/constants";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__wrapper">
        <div className="contact__content">
          <SlideUp>
            <SectionTitle
              eyebrow="Contact"
              title="Let’s Build Something Good Together"
              description="If you are looking for a modern portfolio, a strong landing page, or thoughtful UI work, feel free to reach out."
            />
          </SlideUp>

          <SlideUp delay={0.15}>
            <div className="contact__info">
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
              <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, "")}`}>
                {SITE_CONFIG.phone}
              </a>
              <span>{SITE_CONFIG.location}</span>
            </div>
          </SlideUp>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;