import { SubManager } from "@/class/subManager"
import { Card, CardContent } from "../ui/card"
import { useEffect, useState } from "react"
import { v4 } from "uuid"
import { EnergyData } from "@/types/energy"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { cn } from "@/lib/utils"



export const EnergyConsumptionWidgetWithData = ({ data, dataKey, description, numberSuffix, index, className }: { data: EnergyData, dataKey:string, description:string, numberSuffix:string, index:number, className?:string }) => {

    const MAX_HISTORY_DEPTH = 60

    const chartConfig = {
        [dataKey]: {
            label: dataKey,
            color: "#FA9549",
        },
        //   mobile: {
        //     label: "Mobile",
        //     color: "#60a5fa",
        //   },
    } satisfies ChartConfig

    const [history, setHistory] = useState<EnergyData[]>([])

    // const [data, setData] = useState<EnergyData[] | undefined>();

    useEffect(() => {
        if (!data) return;
        setHistory((old: EnergyData[]) => {
            if (old.length >= MAX_HISTORY_DEPTH) {
                old.shift();
                old.push(data)
                return ([...old])
            } else {
                old.push(data)
                return ([...old])
            }
        })
    }, [data])

    return (
        <Card className={cn(["col-span-1 overflow-hidden relative", className])}>
            <CardContent>
                <p className="text-3xl font-bold">{data ? Math.round((data as {[key:string]:any})[dataKey]).toLocaleString()+" "+numberSuffix : "Loading"}</p>
                <p className="text-muted-foreground text-sm">{description}</p>               
            </CardContent>
            <ChartContainer config={chartConfig} className="max-h-[90px] w-full p-0">
                <AreaChart accessibilityLayer data={history} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <CartesianGrid vertical={false} />
                    <Area type="monotone" stroke={"var(--color-"+dataKey+")"} strokeWidth={2} dataKey={dataKey} fill={"var(--color-"+dataKey+")"} radius={4} />
                </AreaChart>
            </ChartContainer>
        </Card>
    )
}