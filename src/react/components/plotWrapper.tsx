import * as Plot from "@observablehq/plot";
import React, { useEffect, useRef } from "react";

import { addTooltips } from "./tooltips";

type Props = {
  options: Plot.PlotOptions;
};

export const PlotFigure: React.FC<Props> = ({ options }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const plot = addTooltips(Plot.plot(options), {});
    const element = ref.current;
    if (element) {
      const child = element.children[0];
      if (child) {
        child.remove();
      }
      element.appendChild(plot);
    }
  }, [ref, options]);

  return (
    <div
      style={{ backgroundColor: "transparent" }}
      ref={ref}
    />
  );
};
