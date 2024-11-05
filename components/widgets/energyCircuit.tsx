import { SubManager } from "@/class/subManager"
import { Card, CardContent } from "../ui/card"
import { useEffect, useState } from "react"
import { v4 } from "uuid"
import { EnergyData, GeneratorData } from "@/types/energy"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { EnergyConsumptionWidgetWithData } from "./smallCardWithChartDumb"
import { AreaChartCompare2Vals } from "./areaChartCompare2Vals"
import { Separator } from "../ui/separator"
import { EnergyFuseCard } from "./energyFuseCard"
import { EnergyBatteryAttachedCard } from "./energyBatteryAttached"
import { BsBattery, BsBatteryCharging, BsCheckCircle, BsCheckCircleFill, BsExclamationTriangleFill } from "react-icons/bs"
import { cn } from "@/lib/utils"
import { BatteryStatusAndPercentage } from "./battery/statusAndPercentage"
import { BatteryTimeInfo } from "./battery/timeInfo"



export const EnergyCircuit = ({ circuit, index, className, generators }: { circuit: EnergyData, index: number, className?: string, generators: { [circuitId: string]: GeneratorData[] } }) => {

    return (
        <AccordionItem value={index.toString()}>
            <AccordionTrigger className="p-2 group hover:bg-background/50 hover:dark:bg-zinc-900 rounded-lg">
                <div className="flex flex-row gap-2">
                    <div className="px-2 py-1 bg-background group-hover:bg-zinc-100 group-hover:dark:bg-background dark:bg-zinc-900 rounded-md border">
                        <p className="text-muted-foreground group-hover:text-primary">ID: {circuit.CircuitID}</p>
                    </div>
                    {generators[circuit.CircuitID] ?
                        <>
                            <div className="bg-background group-hover:bg-zinc-100 group-hover:dark:bg-background dark:bg-zinc-900 px-2 py-1 rounded-md border flex flex-row items-center">
                                <p>{Math.round(circuit.PowerConsumed).toLocaleString()} <span className="text-sm text-muted-foreground">MW</span> </p>
                                <Separator className="mx-2 h-4" orientation="vertical" />
                                <p>{Math.round(circuit.PowerCapacity).toLocaleString()} <span className="text-sm text-muted-foreground">MW</span></p>
                            </div>
                            <div className="bg-background group-hover:bg-zinc-100 group-hover:dark:bg-background dark:bg-zinc-900 px-2 py-1 rounded-md border flex flex-row justify-start">
                                <p><span className="text-sm text-muted-foreground">Max.</span> {Math.round(circuit.PowerMaxConsumed).toLocaleString()} <span className="text-sm text-muted-foreground">MW</span></p>
                            </div>
                            <div className={cn([" px-2 py-1 rounded-md border flex flex-row items-center gap-2 bg-background dark:bg-zinc-900 group-hover:bg-zinc-100 group-hover:dark:bg-background"])}>
                                {circuit.FuseTriggered === true ?
                                    <>
                                        <BsExclamationTriangleFill className="text-orange-400" />
                                        <p className="text-sm font-semibold text-orange-400">Fuse broken!</p>
                                    </>
                                    :
                                    <>
                                        <BsCheckCircle />
                                        {/* <p className="text-sm text-muted-foreground">Working</p> */}
                                    </>
                                }
                            </div>
                            <div className={cn([" px-2 py-1 rounded-md border flex flex-row items-center gap-2 bg-background dark:bg-zinc-900 group-hover:bg-zinc-100 group-hover:dark:bg-background"])}>
                                {circuit.BatteryCapacity > 0 ?
                                    <>
                                        <BsBatteryCharging />
                                        <p className="text-sm">{Math.round(circuit.BatteryPercent).toLocaleString()} %</p>
                                    </>
                                    :
                                    <>
                                        <p className="text-sm text-muted-foreground">No Battery connected</p>
                                    </>
                                }
                            </div>
                        </>
                        :
                        <>
                            
                        </>
                    }

                    <div className={cn([" px-2 py-1 rounded-md border flex flex-row items-center gap-2 bg-background dark:bg-zinc-900 group-hover:bg-zinc-100 group-hover:dark:bg-background"])}>
                        {generators[circuit.CircuitID] ?
                            <>
                                <p className="text-sm text-muted-foreground">Generating circuit</p>
                            </>
                            :
                            <>
                                <p className="text-sm text-muted-foreground">Factory circuit</p>
                            </>
                        }
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="grid grid-cols-4 gap-4 py-4 px-2">
                    <EnergyConsumptionWidgetWithData data={circuit} dataKey={"PowerCapacity"} description={"Currently available Capacity"} numberSuffix={"MW"} index={index} className="row-span-2" />
                    <EnergyConsumptionWidgetWithData data={circuit} dataKey={"PowerConsumed"} description={"Consumed Power"} numberSuffix={"MW"} index={index} className="row-span-2" />
                    <EnergyConsumptionWidgetWithData data={circuit} dataKey={"PowerMaxConsumed"} description={"Maximum Consumed"} numberSuffix={"MW"} index={index} className="row-span-2" />
                    <EnergyFuseCard circuit={circuit} />
                    <EnergyBatteryAttachedCard circuit={circuit} />
                    <AreaChartCompare2Vals data={circuit} dataKey1={"PowerConsumed"} dataKey2={"PowerCapacity"} index={0} className="row-span-4" />
                    <EnergyConsumptionWidgetWithData data={circuit} dataKey={"BatteryCapacity"} description={"Battery Capacity"} numberSuffix={"MW"} index={index} className="row-span-2" />
                    <BatteryStatusAndPercentage circuit={circuit} />
                    <BatteryTimeInfo circuit={circuit} />
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}