import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./SocialLinks.scss";

const socialItems = [
  { id: 1, icon: <FaGithub />, href: "https://github.com" },
  { id: 2, icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  { id: 3, icon: <FaDribbble />, href: "https://dribbble.com" },
  { id: 4, icon: <FaBehance />, href: "https://behance.net" },
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label="social link"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;