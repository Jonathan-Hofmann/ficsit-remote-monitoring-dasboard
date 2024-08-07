import { useEffect, useMemo } from "react"
import { Card, CardContent } from "../ui/card"
import { Separator } from "../ui/separator"
import { EnergyConsumptionWidget } from "../widgets/smallCardWithChart"
import { SubManager } from "@/class/subManager"
import { SmallCardWithCompareChart } from "../widgets/smallCardWithChart2"

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
                <h1 className="text-3xl font-semibold">Energy Panel</h1>
            </div>

            <Separator className="my-4"/>

            <div className="grid grid-cols-5 gap-4">
                <EnergyConsumptionWidget SFRM={subManager} command={"getPower"} dataKey={"PowerConsumed"} description={"Consumed Power"} numberSuffix={"MW"} index={0}/>
                <EnergyConsumptionWidget SFRM={subManager} command={"getPower"} dataKey={"PowerCapacity"} description={"Current Capacity"} numberSuffix={"MW"} index={0}/>
                <EnergyConsumptionWidget SFRM={subManager} command={"getPower"} dataKey={"PowerMaxConsumed"} description={"Maximum Capacity"} numberSuffix={"MW"} index={0}/>
                <SmallCardWithCompareChart SFRM={subManager} command={"getPower"} dataKey1={"PowerConsumed"} dataKey2={"PowerCapacity"} index={0}/>
            </div>
        </div>
    )
}