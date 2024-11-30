import { SubManager } from "@/class/subManager";
import { EnergyData, GeneratorData } from "@/types/energy";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { EnergyCircuit } from "./energyCircuit";
import { Accordion } from "../ui/accordion";

export const CircuitWrapper = ({ SFRM }: { SFRM: SubManager }) => {
    const [data, setData] = useState<EnergyData[] | undefined>();
    const [generators, setGenerators] = useState<{[circuitId:string]:GeneratorData[]} | undefined>();

    const handleSortGenerators = (data:GeneratorData[]) => {
        const sortedData:{[circuitId:string]:GeneratorData[]} = {}
        for (let i = 0; i < data.length; i++) {
            const generator = data[i];
            if(sortedData[generator.CircuitID]){
                sortedData[generator.CircuitID].push(generator)
            } else {
                sortedData[generator.CircuitID] = [generator]
            }
        }
        setGenerators(sortedData)
    }

    useEffect(() => {
        const id = v4()
        SFRM.subscribe("getPower", setData, id)
        SFRM.subscribe("getGenerators", handleSortGenerators, id)
        return (() => {
            SFRM.unsubscribe("getPower", id)
            SFRM.unsubscribe("getGenerators", id)
        })
    }, [])

    return(
        <div>
            <div>
                <h1 className="text-4xl font-semibold mt-8 mb-4">Power Circuits</h1>
            </div>
            {(data && generators) ?
                <Accordion type="multiple">
                    {data.map((item, i)=>{
                        return(
                            <EnergyCircuit key={i} circuit={item} index={i} generators={generators}/>
                        )
                    })}
                </Accordion>
            :
                <p>Loading...</p>
            }
        </div>
    )
}