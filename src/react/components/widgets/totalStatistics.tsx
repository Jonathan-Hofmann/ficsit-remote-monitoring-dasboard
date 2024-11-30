import { useEffect, useMemo, useState } from "react";
import { Pie, PieChart } from "recharts";
import { v4 } from "uuid";

import type { SubManager } from "@/class/subManager";
import type { EnergyData, GeneratorData } from "@/types/energy";

import { Card, CardContent } from "../ui/card";
import { ChartConfig } from "../ui/chart";
import { AreaChartCompare2ValsBig } from "./charts/historicalChartTotal";
import { PieCompontent1 } from "./charts/pie_totalCapacity";
import { EnergyPieConsumption } from "./charts/pie_totalConsumed";

export const TotalStatistics = ({ SFRM }: { SFRM: SubManager }) => {
  const MAX_HISTORY_DEPTH = 50;

  // const chartConfig = {
  //     [""]: {
  //         label: dataKey1,
  //         color: "hsl(217.2 91.2% 59.8%)",
  //     },
  //     ["dataKey2"]: {
  //         label: dataKey2,
  //         color: "#c0392b",
  //     },
  // } satisfies ChartConfig

  const [history, setHistory] = useState<EnergyData[][]>([]);

  const [data, setData] = useState<EnergyData[] | undefined>();
  const [generators, setGenerators] = useState<
    Record<string, GeneratorData[]> | undefined
  >();

  const handleSortGenerators = (data: GeneratorData[]) => {
    const sortedData: Record<string, GeneratorData[]> = {};
    for (let i = 0; i < data.length; i++) {
      const generator = data[i];
      if (sortedData[generator.CircuitID]) {
        sortedData[generator.CircuitID].push(generator);
      } else {
        sortedData[generator.CircuitID] = [generator];
      }
    }
    setGenerators(sortedData);
  };

  const circuits = useMemo<EnergyData[]>(() => {
    if (!data || !generators) return [];

    const allProducingCircuits = [];

    for (let i = 0; i < data.length; i++) {
      const circuit = data[i];
      if (generators[circuit.CircuitID]) {
        allProducingCircuits.push({
          ...circuit,
          ...{ id: allProducingCircuits.length },
        });
      }
    }

    return allProducingCircuits;
  }, [data, generators]);

  useEffect(() => {
    if (!data) return;
    console.log(data);
    setHistory((old: EnergyData[][]) => {
      if (old.length >= MAX_HISTORY_DEPTH) {
        old.shift();
        old.push(data);
        return [...old];
      }
      old.push(data);
      return [...old];
    });
  }, [data]);

  const handleNewData = (data: EnergyData[]) => {
    const tmp = [...data];

    for (let i = 0; i < tmp.length; i++) {
      const circuit = tmp[i];
      circuit.fill = `hsl(var(--chart-${i + 1}))`;
    }

    setData(data);
  };

  useEffect(() => {
    const id = v4();
    SFRM.subscribe("getPower", handleNewData, id);
    SFRM.subscribe("getGenerators", handleSortGenerators, id);
    return () => {
      SFRM.unsubscribe("getPower", id);
      SFRM.unsubscribe("getGenerators", id);
    };
  }, []);

  return (
    <>
      <Card className="">{circuits && <PieCompontent1 data={circuits} />}</Card>
      <Card className="">
        {circuits && <EnergyPieConsumption data={circuits} />}
      </Card>
      {circuits && (
        <AreaChartCompare2ValsBig
          className="row-span-2"
          data={circuits}
          dataKey1="PowerConsumed"
          dataKey2="PowerCapacity"
        />
      )}
      <Card>
        <CardContent>
          <p className="text-3xl font-bold">{data?.length}</p>
          <p className="text-sm text-muted-foreground">
            Connected Power Circuits
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <p className="text-3xl font-bold">{data?.length}</p>
          <p className="text-sm text-muted-foreground">
            Connected Power Circuits
          </p>
        </CardContent>
      </Card>
    </>
  );
};
