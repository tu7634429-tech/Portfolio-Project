import { motion } from "framer-motion";
import { scaleIn } from "../../utils/animationVariants";

const ScaleIn = ({
  children,
  className = "",
  delay = 0,
  as = "div",
  once = true,
}) => {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
};

export default ScaleIn;