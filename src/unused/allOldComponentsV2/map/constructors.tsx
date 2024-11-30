import axios from "axios";
import { useEffect, useState } from "react";
import { MarkConstructorsSimple } from "./factory.marking";

export const ConstructorsOnMap = () => {
    
    const [constructors, setConstructors] = useState<{
        location:{
            x: number,
            y: number,
            rotation: number
        }
    }[]>()

    const handleLoadConstructors = async () => {
        const data:any[] = [];
        const resp = await axios.get("http://localhost:8080/getConstructor");

        console.log(resp.data);

        for (let i = 0; i < resp.data.length; i++) {
            const constructor = resp.data[i];
            
            data.push(constructor)
        }

        setConstructors(data);
    }

    useEffect(()=>{
        handleLoadConstructors()
    }, [])

    return(
        <>
            {constructors && 
                <>
                    {constructors.map((constructor)=>{
                        return(<MarkConstructorsSimple pos={{x:constructor.location.x/100, y:constructor.location.y/100}} angle={constructor.location.rotation}/>)
                    })}
                </>
            }
        </>
    )
}