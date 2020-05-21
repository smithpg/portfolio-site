import { useRef, useMemo, useState } from 'react';

export default function useBoundingRect() {
  const [_, forceRender] = useState(null);
  const rootRef = useRef(null);
  const boundingRect = useMemo(
    () => (rootRef.current ? rootRef.current.getBoundingClientRect() : null),
    [rootRef.current]
  );

  // Wrap ref with setter so that a render is triggered
  // when the ref gets assigned a value
  const wrappedRef = {
    get current() {
      return rootRef.current;
    },

    set current(val) {
      rootRef.current = val;

      // Trigger rerender
      forceRender();
    },
  };

  return [wrappedRef, boundingRect];
}
