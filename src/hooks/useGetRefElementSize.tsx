import type React from "react";
import { useEffect, useState } from "react";

export const useGetRefElementSize = (ref: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
        setHeight(ref.current.offsetHeight);
      }
    };

    const observer = new ResizeObserver(updateSize);

    if (ref.current) {
      observer.observe(ref.current);
      updateSize();
    }

    return () => observer.disconnect();
  }, [ref]);

  return { height, width };
};
