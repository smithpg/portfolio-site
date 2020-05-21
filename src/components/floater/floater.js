import React, { useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

function randIntInRange(n, m) {
  return n + Math.floor(Math.random() * (m - n));
}

function pointIsOutside(pointX, pointY, dimensions) {
  function isWithin(x, n, m) {
    return x >= n && x <= m;
  }

  return (
    !isWithin(pointX, -50, 100 + dimensions.width) ||
    !isWithin(pointY, -50, 100 + dimensions.height)
  );
}

const floaterStyle = {
  borderRadius: '50%',
  fontSize: '20px',
  color: 'black',
  padding: 5,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
};

export default function Floater({ children, ...props }) {
  const { height, width } = props.parentDimensions;
  const floaterHeight = 40;
  const floaterWidth = 40;

  const yMax = height - floaterHeight;
  const xMax = width - floaterWidth;

  let yOffset = useMemo(() => randIntInRange(0, yMax));
  let xVelocity = 0.1;
  let lastTimestamp = null;

  const x = useMotionValue(0);
  const y = useTransform(
    x,
    val => ((y && y.get() * 0.1) || 0) + Math.sin(val * 0.1) + yOffset
  );

  const update = timestamp => {
    const currentX = x.get();
    const currentY = y.get();

    const deltaT = lastTimestamp ? timestamp - lastTimestamp : 0;

    if (pointIsOutside(currentX, currentY, props.parentDimensions)) {
      yOffset = randIntInRange(0, yMax);
      x.set(0);
    } else {
      x.set(x.get() + xVelocity * deltaT * );
    }

    requestAnimationFrame(update);

    lastTimestamp = timestamp;
  };

  useEffect(() => {
    requestAnimationFrame(update);
  }, []);

  return (
    <motion.div
      style={{
        ...floaterStyle,
        x,
        z: y,
        y: yOffset,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
