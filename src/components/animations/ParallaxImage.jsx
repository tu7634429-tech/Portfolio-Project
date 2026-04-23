import { motion } from "framer-motion";
import { useRef } from "react";
import useParallax from "../../hooks/useParallax";
import "./ParallaxImage.scss";

const ParallaxImage = ({ src, alt, className = "", distance = 60 }) => {
  const ref = useRef(null);
  const { y } = useParallax(ref, distance);

  return (
    <div ref={ref} className={`parallax-image ${className}`}>
      <motion.img src={src} alt={alt} style={{ y }} />
    </div>
  );
};

export default ParallaxImage;