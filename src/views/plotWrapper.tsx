// @ts-ignore
import * as Plot from "@observablehq/plot";
import type { FC } from "react";
import React, { useEffect, useRef } from "react";

import { addTooltips } from "../components/tooltips";

export type Props = {
  options: any;
};

const PlotFigure: FC<Props> = ({ options }) => {
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

export default PlotFigure;
