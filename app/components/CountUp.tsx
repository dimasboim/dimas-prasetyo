'use client';

import React, { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

type CountUpProps = {
  from?: number;
  to: number;
  duration?: number; // seconds
  prefix?: string;
  suffix?: string;
};

export default function CountUp({ from = 0, to, duration = 1.6, prefix = '', suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(from, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration, prefix, suffix]);

  return <span ref={ref} />;
}
