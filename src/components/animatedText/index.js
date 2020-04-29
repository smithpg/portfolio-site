import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { timedSequence } from '../../helpers/timeline';

export default function AnimatedText({ children }) {
  const controls = useAnimation();

  return (
    <motion.div
      transition={{
        duration: 1,
        type: 'spring',
        mass: 0.5,
        stiffness: 90,
        delay: 1,
        flip: Infinity,
      }}
      animate={{
        scale: [1, 0.5],
        rotate: [0, 360],
        border: '1px solid black',
      }}
    >
      {children}
    </motion.div>
  );
}
