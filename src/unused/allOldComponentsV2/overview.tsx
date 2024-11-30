import { useEffect, useMemo } from "react"
import { Card, CardContent } from "../ui/card"
import { Separator } from "../ui/separator"
import { EnergyConsumptionWidget } from "../widgets/smallCardWithChartSmart"
import { SubManager } from "@/class/subManager"
import { AreaChartCompare2Vals } from "../widgets/areaChartCompare2Vals"
import { TotalStatistics } from "../widgets/totalStatistics"
import { CircuitWrapper } from "../widgets/circuitsWrapper"

export const EnergyOverview = () => {

    const subManager = useMemo(()=>{
        return new SubManager();
    }, [])

    useEffect(()=>{
        return(()=>{
            subManager.destroy()
        })
    }, [])

    return(
        <div className="container py-8">
            <div>
                <h1 className="text-4xl font-semibold">Energy Panel</h1>
            </div>

            <Separator className="my-4"/>

            <div className="grid grid-cols-5 gap-4 mb-4">
                <TotalStatistics SFRM={subManager}/>
            </div>

            <CircuitWrapper SFRM={subManager}/>
        </div>
    )
}