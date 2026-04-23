import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animationVariants";

const SlideUp = ({
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
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
};

export default SlideUp;