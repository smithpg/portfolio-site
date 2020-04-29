import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { timeout } from 'constants/transition';

function Transition({ children, location }) {
  const timeoutId = useRef(null);
  const forceRender = useForceRender();
  let locationAsOfLastRender = useRef(location); // on first call, there is no previous render
  let isTransitioning = useRef(false);

  if (locationAsOfLastRender.current !== location) {
    isTransitioning.current = true;
    locationAsOfLastRender.current = location;
  }

  useEffect(() => {
    if (locationAsOfLastRender.current) {
      // Any time after mount, when effect is
      // triggered that means we're transitioning to
      // new page component

      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      timeoutId.current = setTimeout(() => {
        // Transition ends after {timeout} ms, at which point
        // we want to:
        isTransitioning.current = false;
        forceRender();
      }, timeout.milliseconds);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isTransitioning.current || (
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

function useForceRender() {
  let [dummy, setDummy] = useState(0);

  const forceRender = useCallback(() => {
    setDummy(d => d + 1);
  }, []);

  return forceRender;
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Transition;
