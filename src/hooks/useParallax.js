import { useScroll, useTransform } from "framer-motion";

const useParallax = (ref, distance = 80) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return { y };
};

export default useParallax;