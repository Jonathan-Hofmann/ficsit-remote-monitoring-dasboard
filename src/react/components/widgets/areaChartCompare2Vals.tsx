import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import { v4 } from "uuid";

import { SubManager } from "@/class/subManager";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import type { EnergyData } from "@/types/energy";

import { Card, CardContent } from "../ui/card";

export const AreaChartCompare2Vals = ({
  data,
  dataKey1,
  dataKey2,
  index,
  className,
}: {
  data: EnergyData;
  dataKey1: string;
  dataKey2: string;
  index?: number;
  className?: string;
}) => {
  const MAX_HISTORY_DEPTH = 60;

  const chartConfig = {
    [dataKey1]: {
      label: "Currently consumed",
      color: "#000000",
    },
    [dataKey2]: {
      label: "Capacity available",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  const [history, setHistory] = useState<EnergyData[]>([]);

  useEffect(() => {
    if (!data) return;
    setHistory((old: EnergyData[]) => {
      if (old.length >= MAX_HISTORY_DEPTH) {
        old.shift();
        old.push(data);
        return [...old];
      }
      old.push(data);
      return [...old];
    });
  }, [data]);

  return (
    <Card className={cn(["col-span-3 overflow-hidden", className])}>
      <CardContent>
        <div className="grid grid-cols-2 p-2">
          <div className="flex flex-row gap-6">
            <div>
              <p className="text-3xl font-bold">
                {data
                  ? `${Math.round((data as Record<string, any>)[dataKey1])} MW`
                  : "Loading"}
              </p>
              <p className="text-muted-foreground text-sm">
                Currently consumed
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold">
                {data
                  ? `${Math.round((data as Record<string, any>)[dataKey2])} MW`
                  : "Loading"}
              </p>
              <p className="text-muted-foreground text-sm">
                Capacity available
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <p className="text-muted-foreground">Last 120 secs.</p>
          </div>
        </div>
      </CardContent>
      <ChartContainer
        config={chartConfig}
        className="max-h-[250px] w-full p-0"
      >
        <AreaChart
          accessibilityLayer
          data={history}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <ChartTooltip
            cursor
            content={<ChartTooltipContent hideLabel />}
          />
          <defs>
            <linearGradient
              id="colorUv"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="hsl(var(--chart-1))"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="hsl(var(--chart-1))"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient
              id="colorPv"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="hsl(var(--chart-3))"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="hsl(var(--chart-3))"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          {/* <XAxis /> */}
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <CartesianGrid vertical={false} />
          <Area
            type="monotone"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dataKey={dataKey2}
            fill="url(#colorUv)"
            radius={4}
          />
          <Area
            type="monotone"
            stroke="hsl(var(--chart-3))"
            strokeWidth={2}
            dataKey={dataKey1}
            fill="url(#colorPv)"
            radius={4}
          />
        </AreaChart>
      </ChartContainer>
    </Card>
  );
};
