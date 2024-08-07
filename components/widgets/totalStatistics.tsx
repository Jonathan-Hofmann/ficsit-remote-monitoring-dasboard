import { SubManager } from "@/class/subManager";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { ChartConfig } from "../ui/chart";
import { EnergyData } from "@/types/energy";

export const TotalStatistics = ({ SFRM }: { SFRM: SubManager}) => {

    const MAX_HISTORY_DEPTH = 50

    const chartConfig = {
        [""]: {
            label: dataKey1,
            color: "hsl(217.2 91.2% 59.8%)",
        },
        ["dataKey2"]: {
            label: dataKey2,
            color: "#c0392b",
        },
        //   mobile: {
        //     label: "Mobile",
        //     color: "#60a5fa",
        //   },
    } satisfies ChartConfig

    const [history, setHistory] = useState<EnergyData[]>([])

    const [data, setData] = useState<EnergyData[] | undefined>();

    useEffect(() => {
        if (!data) return;
        setHistory((old: EnergyData[]) => {
            if (old.length >= MAX_HISTORY_DEPTH) {
                old.shift();
                old.push(data[index])
                return ([...old])
            } else {
                old.push(data[index])
                return ([...old])
            }
        })
    }, [data])

    useEffect(() => {
        const id = v4()
        SFRM.subscribe(command, setData, id)
        return (() => {
            SFRM.unsubscribe(command, id)
        })
    }, [])

    return(
        <>
            
        </>
    )
}