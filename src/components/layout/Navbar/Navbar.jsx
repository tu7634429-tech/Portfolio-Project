import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion } from "framer-motion";
import navLinks from "../../../data/navLinks";
import SocialLinks from "../../ui/SocialLinks/SocialLinks";
import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark">T</span>
          <span className="navbar__logo-text">THEVINDU</span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? "active" : ""}`}>
          <ul className="navbar__links">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar__mobile-bottom">
            <a href="#contact" className="navbar__cta" onClick={closeMenu}>
              Let’s Talk
            </a>

            <div className="navbar__mobile-socials">
              <SocialLinks />
            </div>
          </div>
        </nav>

        <div className="navbar__right">
          <a href="#contact" className="navbar__cta navbar__cta--desktop">
            Let’s Talk
          </a>

          <div className="navbar__desktop-socials">
            <SocialLinks />
          </div>

          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;