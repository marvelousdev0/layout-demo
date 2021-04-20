import { useState, useEffect, useRef } from 'react';

const useScrollspy = (elements, options) => {
  const [currentIntersectingElementIndex, setCurrentIntersectingElementIndex] = useState(-1);

  const rootMargin = `-${(options && options.offset) || 0}px 0px 0px 0px`;

  const observer = useRef();

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        // find the index of the section that is currently intersecting
        const indexOfElementIntersecting = entries.findIndex((entry) => {
          // if intersection > 0 it means entry is intersecting with the view port
          console.log(entry.intersectionRatio);
          return entry.intersectionRatio > 0;
        });

        // store the value of indexOfElementIntersecting
        setCurrentIntersectingElementIndex(indexOfElementIntersecting);
      },
      {
        root: (options && options.root) || null,
        // use this option to handle custom offset
        rootMargin,
      }
    );

    const { current: ourObserver } = observer;

    // observe all the elements passed as argument of the hook
    elements.forEach((element) => (element ? ourObserver.observe(element) : null));

    return () => ourObserver.disconnect();
  }, [elements, options, rootMargin]);

  return [currentIntersectingElementIndex];
};

export default useScrollspy;
