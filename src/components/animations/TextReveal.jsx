import { motion } from "framer-motion";
import "./TextReveal.scss";

const TextReveal = ({ text, className = "", delay = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={`text-reveal ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <span key={index} className="text-reveal__word-wrap">
          <motion.span className="text-reveal__word" variants={child}>
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

export default TextReveal;