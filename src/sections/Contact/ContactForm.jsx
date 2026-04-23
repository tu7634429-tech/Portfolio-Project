import FadeIn from "../../components/animations/FadeIn";
import Button from "../../components/ui/Button/Button";
import "./Contact.scss";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted");
  };

  return (
    <FadeIn className="contact-form" delay={0.2}>
      <form onSubmit={handleSubmit}>
        <div className="contact-form__group">
          <input type="text" placeholder="Your Name" required />
        </div>

        <div className="contact-form__group">
          <input type="email" placeholder="Email Address" required />
        </div>

        <div className="contact-form__group">
          <input type="text" placeholder="Project Subject" required />
        </div>

        <div className="contact-form__group">
          <textarea rows="6" placeholder="Tell me about your project" required />
        </div>

        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;