import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

export const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "", className = "", style = {} }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      setHasAnimated(true);
      return controls.stop;
    }
  }, [inView, count, to, duration, hasAnimated]);

  return <motion.span ref={ref} className={className} style={style}>{rounded}</motion.span>;
};
