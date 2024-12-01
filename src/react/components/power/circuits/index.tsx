import { EndpointEnum } from "@/enums/endpoint.enum"
import { useAutoRefetch } from "@/react/hook/useAutoRefetch"
import { PowerFm } from "@/types/apis/frontModel/powerFm"
import { PowerCircuitsTable } from "./table/table"
import { powerCircuitsCols } from "./table/cols"
import { Card, CardContent, CardHeader, CardTitle } from "@/react/ui/card"

export const PowerCircuitsOverview = () => {
    const data = useAutoRefetch(EndpointEnum.POWER, false)

    return(
        <div>
            {data.data ?
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                All connected Power Circuits
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <PowerCircuitsTable data={data.data as PowerFm[]} columns={powerCircuitsCols}/>
                        </CardContent>
                    </Card>
                </div>
            :
                <p>Loading...</p>
            }
        </div>
    )
}