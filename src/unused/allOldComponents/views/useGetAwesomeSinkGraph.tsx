import * as Plot from "@observablehq/plot";
import { format } from "d3-format";
import { useMemo } from "react";

import type { AwesomeSinkFm } from "../../../types/apis/frontModel/awesomeSinkFm";

const formatYAxis = format(".2s");

type GraphValue = {
  index: number;
  value: number;
  group: string;
};

type Props = {
  sinkResource: AwesomeSinkFm[] | undefined;
  sinkExploration: AwesomeSinkFm[] | undefined;
};

export const useGetAwesomeSinkGraph = ({
  sinkResource,
  sinkExploration,
}: Props) => {
  const sinkPoints: GraphValue[] = useMemo(
    () => [
      ...(sinkResource?.[0].graphPoints ?? []).map((value, index) => ({
        index: index + 1,
        value,
        group: "#e89959",
      })),
      ...(sinkExploration?.[0].graphPoints ?? []).map((value, index) => ({
        index: index + 1,
        value,
        group: "#a579a6",
      })),
    ],
    [sinkResource, sinkExploration],
  );
  const sinkChart = useMemo(
    () =>
      Plot.plot({
        y: {
          grid: true,
          label: "Points per minute",
          tickFormat: formatYAxis,
        },
        x: {
          line: true,
          label: "Last 10",
        },
        marginLeft: 60,
        marginTop: 40,
        marginBottom: 45,
        color: {
          legend: true,
        },
        marks: [
          Plot.ruleY([0], {}),
          Plot.lineY(sinkPoints, {
            x: "index",
            y: "value",
            stroke: "group",
            strokeWidth: 5,
          }),
          Plot.tip(
            sinkPoints,
            Plot.pointerX({
              x: "index",
              y: "value",
              fill: "black",
              title: (value: GraphValue) =>
                // TODO Internationnalization
                `${new Intl.NumberFormat("en-US", { style: "decimal" }).format(value.value)} points\nper minute`,
              textAnchor: "middle",
            }),
          ),
        ],
      }),
    [sinkPoints],
  );

  return { sinkChart };
};
