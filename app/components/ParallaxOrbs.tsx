'use client';

import React, { RefObject } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  containerRef: RefObject<HTMLElement>;
};

export default function ParallaxOrbs({ containerRef }: Props) {
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

  const x1 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const x2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const x3 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div className="parallax-orbs" aria-hidden="true">
      <motion.span className="orb orb-green" style={{ x: x1, y: y1 }} />
      <motion.span className="orb orb-yellow" style={{ x: x2, y: y2 }} />
      <motion.span className="orb orb-blue" style={{ x: x3, y: y3 }} />
    </div>
  );
}
