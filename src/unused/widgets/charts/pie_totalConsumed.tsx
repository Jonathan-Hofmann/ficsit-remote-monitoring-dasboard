"use client";

import { format } from "date-fns";
import { TrendingUp } from "lucide-react";
import { useMemo } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import {
  Label,
  Pie,
  PieChart,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  Sector,
} from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/react/ui/card";
import type { ChartConfig } from "@/react/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/react/ui/chart";
import { cn } from "@/lib/utils";

const chartConfig = {
  "visitors": {
    label: "Capacity by ",
  },
  "PowerConsumed": {
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

export const EnergyPieConsumption = ({ data }: { data: any[] }) => {
  const stats = useMemo(() => {
    let t = 0;
    let cap = 0;

    for (let i = 0; i < data.length; i++) {
      const c = data[i];
      t += c.PowerConsumed;
      cap += c.PowerCapacity;
    }

    return {
      consumption: t,
      capacity: cap,
    };
  }, [data]);
  return (
    <>
      <CardHeader className="items-center pb-0">
        <CardTitle
          className={cn([
            Math.round((stats.consumption / stats.capacity) * 100) > 80
              ? " text-red-500"
              : "",
            "flex flex-row items-center gap-3",
          ])}
        >
          {Math.round((stats.consumption / stats.capacity) * 100) > 80 && (
            <BsExclamationTriangleFill />
          )}
          Usage
        </CardTitle>
        <CardDescription>All Circuits</CardDescription>
      </CardHeader>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <RadialBarChart
          data={[stats]}
          startAngle={0}
          endAngle={(stats.consumption / stats.capacity) * 360}
          innerRadius={80}
          outerRadius={110}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-muted last:fill-background"
            polarRadius={[86, 74]}
          />
          <RadialBar
            fill="hsl(var(--chart-1))"
            dataKey="consumption"
            cornerRadius={10}
          />
          <PolarRadiusAxis
            tick={false}
            tickLine={false}
            axisLine={false}
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
                        className={cn([
                          "text-4xl font-bold",
                          Math.round(
                            (stats.consumption / stats.capacity) * 100,
                          ) > 80
                            ? " fill-red-500"
                            : "fill-foreground ",
                        ])}
                      >
                        {Math.round(
                          (stats.consumption / stats.capacity) * 100,
                        ).toLocaleString()}{" "}
                        %
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 32}
                        className="fill-muted-foreground"
                      >
                        {Math.round(stats.consumption)} MW
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </>
  );
};
