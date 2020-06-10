import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { timeout } from 'constants/transition';

function useForceRender() {
  const [k, setK] = useState(0);

  return () => setK(k => k + 1);
}

function Transition({ children, location }) {
  const timeoutId = useRef(null);
  const forceRender = useForceRender();
  let locationAsOfLastRender = useRef(location); // on first call, there is no previous render

  const isTransitioning = locationAsOfLastRender.current !== location.pathname;

  if (isTransitioning) {
    locationAsOfLastRender.current = location.pathname;
  }

  useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    timeoutId.current = setTimeout(() => {
      // Transition ends after <timeout> ms, at which point
      // we want to ...
      forceRender();
    }, timeout.milliseconds);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isTransitioning || (
        <motion.div
          animate={{
            opacity: 1,
          }}
          transition={{ duration: timeout.seconds / 2 }}
          exit={{
            opacity: 0,
          }}
          initial={{ opacity: 0 }}
          key={location.pathname}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Transition;
