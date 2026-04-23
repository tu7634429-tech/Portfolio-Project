import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animationVariants";

const FadeIn = ({
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
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;