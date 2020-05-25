import { useState } from 'react';

export default function useToggle(init) {
  const [flag, setFlag] = useState(init);

  function toggleFlag() {
    setFlag(flag => !flag);
  }

  return [flag, toggleFlag];
}
