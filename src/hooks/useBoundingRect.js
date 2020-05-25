import { useRef, useState, useEffect } from 'react';

export default function useBoundingRect() {
  const rootRef = useRef(null);
  const [boundingRect, setBoundingRect] = useState(null);

  useEffect(() => {
    rootRef.current && setBoundingRect(rootRef.current.getBoundingClientRect());
  }, [rootRef.current]);

  return [rootRef, boundingRect];
}
