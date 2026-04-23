import { FaBehance, FaDribbble, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./SocialLinks.scss";

const socialItems = [
  { id: 1, icon: <FaGithub />, href: "https://github.com/trsrathnayaka" },
  { id: 2, icon: <FaLinkedinIn />, href: "https://lk.linkedin.com/in/thevindu-ransara-rathnayaka-20270921a" },
  { id: 3, icon: <FaDribbble />, href: "https://dribbble.com" },
  { id: 4, icon: <FaBehance />, href: "https://www.behance.net/SLCODEACADEMY?tracking_source=search_projects%7Cweb+sri+lanka" },
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
