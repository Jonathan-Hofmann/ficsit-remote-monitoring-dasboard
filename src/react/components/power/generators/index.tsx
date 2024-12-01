import { EndpointEnum } from "@/enums/endpoint.enum"
import { useAutoRefetch } from "@/react/hook/useAutoRefetch"
import { powerGeneratorsCols } from "./table/cols"
import { Card, CardContent, CardHeader, CardTitle } from "@/react/ui/card"
import { PowerGeneratorsTable } from "./table/table"
import { GeneratorFm } from "@/types/apis/frontModel/generatorsFm"
import { useEffect } from "react"

export const PowerGeneratorsOverview = () => {
    const data = useAutoRefetch(EndpointEnum.GENERATORS, false)

    useEffect(()=>{
        console.log(data);
    }, [data])

    return(
        <div>
            {data.data ?
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                All connected Power Generators
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <PowerGeneratorsTable data={data.data as GeneratorFm[]} columns={powerGeneratorsCols}/>
                        </CardContent>
                    </Card>
                </div>
            :
                <p>Loading...</p>
            }
        </div>
    )
}