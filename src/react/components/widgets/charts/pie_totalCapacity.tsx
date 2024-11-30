"use client";

import { format } from "date-fns";
import { TrendingUp } from "lucide-react";
import { useMemo } from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const PieCompontent1 = ({ data }: { data: any[] }) => {
  const chartConfig = {
    "visitors": {
      label: "Capacity by ",
    },
    "9": {
      label: "Circuit 0",
      color: "hsl(var(--chart-1))",
    },
    "0": {
      label: "Circuit 0",
      color: "hsl(var(--chart-1))",
    },
    "1": {
      label: "Circuit 1",
      color: "hsl(var(--chart-2))",
    },
    "2": {
      label: "Circuit 2",
      color: "hsl(var(--chart-3))",
    },
    "3": {
      label: "Circuit 3",
      color: "hsl(var(--chart-4))",
    },
    "4": {
      label: "Circuit 4",
      color: "hsl(var(--chart-5))",
    },
  } satisfies ChartConfig;

  const totalCount = useMemo(() => {
    let t = 0;

    for (let i = 0; i < data.length; i++) {
      const c = data[i];
      t += c.PowerCapacity;
    }

    return t;
  }, [data]);
  return (
    <>
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Capacity</CardTitle>
        <CardDescription>All Circuits</CardDescription>
      </CardHeader>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={data}
            dataKey="PowerCapacity"
            nameKey="CircuitID"
            innerRadius={60}
            strokeWidth={2}
            activeIndex={0}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalCount.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        MW
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </>
  );
};
