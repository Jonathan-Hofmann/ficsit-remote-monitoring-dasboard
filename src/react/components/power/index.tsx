import { EndpointEnum } from "@/enums/endpoint.enum"
import { useAutoRefetch } from "@/react/hook/useAutoRefetch"
import { PowerFm } from "@/types/apis/frontModel/powerFm"

export const PowerOverview = () => {

    const data = useAutoRefetch(EndpointEnum.POWER)

    return(
        <div>
            {data.data ?
                <p>{(data.data as PowerFm[])[0].powerConsumed}</p>
            :
                <p>Loading...</p>
            }
        </div>
    )
}