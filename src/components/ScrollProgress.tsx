import { motion, useScroll, useSpring } from 'framer-motion';
import { useScrollY } from '../hooks/useScrollY';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const scrolled = useScrollY(20);

  return (
    <motion.div
      className={`fixed inset-x-0 z-[60] h-[3px] origin-left bg-brand-yellow ${
        scrolled ? 'top-14' : 'top-16'
      }`}
      style={{ scaleX }}
      aria-hidden
    />
  );
};