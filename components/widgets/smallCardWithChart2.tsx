import { SubManager } from "@/class/subManager"
import { Card, CardContent } from "../ui/card"
import { useEffect, useState } from "react"
import { v4 } from "uuid"
import { EnergyData } from "@/types/energy"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts"



export const SmallCardWithCompareChart = ({ SFRM, command, dataKey1, dataKey2, index }: { SFRM: SubManager, command: string, dataKey1: string, dataKey2: string, index: number }) => {

    const MAX_HISTORY_DEPTH = 50

    const chartConfig = {
        [dataKey1]: {
            label: dataKey1,
            color: "hsl(217.2 91.2% 59.8%)",
        },
        [dataKey2]: {
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

    return (
        <Card className="col-span-3 overflow-hidden">
            <CardContent>
                <p className="text-3xl font-bold">{data ? Math.round((data[0] as {[key:string]:any})[dataKey1])+" MW" : "Loading"}</p>
                <p className="text-muted-foreground text-sm"></p>               
            </CardContent>
            <ChartContainer config={chartConfig} className="max-h-[300px] w-full p-0">
                <AreaChart accessibilityLayer data={history} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FA9549" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#FA9549" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#c0392b" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#c0392b" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />
                    <Area type="monotone" stroke={"var(--color-"+dataKey1+")"} strokeWidth={2} dataKey={dataKey2} fill={"var(--color-" + dataKey1 + ")"} radius={4} />
                    <Area type="monotone" stroke={"var(--color-"+dataKey2+")"} strokeWidth={2} dataKey={dataKey1} fill={"var(--color-" + dataKey2 + ")"} radius={4} />
                    
                </AreaChart>
            </ChartContainer>
        </Card>
    )
}