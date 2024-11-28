import axios from "axios";
import { useEffect, useState } from "react";
import { MarkConstructorsSimple, MarkSmelterSimple } from "./factory.marking";

export const SmeltersOnMap = () => {
    
    const [smelters, setSmelters] = useState<{
        location:{
            x: number,
            y: number,
            rotation: number
        }
    }[]>()

    const handleLoadSmelters = async () => {
        const data:any[] = [];
        const resp = await axios.get("http://localhost:8080/getSmelter");

        console.log(resp.data);

        for (let i = 0; i < resp.data.length; i++) {
            const smelter = resp.data[i];
            
            data.push(smelter)
        }

        setSmelters(data);
    }

    useEffect(()=>{
        handleLoadSmelters()
    }, [])

    return(
        <>
            {smelters && 
                <>
                    {smelters.map((smelter)=>{
                        return(<MarkSmelterSimple pos={{x:smelter.location.x/100, y:smelter.location.y/100}} angle={smelter.location.rotation}/>)
                    })}
                </>
            }
        </>
    )
}