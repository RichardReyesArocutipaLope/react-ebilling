import { useEffect, useRef } from 'react';

export const useClickOutside = func => {
  const domNode = useRef();

  useEffect(() => {
    const handler = event => {
      if (!domNode.current.contains(event.target)) {
        func();
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return domNode;
};

